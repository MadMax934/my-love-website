
let currentPage = 1;

function nextPage(n) {
  document.getElementById(`page${currentPage}`).classList.add('hidden');
  document.getElementById(`page${n}`).classList.remove('hidden');
  currentPage = n;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("page1").classList.remove("hidden");
});
