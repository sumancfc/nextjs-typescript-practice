import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const items = [
    { label: "Home", url: "", icon: BsHouseFill },
    { label: "Notifications", url: "/notifications", icon: BsBellFill },
    { label: "Profile", url: "/users/123", icon: FaUser },
  ];
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
      <div className='flex flex-col items-end'>
        <div className='space-y-2 lg:w-[230px]'>
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.url}
              label={item.label}
              url={item.url}
              icon={item.icon}
            />
          ))}
          <SidebarItem label='Logout' icon={FiLogOut} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
