/* ============================================================
   THE WEALTH FINDER — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ============================
     HEADER SCROLL EFFECT
     ============================ */
  const header = document.querySelector('.site-header');

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ============================
     MOBILE MENU
     ============================ */
  const hamburger = document.querySelector('.hamburger');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileDropdownToggles = document.querySelectorAll('.mobile-nav-item.has-dropdown > a');

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
  }

  // Mobile dropdown tap toggle
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdown = toggle.nextElementSibling;
      if (dropdown && dropdown.classList.contains('mobile-dropdown')) {
        dropdown.classList.toggle('open');
        const chevron = toggle.querySelector('.chevron');
        if (chevron) {
          chevron.style.transform = dropdown.classList.contains('open')
            ? 'rotate(180deg)'
            : 'rotate(0deg)';
        }
      }
    });
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-links a:not(.mobile-nav-item.has-dropdown > a)').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.querySelectorAll('.mobile-dropdown a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu on resize above tablet
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      closeMobileMenu();
    }
  });

  /* ============================
     FAQ ACCORDION
     ============================ */
  const faqItems = document.querySelectorAll('.faq-item');

  const plusSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const minusSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const icon = other.querySelector('.faq-icon');
          if (icon) icon.innerHTML = plusSVG;
        }
      });

      // Toggle current
      item.classList.toggle('active', !isActive);
      const icon = item.querySelector('.faq-icon');
      if (icon) icon.innerHTML = isActive ? plusSVG : minusSVG;
    });
  });

  /* ============================
     SITUATION SECTION — SCROLL SPLIT ANIMATION
     ============================ */
  const situationSection = document.querySelector('.situation');
  const situationTitle = document.querySelector('.situation-title');

  if (situationSection && situationTitle) {
    function updateSituationAnimation() {
      const rect = situationSection.getBoundingClientRect();
      const sectionHeight = situationSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the section (0 at top, increases as we scroll)
      const scrolled = -rect.top;
      // Animation plays over the first viewportHeight of scrolling
      const animationRange = viewportHeight;

      if (scrolled <= 0) {
        // Before section: no split
        situationTitle.style.gap = '18px';
      } else if (scrolled < animationRange) {
        // During animation: split heading apart
        const progress = scrolled / animationRange;
        // Ease out for smooth feel
        const eased = 1 - Math.pow(1 - progress, 3);
        const maxGap = Math.min(window.innerWidth * 0.45, 900);
        const gap = 18 + eased * maxGap;
        situationTitle.style.gap = gap + 'px';
      } else {
        // After animation: fully split
        const maxGap = Math.min(window.innerWidth * 0.45, 900);
        situationTitle.style.gap = (18 + maxGap) + 'px';
      }
    }

    window.addEventListener('scroll', updateSituationAnimation, { passive: true });
    updateSituationAnimation();
  }

  /* ============================
     PROCESS STEPS — SCROLL ENTRANCE ANIMATION
     ============================ */
  const processSection = document.querySelector('.how-we-work');
  const processLine = document.querySelector('.process-line');
  const processSteps = document.querySelectorAll('.process-step');
  const processDots = document.querySelectorAll('.process-dot');

  if (processSection) {
    let processAnimated = false;

    function animateProcessSteps() {
      if (processAnimated) return;

      const rect = processSection.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.75;

      if (rect.top < triggerPoint) {
        processAnimated = true;

        // 1. Animate the dashed line first
        if (processLine) {
          processLine.classList.add('animate');
        }

        // 2. Animate each step with staggered delay
        processSteps.forEach((step, i) => {
          setTimeout(() => {
            step.classList.add('animate');
          }, 300 + i * 200);
        });

        // 3. Animate dots between steps with stagger
        processDots.forEach((dot, i) => {
          setTimeout(() => {
            dot.classList.add('animate');
          }, 500 + i * 200);
        });
      }
    }

    window.addEventListener('scroll', animateProcessSteps, { passive: true });
    animateProcessSteps(); // Check on load in case already in view
  }

  /* ============================
     SMOOTH SCROLL (anchor links)
     ============================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ============================
     SERVICE TABS
     ============================ */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Update active tab
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show corresponding panel
      tabPanels.forEach(panel => {
        panel.style.display = panel.id === target ? 'grid' : 'none';
      });
    });
  });

  // Initialize: show first panel
  if (tabPanels.length > 0) {
    tabPanels.forEach((panel, i) => {
      panel.style.display = i === 0 ? 'grid' : 'none';
    });
  }

  /* ============================
     BLOG CARDS HOVER EXPAND
     ============================ */
  const blogCards = document.querySelectorAll('.blogs-grid .blog-card');

  if (blogCards.length > 0) {
    // Set first card as active by default
    blogCards[0].classList.add('active');

    blogCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        blogCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }
});
