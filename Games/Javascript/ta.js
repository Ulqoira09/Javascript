//game tebak angka

//mendapatkan angka random untuk ditebak
var angkaRandom = Math.floor(Math.random() * 10);
var kesempatan = 2;
alert('selamat datang di game tebak angka \n silahkan masukkan angka dari 1-10 \n kamu punya tiga  kesempatan');

while (kesempatan >= 0) {
	var p_angka = prompt('Masukkan angka tebakan');
	if (p_angka == angkaRandom && kesempatan >= 0) {
		alert('Anda benar ! \n Angka yang dicari adalah ' +angkaRandom);
		kesempatan = 0;
	} else if (p_angka < angkaRandom && kesempatan > 0) {
		alert('terlalu rendah \n ayo masih ada ' +kesempatan+ ' kesempatan');
	} else if (p_angka > angkaRandom && kesempatan > 0) {
		alert('terlalu tinggi \n ayo masih ada ' +kesempatan+ ' kesempatan');
	} else if (kesempatan == 0 && p_angka !== angkaRandom) {
		alert("kesempatan anda habis\n anda kalah, angka yang di cari adalah " +angkaRandom);
	}
		kesempatan --;	
}
alert('terima kasih');
