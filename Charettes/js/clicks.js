// when page loads...
$(document).ready(function () {

    const z_colors =[
        // "bg-z-dark",
        "z-dark-blue",
        "z-medium-blue",
        "z-light-blue",
        "z-beige",
        "z-light-orange",
        "z-dark-orange",
        "z-light-red",
        "z-medium-red",
        "z-dark-red"
    ]



    $('.cell').click(function () {

        if ($(this).hasClass("delete")) {
            return;
        }
        switch (this.id) {
            case "cell-1":
                console.log("cell 1 clicked");
                break;
            case "cell-2":
                wiggle_h(this);
                break;
            case "cell-3":
                console.log("cell 3 clicked");
                bg_color(this, "z-dark")
                break;
            case "cell-4":
                console.log("cell 4 clicked");

                bg_color(this, z_colors[Math.floor(Math.random() * z_colors.length)]);

                // wiggle random cells
                for (let i = 1; i < 50; i++) {
                    // pick a random number between 1 and 15
                    let random_number = Math.floor(Math.random() * 15) + 1;
                    // if the random number is 1, then wiggle cell i
                    if (random_number === 1) {
                        let random_cell = "#cell-" + i;
                        let cell = $(random_cell);
                        wiggle_h(cell);
                    }
                }

                break;
            case "cell-5":
                console.log("cell 5 clicked");
                bg_color(this, "white");
                crash_the_page();
                break;
            case "cell-6":
                console.log("cell 6 clicked");
                flip(this);
                break;
            case "cell-7":
                console.log("cell 7 clicked");
                
                // check what the inner p tag says
                let p = $(this).find("p");
                let p_text = p.text();
                // if it says "remove", then change it to "cancel"
                if (p_text === "remove") {
                    p.text("cancel");
                    toggle_delete("on");
                } else {
                    p.text("remove");
                    toggle_delete("off");
                }
                
                break;
            case "cell-8":
                console.log("cell 8 clicked");
                wiggle_h(this);
                flip(this);
                break;
            case "cell-9":
                console.log("cell 9 clicked");
                wiggle_h(this);
                wobble(this);
                break;
            case "cell-10":
                console.log("cell 10 clicked");
                wiggle_h(this);
                bounce(this);
                break;
            case "cell-11":
                console.log("cell 11 clicked");
                wiggle_h(this);
                grow(this);
                break;
            case "cell-12":
                console.log("cell 12 clicked");
                wiggle_h(this);
                pulse_red(this);
                break;
            case "cell-13":
                console.log("cell 13 clicked");
                wiggle_h(this);
                pulse_blue(this);
                break;
            case "cell-14":
                console.log("cell 14 clicked");
                fill_page(this);
                fill_page(this);
                break;
            case "cell-15":
                console.log("cell 15 clicked");
                wiggle_h(this);
                tada(this);
                break;
            case "cell-16":
                console.log("cell 16 clicked");
                wiggle_h(this);
                hinge(this);
                break;
            case "cell-17":
                console.log("cell 17 clicked");
                wiggle_h(this);
                rollin(this);
                break;
            case "cell-18":
                console.log("cell 18 clicked");
                flip(this);
                wobble(this);
                break;
            case "cell-19":
                console.log("cell 19 clicked");
                flip(this);
                bounce(this);
                break;
            case "cell-20":
                console.log("cell 20 clicked");
                flip(this);
                grow(this);
                break;
            case "cell-21":
                console.log("cell 21 clicked");
                flip(this);
                pulse_red(this);
                break;
            case "cell-22":
                console.log("cell 22 clicked");
                flip(this);
                pulse_blue(this);
                break;
            case "cell-23":
                console.log("cell 23 clicked");
                flip(this);
                wiggle_v(this);
                break;
            case "cell-24":
                console.log("cell 24 clicked");
                flip(this);
                tada(this);
                break;
            case "cell-25":
                console.log("cell 25 clicked");
                flip(this);
                hinge(this);
                break;
            case "cell-26":
                console.log("cell 26 clicked");
                flip(this);
                rollin(this);
                break;
            case "cell-27":
                console.log("cell 27 clicked");
                wobble(this);
                bounce(this);
                break;
            case "cell-28":
                console.log("cell 28 clicked");
                wobble(this);
                grow(this);
                break;
            case "cell-29":
                console.log("cell 29 clicked");
                wobble(this);
                shrink(this);
                break;
            case "cell-30":
                console.log("cell 30 clicked");
                wobble(this);
                pulse_red(this);
                break;
            case "cell-31":
                console.log("cell 31 clicked");
                fill_page(this);
                pulse_blue(this);
                break;
            case "cell-32":
                console.log("cell 32 clicked");
                wobble(this);
                pulse_orange(this);
                break;
            case "cell-33":
                console.log("cell 33 clicked");
                wobble(this);
                tada(this);
                break;
            case "cell-34":
                console.log("cell 34 clicked");
                wobble(this);
                hinge(this);
                break;
            case "cell-35":
                console.log("cell 35 clicked");
                wobble(this);
                rollin(this);
                break;
            case "cell-36":
                console.log("cell 36 clicked");
                bounce(this);
                grow(this);
                break;
            case "cell-37":
                console.log("cell 37 clicked");
                bounce(this);
                shrink(this);
                break;
            case "cell-38":
                console.log("cell 38 clicked");
                bounce(this);
                pulse_red(this);
                break;
            case "cell-39":
                console.log("cell 39 clicked");
                bounce(this);
                pulse_blue(this);
                break;
            case "cell-40":
                console.log("cell 40 clicked");
                bounce(this);
                pulse_orange(this);
                break;
            case "cell-41":
                console.log("cell 41 clicked");
                bounce(this);
                tada(this);
                break;
            case "cell-42":
                console.log("cell 42 clicked");
                bounce(this);
                hinge(this);
                break;
            case "cell-43":
                console.log("cell 43 clicked");
                bounce(this);
                rollin(this);
                break;
            case "cell-44":
                console.log("cell 44 clicked");
                grow(this);
                shrink(this);
                break;
            case "cell-45":
                console.log("cell 45 clicked");
                grow(this);
                pulse_red(this);
                break;
            case "cell-46":
                console.log("cell 46 clicked");
                grow(this);
                pulse_blue(this);
                break;
            case "cell-47":
                console.log("cell 47 clicked");
                grow(this);
                pulse_orange(this);
                break;
            case "cell-48":
                console.log("cell 48 clicked");
                grow(this);
                tada(this);
                break;
            case "cell-49":
                console.log("cell 49 clicked");
                grow(this);
                hinge(this);
                break;
            case "cell-50":
                console.log("cell 50 clicked");
                grow(this);
                rollin(this);
                break;
            case "cell-51":
                console.log("cell 51 clicked");
                shrink(this);
                pulse_red(this);
                break;
            case "cell-52":
                console.log("cell 52 clicked");
                shrink(this);
                pulse_blue(this);
                break;
            case "cell-53":
                console.log("cell 53 clicked");
                shrink(this);
                pulse_orange(this);
                break;
            case "cell-54":
                console.log("cell 54 clicked");
                shrink(this);
                tada(this);
                break;
            case "cell-55":
                console.log("cell 55 clicked");
                shrink(this);
                hinge(this);
                break;
            case "cell-56":
                console.log("cell 56 clicked");
                shrink(this);
                rollin(this);
                break;
            case "cell-57":
                console.log("cell 57 clicked");
                
                break;
            case "cell-58":
                console.log("cell 58 clicked");
                pulse_red(this);
                tada(this);

                break;
            case "cell-59":
                console.log("cell 59 clicked");
                pulse_red(this);
                hinge(this);
                break;
            case "cell-60":
                console.log("cell 60 clicked");
                pulse_red(this);
                rollin(this);
                break;
            case "cell-61":
                console.log("cell 61 clicked");
                pulse_blue(this);
                tada(this);
                break;
            case "cell-62":
                console.log("cell 62 clicked");
                pulse_blue(this);
                hinge(this);

                break;
            case "cell-63":
                console.log("cell 63 clicked");
                pulse_blue(this);
                rollin(this);
                break;
            case "cell-64":
                console.log("cell 64 clicked");
                pulse_orange(this);
                tada(this);
                break;
            case "cell-65":
                console.log("cell 65 clicked");
                pulse_orange(this);
                hinge(this);
                break;
            case "cell-66":
                console.log("cell 66 clicked");
                pulse_orange(this);
                rollin(this);
                break;
            case "cell-67":
                console.log("cell 67 clicked");
                tada(this);
                hinge(this);
                break;
            case "cell-68":
                console.log("cell 68 clicked");
                tada(this);
                rollin(this);
                break;
            case "cell-69":
                console.log("cell 69 clicked");
                hinge(this);
                rollin(this);
                break;
            case "cell-70":
                console.log("cell 70 clicked");

                break;
            case "cell-71":
                console.log("cell 71 clicked");
                break;
            case "cell-72":
                console.log("cell 72 clicked");
                break;
            case "cell-73":
                console.log("cell 73 clicked");
                break;
            case "cell-74":
                console.log("cell 74 clicked");
                break;
            case "cell-75":
                console.log("cell 75 clicked");
                break;
            case "cell-76":
                console.log("cell 76 clicked");
                break;
            case "cell-77":
                console.log("cell 77 clicked");
                break;
            case "cell-78":
                console.log("cell 78 clicked");
                break;
            case "cell-79":
                console.log("cell 79 clicked");
                break;
            case "cell-80":
                console.log("cell 80 clicked");
                break;
            case "cell-81":
                console.log("cell 81 clicked");
                break;
            case "cell-82":
                console.log("cell 82 clicked");
                break;
            case "cell-83":
                console.log("cell 83 clicked");
                break;
            case "cell-84":
                console.log("cell 84 clicked");
                break;
            case "cell-85":
                console.log("cell 85 clicked");
                break;
            case "cell-86":
                console.log("cell 86 clicked");
                break;
            case "cell-87":
                console.log("cell 87 clicked");
                break;
            case "cell-88":
                console.log("cell 88 clicked");
                break;
            case "cell-89":
                console.log("cell 89 clicked");
                break;
            case "cell-90":
                console.log("cell 90 clicked");
                break;
            case "cell-91":
                console.log("cell 91 clicked");
                break;
            case "cell-92":
                console.log("cell 92 clicked");
                break;
            case "cell-93":
                console.log("cell 93 clicked");
                break;
            case "cell-94":
                console.log("cell 94 clicked");
                break;
            case "cell-95":
                console.log("cell 95 clicked");
                break;
            case "cell-96":
                console.log("cell 96 clicked");
                break;
            case "cell-97":
                console.log("cell 97 clicked");
                break;
            case "cell-98":
                console.log("cell 98 clicked");
                break;
            case "cell-99":
                console.log("cell 99 clicked");
                break;
            case "cell-100":
                console.log("cell 100 clicked");
                break;
    
        }
    });

    






let deleteMode = false;


function toggle_delete(mode) {
    if (mode == "on") {
       // set the cursor to the x
        $("body").addClass("delete-mode");
        deleteMode = true;

    } else if (mode == "off") {
        $("body").removeClass("delete-mode");
        deleteMode = false;
    } else {
        throw "Invalid mode";
    }

}


// if delte mode is on, delete the cell when it is clicke
$('.cell').click(function () {
    if (deleteMode) {
        // if the clicked cell is not of id #cell-7, delete it
        if ($(this).attr("id") != "cell-7") {
            $(this).addClass("deleted");
        }
    }
});






});
