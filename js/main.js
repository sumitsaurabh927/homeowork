let btn = document.querySelector('#yell');
let out = document.querySelector('.out')
btn.addEventListener('click', onClick);


function onClick() {
    let fName = document.querySelector('#firstName').value;
    let fMidName = document.querySelector('#firstMiddle').value;
    let lMidName = document.querySelector('#lastMiddle').value;
    let lName = document.querySelector('#lastName').value;
    out.innerText = `${fName}  ${fMidName}  ${lMidName}  ${lName}`
    out.classList.toggle('text-pop-up-top')
}