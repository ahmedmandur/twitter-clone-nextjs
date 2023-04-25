import useRegisterModal from '@/hooks/useRegisterModal'
import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import Modal from '../Modal'

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true)

            registerModal.onClose()
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />

            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />

            <Input
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                disabled={isLoading}
            />

            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                Already have an account?
                <span
                    onClick={() => {}}
                    className="
            text-white 
            cursor-pointer 
            hover:underline
          "
                >
                    {' '}
                    Sign in
                </span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Create Account"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default RegisterModal
