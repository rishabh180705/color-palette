function changeColor(color) {
    document.body.style.backgroundColor = color;
}
// function buttonAnimation(color)
// // {
// //  var activeButton = document.querySelector('#' + color);
// //  activeButton.classList.add("pressed");
// //  console.log(activeButton.getAttribute("class"));
// //  setTimeout(function(){
// //     activeButton.classList.remove("pressed");
// //  },10000 );
// // }
const colorButtons = document.querySelectorAll('.item');

colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const colorId = this.id;
        let colorCode;
        changeColor(colorId);
        buttonAnimation(colorId);
    });
});







