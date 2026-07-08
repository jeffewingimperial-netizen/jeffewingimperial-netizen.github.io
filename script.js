<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jeff Ewing A. Imperial — QA Engineer</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">

<style>
  :root {
    --bg: #0B0F14;
    --panel: #121821;
    --panel-2: #161D27;
    --text: #D7DEE5;
    --muted: #5B6672;
    --pass: #4ADE80;
    --amber: #FBBF24;
    --rule: #1F2733;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.55;
  }

  code, .mono { font-family: 'JetBrains Mono', monospace; }

  a { color: var(--pass); }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }

  .wrap {
    max-width: 780px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }

  /* TERMINAL WINDOW HEADER */
  .terminal {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 28px;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    background: var(--panel-2);
    border-bottom: 1px solid var(--rule);
  }

  .terminal-bar .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--rule);
  }

  .terminal-bar .filename {
    margin-left: 10px;
    font-size: 0.8rem;
    color: var(--muted);
  }

  .terminal-body {
    padding: 28px 26px 30px;
  }

  .prompt {
    color: var(--pass);
    font-size: 0.85rem;
  }

  .prompt span { color: var(--muted); }

  h1 {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: clamp(1.6rem, 5vw, 2.1rem);
    margin: 10px 0 4px;
    letter-spacing: -0.5px;
  }

  .role-line {
    font-family: 'JetBrains Mono', monospace;
    color: var(--amber);
    font-size: 1rem;
    min-height: 1.4em;
    margin-bottom: 16px;
  }

  .role-line .cursor {
    display: inline-block;
    width: 8px;
    background: var(--amber);
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink { 50% { opacity: 0; } }

  .contact {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    font-size: 0.85rem;
    color: var(--muted);
  }

  .contact a { color: var(--text); text-decoration: none; }
  .contact a:hover { color: var(--pass); }

  .summary {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid var(--rule);
    color: var(--text);
    font-size: 0.98rem;
  }

  /* SECTION HEADERS */
  .section-label {
    font-family: 'JetBrains Mono', monospace;
    color: var(--muted);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 40px 0 14px;
  }

  .section-label::before { content: "// "; color: var(--rule); }

  /* SKILLS ACCORDION (describe blocks) */
  .describe {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 8px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .describe-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.92rem;
    font-weight: 600;
    padding: 13px 16px;
    cursor: pointer;
    text-align: left;
  }

  .describe-header:hover, .describe-header:focus-visible {
    background: var(--panel-2);
  }

  .describe-header .caret {
    color: var(--muted);
    transition: transform 0.2s ease;
    font-size: 0.75rem;
  }

  .describe.open .describe-header .caret {
    transform: rotate(90deg);
    color: var(--pass);
  }

  .describe-header .count {
    margin-left: auto;
    color: var(--muted);
    font-weight: 400;
    font-size: 0.8rem;
  }

  .describe-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .describe.open .describe-body {
    max-height: 400px;
  }

  .describe-body ul {
    list-style: none;
    margin: 0;
    padding: 4px 16px 16px 16px;
  }

  .describe-body li {
    font-size: 0.9rem;
    padding: 5px 0;
    color: var(--text);
  }

  .describe-body li::before {
    content: "✓ ";
    color: var(--pass);
    font-family: 'JetBrains Mono', monospace;
    margin-right: 4px;
  }

  /* EXPERIENCE (test cases) */
  .test-case {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-left: 3px solid var(--pass);
    border-radius: 6px;
    padding: 18px 20px;
    margin-bottom: 14px;
  }

  .test-case.current { border-left-color: var(--amber); }

  .test-case-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 6px;
  }

  .test-case-head .status {
    font-family: 'JetBrains Mono', monospace;
    color: var(--pass);
    font-size: 0.85rem;
  }

  .test-case.current .status { color: var(--amber); }

  .test-case h3 {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
    margin: 0;
    color: var(--text);
  }

  .test-case .company {
    color: var(--muted);
    font-size: 0.85rem;
  }

  .test-case .duration {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--muted);
  }

  .test-case ul {
    margin: 10px 0 0;
    padding-left: 18px;
    font-size: 0.9rem;
  }

  .test-case li { margin-bottom: 5px; }

  /* SUMMARY FOOTER */
  .suite-summary {
    margin-top: 40px;
    padding: 18px 20px;
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.88rem;
    color: var(--pass);
  }

  .suite-summary .muted-line {
    color: var(--muted);
    font-size: 0.8rem;
    margin-top: 4px;
  }

</style>
</head>

<body>

<div class="wrap">

  <div class="terminal">
    <div class="terminal-bar">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      <span class="filename">jeff_imperial.resume.js</span>
    </div>
    <div class="terminal-body">
      <div class="prompt"><span>$</span> whoami</div>
      <h1>Jeff Ewing A. Imperial</h1>
      <div class="role-line" id="typing"><span class="cursor">&nbsp;</span></div>

      <div class="contact">
        <span>📍 Quezon City</span>
        <a href="mailto:Jeffewing.imperial@gmail.com" id="copyEmail">📧 Jeffewing.imperial@gmail.com</a>
        <span>📞 0966-722-7598</span>
        <a href="https://www.linkedin.com/in/jeff-imperial-415462185" target="_blank" rel="noopener">💼 LinkedIn</a>
      </div>

      <div class="summary">
        QA Engineer with experience across manual and automated testing — from writing test cases
        by hand to scripting them in Python and Selenium.
      </div>
    </div>
  </div>

  <div class="section-label">describe('Skills')</div>

  <div id="skills"></div>

  <div class="section-label">describe('Experience')</div>

  <div class="test-case current">
    <div class="test-case-head">
      <h3>Software Test Engineer</h3>
      <span class="status">● running</span>
    </div>
    <div class="company">Transcosmos Asia Philippines</div>
    <div class="duration">Jan 27, 2020 — Present · SDLC: Agile</div>
    <ul>
      <li>Designed and executed test cases for both frontend and backend systems</li>
      <li>Managed bug tracking, test reporting, and acceptance criteria using JIRA</li>
      <li>Developed user manuals and wireframes</li>
      <li>Performed mobile testing via BrowserStack across multiple devices and resolutions</li>
      <li>Handled CRUD operations, content population, and testing for CMS platforms like Magento, WordPress, Laravel & Shopify Admin</li>
      <li>Covered regression, smoke, negative, performance, and user testing</li>
    </ul>
  </div>

  <div class="test-case">
    <div class="test-case-head">
      <h3>Automation Quality Engineer</h3>
      <span class="status">✓ passed</span>
    </div>
    <div class="company">Finastra</div>
    <div class="duration">Apr 2019 — Dec 2019 · SDLC: Agile</div>
    <ul>
      <li>Developed and executed automation test scripts using Python and Selenium IDE</li>
      <li>Used HP ALM to run test cases, monitor progress, and manage defect reporting</li>
      <li>Used Jenkins for CI/CD integration and automated testing workflows</li>
      <li>Managed source code with Bitbucket and Git — push, pull, and branch management</li>
    </ul>
  </div>

  <div class="test-case">
    <div class="test-case-head">
      <h3>Quality Assurance Engineer</h3>
      <span class="status">✓ passed</span>
    </div>
    <div class="company">Accenture Inc.</div>
    <div class="duration">Jan 2018 — Mar 2019 · SDLC: Scrum & Waterfall</div>
    <ul>
      <li>Performed manual testing for frontend and backend functionality</li>
      <li>Created detailed test cases using HP ALM, user stories, scope, and limitations</li>
      <li>Evaluated and replicated issues with clear severity classification (Low, Medium, High)</li>
    </ul>
  </div>

  <div class="suite-summary">
    Test Suites: 3 passed, 3 total
    <div class="muted-line">Ran in 6y 0mo · 2018 – Present</div>
  </div>

</div>

<script>
// ===============================
// Typing animation for role line
// ===============================
const roles = [
    "Senior QA Engineer",
    "Manual Tester",
    "Automation Tester",
    "API Tester",
    "Full Stack QA",
    "AI QA Enthusiast"
];
let roleIndex = 0;
let char = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
    const current = roles[roleIndex];
    const visible = current.substring(0, char);
    typingEl.innerHTML = visible + '<span class="cursor">&nbsp;</span>';

    if (!deleting) {
        char++;
    } else {
        char--;
    }

    let speed = deleting ? 40 : 90;

    if (!deleting && char === current.length + 1) {
        speed = 1400;
        deleting = true;
    }
    if (deleting && char === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

// ===============================
// Skills data + accordion rendering
// ===============================
const skillGroups = [
    { name: "Testing Types", items: ["Manual", "Automation", "Smoke", "Regression", "Negative", "User", "Performance", "API"] },
    { name: "Tools", items: ["HP ALM", "Selenium IDE", "Jenkins", "JIRA", "BrowserStack"] },
    { name: "Languages", items: ["Python"] },
    { name: "CMS & Frameworks", items: ["WordPress", "Magento", "Shopify", "Laravel"] },
    { name: "Databases", items: ["MySQL"] },
    { name: "Browser Developer Tools", items: ["Font inspection", "Screen resolution verification"] },
    { name: "Design & Documentation", items: ["Figma", "Microsoft Excel", "Microsoft Word", "PDF"] },
    { name: "Recording Tools", items: ["TechSmith", "Screenpal", "Wholepage"] },
    { name: "Other Automation Extensions", items: ["Axiom", "Test Case Studio (Selenium)"] }
];

const skillsContainer = document.getElementById("skills");

skillGroups.forEach((group, i) => {
    const block = document.createElement("div");
    block.className = "describe";

    const header = document.createElement("button");
    header.className = "describe-header";
    header.innerHTML = `<span class="caret">▶</span> describe('${group.name}') <span class="count">${group.items.length} checks</span>`;
    header.setAttribute("aria-expanded", "false");

    const body = document.createElement("div");
    body.className = "describe-body";
    const ul = document.createElement("ul");
    group.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    body.appendChild(ul);

    header.addEventListener("click", () => {
        const isOpen = block.classList.toggle("open");
        header.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    block.appendChild(header);
    block.appendChild(body);
    skillsContainer.appendChild(block);

    if (i === 0) block.classList.add("open"); // first group open by default
});

// ===============================
// Copy email on click
// ===============================
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("Jeffewing.imperial@gmail.com");
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = "✔ Copied!";
        setTimeout(() => { copyBtn.innerHTML = original; }, 1800);
    });
}
</script>

</body>
</html>
