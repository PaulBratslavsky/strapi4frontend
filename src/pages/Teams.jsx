import { useState } from "react";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import CreateTeamForm from "../components/CreateTeamForm/CreateTeamForm";
import { UsersIcon } from "@heroicons/react/outline";
import ActionHeader from "../components/ActionHeader/ActionHeader";
import TableColumn from '../components/Table/TableColumn';
import useFetchQuery from '../hooks/useFetchQuery';
import { baseUrl } from '../config';
const teamsUrl = `${baseUrl}/api/teams`;


export default function Teams() {
  const [open, setOpen] = useState(false);
  const [ fetchQuery, { data, loading, error }] = useFetchQuery(teamsUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const teams = data ? data.data.attributes.results : [];

  return (
    <div>
      <ActionHeader
        title="TEAMS"
        count={teams.length}
        cta="Create Team"
        ctaAction={() => setOpen(true)}
      />
       <div className="h-full overflow-x-auto">
        <Table sourceData={teams}>
          <TableColumn source="teamName" label="Team Name"/>
          <TableColumn source="teamDescription" label="Description"/>
          <TableColumn source="teamOwner" label="Founder" render={(data) => data?.firstName ? `${data.firstName} ${data.lastName}` : "N/A"}/>
          <TableColumn source="teamMembers" label="Members" render={(data) =>  data.length }/>
        </Table>
      </div>
      <Modal
        title="Creat a team"
        iconComponent={UsersIcon}
        description="Create a team to organize your projects and collaborate."
        open={open}
        setOpen={setOpen}
      >
        <CreateTeamForm fetchQuery={fetchQuery}/>
      </Modal>
    </div>
  );
}
