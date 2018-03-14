$(document).ready(function(){
	$("#filtriranje").click(function(){
		$.ajax({
		type: "GET",
		url: "js/proizvodi.json",
		dataType: "json",
		success: function(podaci) {
			filter(podaci);
		}
	});	
});
});
	function filter(podaci){
		var drzava = document.getElementById("drzave");
		var izbor = drzava.options[drzava.selectedIndex].value;
		var ispis="<div class='row mt-2'>";
		for(var i=0;i<podaci.length;i++)
		{
			if(podaci[i].poreklo.id==izbor)
			{
				ispis += "<div class='col-lg-4 col-xl-4 mt-2'>";
					ispis += "<img src='"+podaci[i].link+"' alt='"+podaci[i].ime.alt+"'/>";
				ispis += "</div>";
			}
		}
		ispis += "</div>";
		$("#proizvodi").html(ispis);

	}