const services = [
  { number: "01", title: "Architecture", text: "Architectural design development focused on creating practical, functional and visually considered spaces." },
  { number: "02", title: "Design & Space Planning", text: "Thoughtful planning and layout solutions designed around the purpose and use of each space." },
  { number: "03", title: "Engineering", text: "Engineering input that supports safe, practical and buildable property solutions." },
  { number: "04", title: "Quantity Estimation", text: "Clear quantity and cost estimates to help clients plan with greater confidence." },
  { number: "05", title: "Construction", text: "Construction support focused on quality, coordination and bringing approved designs to life." },
]

const projects = [
  { title: "Modern Family Residence", type: "Residential design", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85" },
  { title: "Contemporary Courtyard Home", type: "Architecture & planning", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" },
  { title: "A Place To Grow", type: "Concept development", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" },
]

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }

function WhatsAppMark() {
  return <span aria-hidden="true" className="whatsapp-mark">◔</span>
}

export default function Page() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <header className="site-header container">
          <a className="brand" href="#home"><span>Home</span><b>Solutions</b></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {['Home','About','Services','Projects','Process','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a className="header-cta" href="#contact">Request a consultation <Arrow /></a>
          <button className="menu-toggle" aria-label="Open navigation"><span /><span /></button>
        </header>
        <div className="hero-content container">
          <div className="eyebrow"><i /> Architecture <em>•</em> Space planning <em>•</em> Engineering <em>•</em> Quantity estimation <em>•</em> Construction</div>
          <h1>From vision<br />to reality</h1>
          <p>Integrated architecture, engineering, planning and construction solutions for homeowners, builders, contractors and developers.</p>
          <div className="hero-actions"><a className="button button-fill" href="#contact">Request a consultation <Arrow /></a><a className="button button-outline" href="#services">Explore our services <Arrow /></a></div>
        </div>
        <div className="hero-foot container"><span>Harare, Zimbabwe — Architecture • Engineering • Construction</span><a href="#about">Scroll <span>↓</span></a></div>
      </section>

      <section className="intro section container" id="about">
        <div className="intro-image image-frame"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Contemporary interior with warm natural light" /></div>
        <div className="intro-copy"><div className="section-label">About Home Solutions</div><h2>Building more than <i>structures.</i></h2><p>Home Solutions brings together architectural design development, space planning, engineering, quantity estimation and construction to provide clients with an integrated approach to property development.</p><p>From the initial concept to planning, costing and construction, Home Solutions is positioned to help clients turn property ideas into practical, well-designed spaces.</p><div className="service-list">{services.map((service) => <span key={service.title}>{service.title}</span>)}</div><a className="text-link" href="#services">Discover Home Solutions <Arrow /></a></div>
      </section>

      <section className="services section" id="services"><div className="container"><div className="section-label">What we do</div><h2>A full spectrum of<br /><i>professional services.</i></h2><p className="section-lead">One coordinated team across architecture, engineering, costing and construction — from concept through to delivery.</p><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-number">{service.number}</span><div className="service-icon">◇</div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Enquire about this service <Arrow /></a></article>)}</div></div></section>

      <section className="projects section container" id="projects"><div className="section-heading"><div><div className="section-label">Selected work</div><h2>Ideas made <i>real.</i></h2></div><a className="text-link" href="#contact">View all projects <Arrow /></a></div><div className="project-grid">{projects.map((project) => <article className="project" key={project.title}><img src={project.image} alt={project.title} /><div className="project-overlay"><span>{project.type}</span><h3>{project.title}</h3></div></article>)}</div></section>

      <section className="process section-dark" id="process"><div className="container process-layout"><div><div className="section-label light">Our process</div><h2>From first idea<br />to <i>final form.</i></h2></div><div className="process-steps"><div><b>01</b><h3>Understand</h3><p>We listen, ask the right questions and understand the ambition behind your project.</p></div><div><b>02</b><h3>Develop</h3><p>Ideas become considered plans, coordinated designs and clear project costs.</p></div><div><b>03</b><h3>Deliver</h3><p>With the right information in place, your project can move forward with confidence.</p></div></div></div></section>

      <section className="contact section container" id="contact"><div className="contact-layout"><div className="contact-panel"><div className="section-label">Start a conversation</div><h2>Let&apos;s build<br /><i>something meaningful.</i></h2><p>Have a project in mind? Tell us a little about it and we&apos;ll be in touch.</p><div className="contact-details"><span>Home Solutions</span><p>Harare, Zimbabwe</p><p className="muted">Contact details to be confirmed</p></div></div><form className="enquiry-form"><div className="form-heading"><span>Project enquiry</span><small>Fields marked * are required</small></div><label>Name *<input type="text" name="name" placeholder="Your name" required /></label><label>Phone or WhatsApp number *<input type="tel" name="phone" placeholder="+263 ..." required /></label><label>Service required *<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>Project location<input type="text" name="location" placeholder="Town or city" /></label><label className="full-field">Tell us about your project<textarea name="description" rows={4} placeholder="A short description of what you have in mind" /></label><button className="button button-fill" type="submit">Request a consultation <Arrow /></button></form></div></section><a className="whatsapp-float" href="#contact" aria-label="Start a WhatsApp enquiry"><WhatsAppMark /><span>Enquire on WhatsApp</span></a>
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span>Home</span><b>Solutions</b></a><p>Architecture • Space Planning • Engineering • Quantity Estimation • Construction</p><span>© {new Date().getFullYear()} Home Solutions</span></div></footer>
    </main>
  )
}

export const metadata = { title: 'Home Solutions — From Vision to Reality', description: 'Integrated architecture, engineering, planning and construction solutions.' }
for (const section of []) { void section }

// keep metadata in the route layout; this export is intentionally not used by the client renderer
