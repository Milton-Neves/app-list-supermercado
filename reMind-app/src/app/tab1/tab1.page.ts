import { Component } from '@angular/core';

export class Item {
  id?: number;
  nome?: string;
  descricao?: string;
  marca?: string;
  quantidade?: string;
  preco?: string;
  isCompleted?: boolean;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  items: Item[] = [];
  novoItem: string | undefined;
  novoDescricao: string | undefined;
  novaMarca: string | undefined;
  novoQuantidade: string | undefined;
  novoPreco: string | undefined;
  constructor() {
    this.items = [
      {
        id: 1,
        nome: 'Café',
        descricao: 'Café torrado',
        marca: 'Santa Clara',
        quantidade: '2',
        preco: '10,99',
      },
      {
        id: 2,
        nome: 'Leite',
        descricao: 'Leite em pó',
        marca: 'Ninho',
        quantidade: '1',
        preco: '30,99',
      },
    ];
  }

  adicionarItem() {
    if (this.novoItem) {
      let item = new Item();
      item.nome = this.novoItem;
      item.descricao = this.novoDescricao;
      item.marca = this.novaMarca;
      item.quantidade = this.novoQuantidade;
      item.preco = this.novoPreco;

      item.isCompleted = true;
      this.items.push(item);
      this.novoItem = '';
      this.novoDescricao = '';
      this.novaMarca = '';
      this.novoQuantidade = '';
      this.novoPreco = '';
    } else {
      alert('Por favor click enter');
    }
  }
  excluirItem(id: number) {
    this.items[id].isCompleted = !this.items[id].isCompleted;
  }
  removerItem(id: number) {
    this.items = this.items.filter((v, i) => i !== id);
  }
}
