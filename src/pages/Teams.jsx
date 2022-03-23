import { useState, useContext } from "react";
import { GlobalContextState } from "../context/globalContext";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import CreateTeamForm from "../components/CreateTeamForm/CreateTeamForm";
import { UsersIcon } from "@heroicons/react/outline";
import ActionHeader from "../components/ActionHeader/ActionHeader";
import TableColumn from "../components/Table/TableColumn";
import useFetchQuery from "../hooks/useFetchQuery";
import { baseUrl } from "../config";
const teamsUrl = `${baseUrl}/api/teams`;

export default function Teams() {
  const token = useContext(GlobalContextState).token;
  const [open, setOpen] = useState(false);
  const [fetchQuery, { data, loading, error }] = useFetchQuery(teamsUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const teams = data ? data.data.attributes.results : [];

  async function handleUpdateRequest(id, formData) {
    alert("called second");
    try {
      const response = await fetch(teamsUrl + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: formData }),
      });

      const data = await response.json();
      // fetchQuery(teamsUrl);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
      alert("updated successfully");
    }
  }

  async function handleDeleteRequest(id) {
    alert("delete called");
    try {
      const response = await fetch(teamsUrl + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log(data, "data deleted");
      fetchQuery(teamsUrl);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Item deleted");
    }
  }

  return (
    <div>
      <ActionHeader
        title="TEAMS"
        count={teams.length}
        cta="Create Team"
        ctaAction={() => setOpen(true)}
      />
      <div className="h-full overflow-x-auto">
        <Table
          sourceData={teams}
          update={handleUpdateRequest}
          remove={handleDeleteRequest}
        >
          <TableColumn source="teamName" label="Team Name" editable />
          <TableColumn source="teamDescription" label="Description" editable />
          <TableColumn
            source="teamOwner"
            label="Founder"
            render={(data) =>
              data?.firstName ? `${data.firstName} ${data.lastName}` : "N/A"
            }
          />
          <TableColumn
            source="teamMembers"
            label="Members"
            render={(data) => data.length}
          />
        </Table>
      </div>
      <Modal
        title="Creat a team"
        iconComponent={UsersIcon}
        description="Create a team to organize your projects and collaborate."
        open={open}
        setOpen={setOpen}
      >
        <CreateTeamForm fetchQuery={fetchQuery} />
      </Modal>
    </div>
  );
}
