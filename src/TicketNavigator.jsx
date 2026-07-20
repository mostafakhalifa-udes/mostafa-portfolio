import React from 'react';
import { ArrowRight, Ticket } from 'lucide-react';
import './TicketNavigator.css';

const ALL_TICKETS = [
  { id: 'semantic', ticketId: 'INS-AI-204', title: 'Semantic Drivers v2' },
  { id: 'alerting', ticketId: 'INS-842', title: 'Alerting System v1.1' },
  { id: 'genai', ticketId: 'INS-REP-01', title: 'Gen AI Reporting' },
  { id: 'designsystem', ticketId: 'INS-DS-1.0', title: 'AIM Design System' },
  { id: 'pharmacy-erp', ticketId: 'PHARM-01', title: 'Pharmacy ERP SaaS' },
];

export default function TicketNavigator({ currentViewId, onNavigate }) {
  const otherTickets = ALL_TICKETS.filter(t => t.id !== currentViewId);

  return (
    <div className="ticket-navigator">
      <h3 className="navigator-title">
        <Ticket size={16} /> Related Tickets
      </h3>
      <div className="navigator-gallery">
        {otherTickets.map((ticket) => (
          <button 
            key={ticket.id} 
            className="navigator-card"
            onClick={() => {
              window.scrollTo(0, 0);
              onNavigate(ticket.id);
            }}
          >
            <span className="nav-ticket-id">{ticket.ticketId}</span>
            <span className="nav-ticket-title">{ticket.title}</span>
            <ArrowRight size={14} className="nav-arrow" />
          </button>
        ))}
      </div>
    </div>
  );
}
