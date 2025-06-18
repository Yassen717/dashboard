export default function EventsPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Events</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>Monitor and manage system events and activities</div>
      
      {/* Event Statistics */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Total Events</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>1,247</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Critical Events</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>23</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Resolved</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#16a34a' }}>1,189</div>
        </div>
      </div>

      {/* Event Filters */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Filters</h3>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <select style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
            <option>All Severity</option>
            <option>Critical</option>
            <option>Warning</option>
            <option>Info</option>
          </select>
          <select style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
            <option>All Categories</option>
            <option>System</option>
            <option>Security</option>
            <option>Performance</option>
            <option>User Activity</option>
          </select>
          <input 
            type="date" 
            style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
            defaultValue="2024-07-26"
          />
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Apply Filters
          </button>
        </div>
      </div>

      {/* Events Table */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px #0001', overflow: 'hidden' }}>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f1f5f9' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 16 }}>Event ID</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Event Type</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Severity</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Timestamp</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Source</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 16 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 16 }}>#EVT-001</td>
              <td style={{ padding: 16 }}>Database Connection Failed</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#fef2f2', color: '#dc2626', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Critical</span>
              </td>
              <td style={{ padding: 16 }}>2024-07-26 14:30:22</td>
              <td style={{ padding: 16 }}>Database Server</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Investigating</span>
              </td>
              <td style={{ padding: 16 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>View</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 16 }}>#EVT-002</td>
              <td style={{ padding: 16 }}>User Login Attempt</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#f0f9ff', color: '#0284c7', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Info</span>
              </td>
              <td style={{ padding: 16 }}>2024-07-26 14:25:15</td>
              <td style={{ padding: 16 }}>Auth Service</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Resolved</span>
              </td>
              <td style={{ padding: 16 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>View</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 16 }}>#EVT-003</td>
              <td style={{ padding: 16 }}>High CPU Usage</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#fef3c7', color: '#d97706', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Warning</span>
              </td>
              <td style={{ padding: 16 }}>2024-07-26 14:20:08</td>
              <td style={{ padding: 16 }}>Server-01</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Resolved</span>
              </td>
              <td style={{ padding: 16 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>View</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 16 }}>#EVT-004</td>
              <td style={{ padding: 16 }}>Security Alert</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#fef2f2', color: '#dc2626', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Critical</span>
              </td>
              <td style={{ padding: 16 }}>2024-07-26 14:15:42</td>
              <td style={{ padding: 16 }}>Firewall</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Investigating</span>
              </td>
              <td style={{ padding: 16 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>View</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 16 }}>#EVT-005</td>
              <td style={{ padding: 16 }}>Backup Completed</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#f0f9ff', color: '#0284c7', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Info</span>
              </td>
              <td style={{ padding: 16 }}>2024-07-26 14:10:30</td>
              <td style={{ padding: 16 }}>Backup Service</td>
              <td style={{ padding: 16 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '4px 8px', fontSize: 12 }}>Resolved</span>
              </td>
              <td style={{ padding: 16 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
} 