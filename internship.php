<?php include 'includes/header.php'; ?>

  <!-- ========== INTERNSHIP HERO ========== -->
  <section class="internship-hero about-hero" id="internship-hero">
    <div class="about-hero-wrapper">
      <div class="about-hero-inner">
        <div class="about-hero-content" data-reveal="up">
          <h1>Internship at TWF</h1>
          <p class="about-hero-subtitle">Learn structured execution by working on real investor and family cases.</p>
          <div class="hero-buttons">
            <a href="#internship-form" class="btn btn-primary">
              <span>Apply for Internship</span>
              <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
            <a href="#" class="btn btn-secondary">
              <span>WhatsApp Us</span>
              <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== INFO + WHAT YOU'LL LEARN ========== -->
  <section class="internship-info" id="internship-info">
    <div class="about-section-container">
      <!-- Quote Card -->
      <div class="internship-quote-card" data-reveal="up">
        <p>This internship is for people who want real exposure — documentation discipline, process execution, and client-first coordination. You'll learn how high-trust cases are handled end-to-end, using checklists and trackers.</p>
      </div>

      <!-- Two Column Section -->
      <div class="internship-columns" data-reveal="up">
        <div class="internship-col">
          <h2>What you will learn</h2>
          <hr>
          <ul>
            <li>How recovery and ownership cases are structured</li>
            <li>How checklists prevent mistakes</li>
            <li>How to communicate with clients clearly</li>
            <li>How a case moves from first review to closure</li>
          </ul>
        </div>
        <div class="internship-col">
          <h2>Who should apply</h2>
          <hr>
          <p>Students and freshers with strong communication, attention to detail, and comfort with structured work.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== APPLY FORM ========== -->
  <section class="internship-apply" id="internship-form">
    <div class="about-section-container">
      <div class="internship-apply-header" data-reveal="up">
        <h2>Apply For Internship</h2>
        <p>Fill out the form below and we'll get back to you</p>
      </div>
      <div class="internship-form-card" data-reveal="up">
        <form id="internshipForm" novalidate>
          <div class="internship-form-row">
            <div class="internship-field">
              <label for="intern-name">Full Name *</label>
              <input type="text" id="intern-name" name="name" placeholder="your full name" required>
            </div>
            <div class="internship-field">
              <label for="intern-mobile">Mobile *</label>
              <input type="tel" id="intern-mobile" name="mobile" placeholder="your mobile number" required>
            </div>
          </div>
          <div class="internship-form-row">
            <div class="internship-field">
              <label for="intern-email">Email *</label>
              <input type="email" id="intern-email" name="email" placeholder="your email address" required>
            </div>
            <div class="internship-field">
              <label for="intern-city">City *</label>
              <input type="text" id="intern-city" name="city" placeholder="your city" required>
            </div>
          </div>
          <div class="internship-field full">
            <label for="intern-interest">Area of Interest *</label>
            <select id="intern-interest" name="interest" required>
              <option value="" disabled selected>Select area of interest</option>
              <option value="investor-services">Investor Services (Recovery & Ownership)</option>
              <option value="case-operations">Case Operations & Process</option>
              <option value="client-success">Client Success & Communication</option>
              <option value="research-tracing">Research & Tracing</option>
              <option value="legal-docs">Legal & Documentation Support</option>
              <option value="company-advisory">Company Advisory</option>
            </select>
          </div>
          <div class="internship-field full">
            <label>Resume Upload *</label>
            <div class="internship-upload" id="internUpload">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 24v3a3 3 0 003 3h18a3 3 0 003-3v-3M24 12l-6-6-6 6M18 6v18" stroke="#1D30FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p>Drag your file(s) or <span class="upload-browse">browse</span></p>
              <input type="file" id="intern-resume" name="resume" accept=".pdf,.doc,.docx" required>
            </div>
          </div>
          <div class="internship-field full">
            <label for="intern-message">Message (Optional)</label>
            <textarea id="intern-message" name="message" placeholder="any additional details that might help..." rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary internship-submit-btn">
            <span>Apply for Internship</span>
            <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </form>
      </div>
    </div>
  </section>

<?php include 'includes/footer.php'; ?>
