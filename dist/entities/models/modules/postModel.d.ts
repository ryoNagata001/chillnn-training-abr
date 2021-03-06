import { PostMast } from '../../type';
import { BaseModel } from './_baseModel';
export declare class PostModel extends BaseModel<PostMast> {
    get postID(): string;
    get ownerUserID(): string;
    get createdAt(): number;
    get imageURL(): string | null;
    get isRegistable(): boolean;
    /**
     * 画像の登録
     * @param file
     */
    setImage(file: File): Promise<void>;
    /**
     * 投稿を行う
     */
    register(): Promise<void>;
}
