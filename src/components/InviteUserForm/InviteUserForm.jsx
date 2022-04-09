import React, { useState } from "react";
import Input from "../../styled/base/Input/Input";
import Textarea from "../../styled/base/Textarea/Textarea";
import { isRegexValid, checkURLRegex } from "../../helpers/isRegexValid";
import Dropdown from "../../styled/base/Dropdow/Dropdown";
import Grid from "../../styled/layout/Grid/Grid";
import GridItem from "../../styled/layout/Grid/GridItem";

const teams = [
  { name: "Wade Cooper Team", id: 1 },
  { name: "Arlene Mccoy Team", id: 2 },
  { name: "Devon Webb Team", id: 3 },
  { name: "Tom Cook Team", id: 4 },
  { name: "Tanya Fox Team", id: 5 },
  { name: "Hellen Schmidt Team", id: 6 },
];

const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  inviteMessage: "",
  selectedTeam: "",
};

const INITIAL_FORM_ERRORS = {
  firstName: false,
  lastName: false,
  email: false,
  inviteMessage: false,
};

export default function InviteUserForm({ setOpen }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);
  const [team, setTeam] = useState(teams[0]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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

  function formValidation(formData) {
    let hasError = false;
    hasError = validateGeneric(formData.firstName, "firstName") ? true : false;
    hasError = validateGeneric(formData.lastName, "lastName") ? true : false;
    hasError = validateEmail(formData.email) ? true : false;
    hasError = validateGeneric(formData.inviteMessage, "inviteMessage")
      ? true
      : false;
    return hasError;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      setOpen(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:overflow-hidden text-left p-2">
      <div>

        <Grid>
          <GridItem>
            <Input
              id="firstName"
              className="mb-4"
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              onChange={handleInputChange}
              onBlur={(e) => validateGeneric(e.target.value, "firstName")}
              value={formData.firstName}
              error={formError.firstName && "Please provide a first name"}
            />
          </GridItem>
          <GridItem>
            <Input
              id="lastName"
              className="mb-4"
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              onChange={handleInputChange}
              onBlur={(e) => validateGeneric(e.target.value, "lastName")}
              value={formData.lastName}
              error={formError.lastName && "Please provide a last name"}
            />
          </GridItem>
        </Grid>
          <Input
            id="email"
            className="mb-4"
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

          <Dropdown
            className="mb-4"
            label={"Select a team"}
            options={teams}
            selected={team}
            keySelect="name"
            setSelected={setTeam}
          />

          <Textarea
            id="inviteMessage"
            name="inviteMessage"
            rows="4"
            type="textarea"
            label="Invite Message"
            placeholder="Enter brief invite message"
            onChange={handleInputChange}
            onBlur={(e) => validateGeneric(e.target.value, "inviteMessage")}
            value={formData.inviteMessage}
            error={
              formError.inviteMessage && "Please provide an invite message"
            }
          />
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          >
            Invite
          </button>
          <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
