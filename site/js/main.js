const toggle = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

const form = document.querySelector("#enquiry");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const arrival = String(data.get("arrival") || "").trim();
    const departure = String(data.get("departure") || "").trim();
    const guests = String(data.get("guests") || "").trim();
    const room = String(data.get("room") || "").trim();
    const message = String(data.get("message") || "").trim();

    const thai = document.documentElement.lang === "th";
    if (!name || !email || !message) {
      status.textContent = thai
        ? "กรอกชื่อ อีเมล และข้อความสั้นๆ เพื่อให้เราตอบกลับได้"
        : "Add your name, email, and a short note so we can reply.";
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Arrival: ${arrival || "-"}`,
      `Departure: ${departure || "-"}`,
      `Guests: ${guests || "-"}`,
      `Interest: ${room || "-"}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:chestnuthilleco@gmail.com?subject=${encodeURIComponent(
      "Stay enquiry from Chestnut Hill website"
    )}&body=${encodeURIComponent(body)}`;

    status.textContent = thai
      ? "กำลังเปิดแอปอีเมลพร้อมคำขอนี้"
      : "Opening your email app with this enquiry.";
    window.location.href = mailto;
  });
}
