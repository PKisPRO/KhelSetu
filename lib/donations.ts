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
}

export async function submitDonation(data: DonationPayload): Promise<{ error: string | null }> {
  const { error } = await supabase.from('donations').insert([data]);
  if (error) return { error: error.message };
  return { error: null };
}
