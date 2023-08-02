import { Component } from '@angular/core';
import { ItensService } from '../itens.service';

export class Item {
  nome: string;
  descricao: string;
  marca: string;
  quantidade: string;
  preco: string;
  isCompleted: boolean;

  constructor(nome: string,
    descricao: string,
    marca: string,
    quantidade: string,
    preco: string,
    isCompleted: boolean
    ) {

    this.nome = nome;
    this.descricao = descricao;
    this.marca = marca;
    this.quantidade = quantidade;
    this.preco = preco;
    this.isCompleted = isCompleted;
  }

}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  novoItem: string = '';
  novoDescricao: string = '';
  novaMarca: string = '';
  novoQuantidade: string = '';
  novoPreco: string = '';

  constructor(private itensService: ItensService) {
  }

  adicionarItem() {
    this.itensService.adicionarItem(
      new Item(this.novoItem,
        this.novoDescricao,
        this.novaMarca,
        this.novoQuantidade,
        this.novoPreco,
        false
      )
    )
    this.resetFields();
  }

  resetFields() {
    this.novoItem = '';
    this.novoDescricao = '';
    this.novaMarca = '';
    this.novoQuantidade = '';
    this.novoPreco = '';
  }
}
