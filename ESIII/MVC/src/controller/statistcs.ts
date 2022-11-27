import wb from "../data/wb";
import Cliente from "../model/cliente";
import Ranking from "../model/ranking";



export default class Stats {
    public popular_gender() :void {
        //4. Listagem dos serviços ou produtos mais consumidos por gênero. 
        let male: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'M'){
                male.push(element)
            }
        });

        let prod: Array<Ranking> = []
        wb.produtos.forEach(element => {
            prod.push(new Ranking(element.id, element.name))
        })

        prod.forEach(produto => {
            male.forEach(cliente => {
                cliente.produtos_consumidos.forEach(prod_consumido => {
                    if(produto.id == prod_consumido.id) {
                        produto.add()
                    }
                })
            })
        })

        let result = prod.sort((a,b) => {
            return b.acumulador - a.acumulador
        })

        let ranking_m = result.slice(0,10)
        console.log('\n----------RANKING MASCULINO PRODUTOS MAIS CONSUMIDOS----------\n');        
        ranking_m.forEach((element, index) => {
            console.log(`${index+1}º- ${element.name} - quantidade: ${element.acumulador}`)
        });
        

    

        let female: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'F'){
                female.push(element)
            }
        });

        let prod_f: Array<Ranking> = []
        wb.produtos.forEach(element => {
            prod_f.push(new Ranking(element.id, element.name))
        })

        prod_f.forEach(produto => {
            female.forEach(cliente => {
                cliente.produtos_consumidos.forEach(prod_consumido => {
                    if(produto.id == prod_consumido.id) {
                        produto.add()
                    }
                })
            })
        })

        let resultf = prod_f.sort((a,b) => {
            return b.acumulador - a.acumulador
        })

        let ranking_f = resultf.slice(0,10)
        console.log('\n----------RANKING FEMININO PRODUTOS MAIS CONSUMIDOS----------\n');        
        ranking_f.forEach((element, index) => {
            console.log(`${index+1}º- ${element.name} - quantidade: ${element.acumulador}`)
        });
    }

    public less_consume() :void {
        //Listagem dos 10 clientes que menos consumiram produtos ou serviços.
        let result = wb.clientes.sort((a, b) => {
            return (a.getTotal()) - (b.getTotal())
        })
       

        let ranking = result.slice(0,10)
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            let total_prod = 0
            element.produtos_consumidos.forEach(prod => {
                total_prod += prod.price
            })
            let total_serv = 0
            element.servicos_consumidos.forEach(serv => {
                total_serv += serv.price
            })
            let total = total_prod + total_serv
            console.log(`${index + 1}-`, element)
            console.log(`Consumo Produtos: R$ ${total_prod.toFixed(2)}`)
            console.log(`Consumo Serviços: R$ ${total_serv.toFixed(2)}`)
            console.log(`TOTAL CONSUMIDO: R$ ${total.toFixed(2)}`);
            console.log('-------------------------------------------------------');
            
            

        }  
    }

    public more_value() :void {
        //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade */

        
        let result = wb.clientes.sort((a, b) => {
            return (a.getTotal()) - (b.getTotal())
        })
       

        let ranking = result.slice(-5)
        ranking = ranking.reverse()
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            let total_prod = 0
            element.produtos_consumidos.forEach(prod => {
                total_prod += prod.price
            })
            let total_serv = 0
            element.servicos_consumidos.forEach(serv => {
                total_serv += serv.price
            })
            let total = total_prod + total_serv
            console.log(`${index + 1}-`, element)
            console.log(`Consumo Produtos: R$ ${total_prod.toFixed(2)}`)
            console.log(`Consumo Serviços: R$ ${total_serv.toFixed(2)}`)
            console.log(`TOTAL CONSUMIDO: R$ ${total.toFixed(2)}`);
            console.log('-------------------------------------------------------');
            
            

        }

    }

    public products_consume() :void {
        // 3. Listagem geral produtos mais consumidos.
       

        let prod: Array<Ranking> = []
        wb.produtos.forEach(element => {
            prod.push(new Ranking(element.id, element.name))
        })

        prod.forEach(produto => {
            wb.clientes.forEach(cliente => {
                cliente.produtos_consumidos.forEach(prod_consumido => {
                    if(produto.id == prod_consumido.id) {
                        produto.add()
                    }
                })
            })
        })

        let result = prod.sort((a,b) => {
            return b.acumulador - a.acumulador
        })

        let ranking_prod = result.slice(0,10)
        console.log('\n----------RANKING PRODUTOS MAIS CONSUMIDOS----------\n');        
        ranking_prod.forEach((element, index) => {
            console.log(`${index+1}º- ${element.name} - quantidade: ${element.acumulador}`)
        });


        
        
    }

    public services_consume() : void {
        let serv: Array<Ranking> = []
        wb.servicos.forEach(element => {
            serv.push(new Ranking(element.id, element.name))
        })

        serv.forEach(servico => {
            wb.clientes.forEach(cliente => {
                cliente.servicos_consumidos.forEach(serv_consumido => {
                    if(servico.id == serv_consumido.id) {
                        servico.add()
                    }
                })
            })
        })

        let result = serv.sort((a,b) => {
            return b.acumulador - a.acumulador
        })

        let ranking_serv = result.slice(0,10)
        console.log('\n----------RANKING SERVIÇOS MAIS CONSUMIDOS----------\n');        
        ranking_serv.forEach((element, index) => {
            console.log(`${index+1}º- ${element.name} - quantidade: ${element.acumulador}`)
        });

    }

    public more_quantity() : void {
        //1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
        
        let result = wb.clientes.sort((a, b) => {
            return (a.produtos_consumidos.length + a.servicos_consumidos.length) - (b.produtos_consumidos.length + b.servicos_consumidos.length)
        })

        let ranking = result.slice(-10)
        ranking = ranking.reverse()
        
        for (let index = 0; index < ranking.length; index++) {
            const element = ranking[index];
            console.log(`${index + 1}-`, element)

        }
    }


    public male() :void {
        //2. Listagem de todos os clientes por gênero MASCULINO. 

        let male: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'M'){
                male.push(element)
            }
        });

        
        console.log('-------------------------------------------------')
        console.log('CLIENTES DO GÊNERO MASCULINO: ');
        male.forEach(element => {
            console.log(element.name)
        });
        console.log('-------------------------------------------------')

    }

    public female() :void {
        //2. Listagem de todos os clientes por gênero FEMININO. 

        let female: Array<Cliente> = []
        wb.clientes.forEach(element => {
            if(element.gender == 'F'){
                female.push(element)
            }
        });

        
        console.log('-------------------------------------------------')
        console.log('CLIENTES DO GÊNERO FEMININO: ');
        female.forEach(element => {
            console.log(element.name)
        });
        console.log('-------------------------------------------------')
        
    }

 
}