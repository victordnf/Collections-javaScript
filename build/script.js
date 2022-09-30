"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var ShowMenu_1 = require("./ShowMenu");
var Menu_1 = require("./Menu");
var vet = [];
var loop = 1;
var enumeratorMenu;
var _loop_1 = function () {
    enumeratorMenu = (0, ShowMenu_1.Menu)();
    switch (enumeratorMenu) {
        case Menu_1.menuEnum.armazenar:
            var dados = prompt('Digite os dados que deseja armazenar: ');
            vet.push(dados);
            console.log("O dado ".concat(dados, " foi armazenado."));
            break;
        case Menu_1.menuEnum.remover:
            var removedor_1 = 0;
            vet.forEach(function (item) {
                console.log("".concat(removedor_1, "\u00BA dado ").concat(item));
                removedor_1++;
            });
            var removerDados = Number(prompt('Digite a posição do dado que você deseja remover: '));
            vet.splice(removerDados, 1);
            console.log("O dado N\u00BA ".concat(removerDados, " foi removido."));
            break;
        case Menu_1.menuEnum.atualizar:
            var atualizacao_1 = 0;
            vet.forEach(function (item) {
                console.log("".concat(atualizacao_1, "\u00BA dado ").concat(item));
                atualizacao_1++;
            });
            var atualizarDados = Number(prompt('Digite a posição do dado que você deseja atualizar: '));
            vet[atualizarDados] = prompt('Digite a nova atualização do dado: ');
            console.log('A mensagem foi atualizada.');
            break;
        case Menu_1.menuEnum.apresentar:
            vet.forEach(function (item) {
                console.log("".concat(item));
            });
            break;
        case Menu_1.menuEnum.sair:
            loop++;
            break;
        default:
            break;
    }
};
while (loop == 1) {
    _loop_1();
}
