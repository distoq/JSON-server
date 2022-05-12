# DEStoq API (JSON-server)

Bem vindo a fake API do projeto DEStoq. Esa API tem como objetivo abastecer o frontend de um CRM de hamburgueria fazendo conexões entre estoque e pedidos.

## Base URL

Esta é a base URL para consumir a API: https://destoq.herokuapp.com

# Endpoints

Atualmente a API propõe um total de 4 Endpoints para realização de cadastro, login, produtos e usuários(sendo o último necessário autenticação)

## -Fazer um cadastro

_`POST`_ /register

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

## -Hora de Logar!

_`POST`_ /login

### body:

```
{
	"email": "email@email.com",
	"password": "123456"
}
```

### Response

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

## -Listar todos os produtos

_`GET`_ /products

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
```

É possível usar o query params para filtrar a partir de categorias, rating e mais a partir de /products?{tipo}{comparador}{parametro}:

### Exemplos:

_`GET`_ /products?category=porcoes

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

_`GET`_ /products?rating>=4

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
	}
]
```

## -Mostrar usuário

_`GET`_ /users/:user_id

### Auth:

É necessário token de autenticação

### Response:

```
{
	"email": "email@email.com",
	"password": "{encrypted password}",
	"name": "fulano",
	"id": 2
}

```

# Erros

## Ao tentar cadastrar o mesmo email duas vezes:

Response:

`400` Bad Resquest

```
"Email already exists"
```

## Se o email ou senha não forem enviados ou estiverem vazios:

Response:

`400` Bad Resquest

```
"Email and password are required"
```

## Ao tentar acessar /users sem autenticação

Response:

`401` Unauthorized

```
"Missing token"
```

## Ao tentar acessar /users com id diferente do token de autenticação ou sem id

Response:

`403` Forbidden

```
"Private resource access: entity must have a reference to the owner id"
```
