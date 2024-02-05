document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.container');
    const signUpLink = document.querySelector('.foot a');

    signUpLink.addEventListener('click', function (event) {
        event.preventDefault();
        cardContainer.classList.toggle('flipped');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.querySelector('.container');
    const logInLink = document.querySelector('.back .foot a');

    logInLink.addEventListener('click', function (event) {
        event.preventDefault();
        cardContainer.classList.toggle('flipped');
    });
});

function bookNow() {
    window.location.href = 'profile.html';
}