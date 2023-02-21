import axios from 'axios'
import { UserDto } from '../dto/user.dto'

export const AuthAPIImpl = {
    login: async (email: string, password: string): Promise<UserDto> => {
        return await axios.post('/auth/login', {
            email,
            password,
        })
    },
    signUpOrUpdatePassword: async (email: string, password: string, name: string): Promise<void> => {
        await axios.post('/auth/sign-up', { email, password, name })
    },
    isLoggedIn: async (): Promise<boolean> => {
        return await axios.get('/auth/is-logged-in')
    }
}