<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Wealth Finder — Recover Your Unclaimed Wealth in India</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ========== HEADER / NAVIGATION ========== -->
  <!-- Figma Node: 9002:6422 -->
  <header class="site-header" id="siteHeader">
    <div class="header-container">
      <a href="#" class="logo">
        <img src="images/logo.png" alt="The Wealth Finder" width="132" height="48">
      </a>

      <nav class="main-nav" id="mainNav">
        <ul class="nav-links">
          <li class="nav-item has-dropdown has-mega">
            <a href="/services">Our Services <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="nav-dropdown nav-mega">
              <div class="mega-col">
                <h4 class="mega-heading">For Investors & Families</h4>
                <a href="/services/iepf-recovery">Recovery Of Unclaimed Shares & Dividends From IEPF</a>
                <a href="/services/share-tracing">Search & Tracing Of Lost Shares</a>
                <a href="/services/iepf-claim-support">IEPF Claim Support</a>
                <a href="/services/demat-physical-shares">DEMAT Of Physical Shares</a>
                <a href="/services/nri-assistance">NRI Assistance</a>
                <a href="/services/legal-support">Legal Support</a>
              </div>
              <div class="mega-col">
                <h4 class="mega-heading">For Companies</h4>
                <a href="/services/suspended-company-advisory">Suspended Company Advisory (BSE/NSE)</a>
                <a href="/services/compulsory-delisting-advisory">Compulsory Delisting Advisory (BSE/NSE)</a>
                <a href="/services/nbfc-registration">NBFC Registration</a>
                <a href="/services/nbfc-consulting">NBFC Consulting & Advisory</a>
                <a href="/services/company-revival">Company Revival / Restoration</a>
              </div>
            </div>
          </li>
          <li class="nav-item has-dropdown">
            <a href="/your-situation">Your Situation <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="nav-dropdown">
              <a href="/your-situation/nri">I'm An NRI</a>
              <a href="/your-situation/suspended-company">My Company Is Suspended (BSE/NSE)</a>
              <a href="/your-situation/delisted-company">My Company Compulsory Delisted (BSE/NSE)</a>
              <a href="/your-situation/nbfc-company">I'm An NBFC Company</a>
            </div>
          </li>
          <li class="nav-item has-dropdown">
            <a href="/resources">Resources <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="nav-dropdown">
              <a href="/resources/blogs">Blogs</a>
              <a href="/resources/guides">Guides</a>
              <a href="/resources/faqs">FAQs</a>
              <a href="/resources/regulatory-updates">Regulatory Updates</a>
              <a href="/resources/glossary">Glossary</a>
            </div>
          </li>
          <li class="nav-item has-dropdown">
            <a href="/about">About Us <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <div class="nav-dropdown">
              <a href="/about">About TWF</a>
              <a href="/about/team">Team</a>
              <a href="/about/reviews">Reviews / Case Stories</a>
              <a href="/about/careers">Careers</a>
            </div>
          </li>
          <li class="nav-item"><a href="/partner-with-us">Partner With Us</a></li>
          <li class="nav-item"><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      <div class="header-cta">
        <a href="#contact" class="btn btn-secondary">
          <span>Book a Call</span>
          <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
        <a href="#search" class="btn btn-primary">
          <span>Free Search</span>
          <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </a>
      </div>

      <!-- Hamburger Button -->
      <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu-overlay" id="mobileMenu">
    <ul class="mobile-nav-links">
      <li class="mobile-nav-item has-dropdown">
        <a href="/services">Our Services <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mobile-dropdown">
          <span class="mobile-mega-heading">For Investors & Families</span>
          <a href="/services/iepf-recovery">Recovery Of Unclaimed Shares & Dividends From IEPF</a>
          <a href="/services/share-tracing">Search & Tracing Of Lost Shares</a>
          <a href="/services/iepf-claim-support">IEPF Claim Support</a>
          <a href="/services/demat-physical-shares">DEMAT Of Physical Shares</a>
          <a href="/services/nri-assistance">NRI Assistance</a>
          <a href="/services/legal-support">Legal Support</a>
          <span class="mobile-mega-heading">For Companies</span>
          <a href="/services/suspended-company-advisory">Suspended Company Advisory (BSE/NSE)</a>
          <a href="/services/compulsory-delisting-advisory">Compulsory Delisting Advisory (BSE/NSE)</a>
          <a href="/services/nbfc-registration">NBFC Registration</a>
          <a href="/services/nbfc-consulting">NBFC Consulting & Advisory</a>
          <a href="/services/company-revival">Company Revival / Restoration</a>
        </div>
      </li>
      <li class="mobile-nav-item has-dropdown">
        <a href="/your-situation">Your Situation <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mobile-dropdown">
          <a href="/your-situation/nri">I'm An NRI</a>
          <a href="/your-situation/suspended-company">My Company Is Suspended (BSE/NSE)</a>
          <a href="/your-situation/delisted-company">My Company Compulsory Delisted (BSE/NSE)</a>
          <a href="/your-situation/nbfc-company">I'm An NBFC Company</a>
        </div>
      </li>
      <li class="mobile-nav-item has-dropdown">
        <a href="/resources">Resources <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mobile-dropdown">
          <a href="/resources/blogs">Blogs</a>
          <a href="/resources/guides">Guides</a>
          <a href="/resources/faqs">FAQs</a>
          <a href="/resources/regulatory-updates">Regulatory Updates</a>
          <a href="/resources/glossary">Glossary</a>
        </div>
      </li>
      <li class="mobile-nav-item has-dropdown">
        <a href="/about">About Us <svg class="chevron" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mobile-dropdown">
          <a href="/about">About TWF</a>
          <a href="/about/team">Team</a>
          <a href="/about/reviews">Reviews / Case Stories</a>
          <a href="/about/careers">Careers</a>
        </div>
      </li>
      <li class="mobile-nav-item"><a href="/partner-with-us">Partner With Us</a></li>
      <li class="mobile-nav-item"><a href="/contact">Contact Us</a></li>
    </ul>
    <div class="mobile-cta">
      <a href="#contact" class="btn btn-secondary">
        <span>Book a Call</span>
        <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
      <a href="#search" class="btn btn-primary">
        <span>Free Search</span>
        <span class="btn-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
      </a>
    </div>
  </div>
