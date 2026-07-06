import React from 'react';
import { ArrowLeft, Clock, User, CheckCircle2, FileText } from 'lucide-react';
import TicketNavigator from './TicketNavigator';
import './CaseStudy.css';

export default function GenAIReportingCaseStudy({ onBack, onNavigate }) {
  return (
    <div className="case-study-wrapper animate-fade">
      <div className="case-study-container">
        <nav className="case-study-nav">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={16} /> Back to Board
          </button>
          <div className="ticket-meta">
            <span className="badge">INS-REP-01</span>
            <span className="status"><CheckCircle2 size={14} className="icon-done"/> Shipped</span>
          </div>
        </nav>

        <header className="ticket-header">
          <h1>Generative AI Reporting Layouts</h1>
          <div className="ticket-properties">
            <div className="property"><User size={14}/> <span>Mostafa Khalifa</span></div>
            <div className="property"><FileText size={14}/> <span>Product Design</span></div>
          </div>
        </header>

        <div className="ticket-body">
          <div className="tradeoff-flex">
            <strong>Hardest Tradeoff</strong>
            <p>Banned dynamic JSON schemas, forcing the AI engineering team to return strict, predictable data objects so the frontend layout would never collapse in production.</p>
          </div>

          <section>
            <h2>🎯 Context (Situation)</h2>
            <p>AIM Insights automatically generates C-level Performance and Competitive slide decks using AI. However, generative AI outputs are highly variable in length and structure. Depending on the client, a report might compare 1 brand or 5 brands, making static slide templates break or look unbalanced.</p>
          </section>

          <section>
            <h2>🧩 Problem Statement (Task)</h2>
            <p>Architect a dynamic, responsive layout ruleset for exported slide presentations that gracefully accommodates variable data density. Simultaneously, design a new Canonical Tag System to standardize the way AI sentiment and structural metadata are displayed across these reports.</p>
          </section>

          <div className="ticket-image-container">
            <img src="/baseline-shared-db.png" alt="Generative AI Reporting Shared View" className="ticket-image" />
            <div className="image-caption">Fig 1. Shared View rendering dynamic MetricSplits and AI insights</div>
          </div>

          <section>
            <h2>🧠 UX Considerations & Tradeoffs (Action)</h2>
            <ul>
              <li><strong>Dynamic Pagination Rules:</strong> Engineered strict breakpoint logic for presentation slides. For Competitive reports: ≤3 brands fit into a 2-slide layout, while &gt;3 brands dynamically trigger a 3-slide layout, pushing "Key Drivers" to slide 3 to accommodate up to 6 brand cards.</li>
              <li><strong>Shape = Meaning (Tag System v0.1):</strong> Formalized a robust 10-pattern tag system mapped directly to Ant Design codebase capabilities. Assigned strict shape meaning: 8px border-radius for structural tags (status, filters) and 999px pills for evaluative tags (sentiment, AI-powered).</li>
              <li><strong>The "MetricSplit" Pattern:</strong> Invented a new composable tag pattern to handle paired metrics (e.g., "60% pos · 18% neg"). Built a strict dominance rule where the background tint adopts the winning metric's color automatically.</li>
              <li><strong>Agentic Automation:</strong> Delegated the documentation and schema alignment of this massive system to an AI assistant (Claude Code), providing it with strict instructions to generate engineering handoff JSON schemas and update markdown docs automatically.</li>
            </ul>
          </section>

          <section>
            <h2>📊 Success Criteria (Result)</h2>
            <ul className="checklist">
              <li><CheckCircle2 size={16} className="text-success"/> Delivered flawlessly scaling slide presentations regardless of competitor count</li>
              <li><CheckCircle2 size={16} className="text-success"/> Unified 10 divergent tag styles into a single React component system</li>
              <li><CheckCircle2 size={16} className="text-success"/> Established clear conditionality rules with the AI backend engineering team</li>
            </ul>
          </section>

          <section>
            <h2>🔗 Artifacts</h2>
            <div className="artifacts-list">
              <span className="artifact-link">CLAUDE_CODE_BRIEF.md</span>
              <span className="artifact-link">ai_team_label_conditionality_message.md</span>
            </div>
          </section>

          <TicketNavigator currentViewId="genai" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
