var tanya = true;
while(tanya){
    //menagkap pilihan  player
    var p = prompt('Pilih : Gajah, Semut, Orang');

    //menangkap pilihan computer
    var comp = Math.random()
    if (comp <0.34) {
        comp = 'Gajah';
    } else if (comp>=0.34 && comp<0.67){
        comp = 'Orang';
    } else {
        comp ='Semut';
    }
    var hasil = '';
    //menentukan rules
    if (p == comp){
        hasil ='Seri!';
    } else if (p =='Gajah'){
        hasil = (comp == 'Orang') ? 'Menang': 'Kalah';
    } else if (p == 'Orang'){
        hasil = (comp == 'Gajah') ? 'Kalah': 'Menang';
    } else if (p== 'Semut'){
        hasil = (comp=='Semut') ? 'Kalah':'Menang';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }

    //tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : '+comp+'\n Maka hasilnya adalah kamu : '+hasil  )
    tanya = confirm('Lagi?');
}

alert('Terima kasih sudah bermain suwit jawa')