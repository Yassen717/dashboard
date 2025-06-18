export default function AlertsPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Alerts</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>System alerts and notification management</div>
      
      {/* Alert Statistics */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Active Alerts</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>7</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Critical Alerts</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>3</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Resolved Today</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#16a34a' }}>12</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Alert Rules</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>24</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#dc2626', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Acknowledge All
          </button>
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Create Alert Rule
          </button>
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#16a34a', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Test Notification
          </button>
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer' }}>
            Export Alerts
          </button>
        </div>
      </div>

      {/* Active Alerts */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Active Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ border: '1px solid #fecaca', borderRadius: 8, padding: 16, background: '#fef2f2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>CRITICAL</span>
                  <span style={{ fontWeight: 600 }}>Database Connection Failed</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Database server is not responding</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Acknowledge</button>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:30:22 | Duration: 15m 30s</div>
          </div>

          <div style={{ border: '1px solid #fef3c7', borderRadius: 8, padding: 16, background: '#fef9c3' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ background: '#ca8a04', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>WARNING</span>
                  <span style={{ fontWeight: 600 }}>High Memory Usage</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Memory usage exceeds 85% threshold</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Acknowledge</button>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:25:15 | Duration: 10m 45s</div>
          </div>

          <div style={{ border: '1px solid #fecaca', borderRadius: 8, padding: 16, background: '#fef2f2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>CRITICAL</span>
                  <span style={{ fontWeight: 600 }}>Security Breach Detected</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14 }}>Multiple failed login attempts detected</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Acknowledge</button>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>View</button>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Triggered: 2024-07-26 14:20:08 | Duration: 5m 22s</div>
          </div>
        </div>
      </div>

      {/* Alert Rules */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Alert Rules</h3>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f1f5f9' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 12 }}>Rule Name</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Condition</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Severity</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>High CPU Usage</td>
              <td style={{ padding: 12 }}>CPU &gt; 80% for 5 minutes</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Warning</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Database Connection</td>
              <td style={{ padding: 12 }}>DB connection failed</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef2f2', color: '#dc2626', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Critical</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>Memory Usage</td>
              <td style={{ padding: 12 }}>Memory &gt; 85% for 3 minutes</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Warning</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>Security Alerts</td>
              <td style={{ padding: 12 }}>Failed login &gt; 5 attempts</td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef2f2', color: '#dc2626', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Critical</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notification Settings */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Notification Settings</h3>
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
              <div style={{ fontWeight: 600 }}>Slack Integration</div>
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