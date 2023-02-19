import { CommuTheme } from "@prisma/client";
import { CommunityDto } from "./community.dto";
import { PostForGetCommunityDto } from "./post.dto";

export class CommuThemeDto implements CommuTheme{
    id: number;
    commuId: number;
    commuThemeName: string;
    commuThemeIconUrl: string;

}

export class CommuThemeWithCommunityDto extends CommuThemeDto{
    community: CommunityDto;
}

export class CommuThemeForGetCommunityDto extends CommuThemeDto{
    posts: Array<PostForGetCommunityDto>;
}