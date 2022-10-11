var objekt1 = {
    a: 1,
    b: 2,
    c: 3,
  }
  
var objekt2 = {
    a: 321,
    b: 3,
    c: 1,
  }
  
function objekti(x, y) {
    var kljuc1 = JSON.stringify(Object.keys(x))
    var kljuc2 = JSON.stringify(Object.keys(y))
    console.log(kljuc1 == kljuc2)
}
  
  objekti(objekt1, objekt2)