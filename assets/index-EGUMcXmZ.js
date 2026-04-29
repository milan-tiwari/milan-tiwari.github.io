(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Milan Tiwari`,label:`Embodied AI / ML Systems / 3D Scene Understanding`,location:`Tempe, AZ`,email:`milantiwari890@gmail.com`,phone:`(602) 471-4821`,github:`https://github.com/milan-tiwari`,linkedin:`https://www.linkedin.com/in/milan-tiwari-890/`,resume:`/Milan_Tiwari_Resume.pdf`},t=[{label:`Availability`,value:`Summer 2026`},{label:`Current Degree`,value:`M.S. Robotics @ ASU`},{label:`Pipeline Scale`,value:`14 live sources / 79 peak items day`}],n=[`Embodied AI`,`Computer Vision`,`3D Scene Systems`,`Zero-Shot Grasping`,`ML Pipelines`,`Inference APIs`,`Robotics`,`Data Validation`],r=[`I am an M.S. student in Robotics and Autonomous Systems at Arizona State University, focused on embodied AI, computer vision, and machine learning systems that move beyond prototypes into reliable tooling.`,`Across robotics, newsroom infrastructure, and scientific ML, I like building the layer between models and behavior: data pipelines, evaluation loops, reproducible inference, and interfaces that make outputs inspectable by real users.`,`My recent work spans semantic grasping in 3D scenes, AI-assisted local-news ingestion, protein structure prediction workflows, and multi-robot coordination. What ties those projects together is the same systems mindset: make the input pipeline dependable, make the output measurable, and make iteration easier for the people using the system.`],i=[{label:`What I build`,value:`Embodied AI systems, 3D scene understanding workflows, AI-powered data pipelines, and evaluation-first ML tooling.`},{label:`How I work`,value:`I care about systems that can be inspected, benchmarked, and handed to real users, not just models that look good in isolation.`},{label:`What I am looking for`,value:`Summer 2026 internships and new-grad roles in ML engineering, AI systems, and applied robotics.`},{label:`What I enjoy solving`,value:`Problems where machine learning needs surrounding infrastructure: ingestion, validation, inference, evaluation, and a usable interface around the model.`}],a=[{index:`01`,title:`Gaussian Task Grasping`,descriptor:`Zero-shot 3D grasp semantics`,eyebrow:`Featured system / live motion`,summary:`A robotic grasping stack extended with Gaussian Splatting, SigLIP 2, and robot-frame alignment so semantic scene understanding can drive task-oriented manipulation.`,bullets:[`Extended a language-guided grasping pipeline with Gaussian Splatting and SigLIP 2, unlocking zero-shot semantic queries over reconstructed tabletop captures.`,`Built backend switching across original LERF and splatfacto geometry paths, keeping the grasp workflow reusable across scene representations.`,`Designed robot-frame alignment and point-cloud grasp tooling, enabling interactive semantic grasp generation through a live scene UI.`],metrics:[`SigLIP 2 embeddings`,`Gaussian scene backend`,`Nerfstudio + Python`],link:`https://github.com/milan-tiwari/gaussian-task-grasping`,media:{type:`video`,src:`/media/gaussian-task-grasping.mp4`,alt:`Gaussian Task Grasping reconstruction and semantic grasp generation demo`}},{index:`02`,title:`ProteinNet-Hybrid`,descriptor:`Sequence-to-structure inference`,eyebrow:`Featured system / inference pipeline`,summary:`A lightweight Transformer pipeline for protein backbone prediction, packaged for reproducible CPU inference and downstream structural inspection.`,bullets:[`Built a Transformer encoder in PyTorch DDP for ProteinNet CASP12 sequence and evolutionary-profile inputs, reaching 10.15 A validation RMSD after 100 epochs.`,`Packaged checkpoint-resumable training and CPU Docker inference, enabling reproducible PDB and JSON exports for downstream inspection and benchmarking.`,`Benchmarked exported predictions through PyMOL overlays, enabling coarse fold evaluation on CASP12 targets with best-case 2.43 A aligned RMSD.`],metrics:[`ProteinNet CASP12`,`Docker CPU inference`,`PDB / JSON export`],link:`https://github.com/milan-tiwari/Proteinnet-Hybrid`,media:{type:`image`,src:`/media/proteinnet-overlay.png`,alt:`ProteinNet prediction and reference structure overlay rendered in PyMOL`,className:`project-media--contain`}},{index:`03`,title:`ReLIEF-VOR`,descriptor:`Safety-aware relief coordination`,eyebrow:`Featured system / simulation media`,summary:`A weighted-Voronoi multi-robot relief simulator built to model coverage, hotspot assignment, and demand-aware delivery under safety constraints.`,bullets:[`Designed a MATLAB weighted-Voronoi relief simulator with Lloyd coverage, hotspot assignment, and capacitated routing, enabling coordinated supply delivery over a 180 second scenario.`,`Built demand-aware centroid updates and control-barrier safety filtering, enabling live measurement of unmet demand, served coverage, and inter-robot separation.`,`Benchmarked locational cost, served coverage, and refill behavior across runs, enabling quantitative evaluation of hotspot claiming under evolving disaster demand.`],metrics:[`Weighted Voronoi control`,`Control-barrier safety filter`,`MATLAB simulation`],link:`https://github.com/milan-tiwari/Multi-Robot-Disaster-Management`,media:{type:`image`,src:`/media/relief-vor-preview.gif`,alt:`Multi-Robot Disaster Management simulation preview`}}],o=[{role:`Data Storytelling Assistant`,company:`Newswell (Arizona State University)`,period:`Nov 2025 - Present`,points:[`Built and owned a Python + SQLite ingestion pipeline across 14 public sources from RSS, Reddit, and government agendas, generating daily reporter digests from 44 average items and peaks of 79 items/day.`,`Built OpenAI summarization and outbox delivery modules that assemble local-news and government-meeting digests in 5-6 minute scheduled runs for active editorial review.`,`Fixed duplicate-meeting bugs and date-window drift through URL normalization, quality-based deduplication, and post-filters, preventing stale government updates from resurfacing in reporter emails.`,`Added rules-based Reddit relevance scoring and dry-run review checks, reducing noise and making pre-publication QA reproducible before digest release.`]},{role:`Software Engineer`,company:`Patel Motors`,period:`May 2023 - May 2024`,points:[`Built Flask + SQL quotation workflows that automated client quote generation, replacing manual quote assembly with faster and more traceable response handling.`,`Rebuilt the company website with HTML, CSS, JavaScript, and Flask-backed forms, simplifying navigation and connecting inquiries directly to backend quote workflows.`]},{role:`Machine Learning Intern`,company:`Value Matrix`,period:`Sep 2022 - Nov 2022`,points:[`Built components for an eye-movement tracking pipeline and updated evaluation workflows, improving analysis accuracy by 20 percent across internal model runs.`,`Integrated AWS Transcription and a Flask + JavaScript review interface, reducing turnaround from model output to analyst review.`]},{role:`Associate Intern`,company:`Feynn Labs`,period:`Jul 2022 - Sep 2022`,points:[`Built EV market-segmentation analyses from customer and competitor data, enabling reports that identified high-potential customer groups for business strategy.`]}],s=[{label:`Languages`,value:`Python, C++, SQL, JavaScript, MATLAB, C`},{label:`Robotics + Frameworks`,value:`ROS, PyTorch, OpenCV, Nerfstudio, Gazebo, TensorFlow, TensorFlow Lite, Flask`},{label:`AI / ML Concepts`,value:`Embodied AI, Gaussian Splatting, Zero-Shot Grasping, Computer Vision, LLMs, Reinforcement Learning, Deep Learning`},{label:`Tools + Infrastructure`,value:`Git, Docker, AWS, SQLite, Hugging Face, MATLAB Simulink`}];document.querySelector(`#app`).innerHTML=`
  <div class="page-shell">
    <div class="ambient-orb ambient-orb--one" aria-hidden="true"></div>
    <div class="ambient-orb ambient-orb--two" aria-hidden="true"></div>
    <div class="ambient-noise" aria-hidden="true"></div>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="Milan Tiwari home">
        <span class="brand__label">Milan Tiwari</span>
        <span class="brand__meta">AI systems / robotics</span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="header-cta" href="${e.resume}" target="_blank" rel="noreferrer">Resume</a>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero__copy" data-reveal>
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Available for Summer 2026 ML + AI systems roles</span>
          </div>
          <p class="hero__eyebrow">${e.label}</p>
          <h1>
            Engineering <span>digital trust</span> for embodied intelligence.
          </h1>
          <p class="hero__lede">
            I build machine learning systems that move from raw data to testable behavior:
            newsroom ingestion pipelines, zero-shot 3D grasping workflows, protein inference
            tooling, and multi-robot decision systems with measurable outcomes.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="#projects">View projects</a>
            <a class="button button--outline" href="${e.resume}" target="_blank" rel="noreferrer">Download resume</a>
          </div>
          <div class="hero__contact-line">
            <a href="mailto:${e.email}">${e.email}</a>
            <span>${e.phone}</span>
            <a href="${e.github}" target="_blank" rel="noreferrer">GitHub</a>
            <a href="${e.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div class="hero__visual" data-reveal>
          <div class="hero-portrait">
            <div class="hero-portrait__frame">
              <img
                class="hero-portrait__image"
                src="/media/milan-portrait.png"
                alt="Portrait of Milan Tiwari"
                loading="eager"
              />
            </div>

            <article class="hero-chip hero-chip--top">
              <span class="hero-chip__label">Current lane</span>
              <strong>Embodied AI + ML systems</strong>
            </article>
            <article class="hero-chip hero-chip--bottom">
              <span class="hero-chip__label">Current degree</span>
              <strong>M.S. Robotics @ ASU</strong>
            </article>
          </div>

          <div class="hero__metrics">
            ${t.map(e=>`
                  <div class="metric-cell">
                    <span class="metric-cell__label">${e.label}</span>
                    <strong>${e.value}</strong>
                  </div>
                `).join(``)}
          </div>
        </div>
      </section>

      <section class="signal-strip" aria-label="Live signal strip">
        <div class="signal-strip__track">
          ${[...n,...n].map(e=>`
                <span>
                  <i></i>
                  ${e}
                </span>
              `).join(``)}
        </div>
      </section>

      <section class="about" id="about">
        <div class="section-copy" data-reveal>
          <p class="section-kicker">About me</p>
          <h2>Research depth, production instincts, and a bias toward systems people can trust.</h2>
        </div>
        <div class="about__grid">
          <div class="about__story" data-reveal>
            ${r.map(e=>`<p>${e}</p>`).join(``)}
          </div>
          <div class="about__rail" data-reveal>
            ${i.map(e=>`
                  <article class="about-card">
                    <span class="about-card__label">${e.label}</span>
                    <p>${e.value}</p>
                  </article>
                `).join(``)}
          </div>
        </div>
      </section>

      <section class="projects" id="projects">
        <div class="section-copy" data-reveal>
          <p class="section-kicker">Featured projects</p>
          <h2>Systems designed to observe, infer, and act in uncertain environments.</h2>
        </div>

        <div class="project-stack">
          ${a.map((e,t)=>`
                <article class="project-block ${t%2?`project-block--reverse`:``}" data-reveal>
                  <div class="project-block__media">
                    <div class="project-block__frame">
                      <div class="project-block__frame-head">
                        <span class="project-block__index">Block ${e.index}</span>
                        <a href="${e.link}" target="_blank" rel="noreferrer">Open GitHub</a>
                      </div>
                      ${e.media.type===`video`?`<video class="project-media ${e.media.className??``}" autoplay muted loop playsinline preload="metadata" src="${e.media.src}" aria-label="${e.media.alt}"></video>`:e.media.type===`image`?`<img class="project-media ${e.media.className??``}" src="${e.media.src}" alt="${e.media.alt}" loading="lazy" />`:`
                              <div class="project-terminal" aria-label="${e.title} metrics panel">
                                ${e.media.lines.map(e=>`
                                      <div class="project-terminal__line">
                                        <span class="project-terminal__prompt">></span>
                                        <span>${e}</span>
                                      </div>
                                    `).join(``)}
                              </div>
                            `}
                    </div>
                  </div>

                  <div class="project-block__content">
                    <p class="project-block__eyebrow">${e.eyebrow}</p>
                    <h3>${e.title}</h3>
                    <p class="project-block__descriptor">${e.descriptor}</p>
                    <p class="project-block__summary">${e.summary}</p>
                    <ul class="project-block__bullets">
                      ${e.bullets.map(e=>`<li>${e}</li>`).join(``)}
                    </ul>
                    <div class="project-block__tags">
                      ${e.metrics.map(e=>`<span>${e}</span>`).join(``)}
                    </div>
                  </div>
                </article>
              `).join(``)}
        </div>
      </section>

      <section class="experience" id="experience">
        <div class="section-copy" data-reveal>
          <p class="section-kicker">Professional ledger</p>
          <h2>Production-minded work across data, software, and machine intelligence.</h2>
        </div>

        <div class="ledger">
          <div class="ledger__line" aria-hidden="true"></div>
          ${o.map(e=>`
                <article class="ledger-entry" data-reveal>
                  <div class="ledger-entry__node" aria-hidden="true">
                    <span></span>
                  </div>
                  <div class="ledger-entry__content">
                    <div class="ledger-entry__head">
                      <div>
                        <p class="ledger-entry__role">${e.role}</p>
                        <p class="ledger-entry__company">${e.company}</p>
                      </div>
                      <span class="ledger-entry__period">${e.period}</span>
                    </div>
                    <ul class="ledger-entry__points">
                      ${e.points.map(e=>`<li>${e}</li>`).join(``)}
                    </ul>
                  </div>
                </article>
              `).join(``)}
        </div>
      </section>

      <section class="capabilities" id="capabilities">
        <div class="section-copy" data-reveal>
          <p class="section-kicker">Capabilities</p>
          <h2>Tools, frameworks, and concepts that power the build loop.</h2>
        </div>
        <div class="capability-list" data-reveal>
          ${s.map(e=>`
                <div class="capability-row">
                  <span class="capability-row__label">${e.label}</span>
                  <p>${e.value}</p>
                </div>
              `).join(``)}
        </div>
      </section>

      <section class="contact" id="contact" data-reveal>
        <p class="section-kicker">Contact</p>
        <h2>Open to ML engineering, AI data systems, and embodied AI roles where reliability matters.</h2>
        <p class="contact__lede">
          If the work needs to move from experimentation into something people can trust, I’m interested.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="mailto:${e.email}">Start a conversation</a>
          <a class="button button--outline" href="${e.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div class="contact__foot">
          <span>${e.email}</span>
          <span>${e.phone}</span>
          <span>${e.location}</span>
        </div>
      </section>
    </main>
  </div>
`;function c(){let e=document.querySelectorAll(`[data-reveal]`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.16});e.forEach(e=>t.observe(e))}function l(){let e=document.querySelector(`.site-header`);if(!e)return;let t=()=>{e.classList.toggle(`is-scrolled`,window.scrollY>24)};t(),window.addEventListener(`scroll`,t,{passive:!0})}c(),l();