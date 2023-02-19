import { CommuTheme } from "@prisma/client";
import { PostDto } from "./post.dto";

export class CommuThemeDto implements CommuTheme{
    id: number;
    commuId: number;
    commuThemeName: string;
    commuThemeIconUrl: string;

}
