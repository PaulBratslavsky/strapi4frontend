import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { MenuAlt2Icon, UsersIcon, UserIcon } from "@heroicons/react/outline";
import MobileNav from "../components/MobileNav/MobileNav";
import SideNav from "../components/SideNav/SideNav";
import TopBar from "../components/TopBar/TopBar";
import Teams from './Teams';
import Users from './Users';

function DashboardView() {
  return <h1>dashboard views</h1>;
}

const navigation = [
  // { name: "Dashboard", pathname: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Teams",
    pathname: "/dashboard/teams",
    icon: UsersIcon,
    current: false,
    count: 10,
  },
  {
    name: "Users",
    pathname: "/dashboard/users",
    icon: UserIcon,
    current: false,
    count: 1,
  },
];

const userNavigation = [
  { name: "Your Profile", pathname: "#" },
  { name: "Sign out", element: true },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='h-screen'>
      <MobileNav
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <SideNav navigation={navigation} />
      <div className="h-screen md:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <TopBar navigation={userNavigation} />
        </div>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
