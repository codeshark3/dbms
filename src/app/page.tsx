"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { LuSearch } from "react-icons/lu";
import { Search } from "lucide-react";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import Header from "@/components/Header";
import CustomFormField from "@/components/forms/CustomFormField";
import { FormFieldType } from "@/components/forms/CustomFormField";
import Image from "next/image";
import { searchSchema } from "@/schemas";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });
  const onSubmit = (values: z.infer<typeof searchSchema>) => {
    startTransition(() => {});
  };
  return (
    <div className="h-screen w-full">
      {" "}
      <Header />
      <div className="flex h-[90vh] w-full flex-col items-center justify-center bg-white text-white">
        <div className="flex flex-col items-center">
          {/* Chat Interface */}
          <div className="mt-2 flex h-[600px] w-[800px] flex-col items-center">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={200}
              height={200}
              className="my-2"
            />
            <h2 className="mb-6 text-3xl text-blue-500">
              Welcome! please enter your search term
            </h2>

            {/* Input Box */}
            <div className="relative w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex-1 space-y-6"
                >
                  <div className="flex items-center justify-center px-2">
                    <CustomFormField
                      control={form.control}
                      fieldType={FormFieldType.INPUT}
                      name="search"
                      // label="Search"
                      placeholder="Enter your search term"
                      iconAlt="user"
                    />
                    <Button className="flex bg-primary px-4 py-2 hover:bg-gray-700">
                      <span className="mr-2">
                        {" "}
                        <Search size={30} />
                      </span>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex space-x-4">
              <Button className="flex items-center bg-primary px-4 py-2 hover:bg-gray-700">
                {/* <span className="mr-2"></span> */}
                Water Quality
              </Button>
              <Button className="flex items-center bg-primary px-4 py-2 hover:bg-gray-700">
                {/* <span className="mr-2"></span> */}
                Onchocerciasis
              </Button>
              <Button className="flex items-center justify-center bg-primary px-4 py-2 hover:bg-gray-700">
                {/* <span className="mr-2"></span> */}
                Ground Water
              </Button>
              <Button className="flex items-center bg-primary px-4 py-2 hover:bg-gray-700">
                {/* <span className="mr-2"></span> */}
                Climate Change
              </Button>
            </div>
          </div>
        </div>
        {/* <footer className="mb-4 mt-auto text-gray-500">
      ChatGPT can make mistakes. Check important info.
    </footer> */}
      </div>
    </div>
  );
}
