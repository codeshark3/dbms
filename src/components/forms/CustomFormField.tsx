// /* eslint-disable no-unused-vars */
// import { E164Number } from "libphonenumber-js/core";
// import Image from "next/image";
// // import ReactDatePicker from "react-datepicker";
// import { Control } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";

// import { Checkbox } from "./ui/checkbox";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "./ui/form";
// import { Input } from "./ui/input";
// import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
// import { Textarea } from "./ui/textarea";
// import { FormFieldType } from "./forms/PatientForm";

// // export enum FormFieldType {
// //   INPUT = "input",
// //   TEXTAREA = "textarea",
// //   PHONE_INPUT = "phoneInput",
// //   CHECKBOX = "checkbox",
// //   DATE_PICKER = "datePicker",
// //   SELECT = "select",
// //   SKELETON = "skeleton",
// // }

// interface CustomProps {
//   control: Control<any>,
//   name: string,
//   label?: string,
//   placeholder?: string,
//   iconSrc?: string,
//   iconAlt?: string,
//   disabled?: boolean,
//   dateFormat?: string,
//   showTimeSelect?: boolean,
//   children?: React.ReactNode,
//   renderSkeleton?: (field: any) => React.ReactNode,
//   fieldType: FormFieldType,
// }

// const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
//   switch (props.fieldType) {
//     case FormFieldType.INPUT:
//       return (
//         <div className="flex rounded-md border border-dark-500 bg-dark-400">
//           {props.iconSrc && (
//             <Image
//               src={props.iconSrc}
//               height={24}
//               width={24}
//               alt={props.iconAlt || "icon"}
//               className="ml-2"
//             />
//           )}
//           <FormControl>
//             <Input
//               placeholder={props.placeholder}
//               {...field}
//               className="shad-input border-0"
//             />
//           </FormControl>
//         </div>
//       );
//     case FormFieldType.TEXTAREA:
//       return (
//         <FormControl>
//           <Textarea
//             placeholder={props.placeholder}
//             {...field}
//             className="shad-textArea"
//             disabled={props.disabled}
//           />
//         </FormControl>
//       );
//     case FormFieldType.PHONE_INPUT:
//       return (
//         <FormControl>

//             <PhoneInput defaultCountry="GH"
//             placeholder={props.placeholder}   international withCountryCallingCode  values={field.value as E164Number | undefined}  onChange={field.onChange} className="input-phone"/>

//         </FormControl>
//       );
//     case FormFieldType.CHECKBOX:
//       return (
//         <FormControl>
//           <div className="flex items-center gap-4">
//             <Checkbox
//               id={props.name}
//               checked={field.value}
//               onCheckedChange={field.onChange}
//             />
//             <label htmlFor={props.name} className="checkbox-label">
//               {props.label}
//             </label>
//           </div>
//         </FormControl>
//       );

//     case FormFieldType.DATE_PICKER:
//       return (
//         <div className="flex rounded-md border border-dark-500 bg-dark-400">
//           <Image
//             src="/assets/icons/calendar.svg"
//             height={24}
//             width={24}
//             alt="user"
//             className="ml-2"
//           />
//           <FormControl>
//             {/* <ReactDatePicker
//               showTimeSelect={props.showTimeSelect ?? false}
//               selected={field.value}
//               onChange={(date: Date) => field.onChange(date)}
//               timeInputLabel="Time:"
//               dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
//               wrapperClassName="date-picker"
//             /> */}
//           </FormControl>
//         </div>
//       );
//     case FormFieldType.SELECT:
//       return (
//         <FormControl>
//           <Select onValueChange={field.onChange} defaultValue={field.value}>
//             <FormControl>
//               <SelectTrigger className="shad-select-trigger">
//                 <SelectValue placeholder={props.placeholder} />
//               </SelectTrigger>
//             </FormControl>
//             <SelectContent className="shad-select-content">
//               {props.children}
//             </SelectContent>
//           </Select>
//         </FormControl>
//       );
//     case FormFieldType.SKELETON:
//       return props.renderSkeleton ? props.renderSkeleton(field) : null;
//     default:
//       return null;
//   }
// };

// const CustomFormField = (props: CustomProps) => {
//   const { control, name, label, fieldType } = props;

//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className="flex-1">
//           {fieldType !== FormFieldType.CHECKBOX && label && (
//             <FormLabel className="shad-input-label">{label}</FormLabel>
//           )}
//           <RenderField field={field} props={props} />

//           <FormMessage className="shad-error" />
//         </FormItem>
//       )}
//     />
//   );
// };

// export default CustomFormField;

"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
import { Control } from "react-hook-form";
// import { FormFieldType } from "./forms/PatientForm";
// import "react-phone-number-input/style.css";

// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";

export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    iconSrc,
    iconAlt,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="border-dark-500 bg-dark-400 mx-2 flex rounded-md border">
          <FormControl className="">
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>{" "}
          {iconSrc && (
            <Image
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
        </div>
      );
      break;
    case FormFieldType.PASSWORD:
      return (
        <div className="border-dark-500 bg-dark-400 mx-2 flex rounded-md border">
          <FormControl className="">
            <Input
              placeholder={placeholder}
              type="password"
              {...field}
              className="shad-input border-0"
            />
          </FormControl>{" "}
          {iconSrc && (
            <Image
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt || "icon"}
              className="ml-2"
            />
          )}
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );
      break;
    // case FormFieldType.PHONE_INPUT:
    //   return (
    //     <FormControl>
    //       <PhoneInput
    //         defaultCountry="GH"
    //         placeholder={placeholder}
    //         {...field}
    //         international
    //         withCountryCallingCode
    //         values={field.value as E164Number | undefined}
    //         onChange={field.onChange}
    //         className="input-phone"
    //       />
    //     </FormControl>
    //   );
    //   break;
    case FormFieldType.DATE_PICKER:
      return (
        <div className="border-dark-500 bg-dark-400 mx-2 flex rounded-md border">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="user"
            className="ml-2"
          />
          <FormControl>
            {/* <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              timeInputLabel="Time:"
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker h-10  border-0 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              className=""
            /> */}
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    //   case FormFieldType.TIME:
    //     return <Input type="time" />
    //     break;
    //   case FormFieldType.DATETIME:
    //     return <Input type="datetime-local" />
    //     break;

    //   case FormFieldType.CHECKBOX:
  }
};
const CustomFormField = (props: CustomProps) => {
  const { control, name, label, fieldType } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="">{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
