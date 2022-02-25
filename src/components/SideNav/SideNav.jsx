import React from "react";
import SideNavItems from "../SideNavItems/SideNavItems";

export default function SideNav({ navigation = [] }) {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <SideNavItems navigation={navigation} />
        </div>
      </div>
    </div>
  );
}
