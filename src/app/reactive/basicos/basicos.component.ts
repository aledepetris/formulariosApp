import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('Rtx 4080'),
  //   'precio'     : new FormControl(1500),
  //   'existencias': new FormControl(100)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre     : [ , [Validators.required, Validators.minLength(3)] ],
    precio     : [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    // Para usar esto necesito si o si declarar los valores para
    // Todos los campso del formulario sino rompe.
    // this.miFormulario.setValue({
    //   nombre: 'RTX 4081',
    //   precio: 5,
    //   existencias: 45
    // })

    // En cambio reset() permite declarar solo los que quiero
    this.miFormulario.reset({
      nombre: 'RTX 4081',
      precio: 5
    })
  }

  campoNoValido( campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()

  }
}
