import Image from "next/image";

export default function OverviewPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Overview</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">Monitor system activities and manage applications</div>
      
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Total Applications</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">25</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Active Users</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">1,500</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">System Uptime</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">99.9%</div>
        </div>
      </div>
      
      {/* Real-time Metrics */}
      <div className="mb-6">
        <h2 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Real-time Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,4vw,24px)]">
          <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Application Performance</div>
            <div className="text-[clamp(20px,5vw,28px)] font-bold text-green-600">+15%</div>
            <div className="text-green-600 mb-4 text-[clamp(12px,3vw,14px)]">Last 7 Days +15%</div>
            {/* Placeholder for line chart */}
            <div className="h-20 bg-slate-100 rounded-lg" />
          </div>
          <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">User Engagement</div>
            <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">-5%</div>
            <div className="text-red-600 mb-4 text-[clamp(12px,3vw,14px)]">Last 30 Days -5%</div>
            {/* Placeholder for bar chart */}
            <div className="h-20 bg-slate-100 rounded-lg" />
          </div>
        </div>
      </div>
      
      {/* Recent Events */}
      <div>
        <h2 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Recent Events</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Event</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Timestamp</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Status</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2" data-label="Event">Application Launched</td>
                <td className="px-3 py-2" data-label="Timestamp">2024-07-26 10:00 AM</td>
                <td className="px-3 py-2" data-label="Status"><span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Success</span></td>
                <td className="px-3 py-2" data-label="Details"><a href="#" className="text-blue-600 hover:underline">View</a></td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Event">User Login</td>
                <td className="px-3 py-2" data-label="Timestamp">2024-07-26 10:15 AM</td>
                <td className="px-3 py-2" data-label="Status"><span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Success</span></td>
                <td className="px-3 py-2" data-label="Details"><a href="#" className="text-blue-600 hover:underline">View</a></td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Event">Data Update</td>
                <td className="px-3 py-2" data-label="Timestamp">2024-07-26 10:30 AM</td>
                <td className="px-3 py-2" data-label="Status"><span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Success</span></td>
                <td className="px-3 py-2" data-label="Details"><a href="#" className="text-blue-600 hover:underline">View</a></td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Event">System Alert</td>
                <td className="px-3 py-2" data-label="Timestamp">2024-07-26 10:45 AM</td>
                <td className="px-3 py-2" data-label="Status"><span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">Warning</span></td>
                <td className="px-3 py-2" data-label="Details"><a href="#" className="text-blue-600 hover:underline">View</a></td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Event">Application Shutdown</td>
                <td className="px-3 py-2" data-label="Timestamp">2024-07-26 11:00 AM</td>
                <td className="px-3 py-2" data-label="Status"><span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Success</span></td>
                <td className="px-3 py-2" data-label="Details"><a href="#" className="text-blue-600 hover:underline">View</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
