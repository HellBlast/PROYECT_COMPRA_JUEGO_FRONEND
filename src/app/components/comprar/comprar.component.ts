import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/Compra';
import { Gamer } from 'src/app/models/Gamer';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {

  @HostBinding('class') classes = 'row';

  gamer: Gamer = {

    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date(),
    precio: 0

  };

  usuario = this.gamerService.alias;

  comprar: Compra = {

    id: 0,
    id_usuario: 0,
    id_gamer: 0,
    fecha_compra: new Date().toISOString().slice(0, 10),
    precio_compra: 0

  }

  constructor(private gamerService: GamerService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {

    const params = this.activedRoute.snapshot.params;

    if (params['id']) {
      this.gamerService.getGame(params['id']).subscribe(
        (resul: any) => {
          this.gamer.id = resul[0][0];
          this.gamer.title = resul[0][1];
          this.gamer.description = resul[0][2];
          this.gamer.image = resul[0][3];
          this.gamer.created_at = resul[0][4];
          this.gamer.precio = resul[0][5]-(resul[0][5]*(this.gamerService.can_descuento/100));
          this.comprar.id_usuario = this.gamerService.id_usuario;
          this.comprar.id_gamer = resul[0][0];
          this.comprar.precio_compra = this.gamer.precio;

          console.log("Registro estraido: ", this.gamer);
        },
        (error) => { console.log("Error: ", error) }
      );
    }

  }

  comprarJuegos() {
    console.log(this.comprar)
    this.gamerService.comJuego(this.comprar)
      .subscribe(
        res => {
          this.router.navigate(['/lista-gamer'])
        },
        err => console.log(err)
      )
  }


}
