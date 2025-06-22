export default function MetricsPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Metrics</h1>
      <div className="page-subtitle">System performance metrics and analytics</div>
      
      {/* Key Performance Indicators */}
      <div className="card-grid">
        <div className="card card-item">
          <div className="metric-label">Response Time</div>
          <div className="metric-value text-success">245ms</div>
          <div className="text-success metric-change">↓ 12% from last week</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">CPU Usage</div>
          <div className="metric-value" style={{ color: '#ca8a04' }}>67%</div>
          <div className="metric-change" style={{ color: '#ca8a04' }}>↑ 8% from last hour</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Memory Usage</div>
          <div className="metric-value text-error">89%</div>
          <div className="text-error metric-change">↑ 15% from last hour</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Disk Usage</div>
          <div className="metric-value text-success">45%</div>
          <div className="text-success metric-change">↓ 3% from last week</div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="card-grid">
        <div className="card card-item">
          <h3 className="section-title">Response Time Trend</h3>
          <div className="chart-placeholder" style={{ height: 200, background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>📈</div>
              <div>Response Time Chart</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Last 24 hours</div>
            </div>
          </div>
        </div>
        <div className="card card-item">
          <h3 className="section-title">System Load</h3>
          <div className="chart-placeholder" style={{ height: 200, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>⚡</div>
              <div>System Load Chart</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>CPU & Memory</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Detailed Metrics</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Current</th>
              <th>Average</th>
              <th>Peak</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Metric">Database Connections</td>
              <td data-label="Current">45</td>
              <td data-label="Average">38</td>
              <td data-label="Peak">67</td>
              <td data-label="Status">
                <span className="status-success">Normal</span>
              </td>
            </tr>
            <tr>
              <td data-label="Metric">Active Sessions</td>
              <td data-label="Current">1,234</td>
              <td data-label="Average">1,156</td>
              <td data-label="Peak">1,567</td>
              <td data-label="Status">
                <span className="status-success">Normal</span>
              </td>
            </tr>
            <tr>
              <td data-label="Metric">Network I/O</td>
              <td data-label="Current">125 MB/s</td>
              <td data-label="Average">98 MB/s</td>
              <td data-label="Peak">234 MB/s</td>
              <td data-label="Status">
                <span className="status-warning">High</span>
              </td>
            </tr>
            <tr>
              <td data-label="Metric">Disk I/O</td>
              <td data-label="Current">67 MB/s</td>
              <td data-label="Average">45 MB/s</td>
              <td data-label="Peak">89 MB/s</td>
              <td data-label="Status">
                <span className="status-success">Normal</span>
              </td>
            </tr>
            <tr>
              <td data-label="Metric">Error Rate</td>
              <td data-label="Current">0.12%</td>
              <td data-label="Average">0.08%</td>
              <td data-label="Peak">0.45%</td>
              <td data-label="Status">
                <span className="status-warning">Elevated</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-time Monitoring */}
      <div className="card">
        <h3 className="section-title">Real-time Monitoring</h3>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div>
            <div className="metric-label">Server Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a' }}></div>
              <span>All servers online</span>
            </div>
          </div>
          <div>
            <div className="metric-label">Last Update</div>
            <div>2024-07-26 14:35:22</div>
          </div>
          <div>
            <div className="metric-label">Monitoring Interval</div>
            <div>30 seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
} 