let nevek=['Zoli','Luca', 'Anett', 'Mama']
nevek.forEach((elem) => {if (elem==='Zoli') {
    $('ul').append(`<li id="${elem}" style="font-weight: bold">${elem}</li>`)
} else {
    $('ul').append(`<li id="${elem}">${elem}</li>`)
}
})
let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };
  $('body').append(`<h1>${additionalBlock.title}</h1>`)
  $('body').append(`<p>${additionalBlock.text}</p>`)
