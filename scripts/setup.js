prepare();


function prepare() {

    let elements = document.getElementsByTagName("li");

    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute("onmouseover", "changeColor(this)");
        elements[i].setAttribute("onmouseout", "changeColor(this)");
        elements[i].setAttribute("onclick", "setColor(this)");
    }

}


function changeColor(element) {

    if (!element.hasAttribute("class")) {
        element.setAttribute("class", "over")
    } else element.removeAttribute("class")
}


function setColor(element) {

    element.setAttribute("class", "marked")

}

