
const t = process.hrtime();;
var i,hasil, pangkat,a;
hasil = 1
a = 2;
pangkat = 1000
for(i = 0; i<pangkat; i++){
	hasil = hasil * a;
}

const bf1 = process.hrtime(t);;
console.log(hasil)
console.log(bf1);