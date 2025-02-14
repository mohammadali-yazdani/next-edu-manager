"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import { ImageUp } from "lucide-react";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 chars." })
    .max(20, { message: "Username must be at most 20 chars." }),

  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(8, { message: "At least 8 chars required." }),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  phoneNumber: z.string().min(1, { message: "Phone is required." }),
  address: z.string().min(1, { message: "Address is required." }),
  bloodType: z.string().min(1, { message: "Blood Type is required." }),
  birthday: z
    .string()
    .min(1, { message: "Birthday is required." })
    .transform((val) => new Date(val)),
  gender: z.enum(["male", "female"], { message: "Select gender." }),
  img: z.instanceof(File, { message: "Image is required." }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: unknown;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {/* INPUT GROUP */}
      <div className="flex flex-col gap-5 mt-5">
        <h2 className="text-xs text-gray-400">Authentication Information</h2>

        <div className="grid grid-cols-6 gap-4">
          <InputField
            label="Username"
            name="username"
            defaultValue={data?.username}
            register={register}
            error={errors.username}
          />
          <InputField
            label="Email"
            name="email"
            defaultValue={data?.email}
            register={register}
            error={errors.email}
            type="email"
          />
          <InputField
            label="Password"
            name="password"
            defaultValue={data?.password}
            register={register}
            error={errors.password}
            type="password"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <h2 className="text-xs text-gray-400">Personal Information</h2>
        <div className="grid grid-cols-6 gap-4">
          <InputField
            label="Fist Name"
            name="firstName"
            defaultValue={data?.firstName}
            register={register}
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            defaultValue={data?.lastName}
            register={register}
            error={errors.lastName}
          />
          <InputField
            label="Phone"
            name="phoneNumber"
            defaultValue={data?.phoneNumber}
            register={register}
            error={errors.phoneNumber}
          />
          <InputField
            label="Address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors.address}
          />
          <InputField
            label="Blood Type"
            name="bloodType"
            defaultValue={data?.bloodType}
            register={register}
            error={errors.bloodType}
          />
          <InputField
            label="Birth Date"
            name="birthday"
            defaultValue={data?.birthday}
            register={register}
            error={errors.birthday}
            type="date"
          />
          {/* GENDER SELECT */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 relative flex flex-col h-fit">
            <label className="text-sm mb-1" htmlFor="gender">
              Gender
            </label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none h-9"
              id="gender"
              defaultValue={data?.gender}
              {...register("gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <p className="text-red-500 text-xs mt-3 min-h-4">
              {errors && errors.gender?.message?.toString()}
            </p>
          </div>
          {/* UPLOAD BUTTON */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 relative flex flex-col h-fit">
            <div className="text-sm mb-1">Profile Image</div>
            <label
              className="flex items-center gap-2 cursor-pointer text-gray-500 ring-[1.5px] ring-gray-300 p-2 h-9 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              htmlFor="img"
            >
              <ImageUp size={24} />
              <span>Upload a photo</span>
            </label>
            <input
              type="file"
              name=""
              id="img"
              {...register}
              className="hidden"
            />

            <p className="text-red-500 text-xs mt-3 min-h-4">
              {errors && errors.img?.message?.toString()}
            </p>
          </div>
        </div>
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "create" : "update"}
      </button>
    </form>
  );
};

export default EventForm;
