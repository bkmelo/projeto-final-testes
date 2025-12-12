import  readlinesync = require("readline-sync");
import {colors} from './src/util/colors';
import {Conta} from './src/model/Conta'; 
import { ContaCorrente} from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import{ContaController} from './src/controller/ContaController';


export function main() {

// Intância da Classe ContaController

    let contas: ContaController = new ContaController();


//  Variáveis Auxiliares  
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino:number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança'];

    while(true){

        console.log(colors.bg.black, colors.fg.yellow,
                    "***************************************************");
        console.log("                                                   ");
        console.log("                  LOJAO DA BRUH                    ");
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                   ");
        console.log("         1- Cadastrar Produtos                     ");
        console.log("         2- Listar todas os produtos               ");
        console.log("         3- Buscar produto por número              ");
        console.log("         4- Atualizar produto                      ");
        console.log("         5- Apagar produto                         ");     
        console.log("         9- Sair                                   "); 
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                    ",
        colors.reset);
        
        console.log(" Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

            if (opcao == 9) {
                console.log(colors.fg.greenstrong,
                    "\nBanco do Brasil com Z - o seu futuro começa aqui!");
                sobre(); 
                console.log(colors.reset,"");
                process.exit(0);
            }

            switch (opcao){

                case 1: 
                     console.log(colors.fg.whitestrong,
                     "\n\nCriar conta\n\n", colors.reset);

                     console.log('Digite o Número da agência: ');
                     agencia= readlinesync.questionInt("");

                     console.log('Digite o Nome do Titular da conta: ');
                     titular= readlinesync.question("");

                     console.log('Digite o tipo da Conta: ');
                     tipo= readlinesync.keyInSelect(tiposContas,"", {cancel:false})+1;

                     console.log('\nDigite o Saldo da conta(R$): ');
                     saldo= readlinesync.questionFloat("");


                    switch(tipo){

                        case 1:
                            console.log ("Digite o Limite da Conta(R$):");
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar( 
                                new ContaCorrente(contas.gerarNumero(), agencia,tipo,titular,
                            saldo,limite));
                            break;

                        case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança:");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),agencia,tipo,titular,saldo,aniversario));
                        break;  
                    }     
                   
                     keyPress()
                     break;

                case 2: 
                     console.log(colors.fg.whitestrong,
                        "\n\nListar todas as contas\n\n", colors.reset);
                        contas.listarTodas();
                    
                     keyPress()   
                     break;

                case 3: 
                     console.log (colors.fg.whitestrong,
                        "\n\nConsultar dados da conta - por número\n\n", colors.reset);

                        console.log("Digite o número da Conta:");
                        numero=readlinesync.questionInt("");
                        contas.procurarPorNumero(numero);
                        
                     keyPress()  
                     break;     

                case 4: 
                     console.log (colors.fg.whitestrong,
                        "\n\nAtualizar dados da conta\n\n", colors.reset);

                 console.log("Digite o número da Conta: ");
                 numero = readlinesync.questionInt("");
                 
                 let conta= contas.buscarNoArray(numero);

                 if (conta!=null) {

                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o Dia do Aniversário da Conta Poupança:");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, 
                                            aniversario));
                            break;
    
                    }
                } else {
                    console.log(colors.fg.red, "\nA Conta numero:" + numero +
                        " não foi encontrada", colors.reset);
                    
                }

                keyPress()
                break;
                    
                case 5: 
                     console.log (colors.fg.whitestrong,
                        "\n\nApagar uma conta\n\n", colors.reset);
                     
                        console.log("Digite o número da Conta:");
                        numero = readlinesync.questionInt("");
                        contas.deletar(numero);

                     keyPress()   
                     break;

                case 6: 
                     console.log (colors.fg.whitestrong,
                        "\n\nSaque\n\n", colors.reset);

                     console.log("Digite o número da Conta: ");
                     numero = readlinesync.questionInt("");
                     
                     console.log("\nDigite o valor do Saque (R$): ");
                     valor = readlinesync.questionFloat("");

                     contas.sacar(numero, valor);

                     keyPress()   
                     break;

                 case 7: 
                     console.log (colors.fg.whitestrong,
                        "\n\nDeposito\n\n", colors.reset);

                        console.log("Digite o número da Conta:");
                        numero = readlinesync.questionInt("");

                        console.log("\nDigite o valor do Depósito (R$):");
                        valor = readlinesync.questionFloat("");

                        contas.depositar(numero, valor);


                     keyPress()   
                     break;

                

                default:
                     console.log (colors.fg.whitestrong,
                        "\n\nOpção Inválida!\n\n", colors.reset);

                     keyPress()   
                     break;
            
            }

            }

        }

    export function sobre(): void{
        console.log("\n***************************************************");
        console.log("Projeto Desenvolvido por:");
        console.log("Generation Brasil - generation@generation.org");
        console.log("github.com/conteudosGeneration");
        console.log("\n***************************************************");

    }

    function keyPress():void {
        console.log(colors.reset,"");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }

main();