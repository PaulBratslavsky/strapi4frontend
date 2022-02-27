import { useState } from "react";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";
import CreateTeamForm from '../components/CreateTeamForm/CreateTeamForm';
import { UsersIcon } from "@heroicons/react/outline";
import ActionHeader from '../components/ActionHeader/ActionHeader';

export default function Teams() {
  const [open, setOpen] = useState(false);
  return (
    <div>
     <ActionHeader title="TEAMS" count="10" cta="Create Team" ctaAction={() => setOpen(true)}/>
      <div className="h-full overflow-x-auto">
        <Table />
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
