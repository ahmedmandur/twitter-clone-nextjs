import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi'

interface HeaderProps {
    label: string
    showBackButton?: boolean
}
const Header: React.FC<HeaderProps> = ({ label, showBackButton }) => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        router.back()
    }, [router])
    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row gap-2 item-center">
                {showBackButton && (
                    <BiArrowBack
                        size={20}
                        color="white"
                        onClick={handleBack}
                        className="cursor-pointer hover:opacity-70 transition"
                    />
                )}
                <h1 className="text-white text-xl font-semibold">{label}</h1>
            </div>
        </div>
    )
}

export default Header
