import { User, UserValidation } from "../../entities/user";
import { IUseCase } from "../i-use-case";

class ValidateUser implements IUseCase {
  execute({ user }: { user: User }): Promise<UserValidation | null> {
    const userValidation = {} as UserValidation;

    userValidation.name = this.validateName(user.name);
    userValidation.email = this.validateEmail(user.email);

    const hasError = Object.entries(userValidation).some(
      ([_, errorMessage]) => !!errorMessage
    );

    return hasError ? Promise.reject(userValidation) : Promise.resolve(null);
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
