import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { EmployeeCurrentAddressEdit } from './components/employee-edit/current-address'

function App() {

  return (
    <ChakraProvider>
      <EmployeeCurrentAddressEdit />
    </ChakraProvider>
  )
}

export default App
