var imagenes =[];

imagenes["cauchin"] = "img/vaquita.png"
imagenes["joyita"] = "img/vaquita.png"
imagenes["ajito"] = "img/pollito.png"
imagenes["pelotita"] = "img/pollito.png"
imagenes["caldito"] = "img/cerdito.png"
imagenes["solano"] = "img/perrito.png"

class Pakiman{
    constructor(n, e, g, p){
        this.nombre = n;
        this.tipo = "tierra";    
        this.edad = e;
        this.genero = g;
        this.poder = p;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.nombre];

    
    
    }
    hablar(){

    alert(this.nombre);
    }

    mostrar(){
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write("NOMBRE: " + this.nombre + "<br/>");
        document.write("EDAD: " + this.edad + "<br/>");
        document.write("PODER: " + this.poder + "<br/>");
        document.write("GENERO: " + this.genero + "<hr/>");
    
    }

}

var coleccion = [];

coleccion.push(new Pakiman("cauchin", 35, "varoncito", "fuego"));
coleccion.push(new Pakiman("joyita", 20, "mujer", "agua"));
coleccion.push(new Pakiman("ajito", "25", "varon", "tierra"));
coleccion.push(new Pakiman("pelotita", 15, "mujer", "fuerza"));
coleccion.push(new Pakiman("caldito", "veinte", "varon", "fuerza" ));
coleccion.push(new Pakiman("solano", "cincuenta","varon","magma"));

for(var rarito of coleccion){
    rarito.mostrar();
}

for(var x in imagenes){
    console.log(x);

}


