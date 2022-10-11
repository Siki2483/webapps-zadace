var svi_brojevi = [1,2,3,4,5,6,7,8,9,10]

function brojevi() {
    var neparni = []
    for (var i of svi_brojevi){
        if (i % 3 == 0){
            neparni.push(i)

}      
}
    console.log(svi_brojevi +" -> Brojevi djeljivi s 3 su: "+neparni)
}

brojevi(svi_brojevi)