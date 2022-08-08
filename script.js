// Scroll devagar
$('.navbar a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

// Função para botão de subir 
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
})

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

// Type
var typed = new Typed(".typing", {
    strings:["Front-end Developer", "Software Engineering Student","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed = new Typed(".typing-2", {
    strings:["Front-end Developer", "Software Engineering Student","Freelancer"],
   typeSpeed:100,
   backSpeed:60,
   loop:true
});


// Maquina de escrever

function typeWrite(elemento) {    
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML ='';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    })
}

const nome = document.getElementById("meuNome");
typeWrite(nome);

