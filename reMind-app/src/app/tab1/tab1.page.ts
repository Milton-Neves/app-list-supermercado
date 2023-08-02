import { Component, OnInit } from '@angular/core';
import { ItensService } from '../itens.service';

export interface Item {
  id: string;
  nome: string;
  descricao: string;
  marca: string;
  quantidade: string;
  preco: string;
  isCompleted: boolean;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit{
  itens: Item[] = [];

  constructor(private itensService: ItensService) {
  }

  ngOnInit(): void {
    this.itensService.itensChanged.subscribe(it => {
      console.log(this.itensService.getItens());

      this.itens = this.itensService.getItens();
    })
  }


  removerItem(id: string) {
    this.itensService.removerItem(id);
  }

  changeIsComplete(id: string) {
    this.itensService.changeIsComplete(id);
  }
}
