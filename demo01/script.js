// ===========================
// Cookie Banner
// ===========================
function closeCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(100%)';
    banner.style.transition = 'opacity 0.3s, transform 0.3s';
    setTimeout(() => banner.remove(), 300);
  }
}

// ===========================
// Mobile Menu Toggle
// ===========================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ===========================
// Hero Slider (disabled - single image)
// ===========================

// ===========================
// Campaign Slider
// ===========================
const campaignTrack = document.getElementById('campaign-track');
const campaignPrev = document.getElementById('campaign-prev');
const campaignNext = document.getElementById('campaign-next');

if (campaignTrack) {
  let campaignIndex = 0;
  const campaignItems = campaignTrack.querySelectorAll('.campaign-item');
  const totalItems = campaignItems.length;

  function getItemsPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
  }

  function updateCampaignSlider() {
    const itemsPerView = getItemsPerView();
    const maxIndex = Math.max(0, totalItems - itemsPerView);
    if (campaignIndex > maxIndex) campaignIndex = maxIndex;

    const itemWidth = campaignItems[0].offsetWidth + 20; // gap
    campaignTrack.style.transform = `translateX(-${campaignIndex * itemWidth}px)`;
  }

  if (campaignPrev) {
    campaignPrev.addEventListener('click', () => {
      if (campaignIndex > 0) {
        campaignIndex--;
        updateCampaignSlider();
      }
    });
  }

  if (campaignNext) {
    campaignNext.addEventListener('click', () => {
      const itemsPerView = getItemsPerView();
      const maxIndex = Math.max(0, totalItems - itemsPerView);
      if (campaignIndex < maxIndex) {
        campaignIndex++;
        updateCampaignSlider();
      }
    });
  }

  window.addEventListener('resize', updateCampaignSlider);
}

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===========================
// Smooth Scroll for Nav Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerHeight = document.querySelector('.site-header').offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

// ===========================
// Active Nav Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// Scroll Animation (Intersection Observer)
// ===========================
const animateElements = document.querySelectorAll('.content-section, .section-follow, .section-follow-cta');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===========================
// Header Scroll Effect
// ===========================
const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    siteHeader.style.boxShadow = '0 2px 16px rgba(0,0,0,0.15)';
  } else {
    siteHeader.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  }
});
