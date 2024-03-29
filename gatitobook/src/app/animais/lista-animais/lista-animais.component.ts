import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais !: Animais;

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param) => {
      this.animais = this.activatedRouter.snapshot.data['animais'];
      console.log(this.animais);
    });
  }

}
