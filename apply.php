<?php include 'includes/header.php'; ?>

  <!-- ========== APPLY HERO ========== -->
  <section class="apply-hero about-hero" id="apply-hero">
    <div class="about-hero-wrapper">
      <div class="about-hero-inner">
        <div class="about-hero-content" data-reveal="up">
          <h1>Apply to TWF</h1>
          <p class="about-hero-subtitle">Share your profile. If there's a fit, we'll reach out.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== INFO SECTION ========== -->
  <section class="apply-info" id="apply-info">
    <div class="about-section-container">
      <!-- Quote Card -->
      <div class="apply-quote-card" data-reveal="up">
        <p>This internship is for people who want real exposure — documentation discipline, process execution, and client-first coordination. You'll learn how high-trust cases are handled end-to-end, using checklists and trackers.</p>
      </div>

      <!-- Two Column Section -->
      <div class="apply-columns" data-reveal="up">
        <div class="apply-col">
          <h3>What you will learn</h3>
          <hr>
          <ul>
            <li>How recovery and ownership cases are structured</li>
            <li>How checklists prevent mistakes</li>
            <li>How to communicate with clients clearly</li>
            <li>How a case moves from first review to closure</li>
          </ul>
        </div>
        <div class="apply-col">
          <h3>Who should apply</h3>
          <hr>
          <p>Students and freshers with strong communication, attention to detail, and comfort with structured work.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== HOW HIRING WORKS ========== -->
  <section class="apply-hiring" id="apply-hiring">
    <div class="about-section-container">
      <div class="apply-hiring-header" data-reveal="up">
        <h2>How hiring works</h2>
      </div>
      <div class="apply-hiring-timeline" data-reveal-stagger>
        <div class="apply-timeline-line"></div>
        <!-- Step 1 -->
        <div class="apply-step" data-reveal="up">
          <div class="apply-step-number">01</div>
          <div class="apply-step-content">
            <h4>Apply via form</h4>
            <p>Submit your application with resume</p>
          </div>
        </div>
        <!-- Step 2 -->
        <div class="apply-step" data-reveal="up">
          <div class="apply-step-number">02</div>
          <div class="apply-step-content">
            <h4>Short screening call</h4>
            <p>Quick discussion about your profile</p>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="apply-step" data-reveal="up">
          <div class="apply-step-number">03</div>
          <div class="apply-step-content">
            <h4>Small practical task</h4>
            <p>Test your skills with real scenarios</p>
          </div>
        </div>
        <!-- Step 4 -->
        <div class="apply-step" data-reveal="up">
          <div class="apply-step-number">04</div>
          <div class="apply-step-content">
            <h4>Final interview</h4>
            <p>Meet the team and discuss the role</p>
          </div>
        </div>
        <!-- Step 5 -->
        <div class="apply-step" data-reveal="up">
          <div class="apply-step-number">05</div>
          <div class="apply-step-content">
            <h4>Offer + onboarding</h4>
            <p>Welcome to TWF!</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== APPLICATION FORM ========== -->
  <section class="apply-form-section" id="apply-form">
    <div class="about-section-container">
      <div class="apply-form-header" data-reveal="up">
        <h2>Application Form</h2>
        <p>Complete the form below to submit your application</p>
      </div>
      <div class="apply-form-card" data-reveal="up">
        <form id="applyForm" novalidate>
          <div class="apply-form-row">
            <div class="apply-field">
              <label for="apply-name">Full Name *</label>
              <input type="text" id="apply-name" name="name" placeholder="your full name" required>
            </div>
            <div class="apply-field">
              <label for="apply-mobile">Mobile *</label>
              <input type="tel" id="apply-mobile" name="mobile" placeholder="your mobile number" required>
            </div>
          </div>
          <div class="apply-form-row">
            <div class="apply-field">
              <label for="apply-email">Email *</label>
              <input type="email" id="apply-email" name="email" placeholder="your email address" required>
            </div>
            <div class="apply-field">
              <label for="apply-city">City *</label>
              <input type="text" id="apply-city" name="city" placeholder="your city" required>
            </div>
          </div>
          <div class="apply-field full">
            <label for="apply-role">Role Applying For *</label>
            <select id="apply-role" name="role" required>
              <option value="" disabled selected>Select a role</option>
              <option value="case-coordinator">Case Coordinator (Investor Services)</option>
              <option value="documentation-executive">Documentation Executive</option>
              <option value="client-support">Client Support Executive</option>
              <option value="research-tracing">Research & Tracing Executive</option>
              <option value="process-quality">Process & Quality Analyst</option>
              <option value="content-writer">Content Writer (Guides/Resources)</option>
            </select>
          </div>
          <div class="apply-field full">
            <label>Resume Upload *</label>
            <div class="apply-upload" id="applyUpload">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M6 24v3a3 3 0 003 3h18a3 3 0 003-3v-3M24 12l-6-6-6 6M18 6v18" stroke="#1D30FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <p>Drag your file(s) or <span class="upload-browse">browse</span></p>
              <input type="file" id="apply-resume" name="resume" accept=".pdf,.doc,.docx" required>
            </div>
          </div>
          <div class="apply-field full">
            <label for="apply-message">Message (Optional)</label>
            <textarea id="apply-message" name="message" placeholder="any additional details that might help..." rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary apply-submit-btn">
            <span>Submit Application</span>
            <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- ========== NOT FINDING THE RIGHT ROLE CTA ========== -->
  <section class="cta" id="apply-cta">
    <div class="cta-glow cta-glow-left"></div>
    <div class="cta-glow cta-glow-right"></div>
    <div class="cta-content" data-reveal="up">
      <h2>Not Finding The Right Role?</h2>
      <p>Submit your CV anyway. We'll keep it on record for upcoming openings.</p>
    </div>
  </section>

<?php include 'includes/footer.php'; ?>
