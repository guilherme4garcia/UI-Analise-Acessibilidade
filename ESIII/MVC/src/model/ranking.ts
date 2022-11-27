export default class Ranking {
    public id: string
    public name: string
    public acumulador: number

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
        this.acumulador = 1
    }

    public add() {
        this.acumulador += 1
    }
}