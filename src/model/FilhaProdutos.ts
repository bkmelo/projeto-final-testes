import {MaeProdutos} from "./MaeProdutos";

export class FilhaProdutos extends MaeProdutos{

private _quantidade:number;


constructor (nome:string,preco:number,tipo:number,marca:string,quantidade:number){


 super(nome,preco,marca,tipo)
 this._quantidade=quantidade
}
public get quantidade(){
    return this._quantidade
}

public set quantidade(quantidade: number ){
    this._quantidade = quantidade
}

public visualizar(): void {
    super.visualizar();
    console.log("A quantidade e Produtos é "+this._quantidade.toFixed(2));
}
}