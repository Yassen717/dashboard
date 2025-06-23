export default function LogsPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Logs</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">System logs and debugging information</div>
      
      {/* Log Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Total Logs</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">45,678</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Error Logs</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">234</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Warning Logs</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-yellow-700">1,567</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Log Size</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold">2.4 GB</div>
        </div>
      </div>

      {/* Log Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Search & Filters</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          <input 
            type="text" 
            placeholder="Search logs..."
            className="flex-1 min-w-[200px] px-3 py-2 rounded-md border border-slate-300 bg-white text-sm"
          />
          <select className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]">
            <option>All Levels</option>
            <option>Error</option>
            <option>Warning</option>
            <option>Info</option>
            <option>Debug</option>
          </select>
          <select className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]">
            <option>All Services</option>
            <option>Web Server</option>
            <option>Database</option>
            <option>Application</option>
            <option>Security</option>
          </select>
          <input 
            type="date" 
            defaultValue="2024-07-26"
            className="px-3 py-2 rounded-md border border-slate-300 bg-white text-sm min-w-[120px]"
          />
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Search</button>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          <button className="px-4 py-2 rounded-md bg-slate-100 text-slate-500 border border-slate-300 font-semibold hover:bg-slate-200 transition-colors">Export Logs</button>
          <button className="px-4 py-2 rounded-md bg-slate-100 text-slate-500 border border-slate-300 font-semibold hover:bg-slate-200 transition-colors">Clear Old Logs</button>
          <button className="px-4 py-2 rounded-md bg-slate-100 text-slate-500 border border-slate-300 font-semibold hover:bg-slate-200 transition-colors">Download</button>
        </div>
      </div>

      {/* Log Entries */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden p-0">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <span className="font-semibold">Recent Log Entries</span>
          <span className="text-slate-500 text-sm">Showing 50 of 45,678 entries</span>
        </div>
        <div className="max-h-[600px] overflow-y-auto">
          <div className="p-3 border-b border-slate-100 bg-red-50">
            <div className="flex gap-3 items-start">
              <span className="bg-red-100 text-red-600 rounded-md px-2 py-0.5 text-xs font-semibold">ERROR</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Database connection failed</span>
                  <span className="text-slate-500 text-xs">2024-07-26 14:30:22</span>
                </div>
                <div className="text-slate-500 text-sm mb-1">Service: Database | Source: db-server-01</div>
                <div className="text-xs font-mono bg-slate-100 p-2 rounded">Connection timeout after 30 seconds. Retrying connection to mysql://localhost:3306</div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-b border-slate-100 bg-yellow-50">
            <div className="flex gap-3 items-start">
              <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs font-semibold">WARN</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">High memory usage detected</span>
                  <span className="text-slate-500 text-xs">2024-07-26 14:29:15</span>
                </div>
                <div className="text-slate-500 text-sm mb-1">Service: System | Source: monitoring-agent</div>
                <div className="text-xs font-mono bg-slate-100 p-2 rounded">Memory usage: 89% (14.2GB/16GB). Consider optimizing application memory usage.</div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-b border-slate-100">
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-xs font-semibold">INFO</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">User authentication successful</span>
                  <span className="text-slate-500 text-xs">2024-07-26 14:28:45</span>
                </div>
                <div className="text-slate-500 text-sm mb-1">Service: Auth | Source: auth-service</div>
                <div className="text-xs font-mono bg-slate-100 p-2 rounded">User ID: 12345 | IP: 192.168.1.100 | Session: abc123def456</div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-b border-slate-100">
            <div className="flex gap-3 items-start">
              <span className="bg-slate-200 text-slate-700 rounded-md px-2 py-0.5 text-xs font-semibold">DEBUG</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">API request processed</span>
                  <span className="text-slate-500 text-xs">2024-07-26 14:28:30</span>
                </div>
                <div className="text-slate-500 text-sm mb-1">Service: API | Source: api-gateway</div>
                <div className="text-xs font-mono bg-slate-100 p-2 rounded">GET /api/users/12345 | Response: 200 | Duration: 45ms</div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-b border-slate-100">
            <div className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-600 rounded-md px-2 py-0.5 text-xs font-semibold">INFO</span>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold">Backup completed successfully</span>
                  <span className="text-slate-500 text-xs">2024-07-26 14:27:15</span>
                </div>
                <div className="text-slate-500 text-sm mb-1">Service: Backup | Source: backup-service</div>
                <div className="text-xs font-mono bg-slate-100 p-2 rounded">Database backup completed. Size: 2.4GB | Duration: 15m 30s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 