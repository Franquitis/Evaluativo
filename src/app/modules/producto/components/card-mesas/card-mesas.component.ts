import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-mesas',
  templateUrl: './card-mesas.component.html',
  styleUrls: ['./card-mesas.component.css']
})
export class CardMesasComponent {
// Colección de todos los productos de forma local
coleccionProductos: Producto[] = [];

// Colección de productos de una sola categoría
coleccionMesas: Producto[] = [];

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
    this.mostrarProductoMesas();
  })
}

// Función para filtrar los productos de tipo "alimentación"
mostrarProductoMesas(){
  // Iteramos colección de productos con un 'forEach'
  this.coleccionProductos.forEach(producto => {
    // Si es de tipo "alimentación" -> condicional
    if(producto.categoria === "mesas"){
      // Lo sube/ guarda en la colección de productos de tipo "alimentación"
      this.coleccionMesas.push(producto);
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
