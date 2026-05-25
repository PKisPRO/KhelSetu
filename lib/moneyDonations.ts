import { supabase } from '@/lib/supabase';

export interface MoneyDonationPayload {
  name: string;
  phone: string;
  email: string;
  amount: number;
  transaction_id: string;
  notes: string;
  proof_url: string;
}

export async function uploadMoneyDonationProof(file: File): Promise<{ url: string | null; error: string | null }> {
  const ext = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from('money-donation-proofs')
    .upload(fileName, file, { cacheControl: '3600', upsert: false });

  if (error) return { url: null, error: error.message };

  const { data } = supabase.storage.from('money-donation-proofs').getPublicUrl(fileName);
  return { url: data.publicUrl, error: null };
}

export async function submitMoneyDonation(data: MoneyDonationPayload): Promise<{ error: string | null }> {
  const { error } = await supabase.from('money_donations').insert([data]);
  if (error) return { error: error.message };
  return { error: null };
}
