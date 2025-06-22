export default function LogsPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Logs</h1>
      <div className="page-subtitle">System logs and debugging information</div>
      
      {/* Log Statistics */}
      <div className="card-grid">
        <div className="card card-item">
          <div className="metric-label">Total Logs</div>
          <div className="metric-value">45,678</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Error Logs</div>
          <div className="metric-value text-error">234</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Warning Logs</div>
          <div className="metric-value" style={{ color: '#ca8a04' }}>1,567</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Log Size</div>
          <div className="metric-value">2.4 GB</div>
        </div>
      </div>

      {/* Log Search and Filters */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Search & Filters</h3>
        <div className="form-controls">
          <input 
            type="text" 
            placeholder="Search logs..."
            style={{ flex: 1, minWidth: 200 }}
          />
          <select>
            <option>All Levels</option>
            <option>Error</option>
            <option>Warning</option>
            <option>Info</option>
            <option>Debug</option>
          </select>
          <select>
            <option>All Services</option>
            <option>Web Server</option>
            <option>Database</option>
            <option>Application</option>
            <option>Security</option>
          </select>
          <input 
            type="date" 
            defaultValue="2024-07-26"
          />
          <button>Search</button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }}>
          <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>
            Export Logs
          </button>
          <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>
            Clear Old Logs
          </button>
          <button className="table-action-btn" style={{ background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db' }}>
            Download
          </button>
        </div>
      </div>

      {/* Log Entries */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: 16, borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Recent Log Entries</span>
            <span style={{ color: '#64748b', fontSize: 14 }}>Showing 50 of 45,678 entries</span>
          </div>
        </div>
        <div style={{ maxHeight: 600, overflowY: 'auto' }}>
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9', background: '#fef2f2' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className="log-level-error">ERROR</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>Database connection failed</span>
                  <span style={{ color: '#64748b', fontSize: 12 }}>2024-07-26 14:30:22</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Service: Database | Source: db-server-01</div>
                <div style={{ fontSize: 13, fontFamily: 'monospace', background: '#f1f5f9', padding: 8, borderRadius: 4 }}>
                  Connection timeout after 30 seconds. Retrying connection to mysql://localhost:3306
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9', background: '#fef9c3' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className="log-level-warning">WARN</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>High memory usage detected</span>
                  <span style={{ color: '#64748b', fontSize: 12 }}>2024-07-26 14:29:15</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Service: System | Source: monitoring-agent</div>
                <div style={{ fontSize: 13, fontFamily: 'monospace', background: '#f1f5f9', padding: 8, borderRadius: 4 }}>
                  Memory usage: 89% (14.2GB/16GB). Consider optimizing application memory usage.
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className="log-level-info">INFO</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>User authentication successful</span>
                  <span style={{ color: '#64748b', fontSize: 12 }}>2024-07-26 14:28:45</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Service: Auth | Source: auth-service</div>
                <div style={{ fontSize: 13, fontFamily: 'monospace', background: '#f1f5f9', padding: 8, borderRadius: 4 }}>
                  User ID: 12345 | IP: 192.168.1.100 | Session: abc123def456
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className="log-level-debug">DEBUG</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>API request processed</span>
                  <span style={{ color: '#64748b', fontSize: 12 }}>2024-07-26 14:28:30</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Service: API | Source: api-gateway</div>
                <div style={{ fontSize: 13, fontFamily: 'monospace', background: '#f1f5f9', padding: 8, borderRadius: 4 }}>
                  GET /api/users/12345 | Response: 200 | Duration: 45ms
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span className="log-level-info">INFO</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontWeight: 600 }}>Backup completed successfully</span>
                  <span style={{ color: '#64748b', fontSize: 12 }}>2024-07-26 14:27:15</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Service: Backup | Source: backup-service</div>
                <div style={{ fontSize: 13, fontFamily: 'monospace', background: '#f1f5f9', padding: 8, borderRadius: 4 }}>
                  Database backup completed. Size: 2.4GB | Duration: 15m 30s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 