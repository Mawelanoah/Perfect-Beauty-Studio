document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav__burger");
  const drawer = document.querySelector(".drawer");
  const drawerBg = document.querySelector(".drawer-bg");

  function closeDrawer() {
    burger?.classList.remove("is-open");
    drawer?.classList.remove("is-open");
    drawerBg?.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  function openDrawer() {
    burger?.classList.add("is-open");
    drawer?.classList.add("is-open");
    drawerBg?.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  burger?.addEventListener("click", () => {
    drawer?.classList.contains("is-open") ? closeDrawer() : openDrawer();
  });
  drawerBg?.addEventListener("click", closeDrawer);
  drawer?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));

  const topBtn = document.querySelector(".top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) topBtn?.classList.add("is-visible");
    else topBtn?.classList.remove("is-visible");
  });
  topBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Service tabs
  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll("[data-cat]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      const cat = tab.dataset.filter;
      cards.forEach((card) => {
        card.style.display = cat === "all" || card.dataset.cat === cat ? "" : "none";
      });
    });
  });

  // Active nav
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a, .drawer a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
