import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  usuario: Usuario={
    id: 0,
    nombre: '',
    alias:'',
    contrasena:'',
    id_descuento: 1
  }

  constructor(private gamerService: GamerService, private router: Router, private activedRoute: ActivatedRoute){}

  saveNewUsuario(){
    this.gamerService.saveRegistro(this.usuario)
    .subscribe(
      res=>{
        this.router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }

}
