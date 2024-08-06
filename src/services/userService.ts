import { Api } from "../shared/api";

type signResponse = {
  token: string;
};

export async function signinService(email: string, password: string) {
  try {
    const response = await Api.post<signResponse>("/v1/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
