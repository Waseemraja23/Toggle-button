let mainbox = document.querySelector("#main");
let containerbox = document.querySelector("#container");
let circlebox = document.querySelector("#circle");

containerbox.addEventListener('click', function () {
    // mainbox.style.backgroundColor = "black";
    // containerbox.style.backgroundColor = "white";
    // circlebox.style.backgroundColor = "white";
    // circlebox.style.marginLeft = "42px"

    // mainbox.style.backgroundColor = "white"

    if (mainbox.style.backgroundColor == "black") {
        mainbox.style.backgroundColor = "white";
        // containerbox.style.backgroundColor = "black";
        circlebox.style.backgroundColor = "black";
        circlebox.style.marginLeft = "4px"

    }
    else {
        mainbox.style.backgroundColor = "black";
        containerbox.style.backgroundColor = "white";
        circlebox.style.backgroundColor = "white";
        circlebox.style.marginLeft = "42px"

    }
})


