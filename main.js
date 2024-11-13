class Juego {
    constructor(id, nombre, compania, precio) {
      this.id = id;
      this.nombre = nombre;
      this.compania = compania;
      this.precio = precio;
    }
    mostrarInfoJuego() {
      alert(
        `El juego ${this.nombre} fue desarrollado por ${this.compania} y su precio es ${this.precio}`
      );
    }
    exponerEnListaJuegos() {
      alert(`${this.id} - ${this.compania} - ${this.nombre} - $${this.precio}`);
    }
  }
  
  const juego1 = new Juego(1, "Demon’s Souls Remake", "Sony", 63);
  const juego2 = new Juego(2, "God of War: Ragnarok", "Sony", 70);
  const juego3 = new Juego(3, "Baldur's Gate 3", "Larain", 54);
  const juego4 = new Juego(4, "Horizon Forbidden West", "Sony", 60);
  const juego5 = new Juego(5, "Call Of Duty: Vanguard", "Sledgehammer", 58);
  const juego6 = new Juego(6, "Final Fantasy XVI", "Sony", 73);
  const juego7 = new Juego(7, "Madden NFL 22", "Electronic Arts", 52);
  const juego8 = new Juego(8, "MLB The Show 21", "Sony", 57);
  
  const estanteria = [];
  estanteria.push(juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8);
  const productosCarrito = [];
  
  function mostrarListaJuegos(array) {
    let juegosDisponibles = "Los juegos disponibles son:\n";
    for (let juego of array) {
      juegosDisponibles += `${juego.id} - ${juego.compania} - ${juego.nombre} - $${juego.precio}\n`;
    }
    alert(juegosDisponibles);
  }
  
  function buscarnombre(array) {
    let nombreBuscado = prompt("Ingresa el nombre del juego que desea");
    let busqueda = array.filter(
      (juego) => juego.nombre.toLowerCase() == nombreBuscado.toLowerCase()
    );
    if (busqueda.length == 0) {
      alert(`No contamos con ${nombreBuscado} en este momento`);
    } else {
      mostrarListaJuegos(busqueda);
    }
  }
  
  function buscarPorPrecio(array) {
    let precioBuscado = parseInt(
      prompt("Ingresa el monto máximo que desea gastar")
    );
    let juegosDisponibles = array.filter((juego) => {
      return juego.precio <= precioBuscado;
    });
  
    if (juegosDisponibles.length == 0) {
      alert(
        `No contamos con juegos de un valor igual o inferior a $${precioBuscado}`
      );
    } else {
      let listaJuegos = `Los juegos que puedes comprar con $${precioBuscado} o menos son:\n`;
      juegosDisponibles.forEach(juego => {
        listaJuegos += `${juego.id} - ${juego.nombre} - $${juego.precio}\n`;
      });
      alert(listaJuegos);
    }
  }
  
  function agregarJuego() {
    let nombre = prompt("Ingrese el nombre del juego");
    let compania = prompt("Ingresa la compañía que desarrolló el juego");
    let precio = parseInt(prompt(`Ingresa el valor de ${nombre}`));
    const nuevoJuego = new Juego(estanteria.length + 1, nombre, compania, precio);
    estanteria.push(nuevoJuego);
    alert(`Juego agregado:\n${nuevoJuego.id} - ${nuevoJuego.nombre} - $${nuevoJuego.precio}`);
  }
  
  function ordenarMenorMayor(ar) {
    let arrMenor = ar.concat();
    arrMenor.sort((a, b) => a.precio - b.precio);
    mostrarListaJuegos(arrMenor);
  }
  
  function agregarAlCarrito(stock, carrito) {
    mostrarListaJuegos(stock);
    let idCompra = parseInt(prompt("Ingrese el id del juego que desea"));
    let juegoComprado = stock.find((juego) => juego.id == idCompra);
    if (juegoComprado) {
      carrito.push(juegoComprado);
      alert(`Juego agregado al carrito: ${juegoComprado.nombre} - $${juegoComprado.precio}`);
    } else {
      alert("ID no válido, intenta de nuevo");
    }
  }
  
  function finalizarCompra(carrito) {
    if (carrito.length === 0) {
      alert("No tienes juegos en el carrito");
    } else {
      const total = carrito.reduce((acc, juego) => acc + juego.precio, 0);
      const nombresJuegos = carrito.map(juego => juego.nombre).join(", ");
      alert(`El total de tu compra es $${total}.\nHas comprado: ${nombresJuegos}.\n¡Que te diviertas!`);
    }
    carrito.length = 0;
  }
  
  function menu() {
    let salirMenu = false;
    do {
      let opcionIngresada = parseInt(
        prompt(`Hace tu elección:
                   1 - Consultar catálogo
                   2 - Buscar por nombre
                   3 - Buscar por precio
                   4 - Agregar juego
                   5 - Ordenar menor a mayor por precio
                   6 - Agregar al carrito
                   7 - Finalizar compra
                   0 - Salir del menú`)
      );
      switch (opcionIngresada) {
        case 1:
          mostrarListaJuegos(estanteria);
          break;
        case 2:
          buscarnombre(estanteria);
          break;
        case 3:
          buscarPorPrecio(estanteria);
          break;
        case 4:
          agregarJuego();
          break;
        case 5:
          ordenarMenorMayor(estanteria);
          break;
        case 6:
          agregarAlCarrito(estanteria, productosCarrito);
          break;
        case 7:
          finalizarCompra(productosCarrito);
          break;
        case 0:
          alert("Gracias por visitarnos. ¡Te esperamos!");
          salirMenu = true;
          break;
        default:
          alert("Opción no válida, ingresa alguna que esté en el menú");
          break;
      }
    } while (!salirMenu);
  }
  
  menu();
  