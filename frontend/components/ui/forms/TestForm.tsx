// "use client";

// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CalendarIcon } from "lucide-react"
// import { format } from "date-fns"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils"
// import { toast } from "@/components/hooks/use-toast"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"

// const isValidDate = (val : string) => !isNaN(Date.parse(val));

// const formSchema = z

//   .object({
//     firstName: z.string().min(1, "First name is required"),
//     lastName: z.string().min(1, "Last name is required"),
//     dateOfBirth: z.string(),
//     gender: z.enum(["male", "female", "prefer not to state"]),
//     maritalState: z.enum(["married", "single", "widowed"]),
//     phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
//     alternativePhoneNumber: z.string().optional(),
//     email: z.string().email("Invalid email format"),
//     address: z.string().min(5, "Address must be at least 5 characters"),
//     appointmentDateTime: z.string(),
//     paymentStatus: z.enum(["pay now", "pay later"]),
//   })
//   .refine((data) => isValidDate(data.dateOfBirth), {
//     message: "Invalid date format",
//     path: ["dateOfBirth"],
//   })
//   .refine((data) => isValidDate(data.appointmentDateTime), {
//     message: "Invalid date-time format",
//     path: ["appointmentDateTime"],
//   });

// import React from 'react'

// export default function TestForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver : zodResolver(formSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       dateOfBirth: "",
//       gender: "prefer not to state", 
//       maritalState: "single", 
//       phoneNumber: "",
//       alternativePhoneNumber: "",
//       email: "",
//       address: "",
//       appointmentDateTime: "",
//       paymentStatus: "pay later", 
//     }
//   });

//   const handleSubmit = (values: z.infer<typeof formSchema>) => {
//     console.log({ values });
//   };

//   return (

//     <div>
//       <div>
//         <Form {...form}>
//           <form             
//             onSubmit={form.handleSubmit(handleSubmit)}
//             className="flex flex-col gap-4">
// {/* =======================================*/}
// {/* ============Form Section===============*/}
//               <FormField 
//                 control={form.control}
//                 name="firstName"
//                 render={({ field }) => (
//                   <FormItem>
//                   <FormLabel>First Name</FormLabel>
//                   <FormControl>
//                     <Input  
//                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
//                       placeholder="eg. Sahan dulaj"
//                       type="text"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage/>
//                 </FormItem>
//                 )}
//               />
// {/* =======================================*/}
// {/* ============Form Section===============*/}
//               <FormField 
//                 control={form.control}
//                 name="firstName"
//                 render={({ field }) => (
//                   <FormItem>
//                   <FormLabel>Last Name</FormLabel>
//                   <FormControl>
//                     <Input  
//                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
//                       placeholder="eg. Deshapriya"
//                       type="text"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage/>
//                 </FormItem>
//                 )}
//               />
// {/* =======================================*/}
// {/* ============Form Section===============*/}
//               <FormField 
//                 control={form.control}
//                 name="dateOfBirth"
//                 render={({ field }) => (
//                   <FormItem>
//                   <FormLabel>Date of Birth</FormLabel>
//                   <FormControl>
//                     <Input  
//                       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
//                       type="date"
//                       min="1900-01-01" // Optional: Prevent unrealistic dates
//                       max={new Date().toISOString().split("T")[0]} // Prevent future dates
//                       aria-label="Date of Birth"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage/>
//                 </FormItem>
//                 )}
//               />
// {/* =======================================*/}
// {/* ============Form Section===============*/}
// <FormField
//           control={form.control}
//           name="dob"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Date of birth</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[240px] pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     disabled={(date) =>
//                       date > new Date() || date < new Date("1900-01-01")
//                     }
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//               <FormDescription>
//                 Your date of birth is used to calculate your age.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
// {/* =======================================*/}
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }
