function pretvorba(x) {
    var sat = Math.floor(x/60);
    var minuta = x%60;
    console.log(x +" -> Ovo je " + sat + " sati i " + minuta +" minuta");
}

pretvorba(150);