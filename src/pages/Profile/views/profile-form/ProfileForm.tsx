import { btnStyles, inputStyles } from "@/customHooks/profile/useProfileLogic";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProfileFormValues {
  full_name_en: string;
  full_name_ka: string;
  phone_number: string;
  avatar_url: string;
}

const ProfileForm = (props: any) => {
  const { setProfileData, profileData, handleSubmitProfile } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: profileData,
  });

  const onSubmit: SubmitHandler<ProfileFormValues> = (data) => {
    setProfileData(data);
    handleSubmitProfile();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="full_name_en"
          className="mb-2 block font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          id="full_name_en"
          {...register("full_name_en", { required: "Name is required" })}
          className={inputStyles}
        />
        {errors.full_name_en && (
          <p className="text-sm text-red-500">{errors.full_name_en.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="full_name_ka"
          className="mb-2 block font-medium text-gray-700"
        >
          Name (Georgian):
        </label>
        <input
          id="full_name_ka"
          {...register("full_name_ka")}
          className={inputStyles}
        />
      </div>
      <div>
        <label
          htmlFor="phone_number"
          className="mb-2 block font-medium text-gray-700"
        >
          Phone Number:
        </label>
        <input
          id="phone_number"
          type="tel"
          {...register("phone_number", {
            pattern: {
              value: /^\+?\d{10,15}$/,
              message: "Invalid phone number format",
            },
          })}
          className={inputStyles}
        />
        {errors.phone_number && (
          <p className="text-sm text-red-500">{errors.phone_number.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="avatar_url"
          className="mb-2 block font-medium text-gray-700"
        >
          Avatar URL:
        </label>
        <input
          id="avatar_url"
          type="url"
          {...register("avatar_url", {})}
          className={inputStyles}
        />
        {errors.avatar_url && (
          <p className="text-sm text-red-500">{errors.avatar_url.message}</p>
        )}
      </div>
      <button
        type="submit"
        className={`${btnStyles} bg-indigo-500 hover:bg-indigo-700`}
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
