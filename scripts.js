let kepadatok = [
    {
        foto: 'images/1.jpg',
        felirat: 'Na elindulunk?',
        leiras: 'Az első lépések nehezek. De megoldjuk!'
    },
    {
        foto: 'images/2.jpg',
        felirat: 'Többen is evezünk...',
        leiras: 'Jó lenne eldönteni, merre van az előre. Vitassuk meg!'
    },
    {
        foto: 'images/3.jpg',
        felirat: 'Nagy a szárazság...',
        leiras: 'Hol van a víz? Gyerünk keressük meg!'
    },
    {
        foto: 'images/4.jpg',
        felirat: 'Kalandorok kíméljenek!',
        leiras: 'Megtaláltátok a vizet? Na érjetek utól!'
    },
]

let fotobetolt = (AktFoto) => {
    $('#kep').attr('src', kepadatok[AktFoto].foto);
    $('#fotofelirat').text(kepadatok[AktFoto].felirat);
    $('#fotoleiras').text(kepadatok[AktFoto].leiras);
    for (let index = 0; index < kepadatok.length; index++) {
        $(`#index${index}`).css("border", "1px solid gray"); 
    }
    $(`#index${AktFoto}`).css("border", "2px solid black");
}

AktFoto=0;
fotobetolt(AktFoto)

$('#jobbgomb').click(() => {
    AktFoto++;
    if (AktFoto===4) {AktFoto=0}
    fotobetolt(AktFoto);
  })

  $('#balgomb').click(() => {
    AktFoto--;
    if (AktFoto===-1) {AktFoto=3}
    fotobetolt(AktFoto);
  })

function IndexMegjelenit(kep,sorsz){
    $('#indexdoboz').append(`<div class="indexdobozelem"><img src="${kep.foto}" class="index" data-number="${sorsz}" id="index${sorsz}"><p class="indexszoveg">${kep.felirat}</p></div>`)
}

/*IndexMegjelenit(2);*/
/*kepadatok.forEach(IndexMegjelenit)*/

for (let index = 0; index < kepadatok.length; index++) {
    IndexMegjelenit(kepadatok[index],index);        
}

$('.index').click((event) => {
    let aktindex = $(event.target).attr('data-number');
    let aktindexszam = parseInt(aktindex);
    fotobetolt(aktindexszam);
})

