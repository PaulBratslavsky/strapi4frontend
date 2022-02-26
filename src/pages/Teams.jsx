import { useState } from "react";
import Table from "../components/Table/Table";
import Button from "../styled/base/Button/Button";
import Modal from "../components/Modal/Modal";
import InviteUserForm from "../components/InviteUserForm/InviteUserForm";
import { UsersIcon } from "@heroicons/react/outline";

export default function Teams() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            TEAMS{" "}
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              10
            </span>
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <Button onClick={() => setOpen(true)} type="button">
            Add Team
          </Button>
        </div>
      </div>
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
        <InviteUserForm />
      </Modal>
    </div>
  );
}
