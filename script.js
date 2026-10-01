document.querySelectorAll(".menu-block").forEach((block, index) => {
  const button = block.querySelector(".block-toggle");
  if (index === 0) block.classList.add("is-open");

  button.addEventListener("click", () => {
    const willOpen = !block.classList.contains("is-open");
    document.querySelectorAll(".menu-block").forEach((other) => {
      other.classList.remove("is-open");
      other.querySelector(".block-toggle").setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      block.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

document.querySelectorAll(".cats a").forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    document.querySelectorAll(".menu-block").forEach((block) => {
      const open = block === target;
      block.classList.toggle("is-open", open);
      block.querySelector(".block-toggle").setAttribute("aria-expanded", String(open));
    });
  });
});
