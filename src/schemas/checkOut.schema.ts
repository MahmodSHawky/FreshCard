import * as zod from "zod";


export const ckeckOutSchema = zod.object({
  details: zod
    .string()
    .nonempty("details is required"),   
  phone: zod
    .string()
    .nonempty("phone is required")
    .regex(/^01[0215][0-9]{8}$/ , `invalid phone number`),
  city:zod
  .string()
  .nonempty("city is required")
})


export type ckeckOutSchemaType = zod.infer<typeof ckeckOutSchema>