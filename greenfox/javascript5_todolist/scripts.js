let szamlalo=1
$("#AddtodoButton").click(()=>{
    szamlalo++;
    szoveg=$("#szoveg").val();
    $("ul").append(`<li class="ToDo${szamlalo}">${szoveg}</li>`);
    $("#szoveg").val("");
})
$("li").click(()=>{
    console.log("kattintottam")
})
