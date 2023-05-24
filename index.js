'use strict';

const ratingBtnElements = document.querySelectorAll('.rating_btn');

ratingBtnElements.forEach(btn => {
    btn.addEventListener('click', _ => {
        localStorage.setItem("user_selected_rating", btn.textContent);
    });
});