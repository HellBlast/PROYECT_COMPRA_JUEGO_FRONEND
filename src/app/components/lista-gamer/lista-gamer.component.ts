import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-lista-gamer',
  templateUrl: './lista-gamer.component.html',
  styleUrls: ['./lista-gamer.component.css']
})
export class ListaGamerComponent {
  @HostBinding('class') classes = 'row';

  gamer: any = []

  constructor(private gamerService: GamerService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gamerService.getGamer().subscribe(
      res => {
        this.gamer = res;
        console.log(this.gamer);
      },
      err => console.error(err)
    );
  }


}
