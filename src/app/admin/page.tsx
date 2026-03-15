import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const dynamic = 'force-dynamic';

async function getData() {
  const [regRes, vendorRes] = await Promise.all([
    supabaseAdmin
      .from('vday_registrations')
      .select('*')
      .order('created_at', { ascending: false }),
    supabaseAdmin
      .from('vday_vendor_applications')
      .select('*')
      .order('created_at', { ascending: false }),
  ]);
  return {
    registrations: regRes.data || [],
    vendors: vendorRes.data || [],
  };
}

export default async function AdminPage() {
  const { registrations, vendors } = await getData();

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Veterans Day 2026 — Admin
          </h1>
          <p className="text-gray-400 text-sm">Registrations and vendor applications dashboard</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-5xl font-bold text-red-400">{registrations.length}</div>
            <div className="text-gray-400 mt-1">Attendee Registrations</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-5xl font-bold text-amber-400">{vendors.length}</div>
            <div className="text-gray-400 mt-1">Vendor Applications</div>
          </div>
        </div>

        {/* Registrations Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            🎖️ Attendee Registrations ({registrations.length})
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  {['Date', 'Name', 'Email', 'Phone', 'Attending As', 'Veteran?', 'Branch', 'Photo Wall', 'How Heard'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-gray-400 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registrations.length === 0 ? (
                  <tr><td colSpan={9} className="px-4 py-8 text-center text-gray-500">No registrations yet</td></tr>
                ) : registrations.map((r) => (
                  <tr key={r.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(r.created_at).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-white font-medium">{r.first_name} {r.last_name}</td>
                    <td className="px-4 py-3 text-blue-300">{r.email}</td>
                    <td className="px-4 py-3 text-gray-400">{r.phone || '—'}</td>
                    <td className="px-4 py-3 text-gray-300 capitalize">{r.attending_as}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${r.is_veteran ? 'bg-red-900/40 text-red-300' : 'bg-white/5 text-gray-500'}`}>
                        {r.is_veteran ? '✓ Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{r.branch || '—'}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${r.submit_photo ? 'bg-purple-900/40 text-purple-300' : 'bg-white/5 text-gray-500'}`}>
                        {r.submit_photo ? '✓ Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{r.heard_about || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Vendors Table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            🍔 Vendor Applications ({vendors.length})
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  {['Date', 'Business', 'Contact', 'Email', 'Phone', 'Type', 'Cuisine', 'Booth', 'Electricity', 'Status'].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-gray-400 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {vendors.length === 0 ? (
                  <tr><td colSpan={10} className="px-4 py-8 text-center text-gray-500">No applications yet</td></tr>
                ) : vendors.map((v) => (
                  <tr key={v.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{new Date(v.created_at).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-white font-medium">{v.business_name}</td>
                    <td className="px-4 py-3 text-gray-300">{v.contact_name}</td>
                    <td className="px-4 py-3 text-blue-300">{v.email}</td>
                    <td className="px-4 py-3 text-gray-400">{v.phone}</td>
                    <td className="px-4 py-3 text-gray-300 capitalize">{v.vendor_type || '—'}</td>
                    <td className="px-4 py-3 text-gray-400">{v.cuisine_type || '—'}</td>
                    <td className="px-4 py-3 text-gray-400">{v.booth_size}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${v.needs_electricity ? 'bg-yellow-900/40 text-yellow-300' : 'bg-white/5 text-gray-500'}`}>
                        {v.needs_electricity ? '⚡ Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        v.status === 'approved' ? 'bg-green-900/40 text-green-300' :
                        v.status === 'rejected' ? 'bg-red-900/40 text-red-300' :
                        'bg-amber-900/40 text-amber-300'
                      }`}>
                        {v.status || 'pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-8 text-center text-gray-600 text-xs">
          Data stored in Supabase · aura-interior-design project · vday_registrations + vday_vendor_applications tables
        </p>
      </div>
    </div>
  );
}
