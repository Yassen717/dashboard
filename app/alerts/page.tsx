export default function AlertsPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Alerts</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">System alerts and notification management</div>
      
      {/* Alert Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Active Alerts</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">7</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Critical Alerts</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">3</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Resolved Today</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-green-600">12</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Alert Rules</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">24</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Quick Actions</h3>
        <div className="flex gap-3 flex-wrap">
          <button className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors">Acknowledge All</button>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Create Alert Rule</button>
          <button className="px-4 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">Test Notification</button>
          <button className="px-4 py-2 rounded-md bg-slate-100 text-slate-500 border border-slate-300 font-semibold hover:bg-slate-200 transition-colors">Export Alerts</button>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Active Alerts</h3>
        <div className="flex flex-col gap-4">
          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs font-semibold">CRITICAL</span>
                  <span className="font-semibold">Database Connection Failed</span>
                </div>
                <div className="text-slate-500 text-sm">Database server is not responding</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Acknowledge</button>
                <button className="px-3 py-1 rounded-md bg-slate-100 text-slate-500 border border-slate-300 text-sm font-semibold hover:bg-slate-200 transition-colors">View</button>
              </div>
            </div>
            <div className="text-xs text-slate-500">Triggered: 2024-07-26 14:30:22 | Duration: 15m 30s</div>
          </div>

          <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs font-semibold">WARNING</span>
                  <span className="font-semibold">High Memory Usage</span>
                </div>
                <div className="text-slate-500 text-sm">Memory usage exceeds 85% threshold</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Acknowledge</button>
                <button className="px-3 py-1 rounded-md bg-slate-100 text-slate-500 border border-slate-300 text-sm font-semibold hover:bg-slate-200 transition-colors">View</button>
              </div>
            </div>
            <div className="text-xs text-slate-500">Triggered: 2024-07-26 14:25:15 | Duration: 10m 45s</div>
          </div>

          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs font-semibold">CRITICAL</span>
                  <span className="font-semibold">Security Breach Detected</span>
                </div>
                <div className="text-slate-500 text-sm">Multiple failed login attempts detected</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Acknowledge</button>
                <button className="px-3 py-1 rounded-md bg-slate-100 text-slate-500 border border-slate-300 text-sm font-semibold hover:bg-slate-200 transition-colors">View</button>
              </div>
            </div>
            <div className="text-xs text-slate-500">Triggered: 2024-07-26 14:20:08 | Duration: 5m 22s</div>
          </div>
        </div>
      </div>

      {/* Alert Rules */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Alert Rules</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Rule Name</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Condition</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Severity</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Status</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2" data-label="Rule Name">High CPU Usage</td>
                <td className="px-3 py-2" data-label="Condition">CPU &gt; 80% for 5 minutes</td>
                <td className="px-3 py-2" data-label="Severity">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">Warning</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Rule Name">Database Connection</td>
                <td className="px-3 py-2" data-label="Condition">DB connection failed</td>
                <td className="px-3 py-2" data-label="Severity">
                  <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs">Critical</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Rule Name">Memory Usage</td>
                <td className="px-3 py-2" data-label="Condition">Memory &gt; 85% for 3 minutes</td>
                <td className="px-3 py-2" data-label="Severity">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">Warning</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Rule Name">Security Alerts</td>
                <td className="px-3 py-2" data-label="Condition">Failed login &gt; 5 attempts</td>
                <td className="px-3 py-2" data-label="Severity">
                  <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs">Critical</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Notification Settings</h3>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div>
              <div className="font-semibold">Email Notifications</div>
              <div className="text-slate-500 text-sm">Send alerts via email</div>
            </div>
            <label className="relative inline-block w-[50px] h-6">
              <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-green-600 rounded-full transition duration-300">
                <span className="absolute h-[18px] w-[18px] left-[26px] bottom-[3px] bg-white rounded-full transition duration-300" />
              </span>
            </label>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-slate-100">
            <div>
              <div className="font-semibold">SMS Notifications</div>
              <div className="text-slate-500 text-sm">Send critical alerts via SMS</div>
            </div>
            <label className="relative inline-block w-[50px] h-6">
              <input type="checkbox" className="opacity-0 w-0 h-0" />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-300 rounded-full transition duration-300">
                <span className="absolute h-[18px] w-[18px] left-[3px] bottom-[3px] bg-white rounded-full transition duration-300" />
              </span>
            </label>
          </div>
          <div className="flex justify-between items-center py-3">
            <div>
              <div className="font-semibold">Slack Notifications</div>
              <div className="text-slate-500 text-sm">Send alerts to Slack channel</div>
            </div>
            <label className="relative inline-block w-[50px] h-6">
              <input type="checkbox" defaultChecked className="opacity-0 w-0 h-0" />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-green-600 rounded-full transition duration-300">
                <span className="absolute h-[18px] w-[18px] left-[26px] bottom-[3px] bg-white rounded-full transition duration-300" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
} 