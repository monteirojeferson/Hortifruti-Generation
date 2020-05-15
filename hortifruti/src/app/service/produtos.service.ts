import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import{ Produto} from './../model/Produtos'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  //endpoint = ponto onde eu me conecto com o servidor (métodos HttpClient)
  /*CRUD  
  C=create(salvar,incluir) usa o método post
  R=read(leitura) usa o método get, get significa pegar
  U=update(editar e atualizar), usa o método put
  D=delete (excluir), usa o método delete
   */
  getAllProduto(){
    return this.http.get('http://31.220.57.121:9080/produtos')
  }
  getByIdProduto(id:number){
    return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
  }
  postProduto(produto: Produto){
    return this.http.post('http://31.220.57.121:9080/produtos',produto)
  }
  putProduto(produto: Produto){
    return this.http.put('http://31.220.57.121:9080/produtos',produto)

  }
  deleteProduto(id:number){
    return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
  }
}
