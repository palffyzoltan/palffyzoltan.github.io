let color= "purple";
let number= 102;
let word= "cool ";
if (color=="purple") {$('.North').css("background-color",color)};
if (number>100) {$('.East').text("wow, de nagy szám")} else {$('.East').text("ez csak egy közönséges szám")}
if (word=="cool") {$('.South').text("A DOM Ereje")} else {$('.West').text("A DOM Ereje")}