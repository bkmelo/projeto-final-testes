import { MaeProdutos } from "../model/MaeProdutos";


    export interface repositoryinterface{

        //CRUD da Conta

        procurarPorNumero(numero:number):void;
        listarTodos():void;
        cadastrar(produto:MaeProdutos):void;
        atualizar(produto:MaeProdutos):void; 
        apagar(produto:MaeProdutos):void; 

    }
    


     