function exponentBF(a : real, pangkat : integer) = real

Deklarasi
	i : integer
	res : real
Algoritma
	res = 1
	for i = 0 to pangkat do
		res = res * a
	endfor
	return res



function Dec(a : real, pangkat : integer) = real
Algoritma
	if pangkat == 0
		return 1
	else
		return a*Dec(a,pangkat-1)
	endif



function Div(a : real, pangkat : integer) = real
Deklarasi
	setengah : integer
Algoritma
	if pangkat == 0
		return 1
	else if pangkat == 1
		return a
	endif

	setengah = floor(pangkat/2)
	return Div(a,setengah) * Div(a,pangkat-setengah)
