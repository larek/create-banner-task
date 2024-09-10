let flag = true;
const togglerContainer = document.querySelector(".toggler-container");
const toggler = togglerContainer.querySelector("div");
const html = document.documentElement;

const setTheme = (theme) => {
  if (theme === "dark") {
    html.classList.add("dark");
    toggler.classList.add("translate-x-10");
    return;
  }

  html.classList.remove("dark");
  toggler.classList.remove("translate-x-10");
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
    flag = savedTheme === "dark";
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
  flag = prefersDark;
};

const toggleDark = () => {
  togglerContainer.addEventListener("click", () => {
    flag = !flag;
    const theme = flag ? "dark" : "light";
    setTheme(theme);
    localStorage.setItem("theme", theme);
  });
};

loadTheme();
toggleDark();
