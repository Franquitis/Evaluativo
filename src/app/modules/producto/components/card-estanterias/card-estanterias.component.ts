import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-estanterias',
  templateUrl: './card-estanterias.component.html',
  styleUrls: ['./card-estanterias.component.css']
})
export class CardEstanteriasComponent {
// Colección de todos los productos de forma local
coleccionProductos: Producto[] = [];

// Colección de productos de una sola categoría
coleccionEstanterias: Producto[] = [];

// Variable para seleccionar productos específicos
productoSeleccionado!: Producto;

// Variable para manejar estado del modal
modalVisible: boolean = false;

// Patentamos de forma local el servicio para acceder en él
constructor(public servicioCrud: CrudService){}

// Inicializa al momento que renderiza el componente
ngOnInit(): void{
  // Accedemos a método 'obtenerProducto' y nos subscribimos a los cambios
  // recibimos notificación ante modificaciones
  this.servicioCrud.obtenerProducto().subscribe(producto => {
    this.coleccionProductos = producto;

    // Mostrará la colección de esa categoría hasta el momento
    this.mostrarProductoEstanterias();
  })
}

// Función para filtrar los productos de tipo "alimentación"
mostrarProductoEstanterias(){
  // Iteramos colección de productos con un 'forEach'
  this.coleccionProductos.forEach(producto => {
    // Si es de tipo "alimentación" -> condicional
    if(producto.categoria === "estanterias"){
      // Lo sube/ guarda en la colección de productos de tipo "estanterias"
      this.coleccionEstanterias.push(producto);
    }
  })
}

mostrarVer(info: Producto){
  this.modalVisible = true;

  this.productoSeleccionado = info;
}



productoAnadido(producto:Producto){
  try{
    Swal.fire({
      title: "¡Pronto en funcionamiento!",
      text: "El carrito de compras esta en mantenimiento",
      icon: "info"
    });
  }catch(error){
    Swal.fire({
      title: "¡Pronto en funcionamiento!",
      text: "El carrito de compras esta en mantenimiento" +error,
      icon: "error"
  });
 }

}
}
