import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

export interface Item {
  id: string;
  nome: string;
  descricao: string;
  marca: string;
  quantidade: string;
  preco: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private subs = new BehaviorSubject<number>(0);

  itensChanged = this.subs.asObservable();

  private itens = [
    {
      id: 'alskdnasldjh23984',
      nome: 'Café',
      descricao: 'Café torrado',
      marca: 'Santa Clara',
      quantidade: '2',
      preco: '10,99',
      isCompleted: true
    },
    {
      id: 'açlsdasçk324',
      nome: 'Leite',
      descricao: 'Leite em pó',
      marca: 'Ninho',
      quantidade: '1',
      preco: '30,99',
      isCompleted: false
    },
  ];

  constructor() { }

  getItens() {
    return this.itens;
  }


  adicionarItem(novoItem: any) {
    novoItem.id = this.makeid(5);
    this.itens.push(novoItem);
    this.subs.next(0)
  }

  changeIsComplete(id: string) {
      let itemFound = this.itens.find(it => it.id == id);

      if(itemFound != null){
        itemFound.isCompleted = true;
        itemFound.id = this.makeid(5)
        this.subs.next(0)
      }
  }

  removerItem(id: string) {
    this.itens = this.itens.filter(it => it.id !== id);
    this.subs.next(0);
  }

  makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
}
