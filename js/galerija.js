var galerija = [
{
	alt:'Case piva',
	putanja:'css/slike/galerija/galerija1.jpg'
},
{
	alt:'Sank_sa_pivom',
	putanja:'css/slike/galerija/galerija2.jpg'
},
{
	alt:'Prvi_sprat_pivnice',
	putanja:'css/slike/galerija/galerija3.jpg'
},
{
	alt:'Unutar_sanka',
	putanja:'css/slike/galerija/galerija4.jpg'
},
{
	alt:'Flase_piva',
	putanja:'css/slike/galerija/galerija5.jpg'
},
{
	alt:'Barske_stolice',
	putanja:'css/slike/galerija/galerija6.jpg'
},
{
	alt:'Tocilice',
	putanja:'css/slike/galerija/galerija7.jpg'
},
{
	alt:'Tocilice2',
	putanja:'css/slike/galerija/galerija8.jpg'
},
{
	alt:'Krigle_piva',
	putanja:'css/slike/galerija/galerija9.jpg'
}

];


var galerijaIspis = "<div class='row mt-3'>";
for(var i=0; i<galerija.length;i++){
	galerijaIspis += "<div class='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>";
		galerijaIspis += "<a href='"+galerija[i].putanja+"'><img src='"+galerija[i].putanja+"' alt='"+galerija[i].alt+"' width='350px' height='250px'/></a>";
	galerijaIspis += "</div>";
}
galerijaIspis +="</div>";

document.getElementById("galerija").innerHTML=galerijaIspis;

var brzina = 500;
$('#galerija img').hover(function(){
	$(this).animate({width:'+=20px'}, brzina--);

},
function(){
	$(this).animate({width:'-=20px'}, brzina--);

});

$('#galerija a').vanillabox();