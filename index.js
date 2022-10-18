let display = document.getElementById("display");
let button = Array.from(document.getElementsByClassName("button"));

// console.log(button);

// button click function target element


button.map(button => {
    button.addEventListener('click', (e) => {

        // console.log("clicked");
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch (e.target.innerText) {
            case "c":
                // clear inner text of display
                display.innerText = "";
                // break statement 
                break;
            case "←":
                // if display has inner text 
                if (display.innerText) {
                    // remove last Character from display
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;

            case "=":
                try {
                    // eval mathematics function  
                    display.innerText = eval(display.innerText);

                } catch {
                    // invalid mathematics expression then show Error
                    display.innerText = " Error:( ";
                }
                break;





            default:
                //  adding  innerText in display on 
                display.innerText += e.target.innerText;
            // break;
        }





    });
});