(()=>{
  "use strict";
  const e = document.querySelector(".form")
    , t = document.getElementById("day")
    , n = document.getElementById("month")
    , a = document.getElementById("year")
    , r = document.getElementById("render-output-day")
    , l = document.getElementById("render-output-month")
    , o = document.getElementById("render-output-year")
    , u = document.getElementById("extream-error")
    , d = document.getElementById("dark-mode-checkbox")
    , i = document.documentElement
    , c = function(e, t) {
      const n = t.nextElementSibling
        , a = t.name;
      switch (e) {
      case "empty":
          n.textContent = `${a} cannot be empty`,
          t.style.borderColor = "var(--light-red)";
          break;
      case "invalid":
          n.textContent = `Must be a valid ${a.toLowerCase()}`,
          t.style.borderColor = "var(--light-red)";
          break;
      case "future":
          n.textContent = "Must be in the past",
          t.style.borderColor = "var(--light-red)";
          break;
      default:
          n.textContent = "",
          t.style.borderColor = null
      }
  }
    , m = function(e) {
      const t = +e.value
        , n = (new Date).getFullYear();
      return "" === t ? (c("empty", e),
      !1) : t < 1e3 ? (c("invalid", e),
      !1) : t > n ? (c("future", e),
      !1) : (c("", e),
      !0)
  }
    , s = function(e) {
      const r = +e.value;
      return +t.value > new Date(+a.value,+n.value,0).getDate() ? (c("invalid", t),
      !1) : "" === r || r < 1 || r > 12 ? (c("invalid", e),
      !1) : (c("", e),
      c("", t),
      !0)
  }
    , v = function(e) {
      const t = +e.value
        , r = new Date(+a.value,+n.value,0).getDate();
      return "" === t ? (c("empty", e),
      !1) : t > r || t < 1 ? (c("invalid", e),
      !1) : (c("", e),
      !0)
  };
  a.addEventListener("input", (()=>{
      m(a),
      u.textContent = null
  }
  )),
  n.addEventListener("input", (()=>{
      s(n),
      u.textContent = null
  }
  )),
  t.addEventListener("input", (()=>{
      v(t),
      u.textContent = null
  }
  )),
  e.addEventListener("submit", (function(e) {
      if (e.preventDefault(),
      !(v(t) && s(n) && m(a)))
          return;
      const d = new Date(`${a.value}-${n.value}-${t.value}`)
        , i = new Date;
      if (d > i)
          return void (u.textContent = "Date of birth can't be in the future");
      let c = i.getFullYear() - d.getFullYear()
        , g = i.getMonth() - d.getMonth()
        , y = i.getDate() - d.getDate();
      if ((g < 0 || 0 === g && y < 0) && (c--,
      g += 12),
      y < 0) {
          const e = new Date(i.getFullYear(),i.getMonth(),0).getDate();
          y = e - d.getDate() + i.getDate(),
          g--,
          g < 0 && (g += 12,
          c--)
      }
      [o.parentElement, l.parentElement, r.parentElement].forEach((e=>{
          e.style.transform = "scale(.8)",
          e.style.opacity = "0"
      }
      )),
      setTimeout((()=>{
          o.textContent = c,
          l.textContent = g,
          r.textContent = y,
          [o.parentElement, l.parentElement, r.parentElement].forEach((e=>{
              e.style.transform = "scale(1)",
              e.style.opacity = "1"
          }
          ))
      }
      ), 300),
      t.value = "",
      n.value = "",
      a.value = ""
  }
  ));
  const g = ()=>d.checked ? i.classList.add("dark-mode") : i.classList.remove("dark-mode");
  d.addEventListener("change", g),
  window.addEventListener("load", g)
}
)();
