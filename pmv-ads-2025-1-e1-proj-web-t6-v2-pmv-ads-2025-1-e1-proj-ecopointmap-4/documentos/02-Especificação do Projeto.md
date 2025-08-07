# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Cidadão</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que desejam descartar resíduos adequadamente.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ol>
  <li>Localizar pontos de reciclagem próximos, de forma simples, e saber quais materiais são aceitos.</li>
  <li>Aprender sobre melhores práticas para descarte consciente de resíduos.</li>
</ol>
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                |PARA ... `PORQUE`                                                                    |
|--------------------|------------------------------------------|-------------------------------------------------------------------------------------|
| cidadão            | encontrar pontos de reciclagem próximos  | descartar resíduos de forma responsável e ambientalmente correta de forma simples   |
| cidadão            | filtrar por pontos de reciclagem         | encontrar de forma facilitada o ponto de reciclagem mais próximo                    |
| cidadão            | cadastrar um ponto de reciclagem         | adicionar mais pontos de reciclagem aos existentes de forma anônima ou não          |
| cidadão            | favoritar pontos de reciclagem           | visualizar melhores pontos de reciclagem sem necessidade de pesquisar               |
| cidadão            | saber mais sobre reciclagem              | evitar o descarte incorreto de resíduos, conhecer os benefícios da reciclagem etc   |
| cidadão            | realizar cadastro no site                | utilizar funcionalidades adicionais                                                 |

## Requisitos do Projeto

### Requisitos Funcionais

| ID    | Descrição                                                                                                                                                 | Prioridade |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RF-01 | O site deverá exibir informações sobre cada ponto (horário de funcionamento, materiais aceitos).                                                          | Alta       |
| RF-02 | O site deverá permitir a busca por tipo de material aceito (plástico, vidro, papel etc.).                                                                 | Alta       |
| RF-03 | O site deverá permitir filtrar pontos de reciclagem por cidade.                                                                                           | Média      |
| RF-04 | O site deverá exibir um mapa com cada ponto de reciclagem cadastrado.                                                                                     | Média      |
| RF-05 | O site deverá permitir que os usuários favoritem o ponto de reciclagem.                                                                                   | Média      |
| RF-06 | O site deverá possibilitar que os usuários abram a rota no Google Maps.                                                                                   | Baixa      |
| RF-07 | O site deverá possibilitar o cadastro de novos pontos de reciclagem por usuário.                                                                          | Alta       |
| RF-08 | O site deverá permitir adicionar novos pontos de reciclagem de forma anônima e não anônima.                                                               | Média      |
| RF-09 | O site deverá permitir adicionar imagem ao ponto de reciclagem cadastrado.                                                                                | Baixa      |
| RF-10 | O site deverá educar os usuários em uma seção educativa, com informações, sobre reciclagem para conscientizar os usuários e como maximizar o uso do site. | Alta       |
| RF-11 | O site deverá possibilitar o cadastro de usuário.                                                                                                         | Média      |
| RF-12 | O site deverá possibilitar a autenticação do usuário.                                                                                                     | Média      |
| RF-13 | O site deverá permitir que os usuários visualizem os pontos de reciclagem favoritados.                                                                    | Média      |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

| ID     | Descrição                                                                                                                                                                                                                     | Prioridade |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| RNF-01 | O site deverá ser responsivo, adaptando-se a diferentes tamanhos de tela: <ol><li>Mobile resolução mínima (360x640)px.</li><li>Tablet resolução mínima (800x1280)px.</li><li>Desktop resolução mínima (1280x768)px.</li></ol> | Média      |
| RNF-02 | O site deverá ser acessível ao público na internet.                                                                                                                                                                           | Alta       |
| RNF-03 | O site deverá ser acessível nos navegadores: Google Chrome e Safari.                                                                                                                                                          | Alta       |
| RNF-04 | O site deverá ter acessibilidade acima de 80% medida no lighthouse.                                                                                                                                                           | Baixa      |
| RNF-05 | O usuário poderá visualizar os pontos de reciclagem sem necessidade de cadastro prévio.                                                                                                                                       | Alta       |

**Prioridade: Alta / Média / Baixa.

