let massive = 1;

let expanded = false;

function addPic() {



    if (massive < 6) {

        $(document).ready(function () {


            let myImage = "<img onclick='expandPic(this)' src='pics/" + massive + ".jpg'>";
            massive++;

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