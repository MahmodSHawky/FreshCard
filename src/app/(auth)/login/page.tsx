"use client";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@base-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner"
import { useRouter } from "next/navigation";
import imgg from "../../../assets/images/imgi_2_2e5810ff3e-e750761ebcd4ae5907db.png"
import { LoginSchemaType, myLoginSchema } from "@/schemas/auth.schema";
import { userLogin } from "@/actions/auth.action";
import { signIn } from "next-auth/react";


export default function LoginPage() {

  const router = useRouter()

  const form = useForm <LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver : zodResolver(myLoginSchema)
  });

  const { handleSubmit, control } = form;

  async function mySubmit(data : LoginSchemaType) {
    console.log(data);
    const response = await signIn("credentials", {...data, redirect : false , callbackUrl : "/"})    // this function from next-auth 
    console.log(response);
    
    // const isLoginSuccessfully = await userLogin(data)

    if(response?.ok){
      toast.success("You Logedin Successfully.",{duration : 3000, position :"top-center"})

      setTimeout( () => {
        router.push('/')
      },3000)

    }else{
      toast.error(response?.error,{duration : 3000, position :"top-center"})
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="space-y-6">

          
          <div className="p-5 rounded-xl shadow-sm border">
            <img src={imgg.src} alt="" />
          </div>
          <h1>FreshCart - Your One-Stop Shop for Fresh Products</h1>
          <p>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-green-600">Fresh</span>Cart
          </h1>

          <h3 className="text-center my-3">Welcome Back!</h3>
          <p className="text-gray-600 text-center">
            Sign in to continue your fresh shopping experience
          </p>

          <div className="flex gap-4 mb-6 mt-3">
            <button className="flex items-center justify-center gap-2 border rounded-md py-2 w-full hover:bg-gray-50">
              <FcGoogle /> Google
            </button>

            <button className="flex items-center justify-center gap-2 border rounded-md py-2 w-full hover:bg-gray-50">
              <FaFacebookF className="text-blue-600" /> Facebook
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit(mySubmit)} className="space-y-4">

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="emailInput">Email*</FieldLabel>
                  <Input
                    {...field}
                    id="emailInput"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali@example.com"
                    autoComplete="off"
                    className="w-full mt-1 border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="passwordInput">Password*</FieldLabel>
                  <Input
                    {...field}
                    id="passwordInput"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Create Strong password"
                    autoComplete="off"
                    className="w-full mt-1 border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
