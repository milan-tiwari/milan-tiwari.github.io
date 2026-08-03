(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.documentElement.classList.add(`js`);var e={name:`Milan Tiwari`,label:`Embodied AI / ML Systems / 3D Scene Understanding`,location:`Tempe, AZ`,email:`milantiwari890@gmail.com`,phone:`(602) 471-4821`,github:`https://github.com/milan-tiwari`,linkedin:`https://www.linkedin.com/in/milan-tiwari-890/`,resume:`/Milan_Tiwari_Resume.pdf`,availability:`Open to ML / AI systems roles`},t={email:`
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  `,phone:`
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z" />
    </svg>
  `,github:`
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.8 1.4a13.2 13.2 0 0 0-6.9 0C6.3.3 5.2.6 5.2.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  `,linkedin:`
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  `},n=[{label:`Email`,href:`mailto:${e.email}`,icon:t.email},{label:`Phone`,href:`tel:+16024714821`,icon:t.phone},{label:`GitHub`,href:e.github,icon:t.github,external:!0},{label:`LinkedIn`,href:e.linkedin,icon:t.linkedin,external:!0}],r=[`01 // EMBODIED AI`,`02 // COMPUTER VISION`,`03 // 3D SCENE SYSTEMS`,`04 // ZERO-SHOT GRASPING`,`05 // ML PIPELINES`,`06 // INFERENCE APIS`,`07 // ROBOTICS`,`08 // DATA VALIDATION`],i=[`I am an M.S. student in Robotics and Autonomous Systems at Arizona State University, focused on embodied AI, computer vision, and machine learning systems that move beyond prototypes into reliable tooling.`,`Across robotics, newsroom infrastructure, and scientific ML, I like building the layer between models and behavior: data pipelines, evaluation loops, reproducible inference, and interfaces that make outputs inspectable by real users.`,`My recent work spans semantic grasping in 3D scenes, AI-assisted local-news ingestion, protein structure prediction workflows, and multi-robot coordination. What ties those projects together is the same systems mindset: make the input pipeline dependable, make the output measurable, and make iteration easier for the people using the system.`],a=[{label:`What I build`,value:`Embodied AI systems, 3D scene understanding workflows, AI-powered data pipelines, and evaluation-first ML tooling.`},{label:`How I work`,value:`I care about systems that can be inspected, benchmarked, and handed to real users, not just models that look good in isolation.`},{label:`What I am looking for`,value:`ML engineering, AI systems, and applied robotics roles where I can own the path from data to dependable behavior.`},{label:`What I enjoy solving`,value:`Problems where machine learning needs surrounding infrastructure: ingestion, validation, inference, evaluation, and a usable interface around the model.`}],o=[{index:`01`,title:`Gaussian Task Grasping`,descriptor:`Zero-shot 3D grasp semantics`,eyebrow:`Featured system / live motion`,summary:`A robotic grasping stack extended with Gaussian Splatting, SigLIP 2, and robot-frame alignment so semantic scene understanding can drive task-oriented manipulation.`,bullets:[`Extended a language-guided grasping pipeline with Gaussian Splatting and SigLIP 2, unlocking zero-shot semantic queries over reconstructed tabletop captures.`,`Built backend switching across original LERF and splatfacto geometry paths, keeping the grasp workflow reusable across scene representations.`,`Designed robot-frame alignment and point-cloud grasp tooling, enabling interactive semantic grasp generation through a live scene UI.`],metrics:[`SigLIP 2 embeddings`,`Gaussian scene backend`,`Nerfstudio + Python`],link:`https://github.com/milan-tiwari/gaussian-task-grasping`,media:{type:`video`,src:`/media/gaussian-task-grasping.mp4`,alt:`Gaussian Task Grasping reconstruction and semantic grasp generation demo`}},{index:`02`,title:`ProteinNet-Hybrid`,descriptor:`Sequence-to-structure inference`,eyebrow:`Featured system / inference pipeline`,summary:`A lightweight Transformer pipeline for protein backbone prediction, packaged for reproducible CPU inference and downstream structural inspection.`,bullets:[`Built a Transformer encoder in PyTorch DDP for ProteinNet CASP12 sequence and evolutionary-profile inputs, reaching 10.15 Å validation RMSD after 100 epochs.`,`Packaged checkpoint-resumable training and CPU Docker inference, enabling reproducible PDB and JSON exports for downstream inspection and benchmarking.`,`Benchmarked exported predictions through PyMOL overlays, enabling coarse fold evaluation on CASP12 targets with best-case 2.43 Å aligned RMSD.`],metrics:[`ProteinNet CASP12`,`10.15 Å validation RMSD`,`2.43 Å aligned RMSD`],link:`https://github.com/milan-tiwari/Proteinnet-Hybrid`,media:{type:`image`,src:`/media/proteinnet-overlay.png`,alt:`ProteinNet prediction and reference structure overlay rendered in PyMOL`,className:`project-media--contain`}},{index:`03`,title:`ReLIEF-VOR`,descriptor:`Safety-aware relief coordination`,eyebrow:`Featured system / simulation media`,summary:`A weighted-Voronoi multi-robot relief simulator built to model coverage, hotspot assignment, and demand-aware delivery under safety constraints.`,bullets:[`Designed a MATLAB weighted-Voronoi relief simulator with Lloyd coverage, hotspot assignment, and capacitated routing, enabling coordinated supply delivery over a 180 second scenario.`,`Built demand-aware centroid updates and control-barrier safety filtering, enabling live measurement of unmet demand, served coverage, and inter-robot separation.`,`Benchmarked locational cost, served coverage, and refill behavior across runs, enabling quantitative evaluation of hotspot claiming under evolving disaster demand.`],metrics:[`Weighted Voronoi control`,`Control-barrier safety filter`,`MATLAB simulation`],link:`https://github.com/milan-tiwari/Multi-Robot-Disaster-Management`,media:{type:`video`,src:`/media/relief-vor-preview.mp4`,alt:`Multi-Robot Disaster Management simulation preview`}}],s=[{role:`Data Storytelling Assistant`,company:`Newswell (Arizona State University)`,period:`Nov 2025 - Present`,points:[`Built and owned a Python + SQLite ingestion pipeline across 14 public sources from RSS, Reddit, and government agendas, generating daily reporter digests from 44 average items and peaks of 79 items/day.`,`Built OpenAI summarization and outbox delivery modules that assemble local-news and government-meeting digests in 5-6 minute scheduled runs for active editorial review.`,`Fixed duplicate-meeting bugs and date-window drift through URL normalization, quality-based deduplication, and post-filters, preventing stale government updates from resurfacing in reporter emails.`,`Added rules-based Reddit relevance scoring and dry-run review checks, reducing noise and making pre-publication QA reproducible before digest release.`]},{role:`Software Engineer`,company:`Patel Motors`,period:`May 2023 - May 2024`,points:[`Built Flask + SQL quotation workflows that automated client quote generation, replacing manual quote assembly with faster and more traceable response handling.`,`Rebuilt the company website with HTML, CSS, JavaScript, and Flask-backed forms, simplifying navigation and connecting inquiries directly to backend quote workflows.`]},{role:`Machine Learning Intern`,company:`Value Matrix`,period:`Sep 2022 - Nov 2022`,points:[`Built components for an eye-movement tracking pipeline and updated evaluation workflows, improving analysis accuracy by 20 percent across internal model runs.`,`Integrated AWS Transcription and a Flask + JavaScript review interface, reducing turnaround from model output to analyst review.`]},{role:`Associate Intern`,company:`Feynn Labs`,period:`Jul 2022 - Sep 2022`,points:[`Built EV market-segmentation analyses from customer and competitor data, enabling reports that identified high-potential customer groups for business strategy.`]}],c=[{label:`Languages`,value:`Python, C++, SQL, JavaScript, MATLAB, C`},{label:`Robotics + Frameworks`,value:`ROS, PyTorch, OpenCV, Nerfstudio, Gazebo, TensorFlow, TensorFlow Lite, Flask`},{label:`AI / ML Concepts`,value:`Embodied AI, Gaussian Splatting, Zero-Shot Grasping, Computer Vision, LLMs, Reinforcement Learning, Deep Learning`},{label:`Tools + Infrastructure`,value:`Git, Docker, AWS, Azure Container Apps, ACR, Key Vault, PostgreSQL, SQLite, Hugging Face, MATLAB Simulink`}],l=[{value:`14`,label:`public sources in a production ingestion loop`},{value:`5–6m`,label:`scheduled digest runtime from ingest to outbox`},{value:`2.43 Å`,label:`best aligned RMSD on exported protein structures`},{value:`+20%`,label:`analysis accuracy in eye-movement evaluation`}],u=[{label:`About`,href:`#about`,number:`01`},{label:`Projects`,href:`#projects`,number:`02`},{label:`Experience`,href:`#experience`,number:`03`},{label:`Capabilities`,href:`#capabilities`,number:`04`},{label:`Contact`,href:`#contact`,number:`05`}];document.querySelector(`#app`).innerHTML=`
  <a class="skip-link" href="#content">Skip to content</a>

  <div class="boot-screen" aria-hidden="true">
    <div class="boot-screen__mark">MT</div>
    <div class="boot-screen__readout">
      <span>VISION_SYSTEM / PORTFOLIO_OS</span>
      <span>INITIALIZING INTERFACE...</span>
      <span class="boot-screen__bar"><i></i></span>
    </div>
  </div>

  <div class="scroll-progress" aria-hidden="true"><span></span></div>
  <div class="cursor-reticle" aria-hidden="true"><i></i></div>
  <div class="page-noise" aria-hidden="true"></div>

  <div class="page-shell">
    <header class="site-header">
      <a class="site-mark" href="#top" aria-label="Milan Tiwari, home" data-cursor>
        <strong>MT</strong>
        <span>ML SYSTEMS<br />PORTFOLIO_26</span>
      </a>

      <nav class="site-nav" aria-label="Primary navigation">
        ${u.map(e=>`
              <a href="${e.href}" data-section-link="${e.href.slice(1)}" data-cursor>
                <span>${e.number}</span>${e.label}
              </a>
            `).join(``)}
      </nav>

      <div class="header-tools">
        <span class="header-status"><i></i>AVAILABLE</span>
        <a class="header-resume" href="${e.resume}" target="_blank" rel="noreferrer" data-cursor>
          RESUME<span>↗</span>
        </a>
      </div>
    </header>

    <main id="content">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero__coordinate hero__coordinate--top" aria-hidden="true">
          X:033.4255 / Y:-111.9400
        </div>
        <div class="hero__coordinate hero__coordinate--bottom" aria-hidden="true">
          FRAME_0001 / SUBJECT_LOCKED
        </div>

        <div class="hero__identity" data-reveal>
          <div class="hero__pretitle">
            <span>PORTFOLIO / 2026</span>
            <span>EMBODIED AI + ML SYSTEMS</span>
          </div>

          <h1 id="hero-title" aria-label="Milan Tiwari">
            <span class="hero__name-solid">MILAN</span>
            <span class="hero__name-outline">TIWARI</span>
          </h1>

          <div class="hero__intro">
            <p class="hero__lede">
              I build the layer between raw data and testable behavior — systems for
              perception, inference, and embodied intelligence.
            </p>
            <div class="hero__actions">
              <a class="brutal-button brutal-button--dark" href="#projects" data-cursor>
                <span>View selected work</span><i>↓</i>
              </a>
              <a class="brutal-button brutal-button--light" href="${e.resume}" target="_blank" rel="noreferrer" data-cursor>
                <span>Open résumé</span><i>↗</i>
              </a>
            </div>
          </div>
        </div>

        <figure class="hero-figure" data-reveal>
          <div class="specimen-bar">
            <span>SUBJECT_001</span>
            <span>RGB / LIVE</span>
            <span>CONF_99.98</span>
          </div>

          <div class="portrait-stage">
            <img src="/media/milan-portrait.png" alt="Portrait of Milan Tiwari" loading="eager" />
            <div class="portrait-wash" aria-hidden="true"></div>
            <div class="vision-box" aria-hidden="true">
              <span class="vision-box__label">PERSON / 99.98%</span>
            </div>
            <span class="crosshair crosshair--a" aria-hidden="true"></span>
            <span class="crosshair crosshair--b" aria-hidden="true"></span>
            <span class="scan-rule" aria-hidden="true"></span>
            <span class="portrait-axis portrait-axis--x" aria-hidden="true">0 20 40 60 80 100</span>
            <span class="portrait-axis portrait-axis--y" aria-hidden="true">Y_AXIS</span>
          </div>

          <figcaption>
            <span>MILAN.TIWARI</span>
            <span>TEMPE_AZ / <b data-local-time>00:00:00</b> MST</span>
          </figcaption>
        </figure>

        <aside class="hero__rail" aria-hidden="true">
          <span>BUILD / BENCHMARK / DEPLOY</span>
          <span>SCROLL_TO_INSPECT ↓</span>
        </aside>

        <div class="hero__meta" data-reveal>
          <div>
            <span>ROLE</span>
            <strong>ML / AI Systems Engineer</strong>
          </div>
          <div>
            <span>FOCUS</span>
            <strong>Embodied AI · 3D Vision · Inference</strong>
          </div>
          <div>
            <span>STATE</span>
            <strong>${e.availability}</strong>
          </div>
        </div>
      </section>

      <section class="signal-strip" aria-label="Areas of practice">
        <div class="signal-strip__track">
          ${[...r,...r].map(e=>`<span><i></i>${e}</span>`).join(``)}
        </div>
      </section>

      <section class="about dossier-section" id="about">
        <header class="section-marker" data-reveal>
          <span class="section-marker__number">01</span>
          <div>
            <span>ABOUT_PROTOCOL</span>
            <span>IDENTITY / OPERATING PRINCIPLES</span>
          </div>
        </header>

        <div class="about__headline" data-reveal>
          <p class="micro-label">THE OPERATING THESIS</p>
          <h2>I BUILD THE LAYER BETWEEN <em>MODELS</em> AND BEHAVIOR.</h2>
        </div>

        <div class="about__layout">
          <div class="about__story" data-reveal>
            <span class="story-index">[A.01—A.03]</span>
            ${i.map(e=>`<p>${e}</p>`).join(``)}
          </div>

          <div class="fact-index" data-reveal>
            ${a.map((e,t)=>`
                  <article class="fact-row">
                    <span>0${t+1}</span>
                    <h3>${e.label}</h3>
                    <p>${e.value}</p>
                  </article>
                `).join(``)}
          </div>
        </div>
      </section>

      <section class="projects" id="projects">
        <header class="projects__header" data-reveal>
          <div class="section-marker section-marker--dark">
            <span class="section-marker__number">02</span>
            <div>
              <span>PROJECT_DIRECTORY</span>
              <span>SELECTED SYSTEMS / 03 CASE FILES</span>
            </div>
          </div>
          <div class="projects__heading">
            <p class="micro-label">FROM INPUT PIPELINE TO MEASURABLE OUTPUT</p>
            <h2>SYSTEMS THAT <em>SEE,</em> INFER, AND ACT.</h2>
          </div>
        </header>

        <div class="project-stack">
          ${o.map((e,t)=>`
                <article class="project-case" data-reveal>
                  <div class="project-case__number" aria-hidden="true">${e.index}</div>

                  <figure class="project-case__media">
                    <div class="media-console">
                      <span>FEED_${e.index}</span>
                      <span>${e.media.type===`video`?`MOTION_ACTIVE`:`IMAGE_STATIC`}</span>
                      <span>16:10 / RGB</span>
                    </div>
                    <div class="media-stage">
                      ${e.media.type===`video`?`<video autoplay muted loop playsinline preload="metadata" src="${e.media.src}" aria-label="${e.media.alt}"></video>`:`<img class="${e.media.className??``}" src="${e.media.src}" alt="${e.media.alt}" loading="lazy" />`}
                      <span class="media-scan" aria-hidden="true"></span>
                      <span class="media-corner media-corner--tl" aria-hidden="true"></span>
                      <span class="media-corner media-corner--br" aria-hidden="true"></span>
                    </div>
                    <figcaption>
                      <span>PROJECT_${e.index} / ${e.descriptor}</span>
                      <span>${t===0?`PRIMARY BUILD`:`SELECTED BUILD`}</span>
                    </figcaption>
                  </figure>

                  <div class="project-case__content">
                    <p class="project-case__eyebrow">${e.eyebrow}</p>
                    <h3>${e.title}</h3>
                    <p class="project-case__summary">${e.summary}</p>

                    <div class="project-proof">
                      ${e.bullets.map((e,t)=>`
                            <div>
                              <span>P${t+1}</span>
                              <p>${e}</p>
                            </div>
                          `).join(``)}
                    </div>

                    <div class="project-case__footer">
                      <div class="metric-list">
                        ${e.metrics.map(e=>`<span>${e}</span>`).join(``)}
                      </div>
                      <a class="repo-link" href="${e.link}" target="_blank" rel="noreferrer" data-cursor>
                        OPEN REPOSITORY <span>↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              `).join(``)}
        </div>
      </section>

      <section class="experience dossier-section" id="experience">
        <header class="section-marker" data-reveal>
          <span class="section-marker__number">03</span>
          <div>
            <span>WORK_LOG</span>
            <span>PRODUCTION HISTORY / REVERSE CHRONOLOGY</span>
          </div>
        </header>

        <div class="experience__heading" data-reveal>
          <p class="micro-label">WHERE THE SYSTEMS MET REAL USERS</p>
          <h2>BUILT IN THE <em>OPEN.</em> TESTED IN REALITY.</h2>
        </div>

        <div class="work-ledger">
          <div class="work-ledger__labels" aria-hidden="true">
            <span>INDEX</span><span>ROLE / ORGANIZATION</span><span>PERIOD</span><span>FIELD NOTES</span>
          </div>
          ${s.map((e,t)=>`
                <article class="work-row" data-reveal>
                  <span class="work-row__index">0${t+1}</span>
                  <div class="work-row__title">
                    <h3>${e.role}</h3>
                    <p>${e.company}</p>
                  </div>
                  <span class="work-row__period">${e.period}</span>
                  <div class="work-row__notes">
                    ${e.points.map(e=>`<p>${e}</p>`).join(``)}
                  </div>
                </article>
              `).join(``)}
        </div>
      </section>

      <section class="capabilities" id="capabilities">
        <div class="capabilities__inner">
          <header class="section-marker section-marker--dark" data-reveal>
            <span class="section-marker__number">04</span>
            <div>
              <span>CAPABILITY_INDEX</span>
              <span>TOOLS / FRAMEWORKS / SYSTEM LAYERS</span>
            </div>
          </header>

          <div class="capabilities__top">
            <div data-reveal>
              <p class="micro-label">TECHNICAL INVENTORY</p>
              <h2>THE BUILD <em>LOOP,</em> END TO END.</h2>
            </div>
            <p data-reveal>
              From ingestion and training to evaluation, deployment, and the interface
              that makes a model inspectable.
            </p>
          </div>

          <div class="capability-grid" data-reveal>
            ${c.map((e,t)=>`
                  <div class="capability-row">
                    <span>0${t+1}</span>
                    <h3>${e.label}</h3>
                    <p>${e.value}</p>
                  </div>
                `).join(``)}
          </div>

          <div class="proof-strip" data-reveal>
            ${l.map(e=>`
                  <div>
                    <strong>${e.value}</strong>
                    <span>${e.label}</span>
                  </div>
                `).join(``)}
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <header class="section-marker section-marker--dark" data-reveal>
          <span class="section-marker__number">05</span>
          <div>
            <span>CONTACT_CHANNEL</span>
            <span>TRANSMISSION READY / TEMPE AZ</span>
          </div>
        </header>

        <div class="contact__main" data-reveal>
          <p class="micro-label">OPEN TO THE RIGHT PROBLEM</p>
          <h2 class="contact__headline">
            <span>LET'S BUILD SOMETHING</span>
            <span>THAT SURVIVES CONTACT</span>
            <span>WITH <em>REALITY.</em></span>
          </h2>

          <a class="contact__email" href="mailto:${e.email}" data-cursor>
            <span>EMAIL_MILAN</span>
            <strong>${e.email}</strong>
            <i>↗</i>
          </a>
        </div>

        <footer class="site-footer">
          <div class="footer-links" aria-label="Contact links">
            ${n.filter(e=>e.label!==`Phone`).map(e=>`
                  <a href="${e.href}" ${e.external?`target="_blank" rel="noreferrer"`:``} data-cursor>
                    <span>${e.label}</span><i>↗</i>
                  </a>
                `).join(``)}
          </div>
          <div class="footer-meta">
            <span>${e.location}</span>
            <span>© 2026 MILAN TIWARI</span>
            <a href="#top" data-cursor>BACK TO TOP ↑</a>
          </div>
        </footer>
      </section>
    </main>
  </div>
`;function d(){let e=document.querySelectorAll(`[data-reveal]`),t=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;if(e.forEach((e,t)=>{e.style.setProperty(`--reveal-order`,t%4)}),t||!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`is-visible`));return}let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),n.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -8% 0px`});e.forEach(e=>n.observe(e))}function f(){let e=document.querySelector(`.site-header`),t=document.querySelector(`.scroll-progress span`),n=!1,r=()=>{let r=document.documentElement.scrollHeight-window.innerHeight,i=r>0?Math.min(window.scrollY/r,1):0;e?.classList.toggle(`is-scrolled`,window.scrollY>20),t?.style.setProperty(`transform`,`scaleX(${i})`),window.scrollY<window.innerHeight*.5&&document.querySelectorAll(`[data-section-link]`).forEach(e=>{e.classList.remove(`is-active`),e.removeAttribute(`aria-current`)}),n=!1};window.addEventListener(`scroll`,()=>{n||(n=!0,window.requestAnimationFrame(r))},{passive:!0}),r()}function p(){let e=[...document.querySelectorAll(`[data-section-link]`)],t=e.map(e=>document.getElementById(e.dataset.sectionLink)).filter(Boolean);if(!(`IntersectionObserver`in window))return;let n=new IntersectionObserver(t=>{let n=t.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];if(window.scrollY<window.innerHeight*.5){e.forEach(e=>{e.classList.remove(`is-active`),e.removeAttribute(`aria-current`)});return}n&&e.forEach(e=>{let t=e.dataset.sectionLink===n.target.id;e.classList.toggle(`is-active`,t),t?e.setAttribute(`aria-current`,`true`):e.removeAttribute(`aria-current`)})},{rootMargin:`-30% 0px -55% 0px`,threshold:[0,.2,.6]});t.forEach(e=>n.observe(e))}function m(){let e=document.querySelector(`.cursor-reticle`),t=window.matchMedia(`(pointer: fine)`).matches,n=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;!e||!t||n||(document.body.classList.add(`has-reticle`),window.addEventListener(`pointermove`,t=>{e.style.setProperty(`--cursor-x`,`${t.clientX}px`),e.style.setProperty(`--cursor-y`,`${t.clientY}px`),e.classList.add(`is-visible`)},{passive:!0}),document.addEventListener(`pointerover`,t=>{e.classList.toggle(`is-targeting`,!!t.target.closest(`[data-cursor]`))}),document.documentElement.addEventListener(`mouseleave`,()=>{e.classList.remove(`is-visible`)}))}function h(){let e=document.querySelector(`.portrait-stage`);!e||!window.matchMedia(`(pointer: fine)`).matches||(e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;e.style.setProperty(`--track-x`,r.toFixed(3)),e.style.setProperty(`--track-y`,i.toFixed(3))}),e.addEventListener(`pointerleave`,()=>{e.style.setProperty(`--track-x`,0),e.style.setProperty(`--track-y`,0)}))}function g(){let e=document.querySelector(`[data-local-time]`);if(!e)return;let t=new Intl.DateTimeFormat(`en-US`,{timeZone:`America/Phoenix`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!1}),n=()=>{e.textContent=t.format(new Date)};n(),window.setInterval(n,1e3)}d(),f(),p(),m(),h(),g();