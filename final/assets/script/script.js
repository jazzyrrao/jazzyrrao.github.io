function hideBlueButton1(){
    document.getElementById("blue1").style.visibility = "hidden"
    document.getElementById("blue2").style.visibility = "visible"
    document.getElementById("blue3").style.visibility = "visible"
    document.getElementById("blue4").style.visibility = "visible"
    document.getElementById("green1").style.visibility = "visible"
    document.getElementById("green2").style.visibility = "hidden"
    document.getElementById("green3").style.visibility = "hidden"
    document.getElementById("green4").style.visibility = "hidden"
    document.getElementById("mystery-info").style.visibility = "hidden"
    document.getElementById("orange-info").style.visibility = "visible"
    document.getElementById("yakult-info").style.visibility = "hidden"
    document.getElementById("strawberry-info").style.visibility = "hidden"
    document.getElementById("milktea-info").style.visibility = "hidden"
    if(document.getElementById("machine-button-after") !== "hidden"){
        document.getElementById("machine-button").style.visibility = "visible"
        document.getElementById("machine-button-after").style.visibility = "hidden"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "hidden"
    }

}

document.getElementById("blue1").onclick = hideBlueButton1;

function hideBlueButton2(){
    document.getElementById("blue2").style.visibility = "hidden"
    document.getElementById("blue1").style.visibility = "visible"
    document.getElementById("blue3").style.visibility = "visible"
    document.getElementById("blue4").style.visibility = "visible"
    document.getElementById("green2").style.visibility = "visible"
    document.getElementById("green1").style.visibility = "hidden"
    document.getElementById("green3").style.visibility = "hidden"
    document.getElementById("green4").style.visibility = "hidden"
    document.getElementById("mystery-info").style.visibility = "hidden"
    document.getElementById("orange-info").style.visibility = "hidden"
    document.getElementById("yakult-info").style.visibility = "hidden"
    document.getElementById("strawberry-info").style.visibility = "visible"
    document.getElementById("milktea-info").style.visibility = "hidden"
    if(document.getElementById("machine-button-after") !== "hidden"){
        document.getElementById("machine-button").style.visibility = "visible"
        document.getElementById("machine-button-after").style.visibility = "hidden"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "hidden"
    }
}

document.getElementById("blue2").onclick = hideBlueButton2;


function hideBlueButton3(){
    document.getElementById("blue3").style.visibility = "hidden"
    document.getElementById("blue1").style.visibility = "visible"
    document.getElementById("blue2").style.visibility = "visible"
    document.getElementById("blue4").style.visibility = "visible"
    document.getElementById("green3").style.visibility = "visible"
    document.getElementById("green1").style.visibility = "hidden"
    document.getElementById("green2").style.visibility = "hidden"
    document.getElementById("green4").style.visibility = "hidden"
    document.getElementById("mystery-info").style.visibility = "hidden"
    document.getElementById("orange-info").style.visibility = "hidden"
    document.getElementById("yakult-info").style.visibility = "hidden"
    document.getElementById("strawberry-info").style.visibility = "hidden"
    document.getElementById("milktea-info").style.visibility = "visible"
    if(document.getElementById("machine-button-after") !== "hidden"){
        document.getElementById("machine-button").style.visibility = "visible"
        document.getElementById("machine-button-after").style.visibility = "hidden"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "hidden"
    }
}

document.getElementById("blue3").onclick = hideBlueButton3;

function hideBlueButton4(){
    document.getElementById("blue4").style.visibility = "hidden"
    document.getElementById("blue1").style.visibility = "visible"
    document.getElementById("blue2").style.visibility = "visible"
    document.getElementById("blue3").style.visibility = "visible"
    document.getElementById("green4").style.visibility = "visible"
    document.getElementById("green1").style.visibility = "hidden"
    document.getElementById("green2").style.visibility = "hidden"
    document.getElementById("green3").style.visibility = "hidden"
    document.getElementById("mystery-info").style.visibility = "hidden"
    document.getElementById("orange-info").style.visibility = "hidden"
    document.getElementById("yakult-info").style.visibility = "visible"
    document.getElementById("strawberry-info").style.visibility = "hidden"
    document.getElementById("milktea-info").style.visibility = "hidden"
    if(document.getElementById("machine-button-after") !== "hidden"){
        document.getElementById("machine-button").style.visibility = "visible"
        document.getElementById("machine-button-after").style.visibility = "hidden"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "hidden"
    }
}

document.getElementById("blue4").onclick = hideBlueButton4;

function getDirnk(){
    if (document.getElementById("green1").style.visibility == "visible"){
        document.getElementById("machine-button").style.visibility = "hidden"
        document.getElementById("machine-button-after").style.visibility = "visible"
        document.getElementById("orange1").style.visibility = "visible"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "visible"
    } else if(document.getElementById("green2").style.visibility == "visible"){
        document.getElementById("machine-button").style.visibility = "hidden"
        document.getElementById("machine-button-after").style.visibility = "visible"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "visible"
        document.getElementById("bar").style.visibility = "visible"
    } else if(document.getElementById("green3").style.visibility == "visible"){
        document.getElementById("machine-button").style.visibility = "hidden"
        document.getElementById("machine-button-after").style.visibility = "visible"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "visible"
        document.getElementById("yakult1").style.visibility = "hidden"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "visible"
    } else if(document.getElementById("green4").style.visibility == "visible"){
        document.getElementById("machine-button").style.visibility = "hidden"
        document.getElementById("machine-button-after").style.visibility = "visible"
        document.getElementById("orange1").style.visibility = "hidden"
        document.getElementById("milktea1").style.visibility = "hidden"
        document.getElementById("yakult1").style.visibility = "visible"
        document.getElementById("strawberry1").style.visibility = "hidden"
        document.getElementById("bar").style.visibility = "visible"
    } else {
        document.getElementById("machine-button").style.visibility = "visible"
    }
}

document.getElementById("machine-button").onclick = getDirnk;
