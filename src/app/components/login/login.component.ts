import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dato: any;

  usuario: Usuario={
    id: 0,
    nombre: '',
    alias: '',
    contrasena: '',
    id_descuento: 0
  }

  constructor(private gamerService: GamerService, private router: Router, private activedRoute: ActivatedRoute){}

  ValidarUsuario(){
    this.gamerService.validateUsuario(this.usuario.alias).subscribe(
      resp => {
        this.dato = resp;
        if(this.usuario.contrasena==this.dato[0][3]){
          console.log(this.dato);
          this.gamerService.alias = this.usuario.alias;
          this.gamerService.id_usuario = this.dato[0][0];
          this.gamerService.can_descuento=this.dato[0][6];
          this.gamerService.tipo_descuento=this.dato[0][7];
          this.router.navigate(['/lista-gamer']);
        }
      },
      err => console.error(err)
    );
  }

}
