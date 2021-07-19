$("#elso").click(()=> {console.log("Rámkattintottál.")})
$("#masod").click(()=> {$("#elso").text("Változtatott első gomb")})
$("#harmad").click(()=> {$("button").css("background-color",'green')})
$("#negyed").click(()=> {
$("#negyed").css("background-color",$("#szoveg").val())
$("#negyed").prop('disabled', true);
})
