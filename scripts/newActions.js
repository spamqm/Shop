let massive = 1;

let expanded = false;

function addPic() {


// Adding 5 images

    if (massive < 6) {

        $(document).ready(function () {

// Create an Image element charged with onClick function <img onclick="expand(this)" src="pics/1.jpg">

            let myImage = "<img onclick='expandPic(this)' src='pics/" + massive + ".jpg'>";
            massive++;

// Add image element after the #gallery div

            $(myImage).appendTo("#gallery");

        });
    } else massive = 1;
}


function expandPic(source) {

    let src = source.getAttribute("src");
    let expanded_image = "<img src='" + src + "'>";


    if (!expanded) {

        $(expanded_image).appendTo("#expanded");

        //expanded = true;
    }
}

function investigate() {


}