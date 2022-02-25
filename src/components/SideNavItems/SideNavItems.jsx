import React from "react";
import SideNavLink from './SideNavLink';

export default function SideNavItems({ navigation = [] }) {
  return (
    <nav
      className="mt-5 flex-1 px-2 bg-gray-800 space-y-1"
      aria-label="Sidebar"
    >
      {navigation.map((item) => (
        <SideNavLink key={item.name} to={item.pathname} item={item} />
      ))}
    </nav>
  );
}
