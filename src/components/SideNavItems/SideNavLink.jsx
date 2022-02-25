import classNames from "classnames";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function SideNavLink({ children, to, item, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={classNames(
        match
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      )}
      {...props}
    >
      <item.icon
        className={classNames(
          match ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
          "mr-3 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      <span className="flex-1">{item.name}</span>
      {item.count ? (
        <span
          className={classNames(
            match ? "bg-gray-800" : "bg-gray-900 group-hover:bg-gray-800",
            "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
          )}
        >
          {item.count}
        </span>
      ) : null}
    </Link>
  );
}