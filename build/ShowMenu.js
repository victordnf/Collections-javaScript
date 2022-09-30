"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var prompt_sync_1 = require("prompt-sync");
var Menu_1 = require("./Menu");
var prompt = (0, prompt_sync_1.default)();
function Menu() {
    var opcao = 0;
    var enumeratorMenu;
    do {
        console.log('\t\t---Escolha uma opção--- ');
        console.log('1 - Armazenar dados');
        console.log('2 - Remover dados');
        console.log('3 - Atualizar dados');
        console.log('4 - Apresentação dos dados');
        console.log('5 - Sair');
        opcao = prompt('>>');
        switch (opcao) {
            case 1:
                enumeratorMenu = Menu_1.menuEnum.armazenar;
                break;
            case 2:
                enumeratorMenu = Menu_1.menuEnum.remover;
                break;
            case 3:
                enumeratorMenu = Menu_1.menuEnum.atualizar;
            case 4:
                enumeratorMenu = Menu_1.menuEnum.apresentar;
                break;
            case 5:
                enumeratorMenu = Menu_1.menuEnum.sair;
            default:
                console.log('Opção inválida!');
                break;
        }
    } while (opcao < 1 || opcao > 5);
    return enumeratorMenu;
}
exports.Menu = Menu;
