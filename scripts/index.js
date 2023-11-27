import fs from "fs"

function formMaker(json) {

    let x = '<FormProvider onSubmit={(data: any)=> {console.log({data,});}}defaultValues={{'
    let y = '}}showDevTool><ConnectForm>{(formProps: any) => {const {control,formState: { errors },} = formProps;const inputProps = {control,errors,} return ( <Container maxW="xl" py={5} display="flex" flexDirection="column" gap={3}>'
    let z = '<Flex><Button type="submit">Submit</Button></Flex></Container>);}}</ConnectForm></FormProvider>';

    let d = ""
    let f = ""

    for (let fields in json.fields) {
        d = fields.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');

        f = fields.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const finalized = x + d + y + f + z;
    console.log({
        finalized
    })
    // fs.writeFileSync('scripts/formTemplate.jsx', formTemplate);
}

const json = {
    "formLabel": "Buy Cars",
    "fields": {
        "name": {
            "type": "text"
        },
        "address": {
            "type": "text"
        },
        "Passport Number": {
            "type": "number"
        },
        "email": {
            "type": "email"
        }
    }
};

formMaker(json);
