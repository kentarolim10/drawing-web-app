const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
const COLOURS = ["black","red","blue","green"];

window.addEventListener("load", ()=> {
    //Setup
    const canvasElement = document.getElementById("canvas");
    canvasElement.width = CANVAS_WIDTH;
    canvasElement.height = CANVAS_HEIGHT;
    const ctx = canvasElement.getContext("2d");

    //Variables
    let painting = false;
    let paintingColour = COLOURS[0];

    const colourButtons = [document.getElementById("button-one"),
    document.getElementById("button-two"),
    document.getElementById("button-three"),
    document.getElementById("button-four")]
    const clearButton = document.getElementById("button-five");

    //functions
    function draw (e) {
        if (!painting) return;

        //Set ctx
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = paintingColour;

        ctx.lineTo(e.clientX - (window.innerWidth - CANVAS_WIDTH)/2,e.clientY);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX - (window.innerWidth - CANVAS_WIDTH)/2,e.clientY);
    }

    //Event Listeners
    window.addEventListener("mousedown", e => {
        painting = true;
        draw(e);
    });

    window.addEventListener("mouseup", () => {
        painting = false;
        ctx.beginPath();
    });

    window.addEventListener("mousemove", draw);

    //Initialize Size of first button to be larger
    colourButtons[0].style.width = "70px";
    colourButtons[0].style.height = "70px";

    //Adds event listeners to all colour buttons
    for (let i=0; i < COLOURS.length; i++) {

        colourButtons[i].style.backgroundColor = COLOURS[i];

        colourButtons[i].addEventListener("click", ()=> {
            colourButtons.forEach((button,index) => {
                if (index == i) {
                    button.style.width = "70px";
                    button.style.height = "70px";
                } else {
                    button.style.width = "50px";
                    button.style.height = "50px";
                }
            });
            paintingColour = COLOURS[i];
        })
    }

    clearButton.addEventListener("click", ()=> {
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    })
});
