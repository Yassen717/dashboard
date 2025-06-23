export default function MetricsPage() {
  return (
    <section className="flex-1 px-4 md:px-8 lg:px-12">
      <h1 className="text-[clamp(24px,5vw,32px)] font-bold mb-2">Metrics</h1>
      <div className="text-slate-500 mb-6 text-[clamp(14px,3vw,16px)]">System performance metrics and analytics</div>
      
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Response Time</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-green-600">245ms</div>
          <div className="text-green-600 mb-4 text-[clamp(12px,3vw,14px)]">↓ 12% from last week</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">CPU Usage</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-yellow-700">67%</div>
          <div className="text-yellow-700 mb-4 text-[clamp(12px,3vw,14px)]">↑ 8% from last hour</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Memory Usage</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-red-600">89%</div>
          <div className="text-red-600 mb-4 text-[clamp(12px,3vw,14px)]">↑ 15% from last hour</div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Disk Usage</div>
          <div className="text-[clamp(20px,5vw,28px)] font-bold text-green-600">45%</div>
          <div className="text-green-600 mb-4 text-[clamp(12px,3vw,14px)]">↓ 3% from last week</div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,4vw,24px)] mb-6">
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Response Time Trend</h3>
          <div className="h-[200px] flex items-center justify-center text-slate-500 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">📈</div>
              <div>Response Time Chart</div>
              <div className="text-xs mt-1">Last 24 hours</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-[clamp(16px,4vw,24px)] shadow-sm min-w-0">
          <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">System Load</h3>
          <div className="h-[200px] flex items-center justify-center text-slate-500 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-300">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">⚡</div>
              <div>System Load Chart</div>
              <div className="text-xs mt-1">CPU & Memory</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Detailed Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Metric</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Current</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Average</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Peak</th>
                <th className="text-left px-3 py-2 text-[clamp(12px,3vw,15px)]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2" data-label="Metric">Database Connections</td>
                <td className="px-3 py-2" data-label="Current">45</td>
                <td className="px-3 py-2" data-label="Average">38</td>
                <td className="px-3 py-2" data-label="Peak">67</td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Normal</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Metric">Active Sessions</td>
                <td className="px-3 py-2" data-label="Current">1,234</td>
                <td className="px-3 py-2" data-label="Average">1,156</td>
                <td className="px-3 py-2" data-label="Peak">1,567</td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Normal</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Metric">Network I/O</td>
                <td className="px-3 py-2" data-label="Current">125 MB/s</td>
                <td className="px-3 py-2" data-label="Average">98 MB/s</td>
                <td className="px-3 py-2" data-label="Peak">234 MB/s</td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">High</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Metric">Disk I/O</td>
                <td className="px-3 py-2" data-label="Current">67 MB/s</td>
                <td className="px-3 py-2" data-label="Average">45 MB/s</td>
                <td className="px-3 py-2" data-label="Peak">89 MB/s</td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-green-100 text-green-600 rounded-md px-2 py-0.5 text-xs">Normal</span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2" data-label="Metric">Error Rate</td>
                <td className="px-3 py-2" data-label="Current">0.12%</td>
                <td className="px-3 py-2" data-label="Average">0.08%</td>
                <td className="px-3 py-2" data-label="Peak">0.45%</td>
                <td className="px-3 py-2" data-label="Status">
                  <span className="bg-yellow-100 text-yellow-700 rounded-md px-2 py-0.5 text-xs">Elevated</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-time Monitoring */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-[clamp(18px,4vw,20px)] font-semibold mb-4">Real-time Monitoring</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Server Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              <span>All servers online</span>
            </div>
          </div>
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Last Update</div>
            <div>2024-07-26 14:35:22</div>
          </div>
          <div>
            <div className="text-slate-500 mb-2 text-[clamp(12px,3vw,14px)]">Monitoring Interval</div>
            <div>30 seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
} 