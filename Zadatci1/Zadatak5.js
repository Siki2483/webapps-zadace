let x = "webb apps vjezbe";

function cammelCase() {
  let polje = x.split(" ");
  for (let i = 1; i < polje.length; i++) {
    polje[i] = polje[i][0].toUpperCase() + polje[i].substring(1);
  }
  console.log(x+" -> "+polje.join(""));
}

cammelCase();