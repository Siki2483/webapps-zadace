var x = "webb apps vjezbe"

function cammelCase() {
  var polje = x.split(" ")
  for (var i = 1; i < polje.length; i++) {
    polje[i] = polje[i][0].toUpperCase() + polje[i].substring(1)
  }
  console.log(x+" -> "+polje.join(""))
}

cammelCase();