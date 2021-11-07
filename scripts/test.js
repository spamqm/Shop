// JQuery lessons are here
// all items should be included into the "Testing" section
function addPic_test() {

    // Adding 5 images
    if (massive < 6) {
        $(document).ready(function () {

            // Create an Image element charged with onClick function <img onclick="expandPic(this)" src="pics/1.jpg">
            const myImage = `<img  alt="pic${massive}" onclick="expandPic_test(this)" src="pics/${massive}.jpg">`;

            console.log(myImage);
            massive++;

            // Add image element INTO the #gallery div
            const temp = $(`#gallery`);
            $(myImage).appendTo(temp);
        });
    } else
        massive = 1;
}

function expandPic_test(element) {
}
