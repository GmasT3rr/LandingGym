import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contactanosForm:FormGroup
  invalidform=true
  yaEnviado=false
  constructor() {
    this.contactanosForm = new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.maxLength(25)]),
      apellido: new FormControl('',[Validators.required, Validators.maxLength(20)]),
      telefono: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{10,10}$')]),
      email: new FormControl('',[Validators.required, Validators.email]),
      plan: new FormControl('',[Validators.required]),
      consideraciones: new FormControl('',[Validators.maxLength(150)]),
    })
  }


  ngOnInit(): void {
    this.comprobarTiemepoEnvioFormulario()
  }

  enviarDatos(){
    const horaActual = new Date().getTime()
    localStorage.setItem('time',(horaActual + 900000).toString())
    this.comprobarTiemepoEnvioFormulario()
  }


  comprobarTiemepoEnvioFormulario(){
    const horaActual = new Date().getTime()
    const reenvioFormulario = localStorage.getItem('time') || ''

    if(reenvioFormulario != null && Number(reenvioFormulario) >= horaActual){
      this.yaEnviado=true
    }
    else{
      this.yaEnviado=false
    }
  }

}
