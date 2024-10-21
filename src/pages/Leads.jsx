
import React, { useState } from 'react';

const leadsData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
];

function Leads() {
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <div className="leads">
      <h1>Leads</h1>
      <ul>
        {leadsData.map((lead) => (
          <li key={lead.id} onClick={() => setSelectedLead(lead)}>
            {lead.name} - {lead.status}
          </li>
        ))}
      </ul>
      {selectedLead && (
        <div className="lead-details">
          <h2>{selectedLead.name}</h2>
          <p>{selectedLead.email}</p>
          <p>Status: {selectedLead.status}</p>
        </div>
      )}
    </div>
  );
}

export default Leads;
