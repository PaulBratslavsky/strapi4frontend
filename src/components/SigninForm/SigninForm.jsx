import { useState, useContext, useEffect } from "react";
import { GlobalContextDispatch } from "../../context/globalContext";
import { isRegexValid, checkURLRegex } from "../../helpers/isRegexValid";
import useFetchMutation from "../../hooks/useFetchMutation";
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
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MockUser from '../MockUser/MockUser';
import { baseUrl } from '../../config';
const INITIAL_FORM_DATA = {
  identifier: "",
  password: "",
};

const INITIAL_FORM_ERRORS = {
  identifier: false,
  password: false,
};

const loginUrl = `${baseUrl}/api/auth/local`;

export default function Login({ setSelection }) {
  const dispatch = useContext(GlobalContextDispatch);
  

  const [login, { loading, error, data }] = useFetchMutation(loginUrl);

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);

  useEffect(() => {
    if (data) {
      const { jwt, user } = data;
      dispatch({ type: "LOGIN", payload: { jwt, user } });
    }
  }, [data, dispatch]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateidentifier(identifier) {
    if (!isRegexValid(identifier, checkURLRegex)) {
      setFormError((prevState) => ({ ...prevState, identifier: true }));
      return true;
    } else {
      setFormError((prevState) => ({ ...prevState, identifier: false }));
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
    hasError = validateidentifier(formData.identifier) ? true : false;
    hasError = validatePassword(formData.password) ? true : false;
    return hasError;
  }

  async function hadleFormSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      const loginPayload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      login(loginPayload);
    }
  }

  return (
    <FormWrapper>
      <FormBox className="mt-8">
        <FormContainer>
          <form onSubmit={hadleFormSubmit}>
            <fieldset className="space-y-6"disabled={loading}>
              <FormBox>
                <FormImage
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <FormHeading>Sign in</FormHeading>
              </FormBox>
              <Input
                id="identifier"
                name="identifier"
                type="identifier"
                label="Email Address"
                autoComplete="off"
                placeholder="Enter your email"
                onChange={handleInputChange}
                onBlur={(e) => validateidentifier(e.target.value)}
                value={formData.identifier}
                error={
                  formError.identifier && "Please provide a valid email"
                }
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

              <MockUser />

              <Button className="mt-6 mb-6" type="submit">
                {loading ? "Loading..." : "Sign in"}
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
            </fieldset>
          </form>

          {error && (
            <FormError>
              <ErrorMessage message={error.message} />
            </FormError>
          )}
        </FormContainer>
      </FormBox>
    </FormWrapper>
  );
}
