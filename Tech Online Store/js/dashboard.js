const dashSection = document.querySelectorAll(
  ".dashboard-sections .sections .section"
);

dashSection.forEach((section) => {
  section.onclick = function () {
    if (section.classList.contains("active")) {
      return false;
    } else {
      removeAllDashboardSections();
      section.classList.add("active");
    }
  };
});

function removeAllDashboardSections() {
  dashSection.forEach((sc) => {
    sc.classList.remove("active");
  });
}
