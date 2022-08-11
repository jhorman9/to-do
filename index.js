const addButton = document.querySelector("#add-class");
const modal = document.querySelector("#modal");
const cancelButton = document.querySelector("#cancel");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const profesor = document.querySelector("#profesor");
const crear = document.querySelector("#crear");
const contendor = document.querySelector(".grilla");

const cards = [];

let cardTitle = "";
let cardDes = "";
let cardProfesor = "";

addButton.addEventListener("click", () => {
  modal.style.visibility = "visible";
});

cancelButton.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

titulo.addEventListener("change", (e) => {
  cardTitle = e.target.value;
});
descripcion.addEventListener("change", (e) => {
  cardDes = e.target.value;
});
profesor.addEventListener("change", (e) => {
  cardProfesor = e.target.value;
});

crear.addEventListener("click", (e) => {
  console.log(cardTitle);
  cards.push(
    `<div class="card">
          <div class="card-header">
            <div class="card-info">
              <h3>${cardTitle}</h3>
              <p>${cardDes}</p>
              <p>${cardProfesor}</p>
            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <div class="card-footer">
            <i class="fa-solid fa-folder"></i>
            <i class="fa-solid fa-image-portrait"></i>
          </div>
        </div>`
  );
  modal.style.visibility = "hidden";
  const cardText = cards.join("");
  contendor.innerHTML = cardText;
});
