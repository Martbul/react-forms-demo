import { useRef, useState, useEffect } from "react";
import styles from "./BetterControlledForm.module.css";
const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "m",
  swiming: false,
  shopping: false,
  running: false,
};
export default function ControlledForm({ formRef }) {
  const [formValues, setFormValues] = useState(formInitialState);
  const userNameInputRef = useRef();
  const [errors, setErrors] = useState({});

  const isMountedRef = useRef(false);

  useEffect(() => {
    userNameInputRef.current.focus();
  }, []);

  //executes only on update
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log("form is updated");
  }, [formValues]);

  const changeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;

      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFomrHandler = () => {
    setFormValues(formInitialState);
    setErrors({});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);

    resetFomrHandler();
  };
  const ageValidator = (e) => {
    console.log(formValues.age);
    if (formValues.age < 0 || formValues.age > 120) {
      setErrors((state) => ({
        ...state,
        age: "age should be between 0 and 120",
      }));
    } else {
      if (errors.age) {
        setErrors((state) => ({
          ...state,
          age: "",
        }));
      }
    }
  };

  return (
    <>
      <h1>Controlled form</h1>

      <form ref={formRef} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            ref={userNameInputRef}
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={changeHandler}
            onBlur={() => console.log("blur")}
          />
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formValues.age}
            onChange={changeHandler}
            onBlur={ageValidator}
            className={errors.age && styles.inputError}
          />
          {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={changeHandler}
            value={formValues.gender}
          >
            <option value="m">M</option>
            <option value="f">F</option>
          </select>
        </div>
        <div>
          <h3>Hobbies</h3>
          <label htmlFor="swiming">Swiming</label>
          <input
            type="checkbox"
            name="swiming"
            id="swiming"
            checked={formValues.swiming}
            onChange={changeHandler}
          />

          <label htmlFor="shopping">Shopping</label>
          <input
            type="checkbox"
            name="shopping"
            id="shopping"
            checked={formValues.shopping}
            onChange={changeHandler}
          />

          <label htmlFor="running">Running</label>
          <input
            type="checkbox"
            name="running"
            id="running"
            checked={formValues.running}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button type="submit" disabled={Object.values(errors).some(x=>x)}>Register</button>
          <button type="submit" onClick={resetFomrHandler}>
            Register
          </button>
        </div>
      </form>
    </>
  );
}
