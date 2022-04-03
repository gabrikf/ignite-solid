import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToChange = this.usersRepository.findById(user_id);
    if (!userToChange) {
      throw new Error("User not found");
    }
    const user = this.usersRepository.turnAdmin(userToChange);
    return user;
    // Complete aqui
  }
}

export { TurnUserAdminUseCase };
