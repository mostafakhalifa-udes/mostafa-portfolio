import React from 'react';
import { ArrowLeft, Clock, User, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import TicketNavigator from './TicketNavigator';
import './CaseStudy.css';

export default function AlertingCaseStudy({ onBack, onNavigate }) {
  return (
    <div className="case-study-wrapper animate-fade">
      <div className="case-study-container">
        <nav className="case-study-nav">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={16} /> Back to Board
          </button>
          <div className="ticket-meta">
            <span className="badge">INS-842</span>
            <span className="status"><CheckCircle2 size={14} className="icon-done"/> Done</span>
          </div>
        </nav>

        <header className="ticket-header">
          <h1>Alerting System Architecture v1.1</h1>
          <div className="ticket-properties">
            <div className="property"><User size={14}/> <span>Mostafa Khalifa</span></div>
            <div className="property"><Clock size={14}/> <span>Cycle 42</span></div>
            <div className="property"><AlertCircle size={14}/> <span>High Priority</span></div>
          </div>
        </header>

        <div className="ticket-body">
          <div className="tradeoff-flex">
            <strong>Hardest Tradeoff</strong>
            <p>Stripped out complex multi-condition logic in Phase 1 to force users into a linear 3-step intent flow, explicitly sacrificing advanced flexibility for zero-error completion.</p>
          </div>

          <section>
            <h2>🎯 Context (Situation)</h2>
            <p>The legacy alerting system for AIM Insights was built on basic threshold logic that couldn't handle the high-density data requirements of our telecom and enterprise clients. Users were experiencing cognitive overload and missing critical brand anomalies due to alert fatigue.</p>
          </section>

          <section>
            <h2>🧩 Problem Statement (Task)</h2>
            <p>Design a scalable architecture that maps three distinct user intents (Keyword tracking, Metric thresholds, New Content discovery) into a unified creation flow. The system must support complex delivery schedules, graceful error handling, and future-proof the database for AI digests.</p>
          </section>

          <div className="ticket-image-container">
            <img src="/alerting-233-5569.png" alt="Alerting System High Fidelity" className="ticket-image" />
            <div className="image-caption">Fig 1. The unified Alert Details surface</div>
          </div>

          <section>
            <h2>🧠 UX Considerations & Tradeoffs (Action)</h2>
            <ul>
              <li><strong>Strict Interaction Boundaries:</strong> Decoupled the "Mobile Responsive" view from the "Tokenized Shared" view. Shared links force a limited data-safe view, while logged-in mobile retains full investigative power.</li>
              <li><strong>Reduced Redundancy:</strong> Stripped "Keyword count" from the Metric Alert dropdown, forcing users into the dedicated Keyword Alert path to preserve the mental model.</li>
              <li><strong>Form vs Wizard:</strong> Migrated the edit flow from a 3-step wizard to a single-page form for faster iteration, explicitly locking Step 1 & 2 in phase 1 to reduce state mutation risks.</li>
              <li><strong>Interactive Prototyping:</strong> Bypassed static Figma limitations by vibe-coding a functional React prototype (Vite/Tailwind) to validate the "Wait Between Alerts" timing logic with engineering before sprint planning.</li>
            </ul>
          </section>

          <section>
            <h2>📊 Success Criteria (Result)</h2>
            <ul className="checklist">
              <li><CheckCircle2 size={16} className="text-success"/> Unified 5 legacy alert types into 3 intent-based methods</li>
              <li><CheckCircle2 size={16} className="text-success"/> Standardized the Trigger Snapshot data model across email, WhatsApp, and in-app notifications</li>
              <li><CheckCircle2 size={16} className="text-success"/> Locked spec and shipped v1.1 on schedule</li>
            </ul>
          </section>

          <section>
            <h2>🔗 Artifacts</h2>
            <div className="artifacts-list">
              <a href="#" className="artifact-link">Alerting_System_v1.1_LOCKED.md</a>
              <a href="/prototype/index.html" target="_blank" rel="noreferrer" className="artifact-link">React_Interactive_Prototype.tsx <ExternalLink size={14}/></a>
            </div>
          </section>

          <TicketNavigator currentViewId="alerting" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
