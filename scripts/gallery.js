let massive = 1;

// Put image into the Gallery via this button "Добавить картинку"

function addPic() {

// Adding 5 images

    if (massive < 6) {

        $(document).ready(function () {

// Create an Image element charged with onClick function <img onclick="expandPic(this)" src="pics/1.jpg">

            let myImage = "<img onclick='expandPic(this)' src='pics/" + massive + ".jpg'>";
            massive++;

// Add image element after the #gallery div

            $(myImage).appendTo("#gallery");

        });
    } else massive = 1;
}

function expandPic(image) {

    let expanded_img = image;

}