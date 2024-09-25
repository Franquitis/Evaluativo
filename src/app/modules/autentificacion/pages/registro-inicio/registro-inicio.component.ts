import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-inicio',
  templateUrl: './registro-inicio.component.html',
  styleUrls: ['./registro-inicio.component.css']
})
export class RegistroInicioComponent {
  toggleForm: boolean = false; // Maneja el estado de la animación entre los formularios
  email: string = '';
  password: string = '';
  name: string = '';

  // Función para alternar entre iniciar sesión y registrarse
  toggleForms(isSignUp: boolean) {
    this.toggleForm = isSignUp;
  }


  //fucion de iniciar sesion y registrar

  hide = true;

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  };



  async iniciarSesion() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    };

    try {
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);
      if (!usuarioBD || usuarioBD.empty) {
        Swal.fire({
          title: '¡Oh no!',
          text: 'Correo electrónico no registrado',
          icon: 'error'
        });
        this.limpiarInputs();
        return;
      }

      const usuarioDoc = usuarioBD.docs[0];
      const usuarioData = usuarioDoc.data() as Usuario;
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if (hashedPassword !== usuarioData.password) {
        Swal.fire({
          title: '¡Oh no!',
          text: 'Contraseña incorrecta',
          icon: 'error'
        });
        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({
            title: '¡Buen trabajo!',
            text: '¡Se pudo ingresar con éxito !',
            icon: 'success'
          });
          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          Swal.fire({
            title: '¡Oh no!',
            text: 'Hubo un problema al iniciar sesión' + err,
            icon: 'error'
          });
          this.limpiarInputs();
        });
    } catch (error) {
      this.limpiarInputs();
    }
  }

  async registrar() {
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    };

    try {
      const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
        .then(res => {
          Swal.fire({ title: '¡Buen trabajo!', text: '¡Se pudo registrar con éxito!', icon: 'success' });
          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(error => {
          Swal.fire({ title: '¡Oh no!', text: 'Hubo un error al registrar un nuevo usuario \n' + error, icon: 'error' });
        });

      const uid = await this.servicioAuth.obtenerUid();
      this.usuarios.uid = uid;
      this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();
      this.guardarUsuario();
      this.limpiarInputs();
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  }

  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log('Error => ', err);
      });
  }

  limpiarInputs() {
    this.usuarios = {
      uid: '',
      nombre: '',
      apellido: '',
      email: '',
      rol: '',
      password: ''
    };
  }


}
