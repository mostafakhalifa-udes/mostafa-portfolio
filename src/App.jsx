import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import AlertingCaseStudy from './AlertingCaseStudy';
import DesignSystemCaseStudy from './DesignSystemCaseStudy';
import SemanticDriversCaseStudy from './SemanticDriversCaseStudy';
import GenAIReportingCaseStudy from './GenAIReportingCaseStudy';
import './index.css';

const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projects = [
  {
    id: 1,
    title: 'AIM Insights: Semantic Drivers',
    category: 'AI UX & Core Workflow',
    description: 'Designed the end-to-end UX for AI Driver Creation, simplifying prompt iteration by removing arbitrary relevancy thresholds and establishing a robust 3-tier tagging system (AI/Exact/Composite).',
    image: '/build-modal-default.png',
    viewId: 'semantic'
  },
  {
    id: 2,
    title: 'Alerting System v1.1',
    category: 'Systems Design',
    description: 'Spearheaded a comprehensive spec and Figma overhaul for complex SaaS alerting systems, balancing high data density with clear user actions and status transparency.',
    image: '/alerting-233-5569.png',
    viewId: 'alerting'
  },
  {
    id: 3,
    title: 'Generative AI Reporting',
    category: 'Product Design',
    description: 'Architected dynamic AI-generated summary presentations (Performance & Competitive reports), establishing strict layout conditionality and robust source attribution rules.',
    image: '/baseline-shared-db.png',
    viewId: 'genai'
  },
  {
    id: 4,
    title: 'AIM Design System',
    category: 'Design Systems',
    description: 'Maintain and scale the canonical token library and component behaviors across the AIM platform, specifically engineering scalable MetricSplit patterns and Tag structural taxonomies.',
    image: '/customized-widget-baseline.png',
    viewId: 'designsystem'
  }
];

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      const isInteractive = 
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.closest('.project-item');
        
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button 
      onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')} 
      className="theme-toggle" 
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="floating-nav"
          initial={{ y: 100, opacity: 0, x: '-50%' }}
          animate={{ y: 0, opacity: 1, x: '-50%' }}
          exit={{ y: 100, opacity: 0, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <a href="#philosophy">Philosophy</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (currentView !== 'home') return;
    window.scrollTo(0, 0);
  }, [currentView]);

  if (currentView === 'alerting') {
    return <AlertingCaseStudy onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
  }

  if (currentView === 'designsystem') {
    return <DesignSystemCaseStudy onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
  }

  if (currentView === 'semantic') {
    return <SemanticDriversCaseStudy onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
  }

  if (currentView === 'genai') {
    return <GenAIReportingCaseStudy onBack={() => setCurrentView('home')} onNavigate={setCurrentView} />;
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container">
      <CustomCursor />
      <FloatingNav />
      
      {/* Header */}
      <header className="header">
        <div className="header-name">Mostafa Khalifa</div>
        <div className="nav-links">
          <ThemeToggle />
          <a href="#" aria-label="Email" style={{ display: 'flex', alignItems: 'center' }}><Mail size={20} /></a>
          <a href="#" aria-label="GitHub" style={{ display: 'flex', alignItems: 'center' }}><GithubIcon size={20} /></a>
        </div>
      </header>

      <main>
        {/* Bio Section */}
        <motion.section 
          className="bio-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          transition={{ duration: 0.6 }}
        >
          <h2>Systems over pages. Clarity over decoration.</h2>
          <p>I design complex data systems and AI workflows for enterprise SaaS.</p>
        </motion.section>

        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            className="hero-sticker"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="sticker-placeholder">
              <span style={{ fontSize: '2.5rem' }}>🎯</span>
            </div>
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Senior Product Designer.
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ duration: 0.6, delay: 0.2 }}
          >
            I design complex SaaS platforms, focusing on robust design systems, high-density data visualization, and calm, sharp user experiences. Currently building the future of social listening at AIM Technologies.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton href="#work" className="btn btn-primary">
              View selected work
            </MagneticButton>
            <MagneticButton href="https://drive.google.com/file/d/1Cn9CAm_xk2RFAcoKbpfYglwMAC9B8dmo/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Download CV
            </MagneticButton>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="projects-section">
          <motion.h2 
            className="section-title"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            Design Philosophy
          </motion.h2>
          <div className="philosophy-grid">
            <motion.div className="philosophy-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <h3>Systems Over Pages</h3>
              <p>I focus on robust design system foundations and canonical token libraries. A good component doesn't just look right on one screen; it scales across an entire SaaS platform predictably.</p>
            </motion.div>
            <motion.div className="philosophy-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} transition={{ delay: 0.1 }}>
              <h3>Honest &gt; Diplomatic</h3>
              <p>I value direct communication, surfacing tradeoffs over generic recommendations, and making data-backed decisions. Good design requires pushing back when justified.</p>
            </motion.div>
            <motion.div className="philosophy-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} transition={{ delay: 0.2 }}>
              <h3>High-Density Clarity</h3>
              <p>Specializing in complex B2B interfaces where users need to parse dense data (like Semantic Drivers or Competitive Reports) without cognitive overload.</p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="projects-section" onMouseMove={handleMouseMove}>
          <motion.h2 
            className="section-title"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            Selected Work
          </motion.h2>
          <div className="projects-list">
            <AnimatePresence>
              {hoveredProject && (
                <div 
                  className="hover-preview active"
                  style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
                >
                  <img src={hoveredProject.image} alt={hoveredProject.title} />
                </div>
              )}
            </AnimatePresence>

            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-item"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUpVariant}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-tag">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <button 
                    className="project-link"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentView(project.viewId);
                    }}
                  >
                    Review Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className="projects-section">
          <motion.h2 
            className="section-title"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            Tools & Stack
          </motion.h2>
          <motion.div 
            className="stack-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            <div className="stack-item">
              <h3>Design & Systems</h3>
              <p>Figma, Ant Design System, Component Architecture</p>
            </div>
            <div className="stack-item">
              <h3>Product & Analytics</h3>
              <p>Linear (Agile), Mixpanel (Data-driven Insights)</p>
            </div>
            <div className="stack-item">
              <h3>Engineering Sync</h3>
              <p>React (Vibe Coding & Layouts), CSS variables</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        id="contact" 
        className="footer"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
      >
        <div className="footer-content">
          <div className="footer-text">
            <h2>Let's connect.</h2>
            <p>Based in Egypt. Open to discussions on systems and SaaS product strategy.</p>
          </div>
          <div className="social-links">
            <a href="mailto:Mustafa10499@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/mostafak4999" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.behance.net/MostafaK499" target="_blank" rel="noreferrer">Behance</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
