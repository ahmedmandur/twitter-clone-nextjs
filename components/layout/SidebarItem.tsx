import { useRouter } from 'next/router'
import { IconType } from 'react-icons'

interface SidebarItemProps {
    href: string
    label: string
    icon: IconType
    onClick?: () => void
}
const SidebarItem: React.FC<SidebarItemProps> = ({
    href,
    label,
    icon: Icon,
    onClick,
}) => {
    const router = useRouter()
    return (
        <div className=" flex flex-row  items-center ">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
                <Icon color="white" size={28} />
            </div>
            <div className="relative hidden lg:flex items-row gap-4 p-4 rounder-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
                <Icon color="white" size={24} />
                <p className="text-white hidden lg:block text-xl">{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem
