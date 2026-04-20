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
    const stickyWrapper = situationSection.querySelector('.situation-sticky-wrapper');
    const stickyEl = situationSection.querySelector('.situation-sticky');
    const cardsContainer = situationSection.querySelector('.situation-cards');

    function updateSituationAnimation() {
      if (!stickyWrapper || !stickyEl || !cardsContainer) return;

      const sectionRect = situationSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrolled = -sectionRect.top; // how far into section

      // --- Gap animation ---
      const animationRange = viewportHeight;
      const maxGap = Math.min(window.innerWidth * 0.45, 900);

      if (scrolled <= 0) {
        situationTitle.style.gap = '18px';
      } else if (scrolled < animationRange) {
        const progress = scrolled / animationRange;
        const eased = 1 - Math.pow(1 - progress, 3);
        situationTitle.style.gap = (18 + eased * maxGap) + 'px';
      } else {
        situationTitle.style.gap = (18 + maxGap) + 'px';
      }

      // --- Fixed positioning ---
      const stickyH = stickyEl.offsetHeight;
      const lastCard = cardsContainer.querySelector('.situation-card:last-child');
      if (!lastCard) return;

      const lastCardRect = lastCard.getBoundingClientRect();
      const lastCardBottom = lastCardRect.bottom;

      // Fix title when section scrolls into view
      if (scrolled > 0 && lastCardBottom > stickyH) {
        // Cards still scrolling — keep title fixed
        stickyEl.classList.add('is-fixed');
        stickyEl.classList.remove('is-bottom');
        stickyEl.style.top = '0px';
        stickyEl.style.bottom = '';
        // Reserve space so content doesn't jump
        stickyWrapper.style.height = stickyH + 'px';
      } else if (scrolled > 0 && lastCardBottom <= stickyH) {
        // Last card passed — pin title at that scroll position (absolute)
        stickyEl.classList.remove('is-fixed');
        stickyEl.classList.add('is-bottom');
        // Position absolutely at the bottom of cards
        const cardsRect = cardsContainer.getBoundingClientRect();
        const cardsBottom = cardsContainer.offsetTop + cardsContainer.offsetHeight;
        stickyEl.style.top = (cardsBottom - stickyH) + 'px';
        stickyEl.style.bottom = '';
        stickyWrapper.style.height = stickyH + 'px';
      } else {
        // Before section — normal flow
        stickyEl.classList.remove('is-fixed');
        stickyEl.classList.remove('is-bottom');
        stickyEl.style.top = '';
        stickyWrapper.style.height = '';
      }
    }

    window.addEventListener('scroll', updateSituationAnimation, { passive: true });
    window.addEventListener('resize', updateSituationAnimation);
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
  let hoverTimer = null;

  if (blogCards.length > 0) {
    // Set first card as active by default
    blogCards[0].classList.add('active');

    blogCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Disable expand on tablet/mobile where cards stack
        if (window.innerWidth <= 1024) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => {
          blogCards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');
        }, 100);
      });
    });
  }

  /* ============================
     SCROLL REVEAL ANIMATIONS
     ============================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      } else {
        // Remove class when out of view so it re-animates on next scroll
        entry.target.classList.remove('revealed');
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
    revealObserver.observe(el);
  });

  /* ============================
     ABOUT HOW WE WORK — SCROLL ENTRANCE ANIMATION
     ============================ */
  const hwwSections = document.querySelectorAll('.about-howwework, .srv-solutions');

  hwwSections.forEach(section => {
    let animated = false;
    const line = section.querySelector('.about-hww-line');
    const steps = section.querySelectorAll('.about-hww-step');
    const dots = section.querySelectorAll('.about-hww-dot');

    function animateHww() {
      if (animated) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        animated = true;
        if (line) line.classList.add('animate');
        steps.forEach((step, i) => {
          setTimeout(() => step.classList.add('animate'), 300 + i * 200);
        });
        dots.forEach((dot, i) => {
          setTimeout(() => dot.classList.add('animate'), 500 + i * 200);
        });
      }
    }

    window.addEventListener('scroll', animateHww, { passive: true });
    animateHww();
  });

  /* ============================
     TEAM CAROUSEL — arrow scroll & left fade
     ============================ */
  const teamCarousel = document.querySelector('.about-team-carousel');
  const teamFade = document.querySelector('.about-team-carousel-fade');
  const teamArrows = document.querySelectorAll('.about-team-arrow');

  if (teamCarousel && teamArrows.length === 2) {
    const cardWidth = 340 + 40; // card width + gap

    teamArrows[0].addEventListener('click', () => {
      teamCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    teamArrows[1].addEventListener('click', () => {
      teamCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    if (teamFade) {
      teamCarousel.addEventListener('scroll', () => {
        if (teamCarousel.scrollLeft > 20) {
          teamFade.classList.add('visible');
        } else {
          teamFade.classList.remove('visible');
        }
      }, { passive: true });
    }
  }

  /* ============================
     GLOSSARY PAGE — Search, Alphabet Filter, Accordion
     ============================ */
  const glossarySearch = document.getElementById('glossarySearch');
  const glossaryAlphaNav = document.querySelector('.glossary-quickjump');
  const glossaryGroups = document.querySelectorAll('.glossary-terms-group');

  if (glossarySearch && glossaryGroups.length > 0) {
    const letterBtns = document.querySelectorAll('.glossary-letter-btn');
    let activeFilter = 'all';

    // No-results message
    const termsList = document.querySelector('.glossary-terms-list');
    const noResults = document.createElement('div');
    noResults.className = 'glossary-no-results';
    noResults.textContent = 'No matching terms found.';
    if (termsList) termsList.appendChild(noResults);

    // Accordion toggle
    glossaryGroups.forEach(group => {
      const header = group.querySelector('.glossary-group-header');
      if (!header) return;
      header.addEventListener('click', () => {
        group.classList.toggle('active');
      });
    });

    // Alphabet filter
    if (glossaryAlphaNav) {
      glossaryAlphaNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.glossary-letter-btn');
        if (!btn) return;

        activeFilter = btn.getAttribute('data-letter');
        letterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        glossarySearch.value = '';
        applyFilters();
      });
    }

    // Search input
    glossarySearch.addEventListener('input', () => {
      applyFilters();
    });

    // Search button
    const searchBtn = document.querySelector('.glossary-search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        applyFilters();
      });
    }

    function applyFilters() {
      const query = glossarySearch.value.trim().toLowerCase();
      let anyVisible = false;

      glossaryGroups.forEach(group => {
        const letter = group.getAttribute('data-letter');
        const cards = group.querySelectorAll('.glossary-term-card');

        // Check letter filter
        const letterMatch = activeFilter === 'all' || letter === activeFilter;

        if (!letterMatch) {
          group.classList.add('hidden');
          group.classList.remove('active');
          return;
        }

        if (!query) {
          // No search query — show group, hide no individual cards
          group.classList.remove('hidden');
          group.classList.add('active');
          cards.forEach(card => card.classList.remove('hidden'));
          anyVisible = true;
          return;
        }

        // Search within cards
        let groupHasMatch = false;
        cards.forEach(card => {
          const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
          const desc = (card.querySelector('p')?.textContent || '').toLowerCase();
          if (title.includes(query) || desc.includes(query)) {
            card.classList.remove('hidden');
            groupHasMatch = true;
          } else {
            card.classList.add('hidden');
          }
        });

        if (groupHasMatch) {
          group.classList.remove('hidden');
          group.classList.add('active'); // auto-expand matching groups
          anyVisible = true;
        } else {
          group.classList.add('hidden');
          group.classList.remove('active');
        }
      });

      // Toggle no-results message
      noResults.classList.toggle('visible', !anyVisible);
    }
  }

  /* ============================
     FAQ PAGE TABS
     ============================ */
  const faqTabBtns = document.querySelectorAll('.faq-tab-btn');
  const faqTabPanels = document.querySelectorAll('.faq-tab-panel');

  // Open all FAQ items by default on FAQ page
  const faqContentCard = document.querySelector('.faq-content-card');
  if (faqContentCard) {
    faqContentCard.querySelectorAll('.faq-item').forEach(item => {
      item.classList.add('active');
      const icon = item.querySelector('.faq-icon');
      if (icon) icon.innerHTML = minusSVG;
    });
  }

  faqTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-faq-tab');

      faqTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      faqTabPanels.forEach(panel => {
        if (panel.id === target) {
          panel.classList.add('active');
          // Open all items in the shown panel
          panel.querySelectorAll('.faq-item').forEach(item => {
            item.classList.add('active');
            const icon = item.querySelector('.faq-icon');
            if (icon) icon.innerHTML = minusSVG;
          });
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  /* ============================
     CONTACT PAGE — OFFICE TABS
     ============================ */
  const officeTabs = document.querySelectorAll('.contact-office-tab');
  const officePanels = document.querySelectorAll('.contact-office-panel');

  officeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-office');

      officeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      officePanels.forEach(panel => {
        if (panel.id === 'office-' + target) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
});

/* =========================================================
   Hero Typewriter Effect — cycle words
   ========================================================= */
(function () {
  if (!document.getElementById('heroTypewriter')) return;

  var words = ['Shares', 'Dividends'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 100;
  var deleteSpeed = 60;
  var pauseAfterType = 1800;
  var pauseAfterDelete = 400;

  function tick() {
    var el = document.getElementById('heroTypewriter');
    if (!el) return;
    var current = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterType);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex--;
      el.textContent = current.substring(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, pauseAfterDelete);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  // Start after a short delay
  setTimeout(tick, 600);
})();

/* =========================================================
   Sticky sections — smart sticky based on screen vs section height
   If section shorter than screen → stick at top (below header)
   If section taller than screen → use negative top so user can
   scroll through ALL content before next section covers it
   ========================================================= */
(function () {
  if (!document.body.classList.contains('home-page')) return;
  var stickies = document.querySelectorAll('.section-stack .stats, .section-stack .blogs');
  var header   = document.getElementById('siteHeader');
  if (!stickies.length || !header) return;

  function sync() {
    var headerH = header.offsetHeight;
    var vh = window.innerHeight;

    stickies.forEach(function (el) {
      var elH = el.offsetHeight;
      var availableH = vh - headerH;

      if (elH <= availableH) {
        // Section fits in viewport — stick at fixed 80px from top
        el.style.top = '80px';
      } else {
        // Section taller than viewport — negative top so bottom
        // content is visible right before next section scrolls over
        el.style.top = -(elH - vh) + 'px';
      }
    });
  }
  sync();
  window.addEventListener('resize', sync);
})();

/* =========================================================
   Form Tags Toggle (multi-select)
   ========================================================= */
document.querySelectorAll('.srv-form-tags').forEach(container => {
  container.addEventListener('click', function(e) {
    const tag = e.target.closest('.srv-tag');
    if (tag) {
      tag.classList.toggle('active');
    }
  });
});

/* =========================================================
   Life at TWF — Thumbnail Gallery Slider (Drag + Click)
   ========================================================= */
(function () {
  var gallery = document.querySelector('.careers-life-gallery');
  if (!gallery) return;

  var mainImg = gallery.querySelector('#lifeMainImg');
  var thumbs = gallery.querySelectorAll('.careers-thumb');
  var strip = gallery.querySelector('.careers-life-thumbstrip');
  if (!mainImg || !thumbs.length || !strip) return;

  var current = -1; // -1 = life-main.jpg (default)

  /* ---- Click thumb: switch main image + scroll to center ---- */
  function activate(index) {
    if (current >= 0) thumbs[current].classList.remove('active');
    current = index;
    thumbs[current].classList.add('active');

    var src = thumbs[current].getAttribute('data-full');
    mainImg.style.opacity = '0';
    setTimeout(function () {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 300);

    scrollToThumb(current);
  }

  function scrollToThumb(index) {
    var thumb = thumbs[index];
    var stripW = strip.offsetWidth;
    var thumbLeft = thumb.offsetLeft;
    var thumbW = thumb.offsetWidth;
    var target = thumbLeft - (stripW / 2) + (thumbW / 2);
    strip.scrollTo({ left: target, behavior: 'smooth' });
  }

  thumbs.forEach(function (thumb, i) {
    thumb.addEventListener('click', function () {
      if (dragged) return; // ignore click after drag
      if (i === current) return;
      activate(i);
    });
  });

  /* ---- Drag-to-scroll (mouse) ---- */
  var isDragging = false;
  var dragged = false;
  var startX = 0;
  var scrollStart = 0;

  strip.addEventListener('mousedown', function (e) {
    isDragging = true;
    dragged = false;
    startX = e.pageX;
    scrollStart = strip.scrollLeft;
    strip.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    var dx = e.pageX - startX;
    if (Math.abs(dx) > 5) dragged = true;
    strip.scrollLeft = scrollStart - dx;
  });

  document.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    strip.style.cursor = 'grab';
    // Reset dragged flag after a tick so click handler can check it
    setTimeout(function () { dragged = false; }, 0);
  });

  /* ---- Touch drag (mobile — native scroll handles it, but track dragged state) ---- */
  var touchStartX = 0;
  strip.addEventListener('touchstart', function (e) {
    dragged = false;
    touchStartX = e.touches[0].pageX;
  }, { passive: true });

  strip.addEventListener('touchmove', function (e) {
    if (Math.abs(e.touches[0].pageX - touchStartX) > 5) dragged = true;
  }, { passive: true });

  strip.addEventListener('touchend', function () {
    setTimeout(function () { dragged = false; }, 0);
  });
})();

/* ============================
   HERO RICH ANIMATIONS
   ============================ */
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var heroInner = hero.querySelector('.hero-inner');
  var titleEl = hero.querySelector('.hero-title-anim');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Split title into words (tag-aware) --- */
  if (titleEl && !prefersReducedMotion) {
    var html = titleEl.innerHTML;
    // Split into HTML tags and text runs, then wrap only text words
    var tokens = html.split(/(<[^>]+>)/);
    var wordIndex = 0;
    var newHtml = tokens.map(function (token) {
      if (/^</.test(token)) return token; // HTML tag — keep intact
      // Text node — split into words and whitespace
      return token.split(/(\s+)/).map(function (part) {
        if (/^\s*$/.test(part)) return part;
        wordIndex++;
        return '<span class="hero-word" style="transition-delay:' + (wordIndex * 0.04) + 's">' + part + '</span>';
      }).join('');
    }).join('');
    titleEl.innerHTML = newHtml;
    hero.style.setProperty('--hero-word-count', wordIndex);
  }

  /* --- Mouse-follow glow --- */
  var glow = null;
  if (heroInner && window.innerWidth > 767 && !prefersReducedMotion) {
    glow = document.createElement('div');
    glow.className = 'hero-mouse-glow';
    heroInner.appendChild(glow);

    var rafId = null;
    heroInner.addEventListener('mousemove', function (e) {
      if (rafId) return;
      rafId = requestAnimationFrame(function () {
        var rect = heroInner.getBoundingClientRect();
        glow.style.left = (e.clientX - rect.left) + 'px';
        glow.style.top = (e.clientY - rect.top) + 'px';
        rafId = null;
      });
    }, { passive: true });

    heroInner.addEventListener('mouseleave', function () {
      glow.style.opacity = '0';
    });
    heroInner.addEventListener('mouseenter', function () {
      glow.style.opacity = '';
    });
  }

  /* --- Trigger animations on load --- */
  function triggerHeroAnimation() {
    hero.classList.add('hero-animated');

    // Stagger word reveals
    if (!prefersReducedMotion) {
      var wordSpans = hero.querySelectorAll('.hero-word');
      wordSpans.forEach(function (span, i) {
        setTimeout(function () {
          span.classList.add('visible');
        }, 400 + i * 40); // start after badge, 40ms per word
      });
    }
  }

  // Observe hero entering viewport (or fire immediately if already visible)
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var heroObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          triggerHeroAnimation();
          heroObs.disconnect();
        }
      });
    }, { threshold: 0.15 });
    heroObs.observe(hero);
  } else {
    // Fallback — animate immediately
    triggerHeroAnimation();
  }

  /* --- Subtle parallax on orbs via mouse --- */
  if (window.innerWidth > 767 && !prefersReducedMotion) {
    var orbs = hero.querySelectorAll('.hero-orb');
    var parallaxRaf = null;

    window.addEventListener('mousemove', function (e) {
      if (parallaxRaf) return;
      parallaxRaf = requestAnimationFrame(function () {
        var cx = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        var cy = (e.clientY / window.innerHeight - 0.5) * 2;
        orbs.forEach(function (orb, i) {
          var factor = (i + 1) * 6;
          orb.style.transform = 'translate(' + (cx * factor) + 'px, ' + (cy * factor) + 'px)';
        });
        parallaxRaf = null;
      });
    }, { passive: true });
  }
})();

/* ============================
   PAGE-WIDE ANIMATIONS
   ============================ */
(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  /* --- Header entrance --- */
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    // Small delay so the page renders first
    setTimeout(function () {
      siteHeader.classList.add('header-visible');
    }, 100);
  }

  /* --- Stat number count-up animation --- */
  var statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.dataset.counted) return;
        el.dataset.counted = '1';

        // Get only the direct text (excluding child spans like .stat-plus)
        var directText = '';
        for (var i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === 3) { // text node
            directText += el.childNodes[i].textContent;
          }
        }
        directText = directText.trim();
        // Extract number and prefix (₹)
        var match = directText.match(/^([₹]?)(\d+)(.*)/);
        if (!match) return;
        var prefix = match[1];
        var target = parseInt(match[2], 10);
        var suffix = match[3]; // e.g. "Cr"
        var duration = 1800; // ms
        var startTime = null;
        // Find or create the text node to animate
        var textNode = null;
        for (var j = 0; j < el.childNodes.length; j++) {
          if (el.childNodes[j].nodeType === 3 && el.childNodes[j].textContent.trim()) {
            textNode = el.childNodes[j];
            break;
          }
        }
        if (!textNode) return;

        function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var current = Math.round(easeOutExpo(progress) * target);
          textNode.textContent = prefix + current + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.closest('.stat-row').classList.add('counted');
          }
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  /* --- Footer bottom row reveal --- */
  var footerBottomRow = document.querySelector('.footer-bottom-row');
  if (footerBottomRow) {
    var footerObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          footerObs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    footerObs.observe(footerBottomRow);
  }

  /* --- Footer social icons stagger --- */
  var footerSocials = document.querySelectorAll('.footer-socials a');
  if (footerSocials.length) {
    var socialObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var icons = entry.target.querySelectorAll('a');
        icons.forEach(function (icon, i) {
          icon.style.opacity = '0';
          icon.style.transform = 'translateY(12px) scale(0.8)';
          setTimeout(function () {
            icon.style.transition = 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)';
            icon.style.opacity = '';
            icon.style.transform = '';
          }, 100 + i * 80);
        });
        socialObs.disconnect();
      });
    }, { threshold: 0.3 });
    var socialContainer = document.querySelector('.footer-socials');
    if (socialContainer) socialObs.observe(socialContainer);
  }

  /* --- Footer links stagger-in --- */
  var footerGrid = document.querySelector('.footer-grid');
  if (footerGrid) {
    var footerGridObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var columns = entry.target.children;
        Array.prototype.forEach.call(columns, function (col, ci) {
          col.style.opacity = '0';
          col.style.transform = 'translateY(24px)';
          setTimeout(function () {
            col.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
            col.style.opacity = '1';
            col.style.transform = 'translateY(0)';
          }, 150 + ci * 120);
        });
        footerGridObs.disconnect();
      });
    }, { threshold: 0.15 });
    footerGridObs.observe(footerGrid);
  }

  /* --- CTA section reveal trigger --- */
  var ctaSection = document.querySelector('.cta');
  if (ctaSection) {
    var ctaObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.3 });
    ctaObs.observe(ctaSection);
  }

  /* --- Section title line-reveal on in-view --- */
  var sectionTitles = document.querySelectorAll('.section-title-center, .start-here-content h2, .services-header h2, .faq-header h2, .blogs-header-left h2, .associate-header-left h2');
  sectionTitles.forEach(function (title) {
    if (title.closest('.hero')) return; // skip hero, it has its own
    var linesObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        title.style.opacity = '1';
        linesObs.disconnect();
      });
    }, { threshold: 0.3 });
    linesObs.observe(title);
  });

  /* --- Tilt effect on situation cards (desktop only) --- */
  if (window.innerWidth > 1024) {
    var sitCards = document.querySelectorAll('.situation-card');
    sitCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(600px) rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg) translateY(-8px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* --- Magnetic effect on CTA button (desktop only) --- */
  if (window.innerWidth > 1024) {
    var ctaBtn = document.querySelector('.cta .btn-primary');
    if (ctaBtn) {
      ctaBtn.addEventListener('mousemove', function (e) {
        var rect = ctaBtn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        ctaBtn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });
      ctaBtn.addEventListener('mouseleave', function () {
        ctaBtn.style.transform = '';
      });
    }
  }
})();

/* ============================
   JS-BASED STICKY SIDEBAR
   (services-header & faq-header — desktop only)
   ============================ */
(function () {
  var stickyOffset = 140; // px from top
  var panels = [
    { header: '.services-header', wrapper: '.services-layout' },
    { header: '.faq-header', wrapper: '.faq-layout' }
  ];

  panels.forEach(function (cfg) {
    var header = document.querySelector(cfg.header);
    var wrapper = document.querySelector(cfg.wrapper);
    if (!header || !wrapper) return;

    // Create a placeholder to hold the space when header goes fixed
    var placeholder = document.createElement('div');
    placeholder.style.display = 'none';
    header.parentNode.insertBefore(placeholder, header);

    var headerW = header.offsetWidth;
    var isFixed = false;
    var isBottomed = false;
    var raf = null;

    function resetSticky() {
      header.style.position = '';
      header.style.top = '';
      header.style.width = '';
      header.style.left = '';
      header.style.bottom = '';
      placeholder.style.display = 'none';
      wrapper.style.position = '';
      isFixed = false;
      isBottomed = false;
    }

    function measure() {
      headerW = placeholder.style.display === 'none' ? header.offsetWidth : placeholder.offsetWidth;
    }

    function onScroll() {
      // Skip on mobile/tablet
      if (window.innerWidth <= 1024) {
        if (isFixed || isBottomed) resetSticky();
        return;
      }

      if (raf) return;
      raf = requestAnimationFrame(function () {
        var wrapperRect = wrapper.getBoundingClientRect();
        var headerH = header.offsetHeight;
        var wrapperBottom = wrapperRect.bottom;
        var wrapperTop = wrapperRect.top;

        // Section hasn't reached the sticky zone yet
        if (wrapperTop >= stickyOffset) {
          if (isFixed || isBottomed) {
            header.style.position = '';
            header.style.top = '';
            header.style.width = '';
            header.style.left = '';
            placeholder.style.display = 'none';
            isFixed = false;
            isBottomed = false;
          }
        }
        // Section bottom is close — pin header to bottom of wrapper
        else if (wrapperBottom <= headerH + stickyOffset) {
          if (!isBottomed) {
            header.style.position = 'absolute';
            header.style.top = 'auto';
            header.style.bottom = '0';
            header.style.left = '0';
            header.style.width = headerW + 'px';
            placeholder.style.display = 'block';
            placeholder.style.width = headerW + 'px';
            placeholder.style.height = headerH + 'px';
            placeholder.style.flexShrink = '0';
            // wrapper needs relative for absolute child
            wrapper.style.position = 'relative';
            isFixed = false;
            isBottomed = true;
          }
        }
        // Sticky zone — fix header to viewport
        else {
          if (!isFixed) {
            measure();
            header.style.position = 'fixed';
            header.style.top = stickyOffset + 'px';
            header.style.bottom = '';
            header.style.width = headerW + 'px';
            header.style.left = '';
            // Get the correct left position
            var placeholderLeft = placeholder.style.display !== 'none'
              ? placeholder.getBoundingClientRect().left
              : header.getBoundingClientRect().left;
            placeholder.style.display = 'block';
            placeholder.style.width = headerW + 'px';
            placeholder.style.height = headerH + 'px';
            placeholder.style.flexShrink = '0';
            header.style.left = placeholderLeft + 'px';
            wrapper.style.position = 'relative';
            isFixed = true;
            isBottomed = false;
          }
        }
        raf = null;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', function () {
      if (window.innerWidth <= 1024) {
        resetSticky();
      } else {
        measure();
        onScroll();
      }
    });
    onScroll();
  });
})();

/* ============================
   TESTIMONIALS READ MORE TOGGLE
   ============================ */
function toggleTestimonials() {
  const grid = document.querySelector('.testimonials-grid');
  const btn = document.getElementById('toggleTestimonials');
  if (!grid || !btn) return;

  const label = btn.querySelector('span:first-child');
  grid.classList.toggle('show-all');
  if (grid.classList.contains('show-all')) {
    label.textContent = 'Show Less';
  } else {
    label.textContent = 'Read More';
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
  }
}
