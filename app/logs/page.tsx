export default function LogsPage() {
  return (
    <section style={{ flex: 1, padding: '0 2rem' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Logs</h1>
      <div style={{ color: '#64748b', marginBottom: 32 }}>System logs and debugging information</div>
      
      {/* Log Statistics */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Total Logs</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>45,678</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Error Logs</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#dc2626' }}>234</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Warning Logs</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#ca8a04' }}>1,567</div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, flex: 1, boxShadow: '0 1px 3px #0001' }}>
          <div style={{ color: '#64748b', marginBottom: 8 }}>Log Size</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>2.4 GB</div>
        </div>
      </div>

      {/* Log Search and Filters */}
      <div style={{ background: '#fff', borderRadius: 12, padding: 24, marginBottom: 32, boxShadow: '0 1px 3px #0001' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Search & Filters</h3>
        <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search logs..."
            style={{ flex: 1, minWidth: 200, padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
          />
          <select style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
            <option>All Levels</option>
            <option>Error</option>
            <option>Warning</option>
            <option>Info</option>
            <option>Debug</option>
          </select>
          <select style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}>
            <option>All Services</option>
            <option>Web Server</option>
            <option>Database</option>
            <option>Application</option>
            <option>Security</option>
          </select>
          <input 
            type="date" 
            style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
            defaultValue="2024-07-26"
          />
          <button style={{ padding: '8px 16px', borderRadius: 6, background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Search
          </button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button style={{ padding: '4px 12px', borderRadius: 6, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>
            Export Logs
          </button>
          <button style={{ padding: '4px 12px', borderRadius: 6, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>
            Clear Old Logs
          </button>
          <button style={{ padding: '4px 12px', borderRadius: 6, background: '#f1f5f9', color: '#64748b', border: '1px solid #d1d5db', cursor: 'pointer', fontSize: 12 }}>
            Download
          </button>
        </div>
      </div>

      {/* Log Entries */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px #0001', overflow: 'hidden' }}>
        <div style={{ padding: 16, borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Recent Log Entries</span>
            <span style={{ color: '#64748b', fontSize: 14 }}>Showing 50 of 45,678 entries</span>
          </div>
        </div>
        <div style={{ maxHeight: 600, overflowY: 'auto' }}>
          <div style={{ padding: 12, borderBottom: '1px solid #f1f5f9', background: '#fef2f2' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>ERROR</span>
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
              <span style={{ background: '#ca8a04', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>WARN</span>
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
              <span style={{ background: '#0284c7', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>INFO</span>
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
              <span style={{ background: '#16a34a', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>DEBUG</span>
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
              <span style={{ background: '#0284c7', color: '#fff', padding: '2px 6px', borderRadius: 4, fontSize: 11, fontWeight: 600 }}>INFO</span>
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