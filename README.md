# OliveiraTrade API DOCS 📚🔍

Esta API, desenvolvida para aplicar à vaga de trainee na empresa EveryMind, permite cadastro e login de usuário com informações básica de pessoa física.

## Endpoints e responses

> **Endpoints: rotas de acesso às funcionalidades da API**
>
> /signup
>
>/signin

Ambas as rotas, quando concluídas corretamente, retornam os dados do usuário como resposta. Isso permite mostrar uma mensagem de sucesso personalizada, com base nos dados do usuário.

Todas as respostas são retornadas em formato json.

**Modelo de resposta para rota signup:**
```json
{
	"name": "Nome do usuário",
	"email": "enderecodeemail@dominio",
	"cpf": "000.000.000-00"
}
```

**Modelo de resposta para rota signin:**
```json
{
	"id": 1,
	"name": "Nome do usuário",
	"email": "enderecodeemail@dominio",
	"cpf": "000.000.000-00"
}
```

## Exemplos de uso

Vamos usar um usuário chamado José Antônio da Silva, como exemplo, cadastrando-o no sistema e efetuando login com a conta dele.

**Criando cadastro do José Antônio da Silva (signup):**

Enviando uma requisição da seguinte forma:

```javascript
const data = {
	"name" : "José Antônio da Silva",
	"email" : "silva.joseantonio@gmail.com",
	"cpf" : "123.456.789-10",
	"pass" : "*joseantonio12345"
}

fetch('http://localhost:3333/signup', {
	method: "POST",
	body: JSON.stringify(data),
	headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
```

Teremos a seguinte respota, com o HTTP status code 201:

```json
{
	"name": "José Antônio da Silva",
	"email": "silva.joseantonio@gmail.com",
	"cpf": "123.456.789-10"
}
```

**Efetuando login na conta do usuário (signin):**

Enviando um requisição da seguinte forma:

```javascript
const data = {
	"email": "José Antônio da Silva",
	"pass": "*joseantonio12345"
}

fetch('http://localhost:3333/signin', {
	method: "POST",
	body: JSON.stringify(data),
	headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
```

Teremos a seguinte respota, com o HTTP status code 200:

```json
{
	"id": 1,
	"name": "José Antônio da Silva",
	"email": "silva.joseantonio@gmail.com",
	"cpf": "123.456.789-10"
}
```

**Efetuando login na conta do usuário (signin):**

Nota: Neste exemplo o email estará errado.
Enviando um requisição da seguinte forma:

```javascript
const data = {
	"email": "joseantonio@gmail.com",
	"pass": "*joseantonio12345"
}

fetch('http://localhost:3333/signin', {
	method: "POST",
	body: JSON.stringify(data),
	headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
```

Teremos a seguinte respota, como erro (HTTP status code) 403:

```json
{
	"message": "Email ou senha incorreto!"
}
```

**Efetuando login na conta do usuário (signin):**

Nota: Neste exemplo a senha estará errada.
Enviando um requisição da seguinte forma:

```javascript
const data = {
	"email": "silva.joseantonio@gmail.com",
	"pass": "joseantonio12345"
}

fetch('http://localhost:3333/signin', {
	method: "POST",
	body: JSON.stringify(data),
	headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json));
```

Teremos a seguinte respota, como erro (HTTP status code) 403:

```json
{
	"message": "Email ou senha incorreto!"
}
```

***Caso em algumas das duas rotas ocorra outro erro, além do previsto na documentação, a API retornará a seguinte resposta, como erro  (HTTP status code) 500:***
```json
{
	"message": "Ocorreu o seguinte erro inesperado: [descrição do erro]"
}
```