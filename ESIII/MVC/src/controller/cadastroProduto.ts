import wb from "../data/wb";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Produto from "../model/produto";


export default class CadastroProduto extends Cadastro {
    
    private entrada: Entrada
    constructor() {
        super()
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do Produto`);
        let id = this.entrada.receberTexto(`Digite o id: `)
        let name = this.entrada.receberTexto(`Nome do produto: `)
        let price = this.entrada.receberNumero('Preço: ')
        let quantidade = 1
        let produto = new Produto(id, name, price, quantidade)
        wb.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }

    public update(): void {
        let id = this.entrada.receberTexto(`Digite o id do produto que você deseja atualizar: `)

        try {
            
            wb.produtos.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.price = this.entrada.receberNumero('Preço: ')
                    console.log(element)
                }
            })

            console.log(`Produto ID:${id} atualizado com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
        
    }

    public remove(): void {
        let id = this.entrada.receberTexto(`Digite o id do produto que você deseja remover: `)

        try {
            
            wb.produtos.forEach((element, index) => {
                if(element.id == id) {
                    wb.produtos.slice(index)
                }
            })

            console.log(`Produto ID:${id} removido com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
    }

    public read(): void {
        wb.produtos.forEach(element => {
            console.log(element)
        });       
    }

    public add_cart(): void {

        wb.clientes.forEach(element => {
            console.log(`ID:${element.id} - ${element.name}`)
        });
        console.log('-----------------------------------------------');

        let id_cliente = this.entrada.receberTexto(`Digite o id do CLIENTE que você deseja ADCIONAR um produto: `)

        wb.produtos.forEach(element => {
            console.log(`ID:${element.id} - ${element.name}, R$ ${element.price.toFixed(2)}`)
        });
        
        console.log('-----------------------------------------------');

        let id_produto = this.entrada.receberTexto(`Digite o id do PRODUTO que você deseja atribuir: `)
        
        
        wb.produtos.forEach(produto => {
            if (produto.id == id_produto) {
                let add = produto
                wb.clientes.forEach(element => {
                    if (element.id == id_cliente) {
                        element.produtos_consumidos.push(add)
                        console.log('-----------------------------------------------');
                        console.log(`${add.name} adcionado ao carrinho de ${element.name}`)
                        console.log('CARRINHO: ');
                        console.log(element.produtos_consumidos)
                        console.log('-----------------------------------------------');

                    }
                })  
            } 
        })  
    }

    public remove_cart(): void {

        wb.clientes.forEach(element => {
            console.log(`ID:${element.id} - ${element.name}`)
        });
        console.log('-----------------------------------------------');

        let id_cliente = this.entrada.receberTexto(`Digite o id do CLIENTE que você deseja REMOVER um produto: `)

        wb.clientes.forEach(element => {
            if(element.id == id_cliente) {

                console.log(element.name)
                console.log(element.produtos_consumidos)
            }
        });
        
        console.log('-----------------------------------------------');

        let id_produto = this.entrada.receberTexto(`Digite o id do PRODUTO que você deseja remover do carrinho: `)
        
        
        wb.produtos.forEach(produto => {
            if (produto.id == id_produto) {
                let remove = produto
                wb.clientes.forEach(element => {
                    if (element.id == id_cliente) {
                        
                        let position = element.produtos_consumidos.indexOf(remove)
                        element.produtos_consumidos.splice(position,1)
                        console.log('-----------------------------------------------');
                        console.log(`${remove.name} removido do carrinho de ${element.name}`)
                        console.log('CARRINHO: ');
                        console.log(element.produtos_consumidos)
                        console.log('-----------------------------------------------');

                    }
                })  
            } 
        }) 

    }

}