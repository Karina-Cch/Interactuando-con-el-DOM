//-----EXERCISE 1: MANIPULACIÓN DE ELEMENTOS Y SUS PROPIEDADES CSS------
//usamos estos métodos para retornar la información desde los elementos
$(function () {
    $("#btn1").click(function () {
    //el método text() nos muestra el contenido de texto de un elemento seleccionado
    console.log("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
    //el método html() enseña todo el contenido de un elemento
    console.log("HTML: " + $("#test").html());
    });
    $("#btn3").click(function () {
    //el método val() devuelve o retorna el valor ingresado en elementos de formularios
    console.log("Value: " + $("#valorNom").val() + " " + $("#valorAp").val());
    });
    });

$(function () {
    $("#btn1").click(function () {
    $("#test").text("Reemplazamos este texto");
    });
    $("#btn2").click(function () {
    "HTML: " + $("#test").html("<h1>Luego, podemos hacerlo más <i>GRANDE</i></h1>");
    });
    $("#btn3").click(function () {
    "Value: " + $("#valorNom").val("Salvador") + " " + $("#valorAp").val("Dalí");
    });
});

//Otra manera en que podemos cambiar los atributos es utilizando el método attr(), pasándole por
//parámetro el atributo en especifico que queremos cambiar, junto con su valor.
$(function () {
    $("#botoncito").click(function () {
    $("#hi").attr("value", "Hola")
    })
});

//El método que nos permite obtener y fijar propiedades es css().
$(function () {
    $("#yellow").click(function () {
    console.log($(".css1").css("background-color"));
    console.log($(".css2").css("background-color"));
    console.log($(".css3").css("background-color"));
    }); //en la consola recibimos el valor de cada uno de ellos en formato RGB
});

//Para fijar valores CSS utilizando el mismo método 
//basta con pasar por parámetro el nombre de la propiedad y su valor
$(function () {
    $("#yellow").click(function () {
    $(".css1").css("background-color", "yellow");
    $(".css2").css("background-color", "yellow");
    $(".css3").css("background-color", "yellow");
    });
});

//Con este método también podemos fijar múltiples propiedades CSS.
$(function () {
    $("#penta").click(function () {
    $(".css1").css({
    "background-color": "black",
    "font-size": "150%",
    "color": "aquamarine"
    });
    });
    });

//------EXERCISE 2: MANEJADORES DE EVENTOS-------
//-$(document).ready(): Este método incorpora un manejador de eventos al documento HTML, el cual nos permite ejecutar una
//función cuando el documento esté completamente cargado.
//-$("div").click(): Éste agrega un manejador de eventos al elemento <div>, que nos permite ejecutar una función al hacer
//clic sobre un elemento especificado.

//incorporamos el siguiente manejador de eventos, el cual nos permitirá hacer desaparecer los elementos h4 cuando le hacemos clic
$(function () {
    $("h4").click(function () {
    $(this).fadeOut();
    });
});
   
// manejadores nuevos: mouseenter() y mouseleave()
// mouseenter(): Nos permite ejecutar una función, justo en el momento en que nuestro mouse o cursor entra en el espacio que ocupa el elemento definido
// mouseleave(): El segundo método se comporta de manera inversa, permitiéndonos realizar comandos 
// cuando el mouse sale del espacio que ocupa el elemento definido.
$(function () {
    //al momento en que nuestro cursor entreen el espacio de cualquiera de los elementos h5, se cambiará el color del texto a purple,
    //y hará que el color de fondo del elemento sea white. Además, desplazará el elemento hacia la derecha unos 50 pixeles. 
    $("h5").mouseenter(function () {
    $(this).animate({
    marginLeft: '50px'
    }, "slow", function () {
    $(this).css({ "color": "purple", "backgroundColor": "white"})
    })
    });
    //Cuando nuestro cursor sale del espacio que ocupan los h5, entonces cambiará el color de fondo y de texto a cyan y negro.
    //Aparte, reducirá el ancho del elemento y lo desplazará a su posición original.
    $("h5").mouseleave(function () {
    $(this).animate({
    marginRight: '50px',
    width: '10em'
    }, "fast", function () {
    $(this).css({ "color": "cyan", "backgroundColor": "black"})
    })
    });
    });
   






   