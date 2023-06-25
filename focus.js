let viewMore12 = document.querySelector(".viewmore12");
let previousTable12 = document.querySelector(".forcast-container #previous-table12")


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
    setTimeout(plusSlides, 2000)
}


                    // view more code

    viewMore12.addEventListener("click", ()=>{
        previousTable12.style.height = "100%";
        viewMore12.style.display = "none"
    }
    )