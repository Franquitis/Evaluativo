import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Pedido } from 'src/app/models/pedido';
import { AuthService } from '../../autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  //creamos el modelo que va recibir datos del pedido que se subira a la base de datos
  pedido:Pedido={
    idPedido:'',
    producto:{
      idProducto:'',
      nombre:'',
      precio:0,
      descripcion:'',
      categoria:'',
      imagen:'',
      alt:'',
      stock:0
    },
    cantidad:0,
    total:0
  }
  private pedidosColleccion : AngularFirestoreCollection<Pedido>

  private uid:string | null = null

  constructor(
    private servicioAuth:AuthService,
    private servicioFirestore:AngularFirestore,
    public servicioRutas:Router
  ) { 
    //Creamos la subcoleccion dentro de la coleccion de usuario y le damos ese valor a pedidosColeccion
    this.pedidosColleccion=this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`);
  }


  iniciarCarrito(){
    this.servicioAuth.obtenerUid().then(uid =>{
      this.uid = uid

      if (this.uid === null) {
        console.error("No se obtuvo el UID. Intente iniciar sesion")
        this.servicioRutas.navigate(["/inicio-sesion"])
      } else {
        this.pedidosColleccion = this.servicioFirestore.collection(`usuarios/${this.uid}/pedido`)
      }
    })
  }


  obtenerCarrito(){
    return this.pedidosColleccion.snapshotChanges().pipe(map(action=>
      action.map(a => a.payload.doc.data())))
  }

  crearPedido(producto:Producto, stock:number){
try {
  const idPedido = this.servicioFirestore.createId();

  this.pedido.idPedido = idPedido;
  this.pedido.producto = producto;
  this.pedido.cantidad = stock;
  this.pedido.total = producto.precio*stock;

  this.pedidosColleccion.doc(idPedido).set(this.pedido);
} catch (error) {
  Swal.fire({
    title:'¡Oh no!',
    text:'Ha ocurrido un error al subir su producto \n'+error,
    icon:'error'
  })
}
  }



  borrarPedido(pedido:Pedido){
    try {
      this.pedidosColleccion.doc(pedido.idPedido).delete();

      Swal.fire({
        title:`${pedido.producto.nombre} ha sido borrado`,
        text:'Ha borrado un producto con exito',
        icon:'info'
      })
    } catch (error) {
      Swal.fire({
        title:`¡Oh no!`,
        text:'Ha ocurrido un error: \n'+error,
        icon:'error'
      })
    }
  }
}
