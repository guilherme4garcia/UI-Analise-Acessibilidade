import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa {
    private _clientes: Array<Cliente>
    private _produtos: Array<Produto>
    private _servicos: Array<Servico>
    
    constructor() {
        this._clientes = []
        this._produtos = []
        this._servicos = []
    }
    
    public get clientes(): Array<Cliente> {
        return this._clientes
    }
    public set clientes(value: Array<Cliente>) {
        this._clientes = value
    }
    
    public get produtos(): Array<Produto> {
        return this._produtos
    }
    public set produtos(value: Array<Produto>) {
        this._produtos = value
    }
    
    public get servicos(): Array<Servico> {
        return this._servicos
    }
    public set servicos(value: Array<Servico>) {
        this._servicos = value
    }
    
    
}