import { useState, useContext } from "react";
import { GlobalContextDispatch } from "../../context/globalContext";
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

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const INITIAL_FORM_ERRORS = {
  email: false,
  password: false,
};

export default function Login({ setSelection }) {
  const dispatch = useContext(GlobalContextDispatch);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);

  function handleInputChange(event) {
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
      dispatch({ type: "LOGIN" });
    }
  }

  return (
    <FormWrapper>
      <FormBox className="mt-8">
        <FormContainer>
          <form className="space-y-6" onSubmit={hadleFormSubmit}>
            <FormBox>
              <FormImage
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <FormHeading>Sign in</FormHeading>
            </FormBox>
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              autoComplete="off"
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

            <Button className="mt-6" type="submit">
              Submit
            </Button>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="ml-2 block text-sm text-gray-900">
                  Don't have an account?
                </span>
              </div>

              <ButtonLink onClick={() => setSelection("signup")}>
                Sign Up
              </ButtonLink>
            </div>
          </form>

          <FormError></FormError>
        </FormContainer>
      </FormBox>
    </FormWrapper>
  );
}
