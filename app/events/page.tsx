export default function EventsPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Events</h1>
      <div className="page-subtitle">Monitor and manage system events and activities</div>
      
      {/* Event Statistics */}
      <div className="card-grid">
        <div className="card card-item">
          <div className="metric-label">Total Events</div>
          <div className="metric-value">1,247</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Critical Events</div>
          <div className="metric-value text-error">23</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Resolved</div>
          <div className="metric-value text-success">1,189</div>
        </div>
      </div>

      {/* Event Filters */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 className="section-title">Filters</h3>
        <div className="form-controls">
          <select>
            <option>All Severity</option>
            <option>Critical</option>
            <option>Warning</option>
            <option>Info</option>
          </select>
          <select>
            <option>All Categories</option>
            <option>System</option>
            <option>Security</option>
            <option>Performance</option>
            <option>User Activity</option>
          </select>
          <input 
            type="date" 
            defaultValue="2024-07-26"
          />
          <button>Apply Filters</button>
        </div>
      </div>

      {/* Events Table */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="events-table">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Type</th>
              <th>Severity</th>
              <th>Timestamp</th>
              <th>Source</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Event ID">#EVT-001</td>
              <td data-label="Event Type">Database Connection Failed</td>
              <td data-label="Severity">
                <span className="status-error">Critical</span>
              </td>
              <td data-label="Timestamp">2024-07-26 14:30:22</td>
              <td data-label="Source">Database Server</td>
              <td data-label="Status">
                <span className="status-warning">Investigating</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">View</button>
              </td>
            </tr>
            <tr>
              <td data-label="Event ID">#EVT-002</td>
              <td data-label="Event Type">User Login Attempt</td>
              <td data-label="Severity">
                <span className="status-info">Info</span>
              </td>
              <td data-label="Timestamp">2024-07-26 14:25:15</td>
              <td data-label="Source">Auth Service</td>
              <td data-label="Status">
                <span className="status-success">Resolved</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">View</button>
              </td>
            </tr>
            <tr>
              <td data-label="Event ID">#EVT-003</td>
              <td data-label="Event Type">High CPU Usage</td>
              <td data-label="Severity">
                <span className="status-warning-alt">Warning</span>
              </td>
              <td data-label="Timestamp">2024-07-26 14:20:08</td>
              <td data-label="Source">Server-01</td>
              <td data-label="Status">
                <span className="status-success">Resolved</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">View</button>
              </td>
            </tr>
            <tr>
              <td data-label="Event ID">#EVT-004</td>
              <td data-label="Event Type">Security Alert</td>
              <td data-label="Severity">
                <span className="status-error">Critical</span>
              </td>
              <td data-label="Timestamp">2024-07-26 14:15:42</td>
              <td data-label="Source">Firewall</td>
              <td data-label="Status">
                <span className="status-warning">Investigating</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">View</button>
              </td>
            </tr>
            <tr>
              <td data-label="Event ID">#EVT-005</td>
              <td data-label="Event Type">Backup Completed</td>
              <td data-label="Severity">
                <span className="status-info">Info</span>
              </td>
              <td data-label="Timestamp">2024-07-26 14:10:30</td>
              <td data-label="Source">Backup Service</td>
              <td data-label="Status">
                <span className="status-success">Resolved</span>
              </td>
              <td data-label="Actions">
                <button className="table-action-btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
} 