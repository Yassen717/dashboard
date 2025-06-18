export default function MetricsPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Metrics</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>System performance metrics and analytics</div>
      
      {/* Key Performance Indicators */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Response Time</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#16a34a' }}>245ms</div>
          <div style={{ color: '#16a34a', fontSize: 14 }}>↓ 12% from last week</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>CPU Usage</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#ca8a04' }}>67%</div>
          <div style={{ color: '#ca8a04', fontSize: 14 }}>↑ 8% from last hour</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Memory Usage</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>89%</div>
          <div style={{ color: '#dc2626', fontSize: 14 }}>↑ 15% from last hour</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Disk Usage</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#16a34a' }}>45%</div>
          <div style={{ color: '#16a34a', fontSize: 14 }}>↓ 3% from last week</div>
        </div>
      </div>

      {/* Performance Charts */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Response Time Trend</h3>
          <div style={{ height: 200, background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>📈</div>
              <div>Response Time Chart</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Last 24 hours</div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>System Load</h3>
          <div style={{ height: 200, background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>⚡</div>
              <div>System Load Chart</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>CPU & Memory</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Detailed Metrics</h3>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f1f5f9' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 12 }}>Metric</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Current</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Average</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Peak</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Database Connections</td>
              <td style={{ padding: 12 }}>45</td>
              <td style={{ padding: 12 }}>38</td>
              <td style={{ padding: 12 }}>67</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Normal</span>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Active Sessions</td>
              <td style={{ padding: 12 }}>1,234</td>
              <td style={{ padding: 12 }}>1,156</td>
              <td style={{ padding: 12 }}>1,567</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Normal</span>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Network I/O</td>
              <td style={{ padding: 12 }}>125 MB/s</td>
              <td style={{ padding: 12 }}>98 MB/s</td>
              <td style={{ padding: 12 }}>234 MB/s</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>High</span>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Disk I/O</td>
              <td style={{ padding: 12 }}>67 MB/s</td>
              <td style={{ padding: 12 }}>45 MB/s</td>
              <td style={{ padding: 12 }}>89 MB/s</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Normal</span>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Error Rate</td>
              <td style={{ padding: 12 }}>0.12%</td>
              <td style={{ padding: 12 }}>0.08%</td>
              <td style={{ padding: 12 }}>0.45%</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Elevated</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Real-time Monitoring */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Real-time Monitoring</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#64748b', marginBottom: 8 }}>Server Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#16a34a' }}></div>
              <span>All servers online</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#64748b', marginBottom: 8 }}>Last Update</div>
            <div>2024-07-26 14:35:22</div>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#64748b', marginBottom: 8 }}>Monitoring Interval</div>
            <div>30 seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
} 