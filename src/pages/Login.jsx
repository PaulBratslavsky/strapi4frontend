import { useState, useContext } from "react";
import { GlobalContextDispatch, GlobalContextState } from "../context/globalContext";

import tw from "tailwind-styled-components";
import Button from "../styled/Button/Button";
import Input from "../styled/Input/Input";

const FormWrapper = tw.div`
  min-h-full 
  flex flex-col 
  justify-center 
  py-12 
  sm:px-6 
  lg:px-8
`;

const FormBox = tw.div`
  sm:mx-auto 
  sm:w-full 
  sm:max-w-md 
`;

const FormImage = tw.img`
  mx-auto 
  h-12 
  w-auto
`;

const FormHeading = tw.h2`
  mt-6 
  text-center 
  text-3xl 
  font-extrabold 
  text-gray-900
`;

const FormContainer = tw.div`
  bg-white 
  py-8 
  px-4 
  shadow 
  sm:rounded-lg 
  sm:px-10
`;

const FormError = tw.div`
  mt-6`;
const checkURLRegex =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

function isRegexValid(url, regex) {
  const result = url.match(regex) ? true : false;
  return result;
}

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const INITIAL_FORM_ERRORS = {
  email: false,
  password: false,
};

export default function Login() {
  const state = useContext(GlobalContextState);
  const dispatch = useContext(GlobalContextDispatch);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);

  function handleInputChange(event) {
    console.log(event.target.name, event.target.value, "EHEY");
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateEmail(email) {
    if (!isRegexValid(email, checkURLRegex)) {
      setFormError((prevState) => ({ ...prevState, email: true }));
      return true;
    } else {
      setFormError((prevState) => ({ ...prevState, email: false }));
      return false;
    }
  }

  function validatePassword(password) {
    if (password.length <= 6) {
      setFormError((prevState) => ({ ...prevState, password: true }));
      return true;
    } else {
      setFormError((prevState) => ({ ...prevState, password: false }));
      return false;
    }
  }

  function formValidation(formData) {
    let hasError = false;
    hasError = validateEmail(formData.email) ? true : false;
    hasError = validatePassword(formData.password) ? true : false;
    return hasError;
  }

  function hadleFormSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);
    
    if (!hasErrors) {
      alert("Write function to handle form submit");
      dispatch({ type: "LOGIN" });
    }
  }

  if (state.loggedIn) return <p>You are looged in <Button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Button>;</p>;
  return (
    <FormWrapper>
      <FormBox>
        <FormImage
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <FormHeading>Sign in to your account</FormHeading>
      </FormBox>

      <FormBox className="mt-8">
        <FormContainer>
          <form className="space-y-6" onSubmit={hadleFormSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              onChange={handleInputChange}
              onBlur={(e) => validateEmail(e.target.value)}
              value={formData.email}
              error={formError.email && "Please provide a valid email"}
            />

            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              onBlur={(e) => validatePassword(e.target.value)}
              value={formData.password}
              error={
                formError.password && "Password must be at least 6 characters"
              }
              onChange={handleInputChange}
            />

            <Button className="mt-6" type="submit">
              Submit
            </Button>
          </form>

          <FormError></FormError>
        </FormContainer>
      </FormBox>
    </FormWrapper>
  );
}
