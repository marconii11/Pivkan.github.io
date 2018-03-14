window.onload = function()
{
	document.getElementById("taster").addEventListener("click", provera);
}

function provera(){
	var greske=0;
	var ime=document.getElementById("tbIme").value;
	var regIme=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!regIme.test(ime)){
		greske++;
	}
	var prezime=document.getElementById("tbPrezime").value;
	var regPrezime=/^[A-ZŽŠĐČĆ][a-zžšđčć]{2,20}(\s[A-ZŽŠĐČĆ][a-zžšđčć]{2,20})?$/;
	if(!regPrezime.test(prezime)){
		greske++;
	}
	var email=document.getElementById("tbEmail").value;
	var regEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(!regEmail.test(email)){
		greske++;
	}
	var poruka=document.getElementById("taPoruka").value;
	var regPoruka=/^[A-ZŽŠĐČĆ][a-zžšđčć]+$/;
	if(!regPoruka.test(poruka)){
		greske++;
	}
	if (greske>0){
		alert("Niste ispravno popunili kontakt formu, molimo Vas proverite još jednom sve podatke koje ste uneli!");
	}
	else alert("Uspešno ste poslali poruku!");
}

