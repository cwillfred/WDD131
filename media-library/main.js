const mediaLibrary = [
  {
    title: "The Hobbit",
    type: "book",
    creator: "J.R.R. Tolkien",
  },
  {
    title: "Interstellar",
    type: "movie",
    creator: "Christopher Nolan",
  },
  {
    title: "Abbey Road",
    type: "music",
    creator: "The Beatles",
  },
  {
    title: "Pride and Prejudice",
    type: "book",
    creator: "Jane Austen",
  }
];

function displayMedia(filter = "all") {
  const mediaGrid = document.getElementById("media-grid");
  mediaGrid.innerHTML = "";

  const filteredMedia =
    filter === "all"
      ? mediaLibrary
      : mediaLibrary.filter(item => item.type === filter);

  filteredMedia.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("media-item");
    card.innerHTML = `
      <div class="media-info">
        <h3>${item.title}</h3>
        <p>${item.creator}</p>
      </div>
    `;
    mediaGrid.appendChild(card);
  });
}

const filterButtons = document.querySelectorAll("#filters button");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    displayMedia(type);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("media-grid")) {
    displayMedia();
  }
});
