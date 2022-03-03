# Anotações

### _Data binding_:

- As expressões regulares são usadas para tags `{{ title }}`;
-  Já o data binding são usados para que os atributos/propriedades do componente sejam injetados no template. Os dados são do componente e vão para o template, ou seja, uma relação unidirecional
- Quando queremos usar o _data binding_ em , usamos colchetes. Caso usado para exibir um valor dentro de uma _tag_ ou isoladamente, usa-se as Angular Expressions (`{{ atributo }}`) dentro de uma tag. Em resumo: Utilizamos {{ }} dentro de tags e [ ] para atributos

### Componentes & Módulos:

- Um componente obrigatoriamente precisa pertencer a um módulo.

- Componentes declarados no array declarations de um módulo são visíveis para os componentes também declarados no array.

- a propriedade @Input Permite que o componente receba valores externos quando usado na forma declarativa no template de outros componentes;

#### Inbound property

- As propriedades decoradas com `@Input`: permite que o componente receba valores externos quando usado na forma declarativa no template de outros componentes.

#### Declarações de módulos

- Em `declarations` são definidos `components`. Ou seja, nesse campo entra tudo o que aquele módulo tem. Se houverem 10 `components` neste módulo, por exemplo, eles poderão "enxergar" uns aos outros;

- Mas para que esses `components` sejam "enxergados" de fora, o módulo que possui tais `components` em seu `declarations`, precisa ter na propriedade `exports` quais `components` estarão acessíveis para quem importá-lo

#### BrowserModule:

- Não deve ser importando em nenhum outro módulo da apliação além do principal. Esse módulo traz consigo diretivas diretivas padrões do Angular e, dentro dele, possui o CommonModule que tem a declaração das diretivas; a diferença é que este módulo pode ser importado dentro de outros módulos além do principal

- Pode ser uma boa prática importar o CommonModule em outros módulos criados, para que as diretivas (ngFor, por exemplo) do Angular possam ser disponíveis
