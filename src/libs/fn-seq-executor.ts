/**
 * 
// Example usage:
function function1(context, callback) {
  console.log('Function 1 executed with context:', context);
  // Your logic here
  callback();
}

function function2(context, callback) {
  console.log('Function 2 executed with context:', context);
  // Your logic here
  callback();
}

function function3(context, callback) {
  console.log('Function 3 executed with context:', context);
  // Your logic here
  callback();
}

// Context object to pass to each function
const executionContext = { message: 'Hello from context!' };

// Array of functions to execute in sequence
const functionsToExecute = [function1, function2, function3];

// Callback function to execute after all functions are done
function finalCallback() {
  console.log('All functions executed in sequence');
}

// Call the main function
seqExecutor(functionsToExecute, executionContext, finalCallback);

 * @param functions 
 * @param context 
 * @param callback 
 */
export function seqExecutor(functions: any[], context: any, callback: any) {
    function execute(index: any) {
        if (index < functions.length) {
            functions[index](context, function () {
                execute(index + 1);
            });
        } else {
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    execute(0);
}