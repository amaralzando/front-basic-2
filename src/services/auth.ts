import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Gabriel Amaral",
      email: "gabriel@gasatec.com.br",
    },
  };
}

export async function recoverUserInformaation() {
  await delay();

  return {
    user: {
      name: "Gabriel Amaral",
      email: "gabriel@gasatec.com.br",
    },
  };
}
