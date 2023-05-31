let sliderIndex = 0;

plusSlides();

function plusSlides() {
    let table = document.getElementsByClassName("sliders-images")

    for (let i = 0; i < table.length; i++) {
        table[i].style.display = "none";
    }
    sliderIndex++;
    if (sliderIndex > table.length) { sliderIndex = 1 };
    table[sliderIndex - 1].style.display = "block";
    setTimeout(plusSlides, 10000)
}