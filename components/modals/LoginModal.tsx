import useLoginModal from '@/hooks/useLoginModal'
import Input from '@/components/Input'
import { useCallback, useState } from 'react'
import Modal from '../Modal'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = useCallback(() => {
        try {
            setIsLoading(true)

            loginModal.onClose()
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                First time using Twitter?
                <span
                    onClick={() => {}}
                    className="
            text-white 
            cursor-pointer 
            hover:underline
          "
                >
                    {' '}
                    Create an account
                </span>
            </p>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal