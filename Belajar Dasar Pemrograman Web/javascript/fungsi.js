function bahasa(nama,laguage) {
    if (laguage === "inggris") {
        return "Good Morning "+ nama+"!";
    }else if(laguage === "indonesia"){
        return "Selamat Pagi "+ nama+"!";
    }else if(laguage === "jepang"){
        return "Ohayōgozaimasu "+nama+"!";
    }else{
        return "Bonjour "+nama+"!";
    }
}


let bahasaNasional = bahasa("konto","indonesia");
console.log(bahasaNasional)

/*output
Selamat Pagi konto!
*/