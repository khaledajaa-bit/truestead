// ==========================================================
// TRUESTEAD ($STEAD) — interactions
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Boot sequence ---------- */
  const bootScreen = document.getElementById('boot-screen');
  const bootLine   = document.getElementById('boot-line');
  const bootFill   = document.getElementById('boot-fill');

  const bootMessage = 'LOADING TRUESTEAD PROTOCOL...';
  let i = 0;

  function typeBoot(){
    if(i <= bootMessage.length){
      bootLine.textContent = bootMessage.slice(0, i);
      i++;
      setTimeout(typeBoot, 35);
    }
  }
  typeBoot();

  let progress = 0;
  const fillTimer = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if(progress >= 100){
      progress = 100;
      clearInterval(fillTimer);
      setTimeout(() => bootScreen.classList.add('hidden'), 250);
    }
    bootFill.style.width = progress + '%';
  }, 140);

  // Safety net: never trap the user on the boot screen
  setTimeout(() => bootScreen.classList.add('hidden'), 3500);

  /* ---------- Mobile nav toggle ---------- */
  const burger = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav-links');
  if(burger && navLinks){
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---------- Terminal type-out ---------- */
  const terminalBody = document.getElementById('terminalBody');
  const terminalScript = [
    '> connecting to truestead_registry...',
    '> ok',
    '',
    '> GET /assets/verify',
    '  [OK] real_estate_deed_0001.pdf ... hash matched',
    '  [OK] gold_vault_audit_q3.pdf .... hash matched',
    '  [OK] tbill_custody_report.pdf .. hash matched',
    '',
    '> asset status: VERIFIED',
    '> reserves: PUBLIC',
    '> ledger: IMMUTABLE',
    '',
    '> $STEAD is backed by real assets.'
  ];

  function typeTerminal(){
    if(!terminalBody) return;
    let lineIndex = 0;
    let charIndex = 0;
    terminalBody.textContent = '';

    function nextChar(){
      if(lineIndex >= terminalScript.length) return;
      const line = terminalScript[lineIndex];
      if(charIndex <= line.length){
        const linesSoFar = terminalScript.slice(0, lineIndex).join('\n');
        terminalBody.textContent = linesSoFar + (lineIndex > 0 ? '\n' : '') + line.slice(0, charIndex);
        charIndex++;
        setTimeout(nextChar, 14);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(nextChar, 90);
      }
    }
    nextChar();
  }

  const terminalSection = document.getElementById('onchain');
  if(terminalSection){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          typeTerminal();
          observer.disconnect();
        }
      });
    }, { threshold: 0.4 });
    observer.observe(terminalSection);
  }

  /* ---------- Sticky nav shrink on scroll ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if(nav) nav.style.boxShadow = window.scrollY > 10 ? '0 4px 0 rgba(0,0,0,0.4)' : 'none';
  });

});
