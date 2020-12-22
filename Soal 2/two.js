const { stdin, stdout } = process;

//Fungsi untuk membuat input dari stdin dan stdout
function input(question) {
  return new Promise((resolve, reject) => {
    stdin.resume();
    stdout.write(question);
    stdin.on('data', data => resolve(data.toString().trim()));
    stdin.on('error', err => reject(err));
  });
}

//Fungsi untuk algoritma bruteforce
function bruteforce(a, pangkat){
	var hasil
	hasil = 1
	for(var i = 0; i<pangkat; i++){
		hasil = hasil * a;
	}
	return(hasil);
}

//Fungsi untuk algoritma decrease and conquer
function decrease(a, pangkat){
	if(pangkat == 0){
		return 1;
	}else{
		return decrease(a,pangkat-1) * a
	}
}

//Fungsi untuk algoritma divide and conquer
function divide(a, pangkat){
	if(pangkat == 0){return 1} 
	else if (pangkat == 1){return a} 

	var setengah = Math.floor(pangkat/2)
	return (divide(a,setengah)) * (divide(a,pangkat-setengah))
}

//fungsi pembuatanan objek yang kemudian akan di print sebagai tabel
function Result(bf,dec,div){
	this.Waktu_Brute_Force 	= bf
	this.Waktu_Decrease_Conquer = dec;
	this.Waktu_Divide_Conquer = div;
}

//fungsi main
async function main() {
	try{
		//Input user untuk nilai a dan pangkat
		var a = await input('Masukkan Nilai Konstanta = ')			
		var pangkat = await input('Masukkan nilai pangkat = ')		

		//Timer pemanggilan fungsi bruteforce
		const bf0 = process.hrtime();
		var brute = bruteforce(a,pangkat)
		const bf1 = process.hrtime(bf0);
		//console.log(brute)

		//Timer pemanggilan fungsi decrease and conquer
		const dec0 = process.hrtime()
		var decreas = decrease(a,pangkat)
		const dec1 = process.hrtime(dec0);
		//console.log(decreas)

		//Timer pemanggilan fungsi divie and conquer
		const div0 = process.hrtime();
		var div =  divide(a,pangkat)
		const div1 = process.hrtime(div0);
		//console.log(div)

		//Output waktu yang digunakan bernilai microsecond
		console.table(new Result(bf1[1]/ 1000,
								dec1[1]/ 1000,
								div1[1]/ 1000))
	}
	catch(err) {
    	console.log("There's an error!");
    	console.log(err);
	}
	process.exit();
}

//Program dijalankan dengan memanggil fungsi main
main()
