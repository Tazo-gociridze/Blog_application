import { supabase } from "@/supabase";

interface Blog {
  title_en: number;
  title_ka: string;
  description_en: string | null;
  description_ka: string | null;
  user_id: string | null;
  image_url: string | null;
  created_at: string;
}

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



export const getBlogsData = async ({
  searchText,
  setBlogs
}: {
    searchText: string ;
    setBlogs?: (blogs: Blog[]) => void
}): Promise<void> => {

    if (!searchText) {
    const { data, error } = await supabase
      .from("blog-data")
      .select("*")
      .throwOnError();

    if (error) {
      console.error("Error fetching all blogs", error);
        throw error
    }
    setBlogs?.(data as Blog[]);
    return
  }

    const { data, error } = await supabase
      .from("blog-data")
      .select("*")
      .ilike("title_en", `%${searchText}%`)
      .throwOnError();

    if (error) {
        console.error("Error fetching filtered blogs", error);
        throw error
    }
   setBlogs?.(data as Blog[]);
};