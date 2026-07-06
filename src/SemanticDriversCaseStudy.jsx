import React from 'react';
import { ArrowLeft, Clock, User, CheckCircle2, Cpu } from 'lucide-react';
import TicketNavigator from './TicketNavigator';
import './CaseStudy.css';

export default function SemanticDriversCaseStudy({ onBack, onNavigate }) {
  return (
    <div className="case-study-wrapper animate-fade">
      <div className="case-study-container">
        <nav className="case-study-nav">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={16} /> Back to Board
          </button>
          <div className="ticket-meta">
            <span className="badge">INS-AI-204</span>
            <span className="status"><CheckCircle2 size={14} className="icon-done"/> Shipped</span>
          </div>
        </nav>

        <header className="ticket-header">
          <h1>AIM Insights: Semantic Drivers v2</h1>
          <div className="ticket-properties">
            <div className="property"><User size={14}/> <span>Mostafa Khalifa</span></div>
            <div className="property"><Cpu size={14}/> <span>AI UX & Core Workflow</span></div>
          </div>
        </header>

        <div className="ticket-body">
          <div className="tradeoff-flex">
            <strong>Hardest Tradeoff</strong>
            <p>Killed the "Auto-refinement" LLM feature just before launch—even though it technically improved prompts—because silently overwriting user text destroyed trust in the system.</p>
          </div>

          <section>
            <h2>🎯 Context (Situation)</h2>
            <p>Our Semantic Drivers allow users to cluster social media data using LLMs instead of basic keyword matching. However, v1 presented users with a blank textarea. Because they lacked prompt-engineering skills, users wrote vague or highly emotional queries (e.g., "angry customers complaining"), resulting in noisy, useless data clusters. Furthermore, processing took 2-5 minutes, leaving users staring at a black box.</p>
          </section>

          <section>
            <h2>🧩 Problem Statement (Task)</h2>
            <p>Transform the "blank canvas" prompt engineering workflow into a highly structured, guided experience that inherently enforces the 9 critical rules of semantic matching. Simultaneously, solve the anxiety caused by long-running asynchronous LLM jobs without resorting to silent, hostile "auto-refinement" of user input.</p>
          </section>

          <div className="ticket-image-container">
            <img src="/drivers-hero.png" alt="Semantic Drivers Input Workflow" className="ticket-image" />
            <div className="image-caption">Fig 1. The structured Semantic Driver creation modal</div>
          </div>

          <section>
            <h2>🧠 UX Considerations & Tradeoffs (Action)</h2>
            <ul>
              <li><strong>Killing "Auto-Refinement":</strong> I explicitly removed the feature that silently rewrote the user's prompt. Silently overwriting user input is hostile UX that destroys trust in the AI. Replaced it with inline validation.</li>
              <li><strong>Structured Prompting:</strong> Replaced the blank textarea with strict, chunked inputs (Topic, Intent, Context) to force specificity and eliminate filler words.</li>
              <li><strong>Latency as a Feature:</strong> Since processing takes 2-5 minutes, I designed a 4-stage progress indicator (Analyzing → Scanning → Matching → Finalizing) and exposed the queue position. This converted user frustration into a feeling of "the system is working hard for me."</li>
              <li><strong>Adaptive Search Windows:</strong> Designed a preview system that defaults to a 30-day search window for speed, but gracefully auto-widens up to 12 months for dormant topics, ensuring the user always gets enough sample data to validate their prompt.</li>
            </ul>
          </section>

          <section>
            <h2>📊 Success Criteria (Result)</h2>
            <ul className="checklist">
              <li><CheckCircle2 size={16} className="text-success"/> Drastic reduction in noisy data clusters by enforcing structured input</li>
              <li><CheckCircle2 size={16} className="text-success"/> Eliminated queue anxiety by exposing background task states inline</li>
              <li><CheckCircle2 size={16} className="text-success"/> Established the 9-point quality checklist as the engineering standard for prompt validation</li>
            </ul>
          </section>

          <section>
            <h2>🔗 Artifacts</h2>
            <div className="artifacts-list">
              <span className="artifact-link">AI_Drivers_Design_Context.md</span>
              <span className="artifact-link">semantic-driver-rules.md</span>
            </div>
          </section>

          <TicketNavigator currentViewId="semantic" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
