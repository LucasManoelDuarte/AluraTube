# AluraTube

Olá, mais um projeto qe saiu na ImersãoDev da Alura.

De todos os projetos da imersão, esse é o que mais gosto. Ele é bem simples, você copia o link de algum vídeo do Youtube e cola na caixa texto, clica no botão "Adicionar Vídeo" e ele aparece ali mesmo. Bem simples, né?

Mas, quem trabalha com sites sabe que existe a opção incorporar do youtube, onde ele gera um código html, basta copiá-lo e inserir no seu código e vídeo do youtube estará na sua página. Mas, pensei em como um usuário, que não sabe desta opção, conseguiria listar os seus vídeos no projeto que criei. Percebi que o link do vídeo muda quando incorporamos.

Por exemplo: 

Link do vídeo copiando a URL  ==> https://www.youtube.com/watch?v=_3u172oWYao 

Utilizando a opção incorporar ==> https://www.youtube.com/embed/_3u172oWYao
             
Percebeu a diferença? é link é o mesmo até .com/ depois disso, vem uma pequena mudança. O watch?v= é trocado por embed/ . Embed significa incorporar.

Se o link não tiver o embed/, a sua página não reconhecerá o vídeo. Pensando nisso, realizei uma lógica para trocar o embed/ por watch?v= quando o usuário pressionar o botão de adicionar. Assim, o vídeo aparecerá de forma correta na página. Mas, surgiu outro problema. Quando você para de assistir um vídeo no Youtube, ele marca onde você parou, e isso acaba alterando o link...

Exemplo:

https://www.youtube.com/watch?v=Z5td7jZgaYs&t=628s

Depois do código do vídeo (v=Z5td7jZgaYs) é adicionado mais um parâmetro (t=628s), o tempo que você parou de assistir o vídeo. Assim, caso fosse copiado um link como no exemplo, a página não iria reconhecer vídeo. Precisei realizar uma condição verificando se o link possuia este argumento de tempo, se sim, ele seria retirado para validar o link.

Gosto bastante deste projeto por conter esta lógica de verificar e validar o link. Assim, qualquer link que for colado na caixa de texto, a página irá reconheer e exibir o vídeo corretamente.
