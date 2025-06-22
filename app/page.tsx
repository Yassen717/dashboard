import Image from "next/image";

export default function OverviewPage() {
  return (
    <section className="page-section">
      <h1 className="page-title">Overview</h1>
      <div className="page-subtitle">Monitor system activities and manage applications</div>
      
      {/* Cards */}
      <div className="card-grid">
        <div className="card card-item">
          <div className="metric-label">Total Applications</div>
          <div className="metric-value">25</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">Active Users</div>
          <div className="metric-value">1,500</div>
        </div>
        <div className="card card-item">
          <div className="metric-label">System Uptime</div>
          <div className="metric-value">99.9%</div>
        </div>
      </div>
      
      {/* Real-time Metrics */}
      <div className="metrics-section">
        <h2 className="section-title">Real-time Metrics</h2>
        <div className="card-grid">
          <div className="card card-item">
            <div className="metric-label">Application Performance</div>
            <div className="metric-value text-success">+15%</div>
            <div className="text-success metric-change">Last 7 Days +15%</div>
            {/* Placeholder for line chart */}
            <div className="chart-placeholder" />
          </div>
          <div className="card card-item">
            <div className="metric-label">User Engagement</div>
            <div className="metric-value text-error">-5%</div>
            <div className="text-error metric-change">Last 30 Days -5%</div>
            {/* Placeholder for bar chart */}
            <div className="chart-placeholder" />
          </div>
        </div>
      </div>
      
      {/* Recent Events */}
      <div className="events-section">
        <h2 className="section-title">Recent Events</h2>
        <table className="events-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Event">Application Launched</td>
              <td data-label="Timestamp">2024-07-26 10:00 AM</td>
              <td data-label="Status"><span className="status-success">Success</span></td>
              <td data-label="Details"><a href="#">View</a></td>
            </tr>
            <tr>
              <td data-label="Event">User Login</td>
              <td data-label="Timestamp">2024-07-26 10:15 AM</td>
              <td data-label="Status"><span className="status-success">Success</span></td>
              <td data-label="Details"><a href="#">View</a></td>
            </tr>
            <tr>
              <td data-label="Event">Data Update</td>
              <td data-label="Timestamp">2024-07-26 10:30 AM</td>
              <td data-label="Status"><span className="status-success">Success</span></td>
              <td data-label="Details"><a href="#">View</a></td>
            </tr>
            <tr>
              <td data-label="Event">System Alert</td>
              <td data-label="Timestamp">2024-07-26 10:45 AM</td>
              <td data-label="Status"><span className="status-warning">Warning</span></td>
              <td data-label="Details"><a href="#">View</a></td>
            </tr>
            <tr>
              <td data-label="Event">Application Shutdown</td>
              <td data-label="Timestamp">2024-07-26 11:00 AM</td>
              <td data-label="Status"><span className="status-success">Success</span></td>
              <td data-label="Details"><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
