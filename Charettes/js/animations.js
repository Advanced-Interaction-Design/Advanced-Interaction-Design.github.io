function wiggle_h(clicked_cell) {
    if (!$(clicked_cell).hasClass("wiggle-h")) {
        console.log("cell clicked");
        $(clicked_cell).addClass("wiggle-h");
        // then, after .7 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("wiggle-h");
        }
        , 700);
    }
}


function bg_color(clicked_cell, color) {
    let bg_color_class;
    switch (color) {
        case "z-dark":
            bg_color_class = "bg-z-dark";
            break;
        case "z-dark-blue":
            bg_color_class = "bg-z-dark-blue";
            break;
        case "z-medium-blue":
            bg_color_class = "bg-z-medium-blue";
            break;
        case "z-light-blue":
            bg_color_class = "bg-z-light-blue";
            break;
        case "z-beige":
            bg_color_class = "bg-z-beige";
            break;
        case "z-light-orange":
            bg_color_class = "bg-z-light-orange";
            break;
        case "z-dark-orange":
            bg_color_class = "bg-z-dark-orange";
            break;
        case "z-light-red":
            bg_color_class = "bg-light-red";
            break;
        case "z-medium-red":
            bg_color_class = "bg-medium-red";
            break;
        case "z-dark-red":
            bg_color_class = "bg-dark-red";
            break;
        case "white":
            bg_color_class = "white";
            break;
            
        default:
            throw "Invalid color";
            break;

    }

    if (!$(clicked_cell).hasClass(bg_color_class)) {
        // remove any existing bg color classes
        // if cell has any classes that start with "bg-"
        if ($(clicked_cell).attr("class").indexOf("bg-") > -1) {
            // get the classes
            let classes = $(clicked_cell).attr("class").split(" ");
            // loop through the classes
            for (let i = 0; i < classes.length; i++) {
                // if the class starts with "bg-"
                if (classes[i].indexOf("bg-") > -1) {
                    // remove the class
                    $(clicked_cell).removeClass(classes[i]);
                }
            }
        }
        $(clicked_cell).addClass(bg_color_class);
    } else {
        $(clicked_cell).removeClass(bg_color_class);
    }




            


}


function crash_the_page() {
    
    // if on Chrome, crash the page with chrome://inducebrowsercrashforrealz/
    if (navigator.userAgent.indexOf("Chrome") > -1) {
        // alter history so the last page was "chrome://inducebrowsercrashforrealz"
        history.pushState(null, null, "chrome://inducebrowsercrashforrealz");
        
    } else {
        [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111))
    }



}