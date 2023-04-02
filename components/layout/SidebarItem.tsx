import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  url?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  url,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className='flex flex-row items-center'>
      <Link
        className='relative rounded-full h-14 w-auto flex items-center justify-center gap-4 p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'
        href={`${url}`}
      >
        <Icon size={28} color='white' />
        <p className='hidden lg:block text-white text-xl'>{label}</p>
      </Link>
    </div>
  );
};

export default SidebarItem;
