document.querySelectorAll('.dot1').forEach(button => {
    button.addEventListener('click', () => {
        const minimize = button.nextElementSibling;

        button.classList.toggle('minimize');
    });
});

$(document).ready(function() {
    $("#wel1").on("click", function() {
        $("#link").toggleClass("clicks", 1000); // 1sec
    });
}); 