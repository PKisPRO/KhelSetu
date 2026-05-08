import { supabase } from '@/lib/supabase';

export interface DonationPayload {
  name:            string;
  phone:           string;
  email:           string;
  equipment_type:  string;
  sport:           string;
  condition:       string;
  description:     string;
  location:        string;
  donation_method: string;
  photo_url?:      string;
}

/** Upload a photo to Supabase Storage and return its public URL. */
export async function uploadPhoto(file: File): Promise<{ url: string | null; error: string | null }> {
  const ext      = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from('equipment-photos')
    .upload(fileName, file, { cacheControl: '3600', upsert: false });

  if (error) return { url: null, error: error.message };

  const { data } = supabase.storage.from('equipment-photos').getPublicUrl(fileName);
  return { url: data.publicUrl, error: null };
}

/** Insert a donation record into the donations table. */
export async function submitDonation(data: DonationPayload): Promise<{ error: string | null }> {
  const { error } = await supabase.from('donations').insert([data]);
  if (error) return { error: error.message };
  return { error: null };
}
