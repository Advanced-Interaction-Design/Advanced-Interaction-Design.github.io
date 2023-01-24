

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
    // if (navigator.userAgent.indexOf("Chrome") > -1) {
    //     // alter history so the last page was "chrome://inducebrowsercrashforrealz"
    //     history.pushState(null, null, "chrome://inducebrowsercrashforrealz");
        
    // } else {
    [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111))
    // }



}


function flip(clicked_cell) {
    if (!$(clicked_cell).hasClass("flip")) {
        $(clicked_cell).addClass("flip");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("flip");
        }
        , 1000);
    }
}


function wobble(clicked_cell) {
    if (!$(clicked_cell).hasClass("wobble")) {
        $(clicked_cell).addClass("wobble");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("wobble");
        }
        , 1000);
    }
}

function bounce(clicked_cell) {
    if (!$(clicked_cell).hasClass("bounce")) {
        $(clicked_cell).addClass("bounce");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("bounce");
        }
        , 1000);
    }
}

function grow(clicked_cell) {
    if (!$(clicked_cell).hasClass("grow")) {
        $(clicked_cell).addClass("grow");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("grow");
        }
        , 1000);
    }
}

function shrink(clicked_cell) {
    if (!$(clicked_cell).hasClass("shrink")) {
        $(clicked_cell).addClass("shrink");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("shrink");
        }
        , 1000);
    }
}

function pulse_red(clicked_cell) {
    if (!$(clicked_cell).hasClass("pulse-red")) {
        $(clicked_cell).addClass("pulse-red");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("pulse-red");
        }
        , 1000);
    }
}

function pulse_blue(clicked_cell) {
    if (!$(clicked_cell).hasClass("pulse-blue")) {
        $(clicked_cell).addClass("pulse-blue");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("pulse-blue");
        }
        , 1000);
    }
}

function pulse_orange(clicked_cell) {
    if (!$(clicked_cell).hasClass("pulse-orange")) {
        $(clicked_cell).addClass("pulse-orange");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("pulse-orange");
        }
        , 1000);
    }
}

function tada(clicked_cell) {
    if (!$(clicked_cell).hasClass("tada")) {
        $(clicked_cell).addClass("tada");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("tada");
        }
        , 1000);
    }
}

function hinge(clicked_cell) {
    if (!$(clicked_cell).hasClass("hinge")) {
        $(clicked_cell).addClass("hinge");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("hinge");
        }
        , 1000);
    }
}

function rollin(clicked_cell) {
    if (!$(clicked_cell).hasClass("rollin")) {
        $(clicked_cell).addClass("rollin");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("rollin");
        }
        , 1000);
    }
}



function wiggle_v(clicked_cell) {
    if (!$(clicked_cell).hasClass("wiggle-v")) {
        $(clicked_cell).addClass("wiggle-v");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("wiggle-v");
        }
        , 1000);
    }
}

function fill_page(clicked_cell) {
    if (!$(clicked_cell).hasClass("fill-page")) {
        $(clicked_cell).addClass("fill-page");
        // then, after 1 seconds, remove the class
        setTimeout(function () {
            $(clicked_cell).removeClass("fill-page");
        }
        , 1000);
    }
}

