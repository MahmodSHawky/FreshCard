import * as zod from "zod";

export const myRegisterSchema = zod.object({
  name: zod
    .string("name must be string")
    .nonempty("name is required")
    .min(3, "min length is 3")
    .max(20, "max length is 20"),
  email: zod
    .email("invalid email")
    .nonempty("email is required"),  
  phone: zod
    .string()
    .nonempty("phone is required")
    .regex(/^01[0125][0-9]{8}$/ , "invalid phone number"),  
  password: zod
    .string()
    .nonempty("password is required")
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ , `password must contain 1 number (0-9)
      password must contain 1 uppercase letters
      password must contain 1 lowercase letters
      password must contain 1 non-alpha numeric number
      password is 8-16 characters with no space`),
  rePassword : zod 
    .string()
    .nonempty("rePassword is required")
}).refine( (object) => {
  return object.password === object.rePassword
    },{
      error : "password & rePassword not matched",
      path : ["rePassword"]
    }) ;


export type RegisterSchemaType = zod.infer<typeof myRegisterSchema>



export const myLoginSchema = zod.object({
  email: zod
    .email("invalid email")
    .nonempty("email is required"),   
  password: zod
    .string()
    .nonempty("password is required")
    .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ , `password must contain 1 number (0-9)
      password must contain 1 uppercase letters
      password must contain 1 lowercase letters
      password must contain 1 non-alpha numeric number
      password is 8-16 characters with no space`),
  
})


export type LoginSchemaType = zod.infer<typeof myLoginSchema>