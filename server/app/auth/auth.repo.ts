import { Repository, EntityRepository } from 'typeorm';
import { UserEntity } from './auth.entity';

@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity> {
    findByUserName(user_name) {
        this.findOne({ user_name })
    }
}