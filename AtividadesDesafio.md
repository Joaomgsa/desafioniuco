# Tech Challenge

O desafio consiste na integração com a API de um SaaS utilizado por nossos clientes. Precisamos extrair seus dados através de endpoints REST descritos neste repositório e exibi-los de forma consolidada.

## Nós precisamos que você implemente

1.  Uma aplicação simples (console, API, worker, o que se sentir mais confortável) que será responsável pela integração com a API do nosso SaaS Mock para coletar os dados dos usuários cadastrados, convertê-los seguindo as regras abaixo e exibir o resultado final.

2. Um usuário deve conter ao menos as seguintes informações:

- ID
- Nome
- Email (ofuscado conforme regra abaixo)
- Data de última atividade (em formato ISO-8601)
- Flag para indicar se o usuário é pagante ou não
- Flag para determinar se o usuário está ativo ou não

3. - [ ] A API que estamos integrando retorna a propriedade `status` com os possíveis valores: `enabled`, `disabled`. O usuário apenas não está ativo quando o valor é igual a `disabled`.


4. - [ ] Também temos a necessidade de mapear se o usuário é pagante ou não. A API que estamos integrando não possui informação direta para definir este campo, mas sabemos que ela retorna um campo `role` e através deste conseguimos determinar o que precisamos. Devemos considerar a seguinte regra para este campo:

| Role   | Pagante |
|--------|---------|
| viewer | `false` |
| system | `false` |
| editor | `true`  |
| admin  | `true`  |

5. - [ ] Usuários inativos nunca são pagantes. A verificação se o usuário está inativo (`status` igual a `disabled`) deve ser feita antes de qualquer outra lógica, incluindo a verificação do campo role. Portanto, mesmo que o role indique que um usuário poderia ser pagante, se ele estiver inativo, ele deve ser considerado não pagante.

6. - [ ] A data de última atividade devolvida na API está no formato Unix Epoch e deve ser convertida para o padrão ISO-8601, considerando o fuso horário UTC.

7. - [ ]  O email deve ser ofuscado sempre que o domínio for diferente de `niuco.com.br`, de modo que só seja possível visualizar os primeiros e últimos 2 caracteres do alias e o domínio.
 
  ### Exemplos de Ofuscação de Email:

  - **Email com domínio `niuco.com.br`:**
    - Original: joao.silva@niuco.com.br
    - Ofuscado: joao.silva@niuco.com.br

  - **Email com domínio diferente de `niuco.com.br`:**
    - Original: maria.oliveira@gmail.com
    - Ofuscado: ma********a@gmail.com

    - Original: pedro.santos@yahoo.com
    - Ofuscado: pe*******os@yahoo.com

    - Original: claudia.rodrigues@outlook.com
    - Ofuscado: cl********es@outlook.com

    - Original: luiz.almeida@empresa.com
    - Ofuscado: lu*****da@empresa.com

### Detalhamento Adicional

- [x] Utilize variáveis de ambiente para configuração da URL da API mock.
- [X] Inclua tratamento de erros e logging apropriado.
- [X] Implemente testes unitários e de integração para validar sua solução.
- [X] Adicione documentação detalhada da aplicação, incluindo um README com instruções de instalação, execução, uso e decisões técnicas.
- [ ] Demonstre como a aplicação pode ser escalada e mantida.
- [ ] Configure um pipeline de CI/CD básico para rodar testes automaticamente.




