fetch("data/genetics.json")
  .then(response => response.json())
  .then(genetics => {
    const grid = document.getElementById("geneticsGrid");

    grid.innerHTML = "";

    genetics.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-image" style="background-image:
          linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.55)),
          url('${item.image}')">
        </div>

        <div class="card-content">
          <h3>${item.name}</h3>
          <div class="tag">${item.type}</div>
          <p>${item.lineage}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        document.getElementById("lightboxImage").src = item.image;
        document.getElementById("lightboxTitle").textContent = item.name;
        document.getElementById("lightboxLineage").textContent = item.lineage;
        document.getElementById("lightbox").classList.add("active");
      });

      grid.appendChild(card);
    });
  });

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}
