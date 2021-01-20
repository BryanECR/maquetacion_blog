$(document).ready(function(){
    
    //SLIDER
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
            });
    }
 
    //POST
    const date = new Date();
    month = date.toLocaleString('default', {month:'short'});
    var posts = [
        {
            title:'Prueba de titulo 1',
            date: new Date().getDay()+" "+month+" "+date.getFullYear(),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores facilis corporis adipisci accusantium quas illum soluta impedit temporibus similique cupiditate aliquam quos, ad fugiat, iure blanditiis quia quidem! Tempora voluptates amet placeat officia cumque mollitia maiores eligendi saepe architecto consequuntur modi, aspernatur quaerat ad est quis. Repudiandae, distinctio praesentium.'
        },
        {
            title:'Prueba de titulo 2',
            date: new Date().getDay()+" "+month+" "+date.getFullYear(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt consequatur maxime voluptatem iure quos, reprehenderit, error eaque aut asperiores maiores unde, qui odit amet odio sunt.'
        },
        {
            title:'Prueba de titulo 3',
            date: new Date().getDay()+" "+month+" "+date.getFullYear(),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores facilis corporis adipisci accusantium quas illum soluta impedit temporibus similique cupiditate aliquam quos, ad fugiat, iure blanditiis quia quidem! Tempora voluptates amet placeat officia cumque mollitia maiores eligendi saepe architecto consequuntur modi, aspernatur quaerat ad est quis. Repudiandae, distinctio praesentium.'
        },
        {
            title:'Prueba de titulo 4',
            date: new Date().getDay()+" "+month+" "+date.getFullYear(),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur asperiores facilis corporis adipisci accusantium quas illum soluta impedit temporibus similique cupiditate aliquam quos, ad fugiat, iure blanditiis quia quidem! Tempora voluptates amet placeat officia cumque mollitia maiores eligendi saepe architecto consequuntur modi, aspernatur quaerat ad est quis. Repudiandae, distinctio praesentium..'
        },
        {
            title:'Prueba de titulo 5',
            date: new Date().getDay()+" "+month+" "+date.getFullYear(),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sunt odio molestias delectus doloribus quod quasi itaque cumque illo id iusto aperiam nemo, mollitia ipsum officia sit excepturi saepe ipsam?'
        }
    ];
    
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        $("#posts").append(post);
    });

    //SELECTOR DE TEMA
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });
    
    //SCROOL ARRIBA DE LA WEB
    $('.subir').click(function(){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //LOGIN FALSO
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");
        about_parrafo.html("<br /><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<br /><a href='#' id='logout'>Cerrar Sesion </a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
    }

    //RELOJ
    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        },1000)
    }

    //VALIDACION DEL FORMULARIO
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
        });
    }

});
