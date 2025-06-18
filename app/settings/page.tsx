export default function SettingsPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Settings</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>System configuration and user preferences</div>
      
      {/* Settings Navigation */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>General</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Basic system settings</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Security</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Security and access control</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Notifications</div>
          <div style={{ color: '#64748b', fontSize: 14 }}>Alert and notification settings</div>
        </div>
      </div>

      {/* General Settings */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>General Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>System Name</label>
            <input 
              type="text" 
              defaultValue="Admin Dashboard"
              style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Time Zone</label>
            <select style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
              <option>UTC (Coordinated Universal Time)</option>
              <option>EST (Eastern Standard Time)</option>
              <option>PST (Pacific Standard Time)</option>
              <option>GMT (Greenwich Mean Time)</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Date Format</label>
            <select style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Language</label>
            <select style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Security Settings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Session Timeout (minutes)</label>
            <input 
              type="number" 
              defaultValue="30"
              style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Password Policy</label>
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
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Two-Factor Authentication</label>
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
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>IP Whitelist</label>
            <textarea 
              placeholder="Enter IP addresses (one per line)"
              style={{ width: '100%', padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', minHeight: 80 }}
            />
          </div>
        </div>
      </div>

      {/* User Management */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>User Management</h3>
        <table style={{ width: '100%' }}>
          <thead style={{ background: '#f1f5f9' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 12 }}>User</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Role</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Last Login</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>
                <div>
                  <div style={{ fontWeight: 600 }}>admin@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Administrator</div>
                </div>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef2f2', color: '#dc2626', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Admin</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>2024-07-26 14:30:22</td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={{ padding: 12 }}>
                <div>
                  <div style={{ fontWeight: 600 }}>user@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Regular User</div>
                </div>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#f0f9ff', color: '#0284c7', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>User</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#dcfce7', color: '#16a34a', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Active</span>
              </td>
              <td style={{ padding: 12 }}>2024-07-26 13:45:10</td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: 12 }}>
                <div>
                  <div style={{ fontWeight: 600 }}>viewer@example.com</div>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Read Only</div>
                </div>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#f1f5f9', color: '#64748b', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Viewer</span>
              </td>
              <td style={{ padding: 12 }}>
                <span style={{ background: '#fef9c3', color: '#ca8a04', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>Inactive</span>
              </td>
              <td style={{ padding: 12 }}>2024-07-25 09:20:15</td>
              <td style={{ padding: 12 }}>
                <button style={{ padding: '4px 8px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12 }}>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* System Information */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>System Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          <div>
            <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Version</div>
            <div style={{ fontWeight: 600 }}>1.2.3</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Build Date</div>
            <div style={{ fontWeight: 600 }}>2024-07-15</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Database</div>
            <div style={{ fontWeight: 600 }}>PostgreSQL 14.5</div>
          </div>
          <div>
            <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Server</div>
            <div style={{ fontWeight: 600 }}>Ubuntu 22.04 LTS</div>
          </div>
        </div>
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Check for Updates
          </button>
        </div>
      </div>
    </section>
  );
} 