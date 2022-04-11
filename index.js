let number = document.querySelector('.number');
let sub = document.querySelector('.sub');
let add = document.querySelector('.add');

let counter = 0;
sub.addEventListener('click' ,()=> {
    counter--;
    number.innerHTML = counter;
    number.style.color="red";
});
add.addEventListener('click', () =>{
    counter++;
    number.innerHTML = counter;
    number.style.color="green";

});

