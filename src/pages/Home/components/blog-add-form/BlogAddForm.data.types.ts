export const fileInputStyles = `rounded-md border p-2 text-gray-900 file:mr-4 file:rounded-md
     file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold 
     file:text-blue-600 hover:file:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`;

export interface BlogAddFormData {
  title_en: string;
  description_en: string;
  image_url: File | string;
}

export const blogListDefaultValues = {
  title_en: "",
  description_en: "",
  image_url: "",
};
