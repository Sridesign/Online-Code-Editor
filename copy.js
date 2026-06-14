function copy() {
    let copyArea = document.querySelector(".copy-area");
    let text = document.getElementById("htmlbox")
    text.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton").style.display = "none";
    copyArea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton").style.display = "block";
        copyArea.classList.remove("active");
    },);
}
//*for css
/*function copy2() {
    let copiedarea = document.querySelector(".copy-area");
    let button2 = document.getElementById("htmlbox2")
    button2.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton2").style.display = "none";
    copiedarea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton2").style.display = "block";
        copyArea.classList.remove("active");
    },);
}
//* for js
function copy3() {
    let copiarea = document.querySelector(".copy-area");
    let button3 = document.getElementById("htmlbox3")
    button3.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton3").style.display = "none";
    copiarea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton3").style.display = "block";
        copiarea.classList.remove("active");
    },);
}*/
//*for again html2
function copy4() {
    let copiAreqa = document.querySelector(".copy-area2");
    let button4 = document.getElementById("htmlbox4")
    button4.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton4").style.display = "none";
    copiAreqa.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton4").style.display = "block";
        copiAreqa.classList.remove("active");
    },);
}
//*for again html3
function copy5() {
    let CopiAreqa = document.querySelector(".copy-area3");
    let button5 = document.getElementById("htmlbox5")
    button5.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton5").style.display = "none";
    CopiAreqa.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton5").style.display = "block";
        CopiAreqa.classList.remove("active");
    },);
}
//*for css2
function copy6() {
    let copiedarea = document.querySelector(".copy-area4");
    let button2 = document.getElementById("htmlbox6")
    button2.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton6").style.display = "none";
    copiedarea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton6").style.display = "block";
        copyArea.classList.remove("active");
    },);
}
//*for css3
function copy7() {
    let copiedarea = document.querySelector(".copy-area5");
    let button2 = document.getElementById("htmlbox7")
    button2.select();
    document.execCommand("copy");
    document.getElementById("htmlbutton7").style.display = "none";
    copiedarea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("htmlbutton7").style.display = "block";
        copyArea.classList.remove("active");
    },);
}