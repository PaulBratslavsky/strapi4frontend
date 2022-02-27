import { useState } from "react";
import Modal from "../components/Modal/Modal";
import { UserAddIcon } from "@heroicons/react/solid";
import ActionHeader from "../components/ActionHeader/ActionHeader";
import Table from "../components/Table/Table";
import InviteUserForm from "../components/InviteUserForm/InviteUserForm";
import TableColumn from "../components/Table/TableColumn";

/* This example requires Tailwind CSS v2.0+ */
const users = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Bob Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Pending",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Pending",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

function ImageData({imageSource}) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={imageSource} alt="" />
      </div>
    </div>
  );
}

export default function Users() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ActionHeader
        title="USERS"
        count={users.length}
        cta="Invite User"
        ctaAction={() => setOpen(true)}
      />
      <div className="h-full overflow-x-auto">
        <Table sourceData={users}>
          <TableColumn source="name" label="Name" />
          <TableColumn source="title" label="Title" />
          <TableColumn source="department" label="Department" />
          <TableColumn source="status" label="Status" />
          <TableColumn source="email" label="Email" />
          <TableColumn 
            source="image" 
            label="Image" 
            render={ imageSource => <ImageData imageSource={imageSource} /> } />
        </Table>
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
