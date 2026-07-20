import React from 'react';
import { ArrowLeft, Clock, User, CheckCircle2, AlertCircle, FileSpreadsheet, Layers, Target, Map } from 'lucide-react';
import TicketNavigator from './TicketNavigator';
import './CaseStudy.css';

export default function PharmacyERPCaseStudy({ onBack, onNavigate }) {
  return (
    <div className="case-study-wrapper animate-fade">
      <div className="case-study-container">
        <nav className="case-study-nav">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={16} /> Back to Board
          </button>
          <div className="ticket-meta">
            <span className="badge">PHARM-01</span>
            <span className="status" style={{ color: '#d97706', backgroundColor: '#fef3c7' }}><Clock size={14} className="icon-in-progress"/> In Progress (Structure)</span>
          </div>
        </nav>

        <header className="ticket-header">
          <h1>Pharmacy ERP SaaS: Architecture & UX Strategy</h1>
          <div className="ticket-properties">
            <div className="property"><User size={14}/> <span>Mostafa Khalifa</span></div>
            <div className="property"><Layers size={14}/> <span>0 to 1 Product</span></div>
            <div className="property"><AlertCircle size={14}/> <span>High Complexity</span></div>
          </div>
        </header>

        <div className="ticket-body">
          <div className="tradeoff-flex">
            <strong>Current Phase: Structure (Information Architecture)</strong>
            <p>Walking the canonical UX lifecycle (Strategy &gt; Scope &gt; Structure &gt; Skeleton &gt; Surface). We are currently locking down the massive Information Architecture before touching any visual skeletons.</p>
          </div>

          <section>
            <h2><Target size={20} style={{display:'inline', verticalAlign:'middle', marginRight:'8px'}}/> 1. Strategy: Objectives & User Needs</h2>
            <p>Pharmacies operate in a high-stress, fast-paced environment where software must balance split-second Point of Sale (POS) operations with extremely rigid inventory and accounting regulations. </p>
            <p><strong>Business Objective:</strong> Build a scalable, multi-tenant ERP SaaS that digitizes the entire pharmaceutical lifecycle—from initial stock entry and purchase orders to POS, HR, and accounting.</p>
            <p><strong>User Needs:</strong> Granular permission control to restrict sensitive financial data from POS staff, while maintaining lightning-fast workflows for sales and inventory tracking.</p>
          </section>

          <section>
            <h2><FileSpreadsheet size={20} style={{display:'inline', verticalAlign:'middle', marginRight:'8px'}}/> 2. Scope: Feature Extraction & Requirements</h2>
            <p>To define the scope without reinventing the wheel, I conducted a deep-dive competitor analysis on a legacy market leader (B-connect / E-plus). By analyzing 15+ hours of tutorial videos and synthesizing the findings with AI (Google NotebookLM), I extracted a comprehensive feature map into a categorized matrix.</p>
            
            <div className="artifacts-list" style={{ marginTop: '16px', marginBottom: '16px' }}>
              <a href="https://docs.google.com/spreadsheets/d/1Rm8csgTyoF3y9xSiOpc0mcZm1Nal9Rh6PpQPtUb0j3A/edit?usp=sharing" target="_blank" rel="noreferrer" className="artifact-link">
                <FileSpreadsheet size={14}/> Competitor Feature Matrix (Google Sheets)
              </a>
            </div>

            <p><strong>The scope crystallized into 8 core pillars:</strong></p>
            <ul>
              <li><strong>System Setup (بيانات عامة):</strong> The control hub. Legal identity, printer setups, and database maintenance.</li>
              <li><strong>HR & Security (شؤون العاملين):</strong> Granular permissions, role-cloning, and attendance tracking.</li>
              <li><strong>Inventory (المخازن):</strong> The operational backbone. Expiry dates, drug groups, spatial mapping (shelves/drawers), and stock transfers.</li>
              <li><strong>Purchasing (المشتريات):</strong> Invoices, supplier debts, and automated stock deficit alerts.</li>
              <li><strong>Sales (المبيعات):</strong> High-speed POS, deferred sales, and complex return policies.</li>
              <li><strong>Accounting (الحسابات):</strong> Cash flow, drawer handovers (shift closures), and chart of accounts.</li>
              <li><strong>CRM & Contracts:</strong> Medical insurance rules and customer credit limits.</li>
            </ul>
          </section>

          <section>
            <h2><Map size={20} style={{display:'inline', verticalAlign:'middle', marginRight:'8px'}}/> 3. Structure: Shaping the Information Architecture</h2>
            <p>With the scope defined, the current focus is translating these 8 pillars into a coherent Information Architecture. In legacy systems like E-Pharmacy, everything is buried under massive dropdown menus. My structural goal is to separate configuration from daily operations:</p>
            <ul>
              <li><strong>The Administrative Layer:</strong> Grouping System Setup, HR, and general Accounting into a secure "Backoffice" view.</li>
              <li><strong>The Operational Layer:</strong> Surfacing Sales (POS) and Inventory as the primary dashboard for daily staff, ensuring they are never more than 2 clicks away from ringing up a customer or checking stock levels.</li>
            </ul>
            <div className="ticket-image-container" style={{ marginTop: '24px' }}>
              <img src="/ux-process.jpeg" alt="The 5 Elements of UX" className="ticket-image" />
              <div className="image-caption">Fig 1. Framing the process: Currently transitioning from Scope to Structure.</div>
            </div>
          </section>

          <section>
            <h2>⏭️ Next Steps</h2>
            <ul className="checklist">
              <li><CheckCircle2 size={16} className="text-muted"/> Finalize the logical flows and edge-cases for Drawer Handovers (تسليم الدرج).</li>
              <li><CheckCircle2 size={16} className="text-muted"/> Move into the <strong>Skeleton</strong> phase: wireframing the POS and Inventory modules.</li>
              <li><CheckCircle2 size={16} className="text-muted"/> Establish the <strong>Surface</strong> (UI/Design System).</li>
            </ul>
          </section>

          <TicketNavigator currentViewId="pharmacy-erp" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
