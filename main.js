document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const ratingButtons = document.querySelectorAll(".radio-btn");
    const selectedRating = document.querySelector("#selected-rating");
    const ratingCard = document.querySelector("#rating-card");
    const reviewCard = document.querySelector("#review-card");
    

    form.addEventListener("submit", (event) => {
        let checked = false;
        event.preventDefault();

        for(let i = 0; i < ratingButtons.length; i++) {
            if(ratingButtons[i].checked) {
                checked = true;
                selectedRating.textContent = ratingButtons[i].value;
                sessionStorage.setItem('Rating', ratingButtons[i].value);
                ratingCard.classList.add('hidden');
                reviewCard.classList.remove('hidden');
                break;
            }
        }
    });

    if(sessionStorage.getItem('Rating')) {
        selectedRating.textContent = sessionStorage.getItem('Rating');
    }
})

