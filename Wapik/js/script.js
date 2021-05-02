function openNav() {
    document.getElementById("nav-mobile").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav-mobile").style.height = "0%";
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
var basicScrollTop = function() {

    var btnTop = document.querySelector('#scrollbtn');
    var btnReveal = function() {

        if (pageYOffset >= 300) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }
    }

    var TopscrollTo = function() {
        if (window.scrollY != 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    window.addEventListener('scroll', btnReveal);
    btnTop.addEventListener('click', TopscrollTo);

};
basicScrollTop();