import { MaeProdutos } from "../model/MaeProdutos";
import { repositoryinterface } from "../Repository/repositoryinterface";
import { colors } from "../util/Colors";


export class ProdutoController implements repositoryinterface{

    private lista : Array<MaeProdutos> =new Array <MaeProdutos>();
   

    procurarPorNumero(nome: number): void {
        let buscaProduto = this.buscarNoArray(nome);

        if(buscaProduto != null){
            buscaProduto.vizualizar();

        }else { 
            console.log(colors.fg.red,"\nO produto: " + nome +
                " não foi encontrado!\n", colors.reset);
    }
    }

    listarTodos(): void {
          
        for( let produto of this.lista){
                        produto.visualizar();

        };
    }

    cadastrar(produto: MaeProdutos): void {
        this.lista.push(produto);
    }

    atualizar(produto: MaeProdutos): void {
        let buscaProduto= this.buscarNoArray(produto.nome);

            if (buscaProduto !=null){
                this.lista[this.lista.indexOf(buscaProduto)] = produto;
                console.log (colors.fg.green,"\nSeu estoque foi atualizado com sucesso");

            }else
                console.log (colors.fg.red,"\nEstoque não pode ser atualizado");


    }
    apagar(produto: MaeProdutos): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto != null){
            this.lista.splice(this.lista.indexOf(buscaProduto),1);
            console.log(colors.fg.green,"\nO produto: " + numero +
                " foi exluido com sucesso!", colors.reset);

        }else 
            console.log (colors.fg.red,"\nProduto não encontrado!", colors.reset);
}
    }

public buscarNoArray( numero:number): MaeProdutos | null {

    for (let lista of this.listarTodos){
        if ( lista.produto === produto )

            return produto;
}
            return null;

    }