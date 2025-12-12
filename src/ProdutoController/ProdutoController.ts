import { MaeProdutos } from "../model/MaeProdutos";
import { repositoryinterface } from "../Repository/repositoryinterface";
import { colors } from "../util/Colors";


export class ProdutoController implements repositoryinterface{

    private lista : Array<MaeProdutos> =new Array <MaeProdutos>();
    nome :number = 0

    procurarPorNumero(nome: number): void {
        let buscaProduto = this.buscarNoArray(nome);

        if(buscaProduto =! null){
            buscaProduto.vizualizar();

        }else { 
            console.log(colors.fg.red,"\nO produto: " + nome +
                " não foi encontrado!\n", colors.reset);
    }


    listarTodos(): void {
          
        for( let produtos of this.listaMaeprodutos){
                        produtos.visualizar();

        };
    }

    cadastrar(produto: MaeProdutos): void {
        this.lista.push(produto);
    }
    atualizar(produto: MaeProdutos): void {
        throw new Error("Method not implemented.");
    }
    apagar(produto: MaeProdutos): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null){
            this.lista.splice(this.lista.indexOf(buscaMaeproduto),1);
            console.log(colors.fg.green,\nA Conta numero:)
        }
    }

    

    
    

        }            

    }