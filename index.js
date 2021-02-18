const modal = document.querySelector(".modal");
const button = document.querySelector(".modal-button-show");
const button2 = document.querySelector(".mohide");


button.addEventListener("click", showModal);

function showModal(){
    modal.style.display = "block";
    
}

button2.addEventListener("click", hideModal);
function hideModal(){
    modal.style.display = "none";

}