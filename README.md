# Check-Out

Projeto desenvolvido para teste front-end.

[![Vercel](https://vercelbadge.vercel.app/api/lubomfim/test-front)](https://test-front-git-master-lubomfim.vercel.app/checkout/cart)

## 🎯 Objetivo do projeto

Desenvolvimento do fluxo de finalização de compra, com carrinho, pagamento e confirmação. Você pode acessar o design [por aqui](https://projects.invisionapp.com/prototype/front-test-cji0j0khf005c1t0132358e8k/play/b6ddbc2f)
## 🌐 Live Version

[Acessar Checkout](https://test-front-git-master-lubomfim.vercel.app/checkout/cart)

## Rodar o projeto

```sh
git clone https://github.com/lubomfim/test-front.git
cd test-front
yarn install && yarn start
```

## Testar o projeto

```sh
// Depois de clonar e instalar as depedências, pode rodar o comando:

yarn test
```
## 🚀 Tecnologias 

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Styled-Components](https://styled-components.com/)
- [Testing Library](https://testing-library.com/)

## Estrutura de pastas

```
├── README.md
│
└── src
    ├── components/ # Componentes da aplicação
    │
    ├── contexts/ # Gerenciar estados, responsáveis por consumir API's. 
    │   
    ├── constants/ # Configurações da aplicação, estilos e dados estáticos. 
    │
    ├── pages/ #  Páginas da aplicação
    │
    ├── routes.js #  Configuração das rotas da aplicação
    │
    ├── services/ #  Serviços que consultam informações externas, como API's
    │
    ├── utils/ #  Funções utilitárias 
    │
```

