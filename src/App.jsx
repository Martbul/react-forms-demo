import { useRef } from "react"
import BetterControlledForm from "./components/BetterControlledForm"

function App() {
  const formRef = useRef()
  
  return (
    <>
    <BetterControlledForm  formRef={formRef}/>

    <button
    type="button" 
    onClick={() =>formRef.current.requestSubmit()}
   
    >
      Submit
    </button>
    </>
  )
}

export default App
