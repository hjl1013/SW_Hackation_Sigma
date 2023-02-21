import axios from 'axios'

export const AuthAPIImpl = {
    login: async (email: string, password: string): Promise<void> => {
        await axios.post('/auth/login', {
            email,
            password,
        })
    },
    signUpOrUpdatePassword: async (email: string, password: string, name: string): Promise<void> => {
        await axios.post('/auth/sign-up', { email, password, name })
    },
}