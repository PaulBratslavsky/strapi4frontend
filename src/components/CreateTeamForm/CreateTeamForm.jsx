import React, { useState } from "react";
import Input from "../../styled/base/Input/Input";
import Textarea from "../../styled/base/Textarea/Textarea";
import Button from "../../styled/base/Button/Button";
import { baseUrl } from "../../config";
const teamsUrl = `${baseUrl}/api/teams`;


const INITIAL_FORM_DATA = {
  teamName: "",
  teamDescription: "",
};

const INITIAL_FORM_ERRORS = {
  teamName: false,
  teamDescription: false,
};

export default function CreateTeamForm({ setOpen, fetchQuery }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);
  const { token } = JSON.parse(localStorage.getItem("teams-app-data"));
  // const [ createTeam ] = useFetchMutation(teamUrl);

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

  async function handleSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      try {
        const response = await fetch(teamsUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ data: formData }),
        });

        const data = await response.json();
        fetchQuery(teamUrl);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setOpen(false);
      }
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
          <Button type="submit"> Submit</Button>
          <Button type="button" variant={"secondary"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}
