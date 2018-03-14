$(document).ready(function(){
	$.ajax({
		url:"js/proizvodi.json",
		type:"GET",
		dataType:"json",
		success:function(podaci){
			
			prikazi(podaci);
		}

	});
});


function prikazi(podaci){
	
	var proizvodiIspis = "<div class='row mt-2'>";
	
	for(var i=0;i<podaci.length;i++){
	
		proizvodiIspis += "<div class='col-lg-4 col-xl-4 mt-2'>";
			proizvodiIspis += "<img src='"+podaci[i].link+"' alt='"+podaci[i].ime.alt+"'/>";
		proizvodiIspis += "</div>";
	
	}
	proizvodiIspis+="</div>";
	

	$('#proizvodi').html(proizvodiIspis);
};


	