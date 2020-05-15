import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produtos';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  produto: Produto = new Produto
  constructor(private produtosService: ProdutosService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {}

  findById(id:number){
    this.produtosService.

  }

}
