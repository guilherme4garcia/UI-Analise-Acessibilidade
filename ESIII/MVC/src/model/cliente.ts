import Produto from "./produto"
import Servico from "./servico"
import Cpf from "./cpf"

export default class Cliente {
  public id: string
  private _name: string
  private _gender: string
  public get gender(): string {
    return this._gender
  }
  public set gender(value: string) {
    this._gender = value
  }
  private _cpf: Cpf
  public get cpf(): Cpf {
    return this._cpf
  }
  public set cpf(value: Cpf) {
    this._cpf = value
  }
  private _telefone: string
  public get telefone(): string {
    return this._telefone
  }
  public set telefone(value: string) {
    this._telefone = value
  }

  private data_cadastro: string
  private _produtos_consumidos: Array<Produto>
  private _servicos_consumidos: Array<Servico>

  
  constructor(id: string, name: string, gender: string, cpf: Number, telefone: string) {

    

    let code = new Cpf (cpf)
    this.id = id
    this._name = name
    this._gender = gender
    this._cpf = code
    this._telefone = telefone
    this.data_cadastro = new Date().toLocaleDateString('pt-BR')
    this._produtos_consumidos = []
    this._servicos_consumidos = []

  }
  
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  
  public get produtos_consumidos(): Array<Produto> {
    return this._produtos_consumidos
  }
  public set produtos_consumidos(value: Array<Produto>) {
    this._produtos_consumidos = value
  }

  public get servicos_consumidos(): Array<Servico> {
    return this._servicos_consumidos
  }
  public set servicos_consumidos(value: Array<Servico>) {
    this._servicos_consumidos = value
  
  }
  
  public getTotal() {
    let total_prod = 0
    this.produtos_consumidos.forEach(prod => {
      total_prod += prod.price
    })
    let total_serv = 0
    this.servicos_consumidos.forEach(serv => {
      total_serv += serv.price
    })
    let total = total_prod + total_serv
    return total
  }

}