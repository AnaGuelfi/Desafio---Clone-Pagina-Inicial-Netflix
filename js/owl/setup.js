$('.owl-carousel').owlCarousel({
	// repete os itens infinatamente
    loop:true,
	// espaçamento entre os itens
    margin:10,
	// setas de navegação
    nav:true,
	// itens exibidos de acordo com a responsividade (tamanho da tela)
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})