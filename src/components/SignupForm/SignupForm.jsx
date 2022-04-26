import { useState, useEffect, useContext } from "react";
import {
  GlobalContextDispatch,
  // GlobalContextState,
} from "../../context/globalContext";

import useFetchMutation from "../../hooks/useFetchMutation";

import { isRegexValid, checkURLRegex } from "../../helpers/isRegexValid";
import {
  FormWrapper,
  FormContainer,
  FormImage,
  FormBox,
  FormHeading,
  FormError,
} from "../../styled/styles/form";
import Button from "../../styled/base/Button/Button";
import ButtonLink from "../../styled/base/ButtonLink/ButtonLink";
import Input from "../../styled/base/Input/Input";

import { baseUrl } from '../../config';

const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const INITIAL_FORM_ERRORS = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
};

const registerUrl = `${baseUrl}/api/auth/local/registerUser`;

export default function SignupForm({ setSelection }) {
  const dispatch = useContext(GlobalContextDispatch);

  const [registerUser, { loading, error, data }] = useFetchMutation(registerUrl);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);

  useEffect(() => {
    if (data) {
      console.log(data, "from signup form");
      const { jwt, user } = data;
      dispatch({ type: "LOGIN", payload: { jwt, user } });
    }
  }, [data, dispatch]);


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateGeneric(text, name) {
    if (text.length === 0) {
      setFormError((prevState) => ({ ...prevState, [name]: true }));
      return true;
    } else {
      setFormError((prevState) => ({ ...prevState, [name]: false }));
      return false;
    }
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
    hasError = validateGeneric(formData.firstName, "firstName") ? true : false;
    hasError = validateGeneric(formData.lastName, "lastName") ? true : false;
    hasError = validateEmail(formData.email) ? true : false;
    hasError = validatePassword(formData.password) ? true : false;
    return hasError;
  }

  function hadleFormSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      

      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.email,
        email: formData.email,
        password: formData.password,
      }

      const registerPayload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };

      registerUser(registerPayload);
    }
  }
  
  if (error) return <p>Error: {error.message}</p>;

  return (
    <FormWrapper>
      <FormBox className="mt-8">
        <FormContainer>
          <form  onSubmit={hadleFormSubmit}>
          <fieldset className="space-y-6" >
            <FormBox>
              <FormImage
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <FormHeading>Sign Up</FormHeading>
            </FormBox>

            <Input
              id="firstName"
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Enter your first name"
              onChange={handleInputChange}
              onBlur={(e) => validateGeneric(e.target.value, "firstName")}
              value={formData.firstName}
              error={formError.firstName && "Please provide a first name"}
            />

            <Input
              id="lastName"
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter your last name"
              onChange={handleInputChange}
              onBlur={(e) => validateGeneric(e.target.value, "lastName")}
              value={formData.lastName}
              error={formError.lastName && "Please provide a last name"}
            />

            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
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
              autoComplete="new-password"
              placeholder="Enter your password"
              onBlur={(e) => validatePassword(e.target.value)}
              value={formData.password}
              error={
                formError.password && "Password must be at least 6 characters"
              }
              onChange={handleInputChange}
            />

            <Button className="mt-6 mb-6" type="submit" disabled={loading}>
              Create Account
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="ml-2 block text-sm text-gray-900">
                  Have an account?
                </span>
              </div>

              <ButtonLink onClick={() => setSelection("signin")}>
                Sign In
              </ButtonLink>
            </div>
            </fieldset>
          </form>

          <FormError></FormError>
        </FormContainer>
      </FormBox>
    </FormWrapper>
  );
}
