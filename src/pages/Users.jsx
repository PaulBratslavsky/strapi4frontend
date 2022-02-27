import { useState } from "react";
import Modal from '../components/Modal/Modal';
import { UserAddIcon } from '@heroicons/react/solid';
import ActionHeader from '../components/ActionHeader/ActionHeader';
import Table from '../components/Table/Table';
import InviteUserForm from '../components/InviteUserForm/InviteUserForm';

export default function Users() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ActionHeader title="USERS" count="1" cta="Invite User" ctaAction={() => setOpen(true)}/>
      <div className="h-full overflow-x-auto">
        <Table />
      </div>
      <Modal
        title="Invite Team Member"
        iconComponent={UserAddIcon}
        description="Complete information bellow to send an invite to user."
        open={open}
        setOpen={setOpen}
      >
        <InviteUserForm />
      </Modal>
    </div>
  );
}
