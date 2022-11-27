export default class Produto {
    public id: string
    private _name: string
    public quantidade: number
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }
    
    private _price: number
    public get price(): number {
        return this._price
    }
    public set price(value: number) {
        this._price = value
    }

    
    constructor(id: string, name: string, price: number, quantidade: number) {
        this.id = id
        this._name = name
        this._price = price
        this.quantidade = quantidade
    }

}