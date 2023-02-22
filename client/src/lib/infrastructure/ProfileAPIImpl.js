import axios from "axios"
import { ProfileDto } from "../dto/profile.dto"

export const ProfileAPIImpl = {
    getUserInfo: async (): Promise<ProfileDto> => {
        return await axios.get('/profile')
    }
}