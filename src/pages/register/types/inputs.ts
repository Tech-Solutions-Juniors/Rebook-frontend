import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export interface FormInputs {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  tos_accepted: boolean;
}

export const schema = z
  .object({
    first_name: z.string({ message: "First name is required" }),
    last_name: z.string({ message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    phone_number: z
      .string()
      .refine((phoneNumber) => isValidPhoneNumber(phoneNumber), {
        message: "Invalid phone number",
      }),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 characters" }),
    confirm_password: z.string().min(8),
    tos_accepted: z.boolean().refine((data) => data, {
      message: "You must accept the terms of services",
    }),
  })
  .required()
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords doesn't match",
    path: ["confirm_password"],
  });
