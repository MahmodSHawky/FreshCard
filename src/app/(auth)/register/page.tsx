"use client";

import { FaStar } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "@base-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { myRegisterSchema, RegisterSchemaType } from "@/schemas/auth.schema";
import { userRegister } from "@/actions/auth.action";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter()

  const form = useForm <RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    resolver : zodResolver(myRegisterSchema)
  });

  const { handleSubmit, control } = form;

  async function mySubmit(data : RegisterSchemaType) {
    console.log(data);
    
    const isRegisterSuccessfully = await userRegister(data)

    if(isRegisterSuccessfully){
      toast.success("Your Account Creaeted Successfully.",{duration : 3000, position :"top-center"})

      setTimeout( () => {
        router.push('/login')
      },3000)

    }else{
      toast.error("You cannot register now.",{duration : 3000, position :"top-center"})
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h1>

          <p className="text-gray-600">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaStar />
              </div>
              <div>
                <h4 className="font-semibold">Premium Quality</h4>
                <p className="text-gray-500 text-sm">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaTruckFast />
              </div>
              <div>
                <h4 className="font-semibold">Fast Delivery</h4>
                <p className="text-gray-500 text-sm">
                  Same-day delivery available in most areas
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <MdOutlineSecurity />
              </div>
              <div>
                <h4 className="font-semibold">Secure Shopping</h4>
                <p className="text-gray-500 text-sm">
                  Your data and payments are completely secure
                </p>
              </div>
            </div>
          </div>

          {/* REVIEW CARD */}
          <div className="bg-white p-5 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-400 rounded-full"></div>
              <div>
                <h5 className="font-semibold">Sarah Johnson</h5>
                <div className="flex text-yellow-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm italic">
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend!"
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border">
          <h2 className="text-2xl font-bold text-center">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Start your fresh journey with us today
          </p>

          <div className="flex gap-4 mb-6">
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
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="nameInput">Name*</FieldLabel>
                  <Input
                    {...field}
                    id="nameInput"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
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

            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="rePasswordInput">
                    Confirm Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rePasswordInput"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your password"
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
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phoneInput">Phone*</FieldLabel>
                  <Input
                    {...field}
                    id="phoneInput"
                    type="tel"
                    aria-invalid={fieldState.invalid}
                    placeholder="+200123456789"
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
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
