// JQuery lessons are here

// all items should be included into the "Testing" section

$(document).ready(function () {

    console.log("Testing...");


    let element = $("<div>", {
        text: "Some input is here",
        id: "pink"
    });

    element.addClass("section3").insertAfter("#placeHolder");
});
