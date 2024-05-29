import { User } from "../interfaces/User";

interface Error {
  [key: string]: string;
}

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório";
  }

  if (!data.email) {
    errors["email"] = "O email é obrigatório";
  }

  if (!data.agree) {
    errors["agree"] = "É obrigatório concordar com os termos";
  }

  return errors;
};
