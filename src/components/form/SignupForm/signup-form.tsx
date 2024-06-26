import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signup } from "@/services/auth";
import { useAuth } from "@/hooks/useAuth";

import { Button } from "../Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form";
import { IconInput } from "../IconInput";
import { PasswordInput } from "../PasswordInput";
import { User } from "@/domains/user";

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=;:'",.<>?/-]).*$/;

const formSchema = z
  .object({
    username: z
      .string()
      .email({ message: "Please enter a valid email address" }),
    password: z.string().regex(passwordRegex, {
      message:
        "Must contain a capital letter, a digit, and a special character",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupForm = () => {
  const { setUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { id, token } = await signup(values.username, values.password);
      const user: User = {
        id,
        email: values.username,
        authToken: token,
      };
      setUser(user);
    } catch (e) {
      if (e instanceof Error) {
        form.setError("root", { message: e.message });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        className="h-[70vh] w-full flex flex-col gap-4 items-center justify-between"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        role="form"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex flex-col w-[90vw] max-w-[400px] h-[56px]">
              <FormLabel className="text-gray-700 mb-1" htmlFor="username">
                Username
              </FormLabel>
              <FormControl>
                <IconInput
                  icon={<EnvelopeClosedIcon />}
                  type="email"
                  id="username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col w-[90vw] max-w-[400px] h-[48px]">
              <FormLabel className="text-gray-700 mb-1" htmlFor="password">
                Create password
              </FormLabel>
              <FormControl>
                <PasswordInput id="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="flex flex-col w-[90vw] max-w-[400px] h-[48px]">
              <FormLabel
                className="text-gray-700 mb-1"
                htmlFor="confirm-password"
              >
                Confirm password
              </FormLabel>
              <FormControl>
                <PasswordInput id="confirm-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col mb-[56px] mt-[36px] w-[90vw] max-w-[400px] h-[48px]">
          <Button className="px-[14px] py-[10px] bg-[#404eff] rounded-[24px] border border-solid border-[#4f93ff] shadow-sm text-white hover:bg-[#4f93ff] hover:text-white [font-family:'Poppins',Helvetica] text-[20px]">
            {form.formState.isSubmitting ? "Submitting..." : "Sign Up"}
          </Button>
          {form.formState.errors.root && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.root.message}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export { SignupForm };
