import Image from "next/image";

export default function OverviewPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Overview</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>Monitor system activities and manage applications</div>
      {/* Cards */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Total Applications</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>25</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Active Users</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>1,500</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>System Uptime</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>99.9%</div>
        </div>
      </div>
      {/* Real-time Metrics */}
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Real-time Metrics</h2>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
            <div style={{ color: '#64748b', marginBottom: 8 }}>Application Performance</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#16a34a' }}>+15%</div>
            <div style={{ color: '#16a34a', marginBottom: 16 }}>Last 7 Days +15%</div>
            {/* Placeholder for line chart */}
            <div style={{ height: 80, background: '#f1f5f9', borderRadius: 8 }} />
          </div>
          <div style={{ flex: 1, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
            <div style={{ color: '#64748b', marginBottom: 8 }}>User Engagement</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#dc2626' }}>-5%</div>
            <div style={{ color: '#dc2626', marginBottom: 16 }}>Last 30 Days -5%</div>
            {/* Placeholder for bar chart */}
            <div style={{ height: 80, background: '#f1f5f9', borderRadius: 8 }} />
          </div>
        </div>
      </div>
      {/* Recent Events */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Recent Events</h2>
        <table style={{ width: '100%', background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px #0001', overflow: 'hidden' }}>
          <thead style={{ background: '#f1f5f9' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 12 }}>Event</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Timestamp</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 12 }}>Application Launched</td>
              <td style={{ padding: 12 }}>2024-07-26 10:00 AM</td>
              <td style={{ padding: 12 }}><span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px' }}>Success</span></td>
              <td style={{ padding: 12 }}><a href="#">View</a></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>User Login</td>
              <td style={{ padding: 12 }}>2024-07-26 10:15 AM</td>
              <td style={{ padding: 12 }}><span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px' }}>Success</span></td>
              <td style={{ padding: 12 }}><a href="#">View</a></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Data Update</td>
              <td style={{ padding: 12 }}>2024-07-26 10:30 AM</td>
              <td style={{ padding: 12 }}><span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px' }}>Success</span></td>
              <td style={{ padding: 12 }}><a href="#">View</a></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>System Alert</td>
              <td style={{ padding: 12 }}>2024-07-26 10:45 AM</td>
              <td style={{ padding: 12 }}><span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px' }}>Warning</span></td>
              <td style={{ padding: 12 }}><a href="#">View</a></td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Application Shutdown</td>
              <td style={{ padding: 12 }}>2024-07-26 11:00 AM</td>
              <td style={{ padding: 12 }}><span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px' }}>Success</span></td>
              <td style={{ padding: 12 }}><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
