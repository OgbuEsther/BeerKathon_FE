import axios from "axios";

const liveURL = "https://football-predict-api.onrender.com/api";

interface register {
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}
interface login {
  email: string;
  password: string;
}

export const RegisterUser = async ({
  name,
  username,
  email,
  password,
  phoneNumber,
  confirmPassword,
}: register) => {
  return await axios
    .post(`${liveURL}/registeruser`, {
      name,
      username,
      email,
      password,
      phoneNumber,
      confirmPassword,
    })
    .then((res) => res.data);
};

export const Login = async ({ email, password }: login) => {
  return await axios
    .post(`${liveURL}/loginuser`, {
      email,
      password,
    })
    .then((res) => res.data);
};
