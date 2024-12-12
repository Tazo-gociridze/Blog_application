import { z } from "zod";


export const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    repeatPassword: z.string().min(6, {
      message: "Repeat password must be at least 6 characters.",
      //@ts-ignore
    }).refine((val, ctx) => {
      if (val !== ctx.parent.password) {
        return ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords do not match",
          path: ["repeatPassword"],
        });
      }
      return true;
    }),
  });

 export const onSubmit = (data: any) => {
    console.log(data);
};