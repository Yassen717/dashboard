export default function SettingsPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Settings</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">System configuration and user preferences</div>
      
      {/* Settings Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-[20px] font-semibold mb-2">General</div>
          <div className="text-slate-500 text-sm">Basic system settings</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-[20px] font-semibold mb-2">Security</div>
          <div className="text-slate-500 text-sm">Security and access control</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-[20px] font-semibold mb-2">Notifications</div>
          <div className="text-slate-500 text-sm">Alert and notification settings</div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">General Settings</h3>
        <div className="flex flex-col gap-5">
          <div>
            <label className="block font-semibold mb-2">System Name</label>
            <input 
              type="text" 
              defaultValue="Admin Dashboard"
              className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Time Zone</label>
            <select className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm">
              <option>UTC (Coordinated Universal Time)</option>
              <option>EST (Eastern Standard Time)</option>
              <option>PST (Pacific Standard Time)</option>
              <option>GMT (Greenwich Mean Time)</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">Date Format</label>
            <select className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-2">Language</label>
            <select className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Security Settings</h3>
        <div className="flex flex-col gap-5">
          <div>
            <label className="block font-semibold mb-2">Session Timeout (minutes)</label>
            <input 
              type="number" 
              defaultValue="30"
              className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Password Policy</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span>Require uppercase letters</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span>Require numbers</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked />
                <span>Require special characters</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Require password change every 90 days</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2">Two-Factor Authentication</label>
            <div className="flex items-center gap-4">
              <label className="relative inline-block w-[50px] h-6">
                <input type="checkbox" className="opacity-0 w-0 h-0" />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-300 rounded-full transition duration-300">
                  <span className="absolute h-[18px] w-[18px] left-[3px] bottom-[3px] bg-white rounded-full transition duration-300" />
                </span>
              </label>
              <span className="text-slate-500">Enable 2FA for all users</span>
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-2">IP Whitelist</label>
            <textarea 
              placeholder="Enter IP addresses (one per line)"
              className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-sm min-h-[80px]"
            />
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">User Management</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">User</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Role</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Status</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Last Login</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2" data-label="User">
                  <div>
                    <div className="font-semibold">admin@example.com</div>
                    <div className="text-slate-500 text-xs">Administrator</div>
                  </div>
                </td>
                <td className="px-3 py-2" data-label="Role">
                  <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs">Admin</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Last Login">2024-07-26 14:30:22</td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="User">
                  <div>
                    <div className="font-semibold">user@example.com</div>
                    <div className="text-slate-500 text-xs">Regular User</div>
                  </div>
                </td>
                <td className="px-3 py-2" data-label="Role">
                  <span className="bg-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-xs">User</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Active</span>
                </td>
                <td className="px-3 py-2" data-label="Last Login">2024-07-26 13:45:10</td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="User">
                  <div>
                    <div className="font-semibold">viewer@example.com</div>
                    <div className="text-slate-500 text-xs">Read Only</div>
                  </div>
                </td>
                <td className="px-3 py-2" data-label="Role">
                  <span className="bg-slate-100 text-slate-500 rounded-md px-2 py-0.5 text-xs">Viewer</span>
                </td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">Inactive</span>
                </td>
                <td className="px-3 py-2" data-label="Last Login">2024-07-25 09:20:15</td>
                <td className="px-3 py-2" data-label="Actions">
                  <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">System Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Version</div>
            <div className="font-semibold">1.2.3</div>
          </div>
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">License</div>
            <div className="font-semibold">MIT</div>
          </div>
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Last Updated</div>
            <div className="font-semibold">2024-07-25</div>
          </div>
        </div>
      </div>
    </section>
  );
} 