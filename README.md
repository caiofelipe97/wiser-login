# Wiser - Challenge Login - Mobile
## Passos para rodar o projeto:
- Rodar "yarn" para instalar as dependências
- Rodar "yarn android" ou "yarn ios" dependendo em que dispositivo está sendo testado.

## Algumas bibliotecas usadas
- `@unform` para a auxiliar no controle do formulário de login.
- `axios` para realizar requisições a api.
- `Redux & Redux Saga` para controle do estado global da aplicação, que consistia no user, loading e error.
- `styled-components`para estilização.
- `yup` para validação dos formulários.
- Foi utilizado também o `mockAPI` para mockar a chamada de login.
#### Usuário válido: { email: "teste@email.com", password: "1234"} 

## Funcionamento
- O funcionamento do aplicativo é bastante simples, apenas uma tela de login, o usuário digita seu email e senha, caso não digite algum campo é feito uma validação de campo obrigatório, e no caso do email se ele é inválido.
- Ao passar das validações é realizado uma chamada ataravés do Redux-Saga ao mockAPI, se o usuário existir é disparada a action `LOGIN_SUCCESS` se não é disparada a action `LOGIN_FAILURE`.
- O aplicativo se comporta de acordo com os passos do usuário.

## Designer responsivo
![Screenshot_1606435149](https://user-images.githubusercontent.com/20324935/108908973-b4302b80-7602-11eb-9047-8efc04444f83.png)
![Screenshot_1611003115](https://user-images.githubusercontent.com/20324935/108908975-b5615880-7602-11eb-8e55-266af293645f.png)
