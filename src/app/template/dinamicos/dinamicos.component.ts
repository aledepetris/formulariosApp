import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Alejandro',
    favoritos: [
      {id:1, nombre: 'Cs GO'},
      {id:2, nombre: 'DOTA 2'}
    ]
  }

  nuevoJuego: string = '';

  agregarJuego () {

    const maxIndex = this.persona.favoritos.length - 1

    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos[maxIndex].id + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push( {...nuevoFavorito} );
    this.nuevoJuego = '';

  }

  eliminar ( index: number ) {
    this.persona.favoritos.splice(index, 1)
  }

  guardar() {

  }

}
