import { useReducer } from "react";

const initialState = {
  step:1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UpdatePage":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "NextStep":
      return {
        ...state,
        step: state.step + 1,
      };
    case "prevStep":
      return {
        ...state,
        step: state.step - 1,
      };
    case "resetForm":
      return initialState;
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "UpdatePage",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const NextStep = () => dispatch({ type: "NextStep" });
  const prevStep = () => dispatch({ type: "prevStep" });
  const resetForm = () => dispatch({ type: "resetForm" });

   const handleSubmit = () => {
    alert('Form submitted successfully!');
    resetForm();
  };

  return (
    <div>
      <h2>multi-step Registration</h2>
      {state.step === 1 &&(
          <div>
            <h3>Step-1 : profile</h3>
            <label>
              First Name :
              <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              {" "}
              lastName
              <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={NextStep}>Next</button>
          </div>
        )}
      {state.step ===
        2 &&(
          <div>
            <h3>Step-2 : Contact</h3>
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              {" "}
              Phone :
              <input
                type="number"
                name="phone"
                value={state.phone}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={prevStep}>Back</button>
            <button onClick={NextStep}>Next</button>
          </div>
        )}
      {state.step ===
        3 &&(
          <div>
            <h3>Step 3 : Review</h3>
            <p>
              <strong>First Name :</strong>
              {state.firstName}
            </p>
            <p>
              <strong>last Name :</strong>
              {state.lastName}
            </p>
            <p>
              <strong>Email :</strong>
              {state.email}
            </p>
            <p>
              <strong>Phone :</strong>
              {state.phone}
            </p>
            <button onClick={prevStep}>Back</button>
            <button onClick={handleSubmit}>Confirm</button>
          </div>
        )}
      {state.step > 3 && (
        <div>
          <h3>Form Completed</h3>
          <button onClick={resetForm}>Start Over</button>
        </div>
      )}
    </div>
  );
};

export default Form;
