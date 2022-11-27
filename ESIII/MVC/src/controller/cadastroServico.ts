import wb from "../data/wb";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Servico from "../model/servico";

export default class CadastroServico extends Cadastro{
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
        let servico = new Servico(id, name, price, quantidade)
        wb.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }

    public update(): void {
        let id = this.entrada.receberTexto(`Digite o id do serviço que você deseja atualizar: `)

        try {
            
            wb.servicos.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.price = this.entrada.receberNumero('Preço: ')
                    console.log(element)
                }
            })

            console.log(`Serviço ID:${id} atualizado com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
        
    }

    public remove(): void {
        let id = this.entrada.receberTexto(`Digite o id do serviço que você deseja remover: `)

        try {
            
            wb.servicos.forEach((element, index) => {
                if(element.id == id) {
                    wb.servicos.slice(index)
                }
            })

            console.log(`Serviço ID:${id} removido com sucesso!`);

        } catch (error) {
            console.log(error);
            
        }
    }

    public read(): void {
        wb.servicos.forEach(element => {
            console.log(element)
        });       
    }


    public add_cart(): void {

        wb.clientes.forEach(element => {
            console.log(`ID:${element.id} - ${element.name}`)
        });
        console.log('-----------------------------------------------');

        let id_cliente = this.entrada.receberTexto(`Digite o id do CLIENTE que você deseja ADCIONAR um serviço: `)

        wb.servicos.forEach(element => {
            console.log(`ID:${element.id} - ${element.name}, R$ ${element.price.toFixed(2)}`)
        });
        
        console.log('-----------------------------------------------');

        let id_servico = this.entrada.receberTexto(`Digite o id do SERVIÇO que você deseja atribuir: `)
        
        
        wb.servicos.forEach(servico => {
            if (servico.id == id_servico) {
                let add = servico
                wb.clientes.forEach(element => {
                    if (element.id == id_cliente) {
                        element.servicos_consumidos.push(add)
                        console.log('-----------------------------------------------');
                        console.log(`${add.name} adcionado ao carrinho de ${element.name}`)
                        console.log('CARRINHO: ');
                        console.log(element.servicos_consumidos)
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

        let id_cliente = this.entrada.receberTexto(`Digite o id do CLIENTE que você deseja REMOVER um serviço: `)

        wb.clientes.forEach(element => {
            if(element.id == id_cliente) {

                console.log(element.name)
                console.log(element.servicos_consumidos)
            }
        });
        
        console.log('-----------------------------------------------');

        let id_servico = this.entrada.receberTexto(`Digite o id do SERVIÇO que você deseja remover do carrinho: `)
        
        
        wb.servicos.forEach(servico => {
            if (servico.id == id_servico) {
                let remove = servico
                wb.clientes.forEach(element => {
                    if (element.id == id_cliente) {
                        
                        let position = element.servicos_consumidos.indexOf(remove)
                        element.servicos_consumidos.splice(position,1)
                        console.log('-----------------------------------------------');
                        console.log(`${remove.name} removido do carrinho de ${element.name}`)
                        console.log('CARRINHO: ');
                        console.log(element.servicos_consumidos)
                        console.log('-----------------------------------------------');

                    }
                })  
            } 
        }) 

    }

}