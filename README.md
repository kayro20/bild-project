Este projeto foi desenvolvido para o desafio de frontend da Bild, que consite em uma página que lista produtos (empreendimentos) dado um layout e uma rota de api.

- Como rodar a aplicação?
Uma vez com o porjeto e as dependencias instaladas, basta rodar o comando 'start' (via npm ou yarn)

- Como rodar os testes?
Semelhante ao start da aplicação, com npm ou yarn basta rodar o comando 'test'

Observações:
- A página consiste em uma listagem única, sem paginação ou infinite scroll.
- O card foi feito de maneira mais próxima ao layout, alguns valores (cores, unidades, margens, etc) foram aproximados, não encontrei os valores exatos de algumas medidas na documentação/desenho.
- Quando há muitos valores de área util para um empreendimento, ele foi descrito separado por vírgulas (exibindo todos os valores válidos pela regra de negócio)
- Para o carrossel foi utilizado uma biblioteca, porém os dots (bolinhas de navegação) foram feitas por implementação própria, por isso o efeito mais simples de animação, assim como ausência do fade da estrela de favorito
- Não há internacionalização (traduções das strings) no projeto
