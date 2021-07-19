let szovegAzOldalon=$("h1").text()
console.log(szovegAzOldalon)
$("h1").text("Ezt Javascriptből változtattuk meg.")

console.log($(".sarga").css("background-color"))

$(".sarga").css("background-color", 'blue')

$("h1").html("Ezt Javascriptből <u>változtattuk</u> meg.")

$("h1").append("<h1>Ezt Javascriptből írtuk hozzá.</h1>")

$("h1").toggleClass('sarga')

$("#hozzaado").click(function(){
    $("h1").append("<h1>Ezt Javascriptből írtuk hozzá.</h1>")
})

$("#torlo").click(() => {
    $("h1:last-of-type").remove()
})

/* $("h1").remove(); */

for (let i = 0; i < 100; i++) {
    $("p").append(`<br>${i+1}. Nem csalok többet a vizsgán.`)    
}

let szinek = ['red','green','blue','black','yellow',"brown"]

function EgyszinDoboz(szin){
    $('.kontener').append('<div class="doboz"></div>')
    $('.kontener div:last-of-type').css("background-color", szin)
}

/* EgyszinDoboz('green') */
szinek.forEach(EgyszinDoboz)