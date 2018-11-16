
let modal = document.querySelector(".modal");
let popup = document.querySelector(".popup");
let cross = document.querySelector(".img_close");
let btn_cancel = document.querySelector(".btn_modal");
let btn_uninstall = document.querySelector(".btn_modal2");

function showModal(){
  modal.style.display = "block";
};

function closeModal(){
  modal.style.display = "none";
}

function message(){
  alert("Blabla");
};

popup.addEventListener("click", showModal);
cross.addEventListener("click", closeModal);
btn_cancel.addEventListener("click", closeModal);
btn_uninstall.addEventListener("click", closeModal);
btn_uninstall.addEventListener("click", message);


window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
};

