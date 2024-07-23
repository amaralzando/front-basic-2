type SignInRequestData = {
  email: string;
  password: string;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: SignInRequestData) {
  await delay();

  // Validação
  const user = usuarios.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  // Retorna os dados do usuário, incluindo o token
  return {
    token: user.token,
    user: {
      name: user.name,
      email: user.email,
    },
  };
}

export async function recoverUserInformaation(token: string) {
  await delay();

  // Validação
  const user = usuarios.find((user) => user.token === token);

  if (!user) {
    throw new Error("Token não existe");
  }

  return {
    token: user.token,
    user: {
      name: user.name,
      email: user.email,
    },
  };
}

export async function validateTokenUser(token?: string) {
  await delay();

  // Validação
  const user = usuarios.find((user) => user.token === token);

  if (!user) {
    throw new Error("Token não existe");
  }

  return true;
}

const usuarios = [
  {
    token: "b0447ecf-6691-409a-a631-6c3fc2f1dbec",
    name: "Admin",
    email: "admin@gmail.com",
    password: "Admin1234",
    role: "ADMIN",
  },
  {
    token: "cb2284e2-1c60-48c3-a48f-a199da70d350",
    name: "Cliente",
    email: "cliente@gmail.com",
    password: "Cliente123",
    role: "CLIENTE",
  },
];
