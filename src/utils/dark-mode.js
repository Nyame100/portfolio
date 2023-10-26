const darkMode = () => {
  const themeToggleBtn = document.querySelectorAll("#theme-toggle");

  //   State  //
  const theme = localStorage.getItem("theme");

  //   On Mount //

  //   On Mount - something that happens when the page finishes its initial load //

  theme && document.body.classList.add(theme);

  //   Handllers   //
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  //   Events   //

  themeToggleBtn.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
