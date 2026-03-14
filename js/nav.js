fetch("/nav.html")
  .then(res => res.text())
  .then(data => {

    const navContainer = document.getElementById("nav");
    navContainer.innerHTML = data;

    const links = navContainer.querySelectorAll("a");
    const current = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {

      const href = link.getAttribute("href").split("/").pop();

      if (href === current) {
        link.classList.add("active");
      }

    });

  });