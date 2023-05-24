import { Component } from '@angular/core';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.css']
})
export class NavegationComponent {

  constructor(public gamerService: GamerService) { }
}
