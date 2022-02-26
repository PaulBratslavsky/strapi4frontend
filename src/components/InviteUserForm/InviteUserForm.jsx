import React, { useState } from "react";
import Input from "../../styled/base/Input/Input";
import Textarea from "../../styled/base/Textarea/Textarea";
const INITIAL_FORM_DATA = {
  teamName: "",
  teamDescription: "",
};

const INITIAL_FORM_ERRORS = {
  teamName: false,
  teamDescription: false,
};

export default function InviteUserForm({setOpen}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);

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

  function formValidation(formData) {
    let hasError = false;
    hasError = validateGeneric(formData.teamName, "teamName") ? true : false;
    hasError = validateGeneric(formData.teamDescription, "teamDescription")
      ? true
      : false;
    return hasError;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      const { teamName, teamDescription } = formData;
      alert(`${teamName} ${teamDescription}`);
      setOpen(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:overflow-hidden text-left p-2">
        <div>
          <Input
            id="teamName"
            name="teamName"
            className="mb-4"
            type="text"
            label="Name"
            placeholder="Enter your team name"
            onChange={handleInputChange}
            onBlur={(e) => validateGeneric(e.target.value, "teamName")}
            value={formData.teamName}
            error={formError.teamName && "Please provide a team name"}
          />

          <Textarea
            id="teamDescription"
            name="teamDescription"
            rows="4"
            type="textarea"
            label="Description"
            placeholder="Enter brief description of your team"
            onChange={handleInputChange}
            onBlur={(e) => validateGeneric(e.target.value, "teamDescription")}
            value={formData.teamDescription}
            error={formError.teamDescription && "Please provide a description"}
          />
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
          >
            Submit
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
