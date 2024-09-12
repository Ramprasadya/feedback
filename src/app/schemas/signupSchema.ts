import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Enter Atleast 2 character")
  .max(20, "Maximun length can not be more than 20")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can not be contain special character ");


export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message:"Enter "}),
    password : z.string().min(4,"Enter at least 4 character ")
})