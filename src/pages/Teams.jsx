import { useState } from "react";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import CreateTeamForm from "../components/CreateTeamForm/CreateTeamForm";
import { UsersIcon } from "@heroicons/react/outline";
import ActionHeader from "../components/ActionHeader/ActionHeader";
import TableColumn from '../components/Table/TableColumn';

const teams = [
  {
    name: "Jane Cooper's Team",
    description: "Regional Paradigm Technician",
    founder: "Jane Cooper",
  },
  {
    name: "Paul Dales's Team",
    description: "Regional Dale Coordinator",
    founder: "Paul Dale",
  },
  {
    name: "Andre Grande's Team",
    description: "Technician Regional Recruitment",
    founder: "Andre Grande",
  },
];

export default function Teams() {
  const [open, setOpen] = useState(false);
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
          <TableColumn source="name" label="Team Name"/>
          <TableColumn source="description" label="Description"/>
          <TableColumn source="founder" label="Founder"/>
        </Table>
      </div>
      <Modal
        title="Creat a team"
        iconComponent={UsersIcon}
        description="Create a team to organize your projects and collaborate."
        open={open}
        setOpen={setOpen}
      >
        <CreateTeamForm />
      </Modal>
    </div>
  );
}
