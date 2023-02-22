import axios from "axios"
import { SetLocationDto } from "../dto/user.dto"

export const LocationAPIImpl = {
    setUserLocation: async (setLocationDto: SetLocationDto): Promise<void> => {
        await axios.patch(`/location/set-up`, setLocationDto)
    }
}