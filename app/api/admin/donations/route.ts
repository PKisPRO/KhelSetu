import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Service role key bypasses RLS — only used server-side, never exposed to client
function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

// GET /api/admin/donations — fetch all donations
export async function GET() {
  const { data, error } = await adminClient()
    .from('donations')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

// DELETE /api/admin/donations — delete one donation by id
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const { error } = await adminClient().from('donations').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
