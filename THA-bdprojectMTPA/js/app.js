const clickbtn = document.getElementById('btn-click');
const cardcontainer = document.getElementById('card-container')
const additionalimg = document.getElementById('additional-img')

clickbtn.addEventListener('click', ()=>{
    // console.log('hay');
    if (clickbtn.innerText === 'OPEN TO SEE WISH'){
        clickbtn.innerText = 'CLOSE WISH';
        cardcontainer.style.opacity = 1;
        additionalimg.style.opacity = 0;
        // console.log(clickbtn.innerText);
    } else
    if (clickbtn.innerText === 'CLOSE WISH'){
        clickbtn.innerText = 'OPEN TO SEE WISH';
        additionalimg.style.opacity = 1;
        cardcontainer.style.opacity = 0;
        // console.log(clickbtn.innerText);
    }

});