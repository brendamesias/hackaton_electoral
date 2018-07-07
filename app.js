var nombreCompleto;
var arrCandidatosFinales = [];
var $clone;
var cloneHTML;
var imgClone;
containerCards = "";
 /*var containerCards = $(".containerCards");
$('#myModal').modal('show');

var url = 'https://newsapi.org/v2/everything?' +
          'q=trump&' +
          'from=2018-07-07&' +
          'sortBy=popularity&' +
          'apiKey=bbee0a892e7b41ef91e38ee83e915e27';

var req = new Request(url);
var arrNoticias;

fetch(req).then(function(response) {
         arrNoticias = response.json();
         console.log(arrNoticias);
})*/

 $("#btn").click(function () {	    
    if($('input:checkbox[name=experiencialaboral]:checked').val() === "on"){
        data.map(function(index) {
            if(index.TXTENGOEXPELABORAL === "SÍ"){
                 arrCandidatosFinales.push(index);
             }else{
                 arrCandidatosFinales.splice(index, 1);
             }
        })

    }
    if($('input:checkbox[name=tienedenuncias]:checked').val() === "on"){
        data.map(function(index) {
            if(index.TXTENGOSENTENCIAPENAL === "SÍ"){
                arrCandidatosFinales.splice(index);
            }else{
                arrCandidatosFinales.push(index);
            }
        })
    }
    if($('input:checkbox[name=experienciacargospublicos]:checked').val() === "on"){
        data.map(function(index) {
            if(index.TXFGCARGOELECCION === "SÍ"){
                arrCandidatosFinales.push(index);
            }else{
                arrCandidatosFinales.splice(index, 1);
            }
        })
    }
    $( "#team" ).focus();
});
/*
$("#btn").mouseup(function() {
    debugger;
    arrCandidatosFinales.map(function(index) {
        debugger;

        containerCards += '<div class="cardCandidato hidden"><div class="col-xs-12 col-sm-6 col-md-4"><div class="image-flip" ontouchstart="this.classList.toggle("hover");"><div class="mainflip"><div class="frontside"><div class="card"><div class="card-body text-center"><p><img class=" img-fluid" src="' + index.FOTOCANDIDATO +'" alt="card image"></p><h4 class="card-title">Sunlimetech</h4><p class="card-text">This is basic card with image on top, title, description and button.</p><a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a></div></div></div><div class="backside"><div class="card"><div class="card-body text-center mt-4"><h4 class="card-title">Sunlimetech</h4><p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button></div></div></div></div></div></div>'

        
        $clone = $( ".cardCandidato" ).clone( true );
        $clone[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].src = index.FOTOCANDIDATO;
       $clone.removeClass('hidden');
       $clone.prependTo( $(".cardCandidato") );
       containerCards = containerCards.prepend($clone);
        
    })
    $(".containerCardsCandidatos").prepend(containerCards);
})

// $(".containerCardsCandidatos").prepend(containerCards);

*/