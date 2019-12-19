import React, {Component} from 'react';
import './App.css';

class Sobre extends Component{
  render(){
    return (<p>
  
 Descrição
O jogo de Xadrez tem dois participantes, que usam um tabuleiro para jogar.

Jogadores - 2.
Peças - 32 peças, 16 brancas e 16 pretas. Sendo que ambas as cores possuem:
2 Torres
2 Cavalos
2 Bispos
1 Dama
1 Rei
8 Peões
Tabuleiro - tabuleiro de 64 casas, claras e escuras.
Objetivo - Impor o xeque-mate ao adversário ou o seu rendimento.

Definições
Xeque - Rei sob ameaça de captura.
Xeque-mate - Rei sob ameaça de captura, sem que ele tenha como escapar.
Captura - Determinada peça toma a posição de uma outra peça adversária. Esta é removida da partida.
Histórico da partida - Notação de todas as jogadas feitas em uma partida.
Salvar partida - Guadar uma partida para poder jogar em outra hora. (Opção disponível somente na sala "galera")
Carregar partida - Continuar uma partida previamente salva. (Opção disponível somente na sala "galera")
O Jogo
O tabuleiro deve ser posicionado de modo que a 1ª casa a esquerda de cada jogador (casa "a1" para as peças brancas e "h8" para as peças pretas) seja da cor preta. O jogador que estiver jogando com as peças brancas começa o jogo, podendo fazer o primeiro movimento. A seguir, os jogadores alternam jogadas até o fim do jogo.

Movimentação das Peças
Torre - A movimentação da torre se dá somente de forma horizontal (linhas do tabuleiro) ou vertical (colunas do tabuleiro).
Bispo - Esta peça se movimenta somente nas diagonais do tabuleiro.
Dama - Uma dama pode se movimentar tanto na horizontal como na vertical (assim como uma torre) ou nas diagonais (assim como um bispo).
Rei - Se movimenta em qualquer direção mas com limitação quanto ao número de casas. O limite de casas que um rei pode se deslocar é de uma casa por lance. O rei NUNCA pode fazer um movimento que resulte em um xeque para ele.
Peão - O peão somente pode fazer movimentos adjacentes à sua posição anterior, isto é, não pode retroceder. O peão, assim como o rei só pode deslocar-se 1 casa à frente por lance, no entanto, quando o peão ainda está na sua posição inicial, este pode dar um salto de 2 casas à frente.
Cavalo - É a única peça que pode "saltar" sobre outras peças. A movimentação do cavalo é feita em forma de "L", ou seja, anda 2 casas em qualquer direção (vertical ou horizontal) e depois mais uma em sentido perpendicular.
Nenhuma peça, quando deslocada, pode ocupar uma casa que já está sendo ocupada por outra peça da mesma cor.

Quando a casa de destino de uma peça, quando em movimento, estiver sendo ocupada por uma peça de cor adversária, a peça em movimento efetuará a captura da aversária.

A captura feita por peças do tipo peão só é possível quando a peça a ser capturada estiver deslocada uma linha à frente e 1 coluna a direita ou a esquerda. A captura se dá na diagonal.

Movimentos Especiais
Roque - É um movimento que envolve 2 peças da mesma cor. São elas o Rei e qualquer uma das torres. O roque é feito ao mover o rei 2 casas para qualquer lado na horizontal. Para se fazer um roque é obrigatório satisfazer as seguintes condições:
O Rei não pode ter sido mexido até o momento do roque. Tem que estar na posição inicial.
Assim como o Rei, a Torre tambem não pode ter sido mexida, portanto deve estar na sua posição inicial.
As casas pelas quais o Rei irá passar, não podem estar sob ameaça das peças adversárias.
Não pode haver nenhuma peça obstruindo o caminho onde passarão Rei e Torre.
OBS: Para efetuar o Roque, clique sobre o Rei e clique sobre a posição desejada. O sistema moverá a Torre automaticamente.
Captura en-passant - Esta captura é um tipo especial feita por peões. Regras para a captura en-passant:
O peão a ser capturado deve ter feito o lance inicial de 2 casas.
O peão que vai fazer a captura, pode fazê-la como se o peão a ser capturado estivesse exatamente 1 casa à frente da sua posição inicial e deslocado 1 coluna a esquerda ou a direita como na captura normal.
Promoção de Peões
Um peão, ao alcançar a última linha do tabuleiro (no caso das brancas a linha 8, e no caso das pretas a linha 1) é promovido, o jogador é obrigado a escolher entre uma das seguintes peças para substituí-lo:

Dama
Torre
Bispo
Cavalo
   
    </p>

 
 )}

}


export default Sobre;