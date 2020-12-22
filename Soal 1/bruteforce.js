const w =[2,5,10,5];
const p =[2000,3000,5000,100]
const knapsack = 16;
var bit = [0,0,0,0]
var bestW = 0; 
var bestP=0; 
var bestComb;
var loc;
var batas = w.length
//Loop sebanyak kombinasi yang mungkin dibuat 
for (var i = 0; i < Math.pow(2,batas); i++){
	var j = 0;
	tW = 0
	tP = 0
//membuat kombinasi berupa nilai nilai bit
	while (bit[j] !=0 && j<batas-1){
		bit[j] = 0;
		j = j+1;
	}
	bit[j] = 1;
	//console.log('\tIter ' + i)
	//console.log(bit);
//Mengubah tiap bit menjadi nilai nilai yang ada
	for (var k = 0; k<batas;k++){
		if(bit[k] == 1){
			tW = tW + w[k]
			tP = tP + p[k]
		}
	}
//Membandingkan tiap tiap bit untuk mencari nilai tertinggi
	if (tP > bestP && tW < knapsack){
		loc = null;
		bestP = tP
		bestW = tW
		for(var l=0;l<bit.length;l++){
			if(bit[l] == 1){
				var pos = l+1
				loc = loc + pos + ' ';
			}
		}
	}
}

function Result(weight,price,lokasi){
	this.Barang_Ke 	= lokasi
	this.Total_Berat = weight;
	this.Total_Harga = price;
}

console.log("Hasil dari Brute Force :")
console.table(new Result(bestW,bestP,loc))