const pokeImg = document.querySelector('[data-poke-img]');
$(document).ready(function(){
	
	$('#boton').click(function(){
		$(".poke-abilities").html("");
		$(".poke-held_items").html("");
		$(".poke-stats").html("");
		$(".poke-img").html("");
		$(".nombre").html("");
		$(".poke-types").html("");
		var pokemon = $('#searchPokemon').val();

		$.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase(), function(datos){
			
			console.log(datos);
			$(".nombre").text(datos.name);
			pokeImg.setAttribute('src', datos.sprites.front_default);
			$.each(datos.abilities, function(index, obj){
				$(".poke-abilities").append("<p>" + obj.ability.name);
			});
			$.each(datos.held_items, function(index, obj){
				$(".poke-held_items").append("<p>" + obj.item.name);
			});
			$.each(datos.stats, function(index, obj){
				$(".poke-stats").append("<div><div>" + obj.stat.name + "</div><div>" + obj.base_stat);
			});
			$.each(datos.types, function(index, obj){
				$(".poke-types").append("<div>" + obj.type.name);	
			});
			
			
		}).fail(() => {
            $(".nombre").text("Pokemon no encontrado");
			pokeImg.setAttribute('src', 'poke-shadow.png');
        });
	});
});
