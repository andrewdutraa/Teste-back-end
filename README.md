## Pré-requisitos

Para baixar e executar o projeto, necessário ter os seguintes sistemas instalados em seu computador:

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/)

## Download

Para realizar download do projeto no GitHub, acesse o repositório e clique no botão **Code** > **HTTPS** > **Copy**.

 Abra o terminal e navegue até a pasta onde deseja salvar o projeto. Cole o comando copiado e execute.
 
## Instalação

Para instalar as dependências de desenvolvimento, execute o comando `npm install`.


## Gerando um Token de Acesso no GitHub

Neste teste iremos interagir com a API do GitHub, siga os passos abaixo para criar seu *Personal Access Token (PAT)*:  

1. **Acesse o GitHub:**  
   - [https://github.com/](https://github.com/) e faça login na sua conta.  

2. **Abra as Configurações da Conta:**  
   - Clique no seu avatar no canto superior direito.  
   - Selecione **"Settings"** (*Configurações*).  

3. **Acesse a Seção de Tokens:**  
   - No menu lateral esquerdo, role até **"Developer settings"**.  
   - Clique em **"Personal access tokens"** > **"Tokens (classic)"**.  

4. **Gerar um Novo Token:**  
   - Clique em **"Generate new token"** → **"Generate new token (classic)"**.  
   - Forneça uma descrição para o token.  
   - Defina a validade (*expiration*).  

5. **Selecionar as Permissões Necessárias:**  
   - Marque as opções conforme a necessidade do seu projeto.  
     -  **`repo`**: acesso completo a repositórios públicos e privados.  
     -  **`delete_repo`**: permissão para deletar repositórios. 

6. **Gerar o Token:**  
   - Clique em **"Generate token"**.  
   - **Copie o token gerado e guarde-o em um local seguro**, pois não será possível visualizá-lo novamente.  


## ⚠️Importante

Antes de executar os testes, é necessário fornecer seu _user name_ do GitHub e o _token_ de acesso no arquivo `cypress.env.json`. Para isso, substitua `SEU_USER_NAME` e `SEU_GITHUB_TOKEN` pelos seus dados reais:

`
  "GITHUB_USERNAME": "SEU_USER_NAME",
  "GITHUB_TOKEN": "SEU_GITHUB_TOKEN"
`

## Executando os testes

Neste projeto, você pode rodar os testes em modo interativo ou modo _headless_.

### Modo _headless_

Execute o comando `npx cypress run`.


### Modo interativo

Execute o comando `npx cypress open` para abrir o Cypress e executar.
