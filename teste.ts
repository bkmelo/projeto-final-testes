import * as readline from "readline-sync";

// -------------------------------
// 1. Interfaces
// -------------------------------

interface Cliente {
  nome: string;
  email: string;
  dataNascimento: string;
  idade: number;
}

interface Produto {
  nome: string;
  preco: number;
}

interface CarrinhoItem {
  produto: Produto;
}

interface Pedido {
  cliente: Cliente;
  itens: CarrinhoItem[];
  total: number;
  pagamento: string;
}

// -------------------------------
// 2. Produtos da loja
// -------------------------------

const produtos: Produto[] = [
  { nome: "Shampoo", preco: 20 },
  { nome: "Condicionador", preco: 25 }
];

// -------------------------------
// 3. Funções auxiliares
// -------------------------------

// Calcular idade
function calcularIdade(data: string): number {
  const nascimento = new Date(data);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const mesAtual = hoje.getMonth();
  const mesNasc = nascimento.getMonth();

  if (mesAtual < mesNasc || (mesAtual === mesNasc && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

// Cadastrar cliente com verificação de idade
function cadastrarCliente(): Cliente | null {
  console.log("\n--- Cadastro do Cliente ---");

  const nome = readline.question("Nome completo: ");
  const email = readline.question("Email: ");
  const dataNascimento = readline.question("Data de nascimento (YYYY-MM-DD): ");

  const idade = calcularIdade(dataNascimento);

  if (idade < 18) {
    console.log("\n❌ Cadastro proibido: você é menor de 18 anos.\n");
    return null;
  }

  console.log(`\n✔ Cadastro permitido! Idade: ${idade} anos\n`);

  return { nome, email, dataNascimento, idade };
}

// Listar produtos
function listarProdutos() {
  console.log("\n--- Produtos Disponíveis ---");
  produtos.forEach((p, i) => {
    console.log(`${i + 1}. ${p.nome} - R$ ${p.preco}`);
  });
}

// Adicionar item ao carrinho
function adicionarAoCarrinho(carrinho: CarrinhoItem[]) {
  listarProdutos();
  const escolha = readline.questionInt("\nEscolha um produto pelo número: ") - 1;

  if (escolha < 0 || escolha >= produtos.length) {
    console.log("❌ Produto inválido.");
    return;
  }

  carrinho.push({ produto: produtos[escolha] });

  console.log(`✔ ${produtos[escolha].nome} adicionado ao carrinho!\n`);
}

// Mostrar carrinho
function mostrarCarrinho(carrinho: CarrinhoItem[]) {
  console.log("\n--- Seu Carrinho ---");

  if (carrinho.length === 0) {
    console.log("Carrinho vazio.\n");
    return;
  }

  carrinho.forEach((item, i) => {
    console.log(`${i + 1}. ${item.produto.nome} - R$ ${item.produto.preco}`);
  });
}

// Calcular total
function calcularTotal(carrinho: CarrinhoItem[]): number {
  return carrinho.reduce((t, item) => t + item.produto.preco, 0);
}

// Finalizar compra
function finalizarCompra(cliente: Cliente, carrinho: CarrinhoItem[]) {
  if (carrinho.length === 0) {
    console.log("\n❌ O carrinho está vazio.\n");
    return;
  }

  console.log("\nFormas de pagamento:");
  console.log("1. PIX");
  console.log("2. Cartão");
  console.log("3. Dinheiro");

  const opcao = readline.questionInt("Escolha: ");
  let pagamento = "";

  switch (opcao) {
    case 1: pagamento = "PIX"; break;
    case 2: pagamento = "Cartão"; break;
    case 3: pagamento = "Dinheiro"; break;
    default:
      console.log("❌ Pagamento inválido.");
      return;
  }

  const total = calcularTotal(carrinho);

  console.log("\n--- PEDIDO FINALIZADO ---");
  console.log("Cliente:", cliente.nome);
  console.log("Idade:", cliente.idade);
  console.log("Itens:");
  carrinho.forEach(i => console.log("-", i.produto.nome));
  console.log("Total: R$", total);
  console.log("Pagamento:", pagamento);
  console.log("-------------------------\n");
}

// -------------------------------
// 4. Sistema com menus
// -------------------------------

function iniciarSistema() {

  console.log("\n=== LOJA DE SHAMPOO E CONDICIONADOR ===");

  const cliente = cadastrarCliente();
  if (!cliente) return;

  const carrinho: CarrinhoItem[] = [];

  while (true) {
    console.log("\n--- MENU ---");
    console.log("1. Ver produtos");
    console.log("2. Adicionar ao carrinho");
    console.log("3. Ver carrinho");
    console.log("4. Finalizar compra");
    console.log("5. Sair");

    const opcao = readline.questionInt("Escolha uma opção: ");

    switch (opcao) {
      case 1: listarProdutos(); break;
      case 2: adicionarAoCarrinho(carrinho); break;
      case 3: mostrarCarrinho(carrinho); break;
      case 4: finalizarCompra(cliente, carrinho); return;
      case 5: console.log("Saindo..."); return;
      default: console.log("Opção inválida.");
    }
  }
}

// -------------------------------
// 5. Iniciar programa
// -------------------------------

iniciarSistema();