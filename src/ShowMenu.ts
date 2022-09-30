import PromptSync from "prompt-sync";
import { menuEnum } from "./Menu";

const prompt = PromptSync();

function Menu(){

    let opcao = 0
    let enumeratorMenu: menuEnum

    do{
        console.log('\t\t---Escolha uma opção--- ');
        console.log('1 - Armazenar dados');
        console.log('2 - Remover dados');
        console.log('3 - Atualizar dados');
        console.log('4 - Apresentação dos dados');
        console.log('5 - Sair');
        opcao = prompt('>>');

        switch (opcao) {
            case 1:
             enumeratorMenu = menuEnum.armazenar 
               break;

            case 2:
             enumeratorMenu = menuEnum.remover
                break;

            case 3:
             enumeratorMenu = menuEnum.atualizar

            case 4:
             enumeratorMenu = menuEnum.apresentar
                break;

            case 5:
             enumeratorMenu = menuEnum.sair
    
            default:
             console.log('Opção inválida!');
                break;
        }
    }while(opcao<1 || opcao>5);

    return enumeratorMenu
}

export { Menu };
