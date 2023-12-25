const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", () => showNotes());
const notes = JSON.parse(localStorage.getItem("text"));
if (notes) {
  notes.forEach((note) => showNotes(note));
}
function showNotes(text = "") {
  const notes = document.createElement("div");
  notes.className = "notes";
  notes.innerHTML = ` 
  <div>
    <div class="tools">
        <button class="edit__btn">Edit</button>
        <button class='delete__btn'>Delete</button>
    </div>
    <textarea class="hidden"></textarea>
  <div class="main">main</div>
  </div>
  `;

  const deleteBtn = notes.querySelector(".delete__btn");
  const editBtn = notes.querySelector(".edit__btn");
  let textArea = notes.querySelector("textarea");
  let main = notes.querySelector(".main");
  textArea.innerHTML = text;
  main.innerHTML = text;
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    notes.remove();
    updateLocalStorage();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = value;
    updateLocalStorage();
  });

  document.body.appendChild(notes);
}

function updateLocalStorage() {
  const data = document.querySelectorAll("textarea");

  const notes = [];
  data.forEach(({ value }) => {
    notes.push(value);
  });

  localStorage.setItem("text", JSON.stringify(notes));
}
