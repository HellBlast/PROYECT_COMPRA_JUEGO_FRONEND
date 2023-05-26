import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  API_URL = 'http://localhost:3030';
  alias: string = '';
  id_usuario: number = 0;
  can_descuento: number = 0;
  tipo_descuento: string = '';

  constructor(private http: HttpClient) { }

  //usuario
  saveRegistro(usuario: Usuario) {
    return this.http.post(`${this.API_URL}/usuario`, usuario);
  }

  validateUsuario(alias: string) {
    return this.http.get(`${this.API_URL}/usuario/${alias}`);
  }

  //Gamer
  getGamer() {
    return this.http.get(`${this.API_URL}/gamer_list?id_usuario=${this.id_usuario}&can_descuento=${this.can_descuento}`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URL}/gamer/${id}`);
  }

  //Comprar

  comJuego(comprar: Compra) {
    return this.http.post(`${this.API_URL}/comprar`, comprar);
  }

}
