"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const isValidDate = (val : string) => !isNaN(Date.parse(val));

const formSchema = z

  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    dateOfBirth: z.string(),
    gender: z.enum(["male", "female", "prefer not to state"]),
    maritalState: z.enum(["married", "single", "widowed"]),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
    alternativePhoneNumber: z.string().optional(),
    email: z.string().email("Invalid email format"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    appointmentDateTime: z.string(),
    paymentStatus: z.enum(["pay now", "pay later"]),
  })
  .refine((data) => isValidDate(data.dateOfBirth), {
    message: "Invalid date format",
    path: ["dateOfBirth"],
  })
  .refine((data) => isValidDate(data.appointmentDateTime), {
    message: "Invalid date-time format",
    path: ["appointmentDateTime"],
  });

import React from 'react'

export default function TestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "prefer not to state", 
      maritalState: "single", 
      phoneNumber: "",
      alternativePhoneNumber: "",
      email: "",
      address: "",
      appointmentDateTime: "",
      paymentStatus: "pay later", 
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (

    <div>
      <div>
        <Form {...form}>
          <form             
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4">
{/* ============Form Section===============*/}
              <FormField 
                control={form.control}
                name="firstName"
                render={({  }) => (
                  <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>

                  </FormControl>
                  <FormMessage/>
                </FormItem>
                )}
              />
{/* =======================================*/}
          </form>
        </Form>
      </div>
    </div>
  );
}
