export default function SettingsPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Settings</h1>
      <div className="page-subtitle">System configuration and user preferences</div>
      
      {/* Settings Navigation */}
      <div className="card-grid">
        <div className="card card-item">
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>General</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Basic system settings</div>
        </div>
        <div className="card card-item">
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Security</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Security and access control</div>
        </div>
        <div className="card card-item">
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Notifications</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Alert and notification settings</div>
        </div>
      </div>

      {/* General Settings */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">General Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label className="form-label">System Name</label>
            <input 
              type="text" 
              defaultValue="Admin Dashboard"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Time Zone</label>
            <select className="form-input">
              <option>UTC (Coordinated Universal Time)</option>
              <option>EST (Eastern Standard Time)</option>
              <option>PST (Pacific Standard Time)</option>
              <option>GMT (Greenwich Mean Time)</option>
            </select>
          </div>
          <div>
            <label className="form-label">Date Format</label>
            <select className="form-input">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="form-label">Language</label>
            <select className="form-input">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Security Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label className="form-label">Session Timeout (minutes)</label>
            <input 
              type="number" 
              defaultValue="30"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Password Policy</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" defaultChecked />
                <span>Require uppercase letters</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" defaultChecked />
                <span>Require numbers</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" defaultChecked />
                <span>Require special characters</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" />
                <span>Require password change every 90 days</span>
              </label>
            </div>
          </div>
          <div>
            <label className="form-label">Two-Factor Authentication</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <label style={{ position: 'relative', display: 'inline-block', width: 50, height: 24 }}>
                <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, background: '#d1d5db', borderRadius: 24, transition: '0.4s' }}>
                  <span style={{ position: 'absolute', content: '', height: 18, width: 18, left: 3, bottom: 3, background: '#fff', borderRadius: '50%', transition: '0.4s' }}></span>
                </span>
              </label>
              <span style={{ color: '#64748b' }}>Enable 2FA for all users</span>
            </div>
          </div>
          <div>
            <label className="form-label">IP Whitelist</label>
            <textarea 
              placeholder="Enter IP addresses (one per line)"
              className="form-input"
              style={{ minHeight: 80 }}
            />
          </div>
        </div>
      </div>

      {/* User Management */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">User Management</h3>
        <table className="events-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="User">
                <div>
                  <div style={{ fontWeight: 600 }}>admin@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Administrator</div>
                </div>
              </td>
              <td data-label="Role">
                <span className="status-error">Admin</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Last Login">2024-07-26 14:30:22</td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td data-label="User">
                <div>
                  <div style={{ fontWeight: 600 }}>user@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Regular User</div>
                </div>
              </td>
              <td data-label="Role">
                <span className="status-info">User</span>
              </td>
              <td data-label="Status">
                <span className="status-success">Active</span>
              </td>
              <td data-label="Last Login">2024-07-26 13:45:10</td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td data-label="User">
                <div>
                  <div style={{ fontWeight: 600 }}>viewer@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Read Only</div>
                </div>
              </td>
              <td data-label="Role">
                <span style={{ background: '#f1f5f9', color: '#64748b', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Viewer</span>
              </td>
              <td data-label="Status">
                <span className="status-warning">Inactive</span>
              </td>
              <td data-label="Last Login">2024-07-25 09:20:15</td>
              <td data-label="Actions">
                <button className="table-action-btn">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* System Information */}
      <div className="card">
        <h3 className="section-title">System Information</h3>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div>
            <div className="metric-label">Version</div>
            <div style={{ fontWeight: 600 }}>1.2.3</div>
          </div>
          <div>
            <div className="metric-label">Build Date</div>
            <div style={{ fontWeight: 600 }}>2024-07-26</div>
          </div>
          <div>
            <div className="metric-label">Environment</div>
            <div style={{ fontWeight: 600 }}>Production</div>
          </div>
          <div>
            <div className="metric-label">Database</div>
            <div style={{ fontWeight: 600 }}>PostgreSQL 14.5</div>
          </div>
        </div>
      </div>
    </section>
  );
} 