import { supabase } from "@/supabase";

export const addBlogRequest = async ({formValues, user} : {formValues: any, user: any}) => {
  if (formValues?.image_url) {
    try {
      const { data, error: uploadError } = await supabase.storage
        .from("blog_image-storage")
        //@ts-ignore
        .upload(formValues.image_url.name, formValues.image_url);

      if (uploadError) {
        alert(`Image upload failed: ${uploadError.message}`);
        return;
      }

      const fullPath = data?.fullPath;

      if (!fullPath) {
        alert(
          "Image upload successful, but path is undefined.  Check Supabase setup.",
        );
        return;
      }

      //@ts-ignore
      const { data: insertedData, error: insertError } = await supabase
        .from("blog-data")
        //@ts-ignore
        .insert({
          title_ka: "",
          //@ts-ignore
          title_en: formValues.title_en,
          description_ka: "",
          //@ts-ignore
          description_en: formValues.description_en,
          user_id: user.user.id,
          image_url: fullPath,
        });

      if (insertError) {
        alert(`Database insertion failed: ${insertError.message}`);
        return;
      }

      alert("Blog added successfully!");
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
      console.error("General error:", error);
    }
  }
};
