// Menu toggle
const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#mainMenu");

function toggleMenu() {
  menu.classList.toggle("hide");

  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !expanded);
}

menuButton.addEventListener("click", toggleMenu);

// Handle window resize
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
    menuButton.setAttribute("aria-expanded", true);
  } else {
    menu.classList.add("hide");
    menuButton.setAttribute("aria-expanded", false);
  }
}

window.addEventListener("resize", handleResize);
handleResize();

// Image modal viewer
const gallery = document.querySelector(".gallery");

// Create <dialog> element dynamically
const viewer = document.createElement("dialog");
viewer.id = "viewer";
document.body.appendChild(viewer);

// Event delegation for all images
gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;

  const fullSrc = img.src.split('-')[0] + '-full.jpeg';
  const alt = img.alt;

  viewer.innerHTML = `
    <img src="${fullSrc}" alt="${alt}" />
    <button class="close-viewer" aria-label="Close image viewer">X</button>
  `;

  // Close button
  viewer.querySelector(".close-viewer").addEventListener("click", () => {
    viewer.close();
  });

  // Click outside to close
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      viewer.close();
    }
  });

  viewer.showModal();
});
