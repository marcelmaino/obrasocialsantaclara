const IMG = "https://obrasocialsantaclara.org.br/view/img";
const LOGO = `${IMG}/layout/logo-obra-3.png`;

const NAV = [
  { id: "quem-somos", href: "quem-somos.html", label: "Quem somos" },
  { id: "mantenedora", href: "mantenedora.html", label: "Mantenedora" },
  { id: "pedagogico", href: "pedagogico.html", label: "Pedagógico" },
  { id: "nutricao", href: "nutricao.html", label: "Nutrição" },
  { id: "social", href: "social.html", label: "Social" },
  { id: "galeria", href: "galeria.html", label: "Galeria" },
];

const page = document.body.dataset.page || "home";

function icon(name, cls = "text-[1.15rem]") {
  return `<i class="ph ${name} ${cls}"></i>`;
}

function btn(label, href, variant = "primary", extra = "") {
  const v = variant === "ghost" ? "btn-ghost" : variant === "light" ? "btn-light" : "btn-primary";
  const ico = variant === "ghost" ? "ph-arrow-right" : "ph-arrow-up-right";
  return `<a href="${href}" class="btn ${v} js-magnetic ${extra}"><span>${label}</span><span class="btn-ico">${icon(ico, "text-sm")}</span></a>`;
}

function renderHeader() {
  const links = NAV.map(
    (n) => `<a href="${n.href}" class="${page === n.id ? "is-active" : ""}">${n.label}</a>`
  ).join("");

  const overlayLinks = [
    { href: "index.html", label: "Início" },
    ...NAV,
    { href: "doar.html", label: "Doar" },
    { href: "ouvidoria.html", label: "Ouvidoria" },
  ]
    .map((n) => `<a href="${n.href}">${n.label}</a>`)
    .join("");

  return `
    <div class="scroll-progress" id="scroll-progress"></div>
    <header class="topbar">
      <nav class="nav-island" aria-label="Principal">
        <a href="index.html" class="flex items-center gap-2.5 min-w-0">
          <img src="${LOGO}" alt="Obra Social Santa Clara" class="h-11 w-11 rounded-full object-cover bg-white" />
          <span class="display text-[0.92rem] leading-tight hidden sm:block">Santa Clara</span>
        </a>
        <div class="nav-links">${links}</div>
        <div class="flex items-center gap-2">
          <button class="icon-btn" id="theme-toggle" type="button" aria-label="Alternar tema">${icon("ph-moon")}</button>
          <span class="hidden nav-cta-desktop">${btn("Doar", "doar.html", "primary")}</span>
          <button class="burger lg:hidden" id="menu-toggle" type="button" aria-label="Abrir menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
    <div class="menu-overlay" id="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu">
      ${overlayLinks}
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="wrap grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-3 mb-5">
            <img src="${LOGO}" alt="" class="h-14 w-14 rounded-full bg-white object-cover" />
            <p class="display text-2xl leading-tight">Obra Social Santa Clara<br />e São Francisco de Assis</p>
          </div>
          <p class="text-[#d4c0b0] max-w-md leading-relaxed">Formação integral de crianças e adolescentes em Vila Alpina, com valores franciscanos, cuidado e cidadania.</p>
        </div>
        <div>
          <p class="font-semibold mb-3">Visite</p>
          <div class="grid gap-2 text-[#d4c0b0]">
            ${NAV.map((n) => `<a href="${n.href}" class="hover:text-white">${n.label}</a>`).join("")}
            <a href="doar.html" class="hover:text-white">Doar</a>
            <a href="ouvidoria.html" class="hover:text-white">Ouvidoria</a>
            <a href="politica-privacidade.html" class="hover:text-white">Política de privacidade</a>
            <a href="https://titular.irfranprovdeus.org.br/" target="_blank" rel="noopener">Titular de dados</a>
          </div>
        </div>
        <div>
          <p class="font-semibold mb-3">Casa Comum</p>
          <p class="text-[#d4c0b0] leading-relaxed">Rua Costa Barros, 544<br />Vila Alpina, São Paulo</p>
          <p class="mt-3"><a href="tel:+551123173042" class="hover:text-white">(11) 2317-3042</a></p>
          <p><a href="tel:+551123173048" class="hover:text-white">(11) 2317-3048</a></p>
          <p class="mt-2"><a href="mailto:atendimento@obrasocialsantaclara.org.br" class="hover:text-white break-all">atendimento@obrasocialsantaclara.org.br</a></p>
          <div class="flex gap-3 mt-5 text-xl">
            <a href="https://web.facebook.com/obrasocialsantaclaraesaofranciscodeassis" target="_blank" rel="noopener" aria-label="Facebook">${icon("ph-facebook-logo")}</a>
            <a href="https://www.instagram.com/obrasocial_/" target="_blank" rel="noopener" aria-label="Instagram">${icon("ph-instagram-logo")}</a>
            <a href="https://www.youtube.com/channel/UCcSHf01My59j2xHmIcoofcQ" target="_blank" rel="noopener" aria-label="YouTube">${icon("ph-youtube-logo")}</a>
            <a href="https://api.whatsapp.com/send?phone=551123173042" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("ph-whatsapp-logo")}</a>
          </div>
        </div>
      </div>
      <div class="wrap mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-between text-sm text-[#b39a88]">
        <p>CNPJ 61.011.094/0004-31</p>
        <p>© Todos os direitos reservados.</p>
      </div>
    </footer>
    <a class="wa-fab" href="https://wa.link/qv6psh" target="_blank" rel="noopener" aria-label="Seja voluntário no WhatsApp">${icon("ph-whatsapp-logo", "text-2xl")}</a>
    <div class="lightbox" id="lightbox" role="dialog" aria-modal="true">
      <button class="icon-btn absolute top-5 right-5 text-white border-white/20" id="lightbox-close" type="button" aria-label="Fechar">${icon("ph-x")}</button>
      <img alt="" />
    </div>
  `;
}

function initChrome() {
  const header = document.getElementById("app-header");
  const footer = document.getElementById("app-footer");
  if (header) header.innerHTML = renderHeader();
  if (footer) footer.innerHTML = renderFooter();

  const overlay = document.getElementById("menu-overlay");
  const burger = document.getElementById("menu-toggle");
  overlay?.setAttribute("aria-hidden", "true");
  burger?.addEventListener("click", () => {
    const open = overlay.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    overlay.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  });

  const root = document.documentElement;
  const saved = localStorage.getItem("oss-theme");
  if (saved === "dark") {
    root.classList.add("dark");
  }
  const themeBtn = document.getElementById("theme-toggle");
  const setThemeIcon = () => {
    themeBtn.innerHTML = root.classList.contains("dark") ? icon("ph-sun") : icon("ph-moon");
  };
  setThemeIcon();
  themeBtn?.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem("oss-theme", root.classList.contains("dark") ? "dark" : "light");
    setThemeIcon();
  });

  document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openLightbox(el.dataset.lightbox, el.getAttribute("alt") || "");
    });
  });
}

function openLightbox(src, alt) {
  const box = document.getElementById("lightbox");
  const img = box.querySelector("img");
  img.src = src;
  img.alt = alt;
  box.classList.add("is-open");
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("is-open");
}

function initMagnetic() {
  document.querySelectorAll(".js-magnetic").forEach((btnEl) => {
    btnEl.addEventListener("pointermove", (e) => {
      const r = btnEl.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btnEl.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });
    btnEl.addEventListener("pointerleave", () => {
      btnEl.style.transform = "";
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-item button").forEach((btnEl) => {
    btnEl.addEventListener("click", () => {
      const item = btnEl.parentElement;
      const open = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("is-open"));
      if (!open) item.classList.add("is-open");
    });
  });
}

function reduceMotion() {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function initMotion() {
  if (typeof gsap === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  if (typeof Lenis !== "undefined" && !reduceMotion()) {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const bar = document.getElementById("scroll-progress");
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      if (bar) bar.style.width = `${self.progress * 100}%`;
    },
  });

  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    if (reduceMotion()) return;
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax) || 12,
      ease: "none",
      scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 1 },
    });
  });

  if (!reduceMotion()) {
    gsap.utils.toArray(".js-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 28 },
        {
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );
    });
  }

  document.querySelectorAll("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration: reduceMotion() ? 0 : 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toLocaleString("pt-BR");
          },
        });
      },
    });
  });

  document.querySelectorAll(".progress > i").forEach((el) => {
    const w = el.dataset.to || "72%";
    gsap.to(el, {
      width: w,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top 85%", end: "top 40%", scrub: 0.6 },
    });
  });

  const pinWrap = document.querySelector("[data-horizontal]");
  const track = document.querySelector("[data-horizontal-track]");
  if (pinWrap && track && !reduceMotion() && window.innerWidth >= 900) {
    const distance = () => track.scrollWidth - window.innerWidth + 80;
    gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: pinWrap,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }

  const stack = document.querySelector("[data-stack]");
  if (stack && !reduceMotion()) {
    const cards = gsap.utils.toArray(".stack-card");
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        endTrigger: cards[cards.length - 1],
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
      gsap.to(card, {
        scale: 0.92,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: cards[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
    });
  }

  if (typeof SplitType !== "undefined" && !reduceMotion()) {
    document.querySelectorAll(".js-split").forEach((el) => {
      const split = new SplitType(el, { types: "words" });
      gsap.from(split.words, {
        yPercent: 80,
        opacity: 0,
        stagger: 0.04,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });
    });
  }
}

function initForms() {
  const ident = document.getElementById("ident-mode");
  const identFields = document.getElementById("ident-fields");
  const syncIdent = () => {
    const named = ident?.value === "identificada";
    identFields?.classList.toggle("hidden", !named);
    identFields?.querySelectorAll("input").forEach((field) => {
      if (field.id === "nome" || field.id === "email") field.required = named;
    });
  };
  ident?.addEventListener("change", syncIdent);
  syncIdent();

  const form = document.getElementById("ouvidoria-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const wrap = field.closest(".field");
      const err = wrap?.querySelector(".err");
      if (!field.value.trim()) {
        ok = false;
        if (err) err.textContent = "Campo obrigatório.";
        field.setAttribute("aria-invalid", "true");
      } else {
        if (err) err.textContent = "";
        field.removeAttribute("aria-invalid");
      }
    });
    const status = document.getElementById("form-status");
    if (!ok) {
      status.textContent = "Revise os campos destacados para enviar a manifestação.";
      status.className = "mt-4 text-[var(--ember)]";
      return;
    }
    status.textContent = "Manifestação registrada neste protótipo. No site oficial, o envio segue o canal confidencial da instituição.";
    status.className = "mt-4 text-[var(--accent-deep)]";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initChrome();
  initMagnetic();
  initFaq();
  initForms();
  initMotion();
});
