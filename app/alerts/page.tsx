export default function AlertsPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Alerts</h1>
      <div className="page-subtitle">System alerts and notification management</div>
      
      {/* Alert Statistics */}
      <div className="card-grid">
        <div className="card card-item">
          <div className="metric-label">Active Alerts</div>
          <div className="metric-value text-error">7</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Critical Alerts</div>
          <div className="metric-value text-error">3</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Resolved Today</div>
          <div className="metric-value text-success">12</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Alert Rules</div>
          <div className="metric-value">24</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Quick Actions</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button className="table-action-btn" style={{ background: '#dc2626', padding: '8px 16px' }}>
            Acknowledge All
          </button>
          <button className="table-action-btn" style={{ background: '#2563eb', padding: '8px 16px' }}>
            Create Alert Rule
          </button>
          <button className="table-action-btn" style={{ background: '#16a34a', padding: '8px 16px' }}>
            Test Notification
          </button>
          <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', padding: '8px 16px' }}>
            Export Alerts
          </button>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Active Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ border: '1px solid #fecaca', borderRadius: 8, padding: 16, background: '#fef2f2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="log-level-error">CRITICAL</span>
                  <span style={{ fontWeight: 600 }}>Database Connection Failed</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Database server is not responding</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="table-action-btn">Acknowledge</button>
                <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:30:22 | Duration: 15m 30s</div>
          </div>

          <div style={{ border: '1px solid #fef3c7', borderRadius: 8, padding: 16, background: '#fef9c3' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="log-level-warning">WARNING</span>
                  <span style={{ fontWeight: 600 }}>High Memory Usage</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Memory usage exceeds 85% threshold</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="table-action-btn">Acknowledge</button>
                <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:25:15 | Duration: 10m 45s</div>
          </div>

          <div style={{ border: '1px solid #fecaca', borderRadius: 8, padding: 16, background: '#fef2f2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span className="log-level-error">CRITICAL</span>
                  <span style={{ fontWeight: 600 }}>Security Breach Detected</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Multiple failed login attempts detected</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="table-action-btn">Acknowledge</button>
                <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:20:08 | Duration: 5m 22s</div>
          </div>
        </div>
      </div>

      {/* Alert Rules */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Alert Rules</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>Rule Name</th>
              <th>Condition</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Rule Name">High CPU Usage</td>
              <td data-label="Condition">CPU &gt; 80% for 5 minutes</td>
              <td data-label="Severity">
                <span className="status-warning">Warning</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td data-label="Rule Name">Database Connection</td>
              <td data-label="Condition">DB connection failed</td>
              <td data-label="Severity">
                <span className="status-error">Critical</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td data-label="Rule Name">Memory Usage</td>
              <td data-label="Condition">Memory &gt; 85% for 3 minutes</td>
              <td data-label="Severity">
                <span className="status-warning">Warning</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td data-label="Rule Name">Security Alerts</td>
              <td data-label="Condition">Failed login &gt; 5 attempts</td>
              <td data-label="Severity">
                <span className="status-error">Critical</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <h3 className="section-title">Notification Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Email Notifications</div>
              <div style={{ color: '#64748b', fontSize: 14 }}>Send alerts via email</div>
            </div>
            <label style={{ position: 'relative', display: 'inline-block', width: 50, height: 24 }}>
              <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, background: '#16a34a', borderRadius: 24, transition: '0.4s' }}>
                <span style={{ position: 'absolute', content: '', height: 18, width: 18, left: 3, bottom: 3, background: '#fff', borderRadius: '50%', transition: '0.4s', transform: 'translateX(26px)' }}></span>
              </span>
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
            <div>
              <div style={{ fontWeight: 600 }}>SMS Notifications</div>
              <div style={{ color: '#64748b', fontSize: 14 }}>Send critical alerts via SMS</div>
            </div>
            <label style={{ position: 'relative', display: 'inline-block', width: 50, height: 24 }}>
              <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, background: '#d1d5db', borderRadius: 24, transition: '0.4s' }}>
                <span style={{ position: 'absolute', content: '', height: 18, width: 18, left: 3, bottom: 3, background: '#fff', borderRadius: '50%', transition: '0.4s' }}></span>
              </span>
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Slack Notifications</div>
              <div style={{ color: '#64748b', fontSize: 14 }}>Send alerts to Slack channel</div>
            </div>
            <label style={{ position: 'relative', display: 'inline-block', width: 50, height: 24 }}>
              <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, background: '#16a34a', borderRadius: 24, transition: '0.4s' }}>
                <span style={{ position: 'absolute', content: '', height: 18, width: 18, left: 3, bottom: 3, background: '#fff', borderRadius: '50%', transition: '0.4s', transform: 'translateX(26px)' }}></span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
} 