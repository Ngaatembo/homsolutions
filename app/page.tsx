"use client"

import { useState, type FormEvent } from "react"

const phone = "263774944807"
const services = [
  { number: "01", title: "Architecture", text: "Architectural design development focused on practical, functional and visually considered spaces." },
  { number: "02", title: "Design & Space Planning", text: "Thoughtful layouts shaped around the purpose, people and potential of each space." },
  { number: "03", title: "Engineering", text: "Engineering input to help turn design ideas into practical, coordinated solutions." },
  { number: "04", title: "Quantity Estimation", text: "Project quantity and cost estimates to support clearer planning and informed decisions." },
  { number: "05", title: "Construction", text: "Construction support focused on coordination, quality and bringing approved plans to life." },
]
const concepts = [
  { title: "Residential Architecture", type: "Illustrative visual", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85" },
  { title: "Contemporary Living", type: "Illustrative visual", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" },
  { title: "Space & Material", type: "Illustrative visual", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" },
]
const waUrl = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      "Hello Home Solutions, I would like to enquire about a project.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Location: ${data.get("location") || "Not specified"}`,
      `Budget: ${data.get("budget") || "Not specified"}`,
      `Preferred contact time: ${data.get("contactTime") || "Not specified"}`,
      `Project details: ${data.get("description") || "Not provided"}`,
    ].join("\n")
    window.open(waUrl(message), "_blank", "noopener,noreferrer")
    setSent(true)
  }

  const navItems = [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Process", "#process"], ["Contact", "#contact"]]

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <header className="site-header container">
          <a className="brand" href="#home" aria-label="Home Solutions home"><span>Home</span><b>Solutions</b><small>DESIGN · BUILD · DELIVER</small></a>
          <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
            {navItems.map(([item, href]) => <a key={item} href={href} onClick={() => setMenuOpen(false)}>{item}</a>)}
            <a className="mobile-nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <Arrow /></a>
          </nav>
          <a className="header-cta" href="#contact">Start a project <Arrow /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        </header>
        <div className="hero-content container">
          <div className="eyebrow"><i /> Thoughtful spaces. Better-built futures.</div>
          <h1>Make room<br />for <em>what&apos;s next.</em></h1>
          <p>Architecture, space planning, engineering, quantity estimation and construction support — brought together around your project.</p>
          <div className="hero-actions"><a className="button button-fill" href="#contact">Discuss your project <Arrow /></a><a className="button button-outline" href="#services">Explore services <Arrow /></a></div>
        </div>
        <div className="hero-foot container"><span>Architecture · Planning · Engineering · Construction</span><a href="#about">Discover <span>↓</span></a></div>
      </section>

      <section className="intro section container" id="about">
        <div className="intro-image image-frame"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85" alt="Contemporary interior with warm natural light" loading="lazy" /></div>
        <div className="intro-copy"><div className="section-label">A considered approach</div><h2>Good spaces start with <i>good thinking.</i></h2><p>Every successful project starts with understanding how a space should work, what it needs to achieve and how to plan for it.</p><p>Home Solutions brings together design, planning, engineering, costing and construction services to help clients move from an early idea toward a clear, practical next step.</p><div className="service-list">{services.map((service) => <span key={service.title}>{service.title}</span>)}</div><a className="text-link" href="#services">Explore our approach <Arrow /></a></div>
      </section>

      <section className="services section" id="services"><div className="container"><div className="section-label">How we can help</div><h2>One vision.<br /><i>Connected expertise.</i></h2><p className="section-lead">Explore the services that can help you plan, cost and progress your property project.</p><div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><span className="service-number">{service.number}</span><div className="service-icon" aria-hidden="true">◇</div><h3>{service.title}</h3><p>{service.text}</p><a href={waUrl(`Hello Home Solutions, I would like to enquire about ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Discuss this service <Arrow /></a></article>)}</div></div></section>

      <section className="projects section container" id="projects"><div className="section-heading"><div><div className="section-label">Visual direction</div><h2>Ideas take <i>shape.</i></h2></div><p className="project-disclaimer">Illustrative imagery only. We’ll replace these visuals with verified Home Solutions projects when approved project photographs are available.</p></div><div className="project-grid">{concepts.map((project) => <article className="project" key={project.title}><img src={project.image} alt={project.title + " — illustrative architecture reference"} loading="lazy" /><div className="project-overlay"><span>{project.type}</span><h3>{project.title}</h3></div></article>)}</div></section>

      <section className="process section-dark" id="process"><div className="container process-layout"><div><div className="section-label light">The journey</div><h2>Clarity at every<br /><i>stage.</i></h2><p className="process-intro">A clear process helps turn a big idea into manageable decisions.</p></div><div className="process-steps"><div><b>01</b><h3>Understand</h3><p>Share your idea, needs, location and priorities so the brief starts in the right place.</p></div><div><b>02</b><h3>Plan</h3><p>Explore design, technical requirements and cost considerations for the project.</p></div><div><b>03</b><h3>Progress</h3><p>Agree the next steps and move forward with a clearer understanding of the work.</p></div></div></div></section>

      <section className="contact section container" id="contact"><div className="contact-layout"><div className="contact-panel"><div className="section-label">Start a conversation</div><h2>Your idea deserves<br /><i>a good starting point.</i></h2><p>Tell us what you’re planning. Share a few details and start a conversation with Home Solutions.</p><div className="contact-details"><span>Home Solutions</span><p>Harare, Zimbabwe</p><a className="contact-phone" href={`tel:+${phone}`}>+263 77 494 4807</a><p className="muted">Please confirm the published contact details with the business before the site goes live.</p><a className="contact-direct" href={waUrl("Hello Home Solutions, I would like to discuss a project.")} target="_blank" rel="noreferrer">Message us on WhatsApp <Arrow /></a></div></div>
      <form className="enquiry-form" onSubmit={submitEnquiry}><div className="form-heading"><span>Tell us about your project</span><small>* Required fields</small></div><label>Name *<input type="text" name="name" placeholder="Your name" autoComplete="name" required /></label><label>Phone or WhatsApp *<input type="tel" name="phone" placeholder="+263 ..." autoComplete="tel" required /></label><label className="full-field">Service required *<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label>Project location<input type="text" name="location" placeholder="Town or city" autoComplete="address-level2" /></label><label>Approximate budget<input type="text" name="budget" placeholder="Optional" /></label><label className="full-field">Project details<textarea name="description" rows={4} placeholder="What would you like to build, design or improve?" /></label><label className="full-field">Preferred contact time<input type="text" name="contactTime" placeholder="Optional" /></label><button className="button button-fill" type="submit">Continue on WhatsApp <Arrow /></button><small className="form-note">Your details will be placed into a WhatsApp message for you to review and send. This form does not send anything automatically.</small>{sent && <p className="form-success" role="status">WhatsApp should open in a new tab. Review the message and press Send to complete your enquiry.</p>}</form></div></section>
      <a className="whatsapp-float" href={waUrl("Hello Home Solutions, I would like to enquire about a project.")} target="_blank" rel="noreferrer" aria-label="Enquire with Home Solutions on WhatsApp"><span className="whatsapp-mark" aria-hidden="true">↗</span><span>WhatsApp enquiry</span></a>
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span>Home</span><b>Solutions</b><small>DESIGN · BUILD · DELIVER</small></a><p>Architecture · Space Planning · Engineering · Quantity Estimation · Construction</p><span>© {new Date().getFullYear()} Home Solutions</span></div></footer>
    </main>
  )
}
