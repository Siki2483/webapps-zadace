function provjera(x) {
    if (x>=0 && x<=1000) {
        var rezultat = 1
    
     for (i = 7; i <x; i += 7 ){
        rezultat *= i
    }
    console.log(x+" -> "+rezultat)
}
else {
    console.log("Broj se ne nalazi unutat skupa [0,1000]")
}

}

provjera(23)