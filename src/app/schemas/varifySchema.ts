import {z} from "zod"

export const varifySchema = z.object({
    code: z.string().length(4,"Code must be 4 digit")
})