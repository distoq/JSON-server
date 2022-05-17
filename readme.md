# DEStoq API (JSON-server)

Bem vindo à fake API do projeto DEStoq! Essa API tem como objetivo abastecer o frontend de um CRM para micro e pequenas empresas com foco no controle de estoque.

## Base URL

Esta é a base URL para consumir a API: https://destoq.herokuapp.com

# Endpoints

Atualmente a API propõe um total de 4 Endpoints para realização de cadastro, login, produtos e usuários (sendo o último necessário autenticação)

## - Fazer um cadastro

**`POST`** _/register_

Apenas email e senha são requeridos para o cadastro.

### body:

```
{

	"email": "email@email.com",
	"password": "123456"
}
```

### É possível adicionar outras informações ao body:

```
{
	"email": "email@email.com",
	"password": "123456",
  "name": "fulano",
  "profile" : "Admin"
}
```

### Response:

```
{
	"accessToken": "{token}",
	"user": {
		"email": "email@email.com",
		"name": "fulano",
		"id": 2
	}
}
```

## - Hora de Logar!

**`POST`** _/login_

É necessário apenas email e senha para realização do login, e será recebido o token e acesso para realizar autenticações.

### body:

```
{
	"email": "email@email.com",
	"password": "123456"
}
```

### Response

É recomendado salvar o token localmente para realizar autenticação.

```
{
	"accessToken": "{token}",
	"user": {
		"email": "email@email.com",
		"name": "fulano",
		"id": 2
	}
}
```

## - Listar todos os produtos

**`GET`** _/products_

Este endpoint retorna todos os produtos e não é necessário autenticação para acessá-lo.

### Response

```
[
	{
		"id": 1,
		"userId": 1,
		"ownerId": 1,
		"name": "Classic's Burger",
		"category": "sanduiches",
		"image": "https://i.pinimg.com/564x/e5/6c/7e/e56c7e393100191ba9958d734cd0d0f2.jpg",
		"price": 18.9,
		"promotion": false,
		"rating": 5,
		"description": "Pão tradicional com gergelim, 180g de hambúrguer Angus, alface, tomate e nossa maionese especial da casa.",
		"quantity": 10
	},
	{
		"id": 2,
		"userId": 1,
		"ownerId": 1,
		"name": "Big Bacon",
		"category": "sanduiches",
		"image": "https://i.pinimg.com/564x/1f/60/23/1f6023d0124c931c71d1c5900e49a8bd.jpg",
		"price": 26.9,
		"promotion": true,
		"rating": 4,
		"description": "Pão, 180g de hambúrguer de primeira, alface, muito bacon e nosso molho especial da casa.",
		"quantity": 10
	},
  {...}
```

É possível usar o query params para filtrar a partir de categorias, rating e mais.

### Exemplos:

**`GET`** _/products?category=porcoes_

```
[
	{
		"id": 6,
		"userId": 1,
		"ownerId": 1,
		"name": "Onion Rings",
		"category": "porcoes",
		"image": "https://i.pinimg.com/564x/b5/19/ba/b519ba437a71aa0d8f3df1af579a6f8c.jpg",
		"price": 20.9,
		"promotion": true,
		"rating": 5,
		"description": "Deliciosa porção de cebola frita empanada. Crocante até a última mordida! Acompanha nosso molho sour cream.",
		"quantity": 10
	},
	{
		"id": 7,
		"userId": 1,
		"ownerId": 1,
		"name": "Rustic Fried Potatoes",
		"category": "porcoes",
		"image": "https://i.pinimg.com/564x/10/df/43/10df436c04bbb105d1bd464d30f5fd09.jpg",
		"price": 21.9,
		"promotion": false,
		"rating": 5,
		"description": "Deliciosa porção de batata rústica frita com nosso famoso tempero caseiro! Acompanha nosso molho especial da casa.",
		"quantity": 10
	}
]
```

**`GET`** _/products?rating>=4_

```
[
	{
		"id": 1,
		"userId": 1,
		"ownerId": 1,
		"name": "Classic's Burger",
		"category": "sanduiches",
		"image": "https://i.pinimg.com/564x/e5/6c/7e/e56c7e393100191ba9958d734cd0d0f2.jpg",
		"price": 18.9,
		"promotion": false,
		"rating": 5,
		"description": "Pão tradicional com gergelim, 180g de hambúrguer Angus, alface, tomate e nossa maionese especial da casa.",
		"quantity": 10
	},
	{
		"id": 2,
		"userId": 1,
		"ownerId": 1,
		"name": "Big Bacon",
		"category": "sanduiches",
		"image": "https://i.pinimg.com/564x/1f/60/23/1f6023d0124c931c71d1c5900e49a8bd.jpg",
		"price": 26.9,
		"promotion": true,
		"rating": 4,
		"description": "Pão, 180g de hambúrguer de primeira, alface, muito bacon e nosso molho especial da casa.",
		"quantity": 10
	},
	{
		"id": 3,
		"userId": 1,
		"ownerId": 1,
		"name": "X-Veg",
		"category": "sanduiches",
		"image": "https://i.pinimg.com/564x/dd/9f/be/dd9fbec5211ff778bf28f1f5c858f8ce.jpg",
		"price": 22.49,
		"promotion": false,
		"rating": 5,
		"description": "Pão, 180g de hambúrguer de grão de bico, alface, tomate, pickles e maionese da casa.",
		"quantity": 10
	},
  {...}
]
```
## - Providers

**`GET`** _/providers_

Precisa de Auenticação. Retorna a liste de providers:

```
[
	{
		"id": 1,
		"userId": 1,
		"ownerId": 1,
		"companyName": "Coca Cola S.A.",
		"fantasyName": "Coca Cola",
		"cnpj": "00.000.000/0001-00",
		"ie": "00.000.000-2",
		"address": {
			"cep": "10000-000",
			"street": "dos Bandeirantes",
			"number": "111",
			"complement": "",
			"district": "district",
			"city": "São Paulo",
			"state": "SP"
		}
	},
	{
		"id": 2,
		"userId": 1,
		"ownerId": 1,
		"companyName": "Bovmeat S.A.",
		"fantasyName": "Bovmeat",
		"cnpj": "00.000.000/0002-00",
		"ie": "00.000.000-3",
		"address": {
			"cep": "20000-000",
			"street": "dos Expedicionários",
			"number": "222",
			"complement": "",
			"district": "district",
			"city": "Rio de Janeiro",
			"state": "RJ"
		}
	}
]
```
**`POST`** _/providers_

Necessário autenticação.

body:
```
{
		"id": 1,
	"userId": 1,
	"ownerId": 1,
	"companyName": "Coca Cola S.A.",
	"fantasyName": "Coca Cola",
	"cnpj": "00.000.000/0001-00",
	"ie": "00.000.000-2",
	"address": {
		"cep": "10000-000",
		"street": "dos Bandeirantes",
		"number": "111",
		"complement": "",
		"district": "district",
		"city": "São Paulo",
		"state": "SP"
}
```

## - Supplies

**`GET`** _/supplies_

Precisa de Auenticação. Retorna a liste de Supplies:

```
[
	{
		"id": 1,
		"userId": 1,
		"ownerId": 1,
		"name": "Carne Bovina",
		"supplier": "Bovmeat S.A",
		"category": "carne",
		"purchasePrice": 1300
	},
	{
		"id": 2,
		"userId": 1,
		"ownerId": 1,
		"name": "Pão Tradicional com Gergelim",
		"supplier": "Bread S.A",
		"category": "pao",
		"purchasePrice": 800
	}
]
```

**`POST`** _/supplies_

Necessário autenticação.

body:
```
{
	"id": 4,
	"userId": 1,
	"ownerId": 1,
	"name": "Carne Suina",
	"supplier": "meat S.A",
	"category": "carne",
	"purchasePrice": 1300
}
```
## - Tickets

**`GET`** _/tickets_

Lista todos os tickets.

```
[
	{
		exemplo aqui
	}
]

```

## - Finances

**`GET`** _/finances_

Lista todas as financias.

```
[
	{
		exemplo aqui
	}
]

```

## - Mostrar usuário

**`GET`** _/users

Mostra a lista de usuários cadastrados:

### Response:

```
[
	{
		"email": "destoq@proton.me",
		"password": "$2a$10$wOmglg/X2zilkC/wkxMjQ.OLgEJiqdON6FNgqACF0ooucP/dscG7e",
		"name": "Admin",
		"id": 1,
		"userId": 1
	},
	{
		"email": "clau@mail.com",
		"password": "$2a$10$2aY5DTV3Y7U3QXuSGbzv1.GO79ckvBQkVJCVKSktvZITdC3ZQtbYq",
		"name": "Claudinha",
		"addressInfo": {
			"cep": "80060100",
			"address": "Rua Conselheiro Laurindo",
			"city": "Curitiba",
			"state": "PR",
			"number": "100"
		},
		"id": 2
	}
]

```

# Erros

## Ao tentar cadastrar o mesmo email duas vezes:

Response:

`400` _Bad Resquest_

```
"Email already exists"
```

## Se o email ou senha não forem enviados ou estiverem vazios:

Response:

`400` _Bad Resquest_

```
"Email and password are required"
```

## Ao tentar acessar /users sem autenticação

Response:

`401` _Unauthorized_

```
"Missing token"
```

## Ao tentar acessar /users com id diferente do token de autenticação ou sem id:

Response:

`403` _Forbidden_

```
"Private resource access: entity must have a reference to the owner id"
```
