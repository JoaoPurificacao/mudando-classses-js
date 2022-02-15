let button = document.getElementById("Botão");

let ChangeBackground = () => {
    let main = document.getElementById("Principal"); //Pega o elemenento HTML com ID Principal
    let mainClass = main.className.split(" "); // Pega as classes do elemento e separa em um array
    let select = document.getElementById("Background");
    let colorValue = select[select.selectedIndex].value;

    console.log(mainClass);
    console.log(colorValue);
} 

button.addEventListener("click",ChangeBackground);
