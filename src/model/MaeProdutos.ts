//Classe Mãe

export abstract class MaeProdutos{

private _nome:string;
private _preco:number;
private _marca:string;
private _tipo:number;

constructor(nome:string,preco:number,marca:string,tipo:number){

this._nome=nome;
this._preco=preco;
this._marca= marca;
this._tipo=tipo;
}

public get nome():string{
    return this._nome
}

public set nome(nome:string ){
    this._nome = nome
}

public get preco():number{
    return this._preco
}

public set preco(preco: number ){
    this._preco = preco
}

public get marca():string{
    return this._marca
}

public set marca(marca: string ){
    this._marca= marca
}

public get tipo():number{
    return this._tipo
}

public set tipo(tipo: number ){
    this._tipo= tipo
}


public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Todos os tipos de cabelo";
                break;
           
        }
        console.log("\n\n*****************************************************");
        console.log("PRODUTO");
        console.log("*****************************************************");
        console.log("" + this._nome+"");
        console.log("Marca: " + this._marca)
        console.log("Tipo de cabelo  " + tipo);
        console.log("Preço: " + this._preco.toFixed(2));
            }
        }