let ertek=0;
$("#plusz").click(()=>{
    ertek++
    $("#szamlalo").text(ertek)
}
)
$("#minusz").click(()=>{
    ertek--
    $("#szamlalo").text(ertek)
}
)