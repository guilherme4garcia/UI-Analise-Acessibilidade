import wb from "../data/wb";
import Entrada from "../io/entrada";
import Cadastro from "../model/cadastro";
import Cliente from "../model/cliente";
import Cpf from "../model/cpf";


export default class CadastroCliente extends Cadastro {
    private entrada: Entrada
    constructor() {
        super()
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let id = this.entrada.receberTexto(`Digite o id: `)
        let name = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let gender_letter = this.entrada.receberTexto(`Informe o gênero (M/F): `).toUpperCase()
        let cpf = this.entrada.receberNumero(`Por favor informe o número do cpf: `);
        let telefone = this.entrada.receberTexto(`Digite o telefone: `)
        let cliente = new Cliente(id, name, gender_letter, cpf, telefone);
        wb.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
    public update(): void {
        let id = this.entrada.receberTexto(`Digite o id do usuário que você deseja atualizar: `)
        
        try {
            
            wb.clientes.forEach((element) => {
                if(element.id == id) {
                    element.name = this.entrada.receberTexto('Nome: ')
                    element.gender = this.entrada.receberTexto('Gênero (M/F): ').toUpperCase()
                    let cpf = this.entrada.receberNumero('CPF: ')
                    element.cpf = new Cpf (cpf)
                    element.telefone = this.entrada.receberTexto('Telefone: ')
                    console.log(element)
                    
                }
            })
            console.log(`Usuário ID:${id} removido com sucesso!`);
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    public delete(): void {
        let id = this.entrada.receberTexto(`Digite o id do usuário que você deseja remover: `)
        try {
            wb.clientes.forEach((element, index) => {
                if(element.id ==id) {
                    wb.clientes.splice(index)
                }
            })    

            console.log(`Usuário ID:${id} removido com sucesso!`);
        } catch (error) {
            console.log(error)
        }       

    }

    public read(): void {
        wb.clientes.forEach(element => {
            console.log(element)
        });       
    }


    public checkout(): void {
        let id = this.entrada.receberTexto(`Digite o id do CLIENTE para visualizar o checkout : `)
        try {
            let total = 0
            wb.clientes.forEach(element => {
                if(element.id == id){
                    total = element.getTotal()
                    console.log(element)
                }
            })
            
            console.log('------------------------------------------------------------------')
            console.log(`GASTO TOTAL: R$ ${total.toFixed(2)}`)
            console.log('------------------------------------------------------------------')

            
        } catch (error) {
            console.log(error)
        }
    }

}