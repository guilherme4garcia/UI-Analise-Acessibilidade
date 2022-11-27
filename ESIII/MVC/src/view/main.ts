import Entrada from '../io/entrada'
import CadastroCliente from '../controller/cadastroCliente'
import CadastroProduto from '../controller/cadastroProduto'
import CadastroServico from '../controller/cadastroServico'
import generate_data from '../data/data'
import Stats from '../controller/statistcs'


// generate users, products and services...
generate_data()


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let execucao = true

while (execucao) {
    console.log(`\nOpções:`);
    console.log(`1 - Gerenciador Cadastro de Cliente`);
    console.log(`2 - Gerenciador Cadastro de Produto e Serviços`);
    console.log(`3 - Adcionar ou Remover PRODUTO ao Carrinho do Cliente`);
    console.log(`4 - Adcionar ou Remover SERVIÇO ao Carrinho do Cliente`);    
    console.log('5 - Estatísticas');
    console.log('6 - Checkout Cliente')
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    let cadastro = new CadastroCliente()
    let cadastroProd = new CadastroProduto()
    let cadastroServ = new CadastroServico()
    let statistcs = new Stats()
    switch (opcao) {
        case 1:
            console.log('Opções: ')
            console.log('1 - Criar novo usuário');
            console.log('2 - Atualizar um usuário');
            console.log('3 - Remover usuário');
            console.log('4 - Listar todos os usuários');
            console.log('0 - Voltar');
            
            let opcao_cad = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao_cad) {
                
                case 1:
                    cadastro.cadastrar()
                    break
                case 2:
                    cadastro.update()
                    break
                case 3:
                    cadastro.delete()
                    break
                case 4:
                    cadastro.read()
                case 0:
                    break
            }   
            
        break;
            
        case 2:
            console.log('Opções: ')
            console.log('1 - Produto');
            console.log('2 - Serviço');
            
            let opcao_serv_prod = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (opcao_serv_prod) {
                
                case 1:
                    console.log('Opções: ')
                    console.log('1 - Cadastrar novo produto');
                    console.log('2 - Atualizar um produto');
                    console.log('3 - Remover produto');
                    console.log('4 - Listar todos os produtos');
                    console.log('0 - Voltar');

                    let opcao_prod = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao_prod) {

                        case 1:
                            cadastroProd.cadastrar()
                            break
                        case 2:
                            cadastroProd.update()
                            break
                        case 3:
                            cadastroProd.remove()
                            break
                        case 4:
                            cadastroProd.read()
                            break
                        case 0:
                            break
                    }

                break

                case 2:
                    console.log('Opções: ')
                    console.log('1 - Cadastrar novo serviço');
                    console.log('2 - Atualizar um serviço');
                    console.log('3 - Remover serviço');
                    console.log('4 - Listar todos os serviços');
                    console.log('0 - Voltar');

                    let opcao_serv = entrada.receberNumero(`Por favor, escolha uma opção: `)
                    switch (opcao_serv) {

                        case 1:
                            cadastroServ.cadastrar()
                            break
                        case 2:
                            cadastroServ.update()
                            break
                        case 3:
                            cadastroServ.remove()
                            break
                        case 4:
                            cadastroServ.read()
                            break
                        case 0:
                            break
                    }

                break
            }   
            
        break;
        case 3:
            console.log('Carrinho do Cliente: ');
            console.log('1- Adcionar Produto');
            console.log('2- Remover Produto ');
            
            let opcao_atr = entrada.receberNumero('Por favor escolha uma opção: ')
            switch(opcao_atr){
                case 1:
                    cadastroProd.add_cart()
                    break
                case 2:
                    cadastroProd.remove_cart()
                    break
            }
        break
        
        case 4:
            console.log('Carrinho do Cliente: ');
            console.log('1- Adcionar Serviço');
            console.log('2- Remover Serviço ');
            
            let opcao_serv_cart = entrada.receberNumero('Por favor escolha uma opção: ')
            switch(opcao_serv_cart){
                case 1:
                    cadastroServ.add_cart()
                break
                case 2:
                    cadastroServ.remove_cart()
                break
            }

        break
        
        case 5:
          console.log('1- Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.')
          console.log('2- Listagem de todos os clientes do gênero MASCULINO.')
          console.log('3- Listagem de todos os clientes do gênero FEMININO.');
          console.log('4- Listagem geral dos serviços ou produtos mais consumidos.');
          console.log('5- Listagem dos serviços ou produtos mais consumidos por gênero.');
          console.log('6- Listagem dos 10 clientes que menos consumiram produtos ou serviços.');
          console.log('7- Listagem dos 5 clientes que mais consumiram em valor, não em quantidade. ');

          let opcao_stats = entrada.receberNumero('Por favor escolha uma opção: ')

          switch(opcao_stats){
                case 1:
                    statistcs.more_quantity()
                break

                case 2:
                    statistcs.male()
                break
                case 3:
                    statistcs.female()
                break

                case 4:
                    statistcs.products_consume()
                    statistcs.services_consume()
                break
                
                case 5:
                    statistcs.popular_gender()
                    break
                case 6:
                    statistcs.less_consume()
                    break
                case 7:
                    statistcs.more_value()
                break
          }
        break
        case 6:
            cadastro.checkout()
        break
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
