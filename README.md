# OliveiraTrade API DOCS 📚🔍

___

Esta API, desenvolvida para aplicar à vaga de trainee na empresa EveryMind, permite cadastro e login de usuário com informações básica de pessoa física.

## Endpoints e responses

> **Endpoints: rotas de acesso às funcionalidades da API**
>
> /signup
>
>/signin

Ambas as rotas, quando concluídas corretamente, retornam os dados do usuário como resposta. Isso permite mostrar uma mensagem de sucesso personalizada, com base nos dados do usuário.

Todas as respostas são retornadas em formato json.

```json
{
	"name": "Nome do usuário",
	"email": "enderecodeemail@dominio",
	"cpf": "000.000.000-00",
	"pass": "9QbOx9+JdxjoXS8MTTWhdvE1Vp0="
}
```