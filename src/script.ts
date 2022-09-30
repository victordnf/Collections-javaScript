import PromptSync from 'prompt-sync';

const prompt = PromptSync();

import { Menu } from './ShowMenu';
import { menuEnum } from './Menu';


const vet: string [] = [];

let loop = 1

let enumeratorMenu: menuEnum

while (loop == 1) {

    enumeratorMenu = Menu()

    switch(enumeratorMenu){
        case menuEnum.armazenar:
            const dados = prompt('Digite os dados que deseja armazenar: ')
            
            vet.push(dados)

            console.log(`O dado ${dados} foi armazenado.`)
            break;
        
       case menuEnum.remover:
            let removedor = 0;

            vet.forEach(item => {
                console.log(`${removedor}º dado ${item}`)
                removedor++
            })

            const removerDados = Number(prompt('Digite a posição do dado que você deseja remover: '))
            vet.splice(removerDados, 1)

            console.log(`O dado Nº ${removerDados} foi removido.`)
            break;

        case menuEnum.atualizar:
            let atualizacao = 0;

            vet.forEach(item => {
                console.log(`${atualizacao}º dado ${item}`)
                atualizacao++
            })
            
            const atualizarDados = Number(prompt('Digite a posição do dado que você deseja atualizar: '))
            
            vet[atualizarDados] = prompt('Digite a nova atualização do dado: ')
            
            console.log('A mensagem foi atualizada.')
            break;
        case menuEnum.apresentar:
            vet.forEach(item =>{
                console.log(`${item}`)
            })
            break;

        case menuEnum.sair:
            loop++
            break;
        
        default:
            break;
    }

}