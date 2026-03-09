(function mainModule() {
  function setupMobileMenu() {
    const menuButton = document.querySelector(".menu-btn");
    const siteNav = document.querySelector(".site-nav");
    if (!menuButton || !siteNav) {
      return;
    }

    menuButton.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      const clickInsideHeader =
        target && typeof target.closest === "function"
          ? target.closest(".site-header")
          : null;
      if (!clickInsideHeader) {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        siteNav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setupHeaderOnScroll() {
    const header = document.querySelector(".site-header");
    if (!header) {
      return;
    }

    const updateHeaderState = () => {
      if (window.scrollY > 14) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
  }

  function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) {
      return;
    }

    revealElements.forEach((element) => {
      const parent = element.parentElement;
      if (!parent) {
        element.style.setProperty("--reveal-order", "0");
        return;
      }

      const siblingReveals = Array.from(parent.children).filter((child) =>
        child.classList.contains("reveal")
      );
      const localOrder = siblingReveals.indexOf(element);
      element.style.setProperty("--reveal-order", String(Math.max(0, localOrder)));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  function setup3dHoverMotion() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interactiveElements = document.querySelectorAll(".lang-trigger");
    interactiveElements.forEach((element) => {
      const current = { x: 0, y: 0, lift: 0 };
      const target = { x: 0, y: 0, lift: 0 };
      let isPointerInside = false;
      let rafId = 0;

      const animate = () => {
        current.x += (target.x - current.x) * 0.14;
        current.y += (target.y - current.y) * 0.14;
        current.lift += (target.lift - current.lift) * 0.14;

        if (Math.abs(current.x) < 0.01 && Math.abs(current.y) < 0.01 && Math.abs(current.lift) < 0.01 && !isPointerInside) {
          element.style.transform = "";
          rafId = 0;
          return;
        }

        element.style.transform =
          `perspective(760px) rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg) translateY(${current.lift.toFixed(2)}px)`;
        rafId = window.requestAnimationFrame(animate);
      };

      element.addEventListener("mousemove", (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        isPointerInside = true;
        target.x = -y * 3.2;
        target.y = x * 3.8;
        target.lift = -1.4;
        if (!rafId) {
          rafId = window.requestAnimationFrame(animate);
        }
      });

      element.addEventListener("mouseleave", () => {
        isPointerInside = false;
        target.x = 0;
        target.y = 0;
        target.lift = 0;
        if (!rafId) {
          rafId = window.requestAnimationFrame(animate);
        }
      });
    });
  }

  function setupHomeScrollParallax() {
    if (!document.body.classList.contains("home-page")) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (window.innerWidth <= 760) {
      return;
    }

    const nodes = Array.from(document.querySelectorAll(".parallax-node"));
    if (!nodes.length) {
      return;
    }

    const tracked = nodes.map((node) => ({
      node,
      speed: Number(node.getAttribute("data-parallax-speed") || "0.1"),
      top: 0,
      height: 0
    }));

    let viewportHeight = window.innerHeight;
    let targetScroll = window.scrollY;
    let smoothScroll = targetScroll;
    let rafId = 0;

    const updateMetrics = () => {
      viewportHeight = window.innerHeight;
      tracked.forEach((item) => {
        const rect = item.node.getBoundingClientRect();
        item.top = rect.top + window.scrollY;
        item.height = rect.height || 1;
      });
    };

    const render = () => {
      smoothScroll += (targetScroll - smoothScroll) * 0.11;

      tracked.forEach((item) => {
        const elementCenter = item.top + item.height / 2;
        const viewportCenter = smoothScroll + viewportHeight / 2;
        const delta = elementCenter - viewportCenter;
        const offset = Math.max(-26, Math.min(26, -delta * item.speed * 0.12));
        item.node.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });

      rafId = window.requestAnimationFrame(render);
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    const onResize = () => {
      updateMetrics();
      targetScroll = window.scrollY;
    };

    updateMetrics();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", updateMetrics);
    render();

    window.addEventListener("beforeunload", () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    });
  }

  function setupFaqAccordion() {
    const faqButtons = document.querySelectorAll(".faq-question");
    if (!faqButtons.length) {
      return;
    }

    faqButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const faqItem = button.closest(".faq-item");
        if (!faqItem) {
          return;
        }
        faqItem.classList.toggle("active");
      });
    });
  }

  function setCurrentYear() {
    const yearNodes = document.querySelectorAll("[data-year]");
    const year = String(new Date().getFullYear());
    yearNodes.forEach((node) => {
      node.textContent = year;
    });
  }

  function setupLazyVideoSources() {
    const videos = Array.from(document.querySelectorAll("video"));
    if (!videos.length) {
      return;
    }

    const hydrateVideo = (video) => {
      const sources = Array.from(video.querySelectorAll("source[data-src]"));
      if (!sources.length) {
        return;
      }
      sources.forEach((source) => {
        const src = source.getAttribute("data-src");
        if (src) {
          source.setAttribute("src", src);
          source.removeAttribute("data-src");
        }
      });
      video.load();
    };

    const lazyCandidates = videos.filter((video) => video.querySelector("source[data-src]"));
    if (!lazyCandidates.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      lazyCandidates.forEach(hydrateVideo);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const video = entry.target;
          hydrateVideo(video);
          observer.unobserve(video);
        });
      },
      { rootMargin: "260px 0px" }
    );

    lazyCandidates.forEach((video) => observer.observe(video));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.DolphinI18n && typeof window.DolphinI18n.initI18n === "function") {
      window.DolphinI18n.initI18n();
    }
    setupMobileMenu();
    setupHeaderOnScroll();
    setupRevealAnimations();
    setup3dHoverMotion();
    setupHomeScrollParallax();
    setupFaqAccordion();
    setCurrentYear();
    setupLazyVideoSources();
  });
})();
