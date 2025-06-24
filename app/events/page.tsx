export default function EventsPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Events</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">Monitor and manage system events and activities</div>
      
      {/* Event Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Total Events</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">1,247</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Critical Events</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">23</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Resolved</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-green-600">1,189</div>
        </div>
      </div>

      {/* Event Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Filters</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          <select className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]">
            <option>All Severity</option>
            <option>Critical</option>
            <option>Warning</option>
            <option>Info</option>
          </select>
          <select className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]">
            <option>All Categories</option>
            <option>System</option>
            <option>Security</option>
            <option>Performance</option>
            <option>User Activity</option>
          </select>
          <input 
            type="date" 
            defaultValue="2024-07-26"
            className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]"
          />
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Apply Filters</button>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden p-0">
        <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Event ID</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Event Type</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Severity</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Timestamp</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Source</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Status</th>
              <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2" data-label="Event ID">#EVT-001</td>
              <td className="px-3 py-2" data-label="Event Type">Database Connection Failed</td>
              <td className="px-3 py-2" data-label="Severity">
                <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs font-semibold">Critical</span>
              </td>
              <td className="px-3 py-2" data-label="Timestamp">2024-07-26 14:30:22</td>
              <td className="px-3 py-2" data-label="Source">Database Server</td>
              <td className="px-3 py-2" data-label="Status">
                <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs font-semibold">Investigating</span>
              </td>
              <td className="px-3 py-2" data-label="Actions">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">View</button>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2" data-label="Event ID">#EVT-002</td>
              <td className="px-3 py-2" data-label="Event Type">User Login Attempt</td>
              <td className="px-3 py-2" data-label="Severity">
                <span className="bg-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-xs font-semibold">Info</span>
              </td>
              <td className="px-3 py-2" data-label="Timestamp">2024-07-26 14:25:15</td>
              <td className="px-3 py-2" data-label="Source">Auth Service</td>
              <td className="px-3 py-2" data-label="Status">
                <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs font-semibold">Resolved</span>
              </td>
              <td className="px-3 py-2" data-label="Actions">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">View</button>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2" data-label="Event ID">#EVT-003</td>
              <td className="px-3 py-2" data-label="Event Type">High CPU Usage</td>
              <td className="px-3 py-2" data-label="Severity">
                <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs font-semibold">Warning</span>
              </td>
              <td className="px-3 py-2" data-label="Timestamp">2024-07-26 14:20:08</td>
              <td className="px-3 py-2" data-label="Source">Server-01</td>
              <td className="px-3 py-2" data-label="Status">
                <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs font-semibold">Resolved</span>
              </td>
              <td className="px-3 py-2" data-label="Actions">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">View</button>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2" data-label="Event ID">#EVT-004</td>
              <td className="px-3 py-2" data-label="Event Type">Security Alert</td>
              <td className="px-3 py-2" data-label="Severity">
                <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs font-semibold">Critical</span>
              </td>
              <td className="px-3 py-2" data-label="Timestamp">2024-07-26 14:15:42</td>
              <td className="px-3 py-2" data-label="Source">Firewall</td>
              <td className="px-3 py-2" data-label="Status">
                <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs font-semibold">Investigating</span>
              </td>
              <td className="px-3 py-2" data-label="Actions">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">View</button>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2" data-label="Event ID">#EVT-005</td>
              <td className="px-3 py-2" data-label="Event Type">Backup Completed</td>
              <td className="px-3 py-2" data-label="Severity">
                <span className="bg-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-xs font-semibold">Info</span>
              </td>
              <td className="px-3 py-2" data-label="Timestamp">2024-07-26 14:10:30</td>
              <td className="px-3 py-2" data-label="Source">Backup Service</td>
              <td className="px-3 py-2" data-label="Status">
                <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs font-semibold">Resolved</span>
              </td>
              <td className="px-3 py-2" data-label="Actions">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
} 