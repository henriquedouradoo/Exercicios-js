const buttonSub = document.getElementById('button');

buttonSub.addEventListener('click'), () => {
    const oldText = buttonSub.innerHTML;
    buttonSub.innerHTML = oldText === "ON" ? "OFF" : "ON";
    console.log(buttonSub);
};