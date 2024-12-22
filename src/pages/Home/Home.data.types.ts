export interface BlogDataTypes {
    title_en: string | number;
    title_ka: string;
    description_en: string | null;
    description_ka: string | null;
    user_id?: string | null;
    image_url: string | null;
    created_at?: string;
  }