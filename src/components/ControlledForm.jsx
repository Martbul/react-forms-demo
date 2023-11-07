import { useState } from "react";

export default function ControlledForm(){
    const [usernameValue,setUsernameValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    const [ageValue,setAgeValue] = useState('')

    const usernameChangeHandler = (e) =>{
        console.log(e.target.value);
        setUsernameValue(e.target.value);

        
    }
    const resetFomrHandler = () =>{
            setUsernameValue("")
            setPasswordValue("");
            setAgeValue("")
        }

        const passwordChangeHandler = (e) =>{
            setPasswordValue(e.target.value);
        }

        const ageChangeHandler = (e) =>{
       setAgeValue(Number(e.target.value));
        }

        const submitHandler = (e) =>{
            e.preventDefault()
            console.log(usernameValue);
            console.log(passwordValue);
            console.log(ageValue);
            resetFomrHandler();
        }


    return(
         <>
         <h1>Controlled form</h1>


         <form >
            <div>
                <label htmlFor="username">Username</label>
                <input
                 type="text"
                  name='username' 
                  id='username'
                  value={usernameValue}
                  onChange={usernameChangeHandler}
                  onBlur={() => console.log('blur')}
                  />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input
                 type="password"
                  name='password'
                   id='password'
                   value={passwordValue}
                   onChange={passwordChangeHandler}
                   />
            </div>

            <div>
                <label htmlFor="age">age</label>
                <input
                 type="number"
                  name='age'
                   id='age'
                   value={ageValue}
                   onChange={ageChangeHandler}
                   />
            </div>

            <div>
                <button type="button" onClick={submitHandler}>Register</button>
                <button type="button" onClick={resetFomrHandler}>Reset</button>
            </div>
         </form>
         
         </>
    )
}