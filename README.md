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

**Modelo de resposta para rota signup**
```json
{
	"name": "Nome do usuário",
	"email": "enderecodeemail@dominio",
	"cpf": "000.000.000-00"
}
```

**Modelo de resposta para rota signin**
```json
{
	"id": 1,
	"name": "Nome do usuário",
	"email": "enderecodeemail@dominio",
	"cpf": "000.000.000-00"
}
```