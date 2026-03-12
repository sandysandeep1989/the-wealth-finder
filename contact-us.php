<?php include 'includes/header.php'; ?>

  <!-- ========== CONTACT HERO ========== -->
  <section class="about-hero srv-hero contact-hero" id="contact-hero">
    <div class="about-hero-wrapper">
      <div class="about-hero-inner">
        <div class="about-hero-content" data-reveal="up">
          <h1>Contact TWF &mdash; We&rsquo;re here to help</h1>
          <p class="about-hero-subtitle">Get in touch for investor recovery cases (IEPF, transmission, demat, tracing) and company advisory (suspension, compulsory delisting, revival, NBFC).</p>
          <div class="hero-buttons">
            <a href="tel:+919315656754" class="btn btn-primary">
              <span>Call Us</span>
              <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
            <a href="#" class="btn btn-secondary">
              <span>WhatsApp Us</span>
              <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
            <a href="mailto:info@indiacp.com" class="btn btn-secondary">
              <span>Email Us</span>
              <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== INFO CARD ========== -->
  <section class="contact-info-card-section" id="contact-info">
    <div class="about-section-container">
      <div class="contact-info-card" data-reveal="up">
        <p>The fastest way to get the right guidance is to share your basic details and current situation. Our team will review your message and connect with the right next steps. You can call, WhatsApp, email, or submit the form below&mdash;whatever is easiest for you.</p>
      </div>
    </div>
  </section>

  <!-- ========== CONTACT FORM ========== -->
  <section class="contact-form-section" id="contact-form">
    <div class="about-section-container">
      <div class="contact-form-header" data-reveal="up">
        <h2>Tell us what you need help with</h2>
        <p>Share the basics and we&rsquo;ll guide you on the next steps.</p>
      </div>
      <div class="contact-form-card" data-reveal="up" data-reveal-delay="100">
        <form class="srv-cta-form" id="contactForm" onsubmit="return false;">
          <div class="srv-form-row">
            <div class="srv-form-group">
              <label for="contactName">Name *</label>
              <input type="text" id="contactName" name="name" required placeholder="your full name">
            </div>
            <div class="srv-form-group">
              <label for="contactMobile">Mobile *</label>
              <input type="tel" id="contactMobile" name="mobile" required placeholder="your mobile number">
            </div>
          </div>
          <div class="srv-form-row">
            <div class="srv-form-group">
              <label for="contactEmail">Email *</label>
              <input type="email" id="contactEmail" name="email" required placeholder="your email address">
            </div>
            <div class="srv-form-group">
              <label for="contactCity">City *</label>
              <input type="text" id="contactCity" name="city" required placeholder="Enter your city">
            </div>
          </div>
          <div class="srv-form-row">
            <div class="srv-form-group">
              <label for="contactIAm">I Am *</label>
              <select id="contactIAm" name="i_am" required>
                <option value="" disabled selected>Select...</option>
                <option value="Investor">Investor</option>
                <option value="Legal Heir">Legal Heir</option>
                <option value="NRI">NRI</option>
                <option value="Company Representative">Company Representative</option>
              </select>
            </div>
            <div class="srv-form-group">
              <label for="contactTopic">Topic *</label>
              <select id="contactTopic" name="topic" required>
                <option value="" disabled selected>Select topic...</option>
                <option value="IEPF">IEPF</option>
                <option value="Unclaimed Shares">Unclaimed Shares</option>
                <option value="Transmission">Transmission</option>
                <option value="Demat">Demat</option>
                <option value="Tracing">Tracing</option>
                <option value="Duplicate Certificate">Duplicate Certificate</option>
                <option value="Suspended Company">Suspended Company</option>
                <option value="Compulsory Delisting">Compulsory Delisting</option>
                <option value="Revival">Revival</option>
                <option value="NBFC">NBFC</option>
              </select>
            </div>
          </div>
          <div class="srv-form-row srv-form-full">
            <div class="srv-form-group">
              <label for="contactMessage">Message (Optional)</label>
              <textarea id="contactMessage" name="message" rows="4" placeholder="any additional details that might help...."></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary contact-submit-btn">
            <span>Request a Call Back</span>
            <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- ========== OUR OFFICES ========== -->
  <section class="contact-offices" id="contact-offices">
    <div class="about-section-container">
      <div class="contact-offices-header" data-reveal="up">
        <h2>Our Offices (India)</h2>
        <p>Below are our office locations across India.</p>
      </div>

      <div class="contact-offices-card" data-reveal="up" data-reveal-delay="100">
        <div class="contact-office-tabs">
          <button class="contact-office-tab active" data-office="delhi">Delhi</button>
          <button class="contact-office-tab" data-office="mumbai">Mumbai</button>
          <button class="contact-office-tab" data-office="chennai">Chennai</button>
          <button class="contact-office-tab" data-office="ahmedabad">Ahmedabad</button>
          <button class="contact-office-tab" data-office="nagpur">Nagpur</button>
          <button class="contact-office-tab" data-office="indore">Indore</button>
        </div>

        <div class="contact-office-panel active" id="office-delhi">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">D-38, 1st floor South Ex., Part-I, New Delhi-110049</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Landmark:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">South Ex</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>

        <div class="contact-office-panel" id="office-mumbai">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mumbai Office &mdash; Details coming soon</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>

        <div class="contact-office-panel" id="office-chennai">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Chennai Office &mdash; Details coming soon</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>

        <div class="contact-office-panel" id="office-ahmedabad">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Ahmedabad Office &mdash; Details coming soon</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>

        <div class="contact-office-panel" id="office-nagpur">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Nagpur Office &mdash; Details coming soon</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>

        <div class="contact-office-panel" id="office-indore">
          <div class="contact-office-detail">
            <span class="contact-office-label">Address:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Indore Office &mdash; Details coming soon</span>
          </div>
          <div class="contact-office-detail">
            <span class="contact-office-label">Hours:</span>
            <span class="contact-office-dash"></span>
            <span class="contact-office-value">Mon-Fri: 9:30 AM &ndash; 6:30 PM | Sat: 10:00 AM &ndash; 4:00 PM</span>
          </div>
        </div>
      </div>

    </div>

    <div class="contact-map" data-reveal="up" data-reveal-delay="200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0354088755247!2d77.22229431508063!3d28.56860298243835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25f0f9b3c5b%3A0x9c9f1d0e5a5b0c0b!2sSouth%20Extension%20Part%20I%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
        width="100%"
        height="600"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="TWF Office Location">
      </iframe>
    </div>
  </section>

  <!-- ========== ASSOCIATE NETWORK ========== -->
  <section class="contact-associate" id="contact-associate">
    <div class="about-section-container">
      <div class="contact-associate-card" data-reveal="up">
        <h3>Our Associate Network (Pan-India)</h3>
        <p>We support clients across India through a strong associate network for coordination and on-ground support where required. This helps us guide cases smoothly even when clients are in different cities.</p>
        <h4>Our network typically supports:</h4>
        <ul class="contact-associate-list">
          <li>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9425_8703)">
                <path d="M9.9974 18.3337C14.5998 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 5.39795 14.5998 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337Z" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 9.99967L9.16667 11.6663L12.5 8.33301" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_9425_8703">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </span>
            <span>Document coordination and local follow-ups (case-based)</span>
          </li>
          <li>
            <span class="contact-check-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9425_8703)">
                <path d="M9.9974 18.3337C14.5998 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 5.39795 14.5998 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337Z" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 9.99967L9.16667 11.6663L12.5 8.33301" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_9425_8703">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </span>
            <span>City-level support for meetings or submissions (when needed)</span>
          </li>
          <li>
            <span class="contact-check-icon">
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9425_8703)">
                <path d="M9.9974 18.3337C14.5998 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 5.39795 14.5998 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337Z" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 9.99967L9.16667 11.6663L12.5 8.33301" stroke="#16A34A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_9425_8703">
                <rect width="20" height="20" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            </span>
            <span>Faster communication and structured execution support</span>
          </li>
        </ul>
        <p class="contact-associate-note"><em>(If you want, we can show this as a map graphic later.)</em></p>
      </div>
    </div>
  </section>

  <!-- ========== FAQ ========== -->
  <section class="contact-faq" id="contact-faq">
    <div class="about-section-container">
      <div class="contact-faq-header" data-reveal="up">
        <div class="section-badge center">
          <span class="badge-arrow"><img src="images/leftSvg.svg" class="w-auto" alt=""></span>
          <span class="badge-text">FAQ</span>
          <span class="badge-arrow"><img src="images/rightSvg.svg" class="w-auto" alt=""></span>
        </div>
        <h2>Frequently Asked Questions</h2>
        <p>Get answers to common questions about wealth recovery and IEPF claims</p>
      </div>

      <div class="faq-list contact-faq-list" data-reveal="up" data-reveal-delay="100">
        <div class="faq-item">
          <button class="faq-question">
            <span>What is the best way to contact you?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer">
            <p>WhatsApp is usually fastest for sharing basic details. Calls are best for urgent cases.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Do you support clients outside India (NRIs)?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer">
            <p>Yes. We handle NRI cases through a remote-friendly process.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Do I need to visit the office?</span>
            <span class="faq-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="#020E6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
          <div class="faq-answer">
            <p>Not always. Many cases can be handled remotely. If a visit helps, we&rsquo;ll guide you.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== PARTNER CTA ========== -->
  <section class="cta contact-partner-cta" id="contact-partner">
    <div class="container">
      <div class="cta-content" data-reveal="zoom">
        <h2>Want To Partner With TWF?</h2>
        <p>If you are a Broker / Sub-broker / Wealth advisor / CA / CS / Advocate / Consultant or an execution professional, you can partner with us as a Referral Partner or Execution Partner.</p>
        <div class="hero-buttons" style="justify-content: center;">
          <a href="#" class="btn btn-primary">
            <span>Become a Partner</span>
            <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </a>
          <a href="#" class="btn btn-secondary">
            <span>Refer a Case</span>
            <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </a>
        </div>
      </div>
    </div>
    <div class="cta-glow cta-glow-left"></div>
    <div class="cta-glow cta-glow-right"></div>
  </section>

<?php include 'includes/footer.php'; ?>
