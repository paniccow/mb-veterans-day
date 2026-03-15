import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { error } = await supabase.from('vday_vendor_applications').insert([{
      business_name: body.businessName,
      contact_name: body.contactName,
      email: body.email,
      phone: body.phone,
      website: body.website || null,
      vendor_type: body.vendorType || null,
      cuisine_type: body.cuisineType || null,
      booth_size: body.boothSize || '10x10',
      needs_electricity: body.needsElectricity || false,
      description: body.description || null,
      has_permit: body.hasPermit || false,
      status: 'pending',
    }]);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
