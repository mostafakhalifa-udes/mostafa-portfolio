import React from 'react';
import { ArrowLeft, Clock, User, CheckCircle2, Layers } from 'lucide-react';
import TicketNavigator from './TicketNavigator';
import './CaseStudy.css';

export default function DesignSystemCaseStudy({ onBack, onNavigate }) {
  return (
    <div className="case-study-wrapper animate-fade">
      <div className="case-study-container">
        <nav className="case-study-nav">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={16} /> Back to Board
          </button>
          <div className="ticket-meta">
            <span className="badge">INS-DS-1.0</span>
            <span className="status"><CheckCircle2 size={14} className="icon-done"/> Locked</span>
          </div>
        </nav>

        <header className="ticket-header">
          <h1>AIM Canonical Design System</h1>
          <div className="ticket-properties">
            <div className="property"><User size={14}/> <span>Mostafa Khalifa</span></div>
            <div className="property"><Layers size={14}/> <span>Infrastructure</span></div>
          </div>
        </header>

        <div className="ticket-body">
          <div className="tradeoff-flex">
            <strong>Hardest Tradeoff</strong>
            <p>Locked report slides to static layouts, explicitly sacrificing responsive fluidity to guarantee pixel-perfect PDF extraction for the backend engine.</p>
          </div>

          <section>
            <h2>🎯 Context (Situation)</h2>
            <p>AIM Insights handles incredibly dense analytics for enterprise and government clients in MENA. The product lacked a unified systemic language, resulting in hardcoded hex values, disjointed AI interactions, and inconsistent RTL (Arabic) rendering. Developer handoff was brittle.</p>
          </section>

          <section>
            <h2>🧩 Problem Statement (Task)</h2>
            <p>Architect a design system that enforces strict token-binding, handles complex data visualizations (metric cards, chart containers), treats Arabic (RTL) and AI-patterns as first-class citizens, and guarantees programmatic predictability for engineering.</p>
          </section>

          <div className="ticket-image-container">
            <img src="/customized-widget-baseline.png" alt="Design System Widget Configuration" className="ticket-image" />
            <div className="image-caption">Fig 1. Complex Metric Configuration driven by Component Tokens</div>
          </div>

          <section>
            <h2>🧠 System Architecture & Tradeoffs (Action)</h2>
            <ul>
              <li><strong>3-Tier Token Architecture:</strong> Engineered a rigorous scale: Primitives → Semantic → Component tokens. Banned direct usage of Primitives to ensure dark mode / theme swappability was mathematically flawless.</li>
              <li><strong>RTL + AI Native:</strong> Enforced Tajawal typeface rules and RTL grids at the foundational level, not as a retrofit. Standardized AI gradients and AI containers natively in the semantic tier.</li>
              <li><strong>Programmatic Binding Validation:</strong> Eliminated manual error by writing custom Figma Plugin scripts (`aim-figma-bindings.js`) to strictly bind fill colors, radii, and spacing to Figma Variables, forbidding hardcoded values.</li>
              <li><strong>Static &gt; Dynamic for Reports:</strong> Resisted the urge for overly responsive report slides, locking metric layouts to fixed aspect ratios to guarantee predictable extraction for the backend reporting engine.</li>
            </ul>
          </section>

          <section>
            <h2>📊 Success Criteria (Result)</h2>
            <ul className="checklist">
              <li><CheckCircle2 size={16} className="text-success"/> Delivered comprehensive Foundations & Typography scales</li>
              <li><CheckCircle2 size={16} className="text-success"/> Built and bound over 14 Core Components to the Canonical Figma Variable Library</li>
              <li><CheckCircle2 size={16} className="text-success"/> Zero hardcoded hex values in production handoffs</li>
            </ul>
          </section>

          <section>
            <h2>🔗 Artifacts</h2>
            <div className="artifacts-list">
              <span className="artifact-link">Design_System_Plan_01.md</span>
              <span className="artifact-link">AIM_DESIGN_SYSTEM_01.md</span>
              <span className="artifact-link">aim-figma-bindings.js (Automation Script)</span>
            </div>
          </section>

          <TicketNavigator currentViewId="designsystem" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
