import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import ShieldCheckIcon from "@heroicons/react/24/outline/ShieldCheckIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Overall Dashboard",
  },
  {
    path: "/app/tasks", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Tasks", // name that appear in Sidebar
  },
  {
    path: "", //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
    name: "Modules", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/optix", // url
        icon: <EyeIcon className={iconClasses} />, // icon component
        name: "Optix",
      },
      {
        path: "/app/insightone", // url
        icon: <ChartBarIcon className={iconClasses} />, // icon component
        name: "InsightOne",
      },
      {
        path: "/app/eagleview", // url
        icon: <ShieldCheckIcon className={iconClasses} />, // icon component
        name: "Eagleview",
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      {
        path: "/app/settings-team", // url
        icon: <UsersIcon className={submenuIconClasses} />, // icon component
        name: "Team Members", // name that appear in Sidebar
      },
    ],
  },
];

export default routes;
