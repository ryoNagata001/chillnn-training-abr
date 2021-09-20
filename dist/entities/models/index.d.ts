import { PostMast, UserMast } from '../../entity/type';
import { RepositoryContainer } from '../repositories';
import { PostModel } from './modules/postModel';
import { UserModel } from './modules/userModel';
import { ModelOption } from './modules/_baseModel';
export * from './modules/postModel';
export * from './modules/userModel';
export declare class ModelFactory {
    private repositoryContainer;
    constructor(repositoryContainer: RepositoryContainer);
    PostModel(mast: PostMast, option?: ModelOption): PostModel;
    UserModel(mast: UserMast, option?: ModelOption): UserModel;
}
