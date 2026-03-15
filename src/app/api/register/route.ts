import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { error } = await supabase.from('vday_registrations').insert([{
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone || null,
      attending_as: body.attendingAs || 'individual',
      group_size: body.groupSize || '1',
      is_veteran: body.isVeteran || false,
      branch: body.branch || null,
      years_served: body.yearsServed || null,
      submit_photo: body.submitPhoto || false,
      heard_about: body.heardAbout || null,
    }]);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
