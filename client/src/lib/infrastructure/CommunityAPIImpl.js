import axios from 'axios'
import { CommunityDto, CommunityWithPostsDto, CreateCommunityDto } from '../dto/community.dto'
import { CreatePostDto } from '../dto/post.dto'
import { CreateThemeDto } from '../dto/theme.dto'

export const CommunityAPIImpl = {
    createCommunity: async (createCommunityDto: CreateCommunityDto): Promise<CreateCommunityDto> => {
        return await axios.post(`/community/create`, createCommunityDto)
    },
    createTheme: async (communityId: number, createThemeDto: CreateThemeDto): Promise<void> => {
        await axios.post(`/community/${communityId}/createTheme`, createThemeDto)
    },
    createPost: async (communityId: number, createPostDto: CreatePostDto): Promise<CreatePostDto> => {
        return await axios.post(`/community/${communityId}/posting`, createPostDto)
    },

    getCommunities: async (): Promise<CommunityDto> => {
        return await axios.get(`/community`)
    },
    getPosts: async (communityId: number): Promise<CommunityWithPostsDto> => {
        return await axios.get(`/community/${communityId}/posts`)
    },

    increaseHearts: async (postId: number): Promise<void> => {
        await axios.patch(`/community/${postId}/increaseHearts`)
    }
}