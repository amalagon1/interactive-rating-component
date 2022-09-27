const buttonEl = document.querySelector('.submit');
const ratingCard = document.querySelector('.rating-card');
const thankCard = document.querySelector('.thank-you-card');
const ratingNum = document.querySelector('.rating-number');





ratingNum.addEventListener("click", function (e) {
    if (e.target.matches("span")) {
        // console.log(e.target.textContent);
        var rating = e.target.textContent
        console.log(rating);
        finalRate(rating);
    }
})




function finalRate(rating) {
    const finalRating = document.getElementById('rating');
    buttonEl.addEventListener('click', () => {



        ratingCard.style.display = 'none';
        thankCard.style.display = 'flex';

        console.log(rating);
        finalRating.innerText = rating


    })
}