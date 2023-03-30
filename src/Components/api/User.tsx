import axios from "axios";

const liveURL = "https://football-predict-api.onrender.com/api";

interface register {
  name: string;
  userName: string;
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
  userName,
  email,
  password,
  phoneNumber,
  confirmPassword,
}: register) => {
  return await axios
    .post(`${liveURL}/registeruser`, {
      name,
      userName,
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


//get one user

export const singleUser = async(id:string)=>{
  return await axios.get(`${liveURL}/getsingleuser/${id}`).then((res)=>res.data)
}

//PREDICTIONS
export const allPredictions = async(req:Request , res:Response)=>{
  return await axios.get(`/${liveURL}/prediction`).then((res)=>res.data)
}


//create prediction

export const CreatePrediction= async(id:string , matchID : string, data:any) =>{
  return await axios.post(`${liveURL}/${id}/${matchID}/create-prediction`, data).then((res)=> res.data)
}