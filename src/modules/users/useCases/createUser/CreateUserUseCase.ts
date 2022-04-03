import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailIsAlreadyBeingUsed = this.usersRepository.findByEmail(email);
    if (emailIsAlreadyBeingUsed) {
      throw new Error("This email is already being used");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
