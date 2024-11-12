"use client";
import { useState, useTransition } from "react";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldType } from "@/components/forms/CustomFormField";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomFormField from "@/components/forms/CustomFormField";
import Link from "next/link";
const SignUpForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // setError("");
    // setSuccess("");

    startTransition(() => {
      //   register(values)
      //     .then((data) => {
      //       setError(data.error);
      //       setSuccess(data.success);
      //       if (data.success) {
      //         router.push("/users");
      //       }
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //       setError("An error occurred during login.");
      //     });
    });
  };
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Welcome back! Please sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CustomFormField
              control={form.control}
              name="name"
              label="Name"
              placeholder="Name"
              fieldType={FormFieldType.INPUT}
            />
            <CustomFormField
              control={form.control}
              name="email"
              label="email"
              placeholder="user@example.com"
              fieldType={FormFieldType.INPUT}
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="password"
              placeholder="enter password "
              fieldType={FormFieldType.PASSWORD}
            />
            <CustomFormField
              control={form.control}
              name="confirm_password"
              label="confirm password"
              placeholder="confirm password"
              fieldType={FormFieldType.PASSWORD}
            />
            <Button type="submit" className=" w-full" disabled={isPending}>
              Sign Up
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground ">
          Already have an account?{" "}
          <Link href={"/signin"} className="hover:underline  text-primary">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
