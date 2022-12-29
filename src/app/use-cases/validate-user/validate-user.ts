import { User, UserValidation } from "@/entities/user";
import { IUseCase } from "../i-use-case";

class ValidateUser implements IUseCase {
  execute({ user }: { user: User }): UserValidation {
    const userValidation = {} as UserValidation;

    const nameValidation = this.validateName(user.name);
    const emailValidation = this.validateEmail(user.email);

    if (nameValidation) {
      userValidation.name = nameValidation;
    }
    if (emailValidation) {
      userValidation.email = emailValidation;
    }

    return userValidation;
  }

  private validateName(name: string): string {
    if (!name) {
      return "Name is required.";
    } else if (name.toLocaleLowerCase() === "error") {
      return "Name is invalid.";
    } else if (name.length < 3 || name.length > 50) {
      return "Name must have at least 3 and at most 50 characters.";
    }
    return "";
  }

  private validateEmail(email: string): string {
    if (!email) {
      return "Email is required.";
    } else if (!email.includes("@")) {
      return "Email is invalid.";
    }
    return "";
  }
}

export default new ValidateUser();
