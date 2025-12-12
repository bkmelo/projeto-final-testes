//Abaixo segue a classe a receita/ molde/modelo
// 1. Classe/ Atributos sempre private e com _(underline)

export abstract class MaeProdutos{

private _cadastrarproduto:number;
private _;
private _:number;
private _:string;
private _:number;

// Abaixo segue o construtor a máquina que monta os objetos através de parâmetros(informações).
//2.Construtor que instancia. (OBRIGATORIO) / Tem quer ter todos os atributos(ingredientes).

constructor(numero:number,agencia:number,tipo:number,titular:string,saldo:number){

this._numero=numero;
this._agencia=agencia;
this._tipo= tipo;
this._titular=titular;
this._saldo=saldo;
}

//Abaixo seguem os métodos que são as ações que o objeto vai conseguir fazer. Get sempre retorna valor através do return já o set não pois é variável.
//3.Métodos Gets e Sets

public get numero():number{
    return this._numero
}

public set numero(numero: number ){
    this._numero = numero 
}

public get agencia():number{
    return this._agencia
}

public set agencia(agencia: number ){
    this._agencia = agencia    
}

public get tipo():number{
    return this._tipo
}

public set tipo(tipo: number ){
    this._tipo = tipo
}

public get titular():string{
    return this._titular
}

public set titular(titular: string ){
    this._titular= titular
}
public get saldo():number{
    return this._saldo
}

public set saldo(saldo: number ){
    this._saldo = saldo
}

// Métodos especifícos dessa classe Contas

public sacar ( valor:number): boolean{

    if (this._saldo < valor){
        console.log("Saldo insuficiente!")
        return false
    } 
    
        this._saldo = this._saldo - valor;
        return true;
    }


public depositar(valor: number): void {

        this._saldo = this._saldo + valor;
    }


public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;

                }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));
            }
        }