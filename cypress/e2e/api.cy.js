describe('Testes back-end', () => {
    const token = Cypress.env('GITHUB_TOKEN');
    const baseUrl = 'https://api.github.com';
    const repoName = `cypress-test-repo-${Date.now()}`;
    let issueNumber; 
  
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    it('Criação de um repositorio no github', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/user/repos`,
        headers,
        body: {
          name: repoName,
          description: 'Repositorio no github',
          private: false
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(repoName);
      });
    });
  
    it('Consulta do repositorio criado', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/repos/${Cypress.env('GITHUB_USERNAME')}/${repoName}`,
        headers
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(repoName);
      });
    });
  
    it('Criação de uma issue no respositorio recém criado', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/repos/${Cypress.env('GITHUB_USERNAME')}/${repoName}/issues`,
        headers,
        body: {
          title: 'Issue no respositorio recém criado',
          body: 'Issue no respositorio recém criado'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('Issue no respositorio recém criado');
        issueNumber = response.body.number;
      });
    });
  
    it('Consulta da issue', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/repos/${Cypress.env('GITHUB_USERNAME')}/${repoName}/issues/${issueNumber}`,
        headers
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.number).to.eq(issueNumber);
      });
    });
  
    it('Exclusão do repositorio', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/repos/${Cypress.env('GITHUB_USERNAME')}/${repoName}`,
        headers
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  
    it('Consultar se o repositorio foi eliminado', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/repos/${Cypress.env('GITHUB_USERNAME')}/${repoName}`,
        headers,
        failOnStatusCode: false
      }).then((response) => { 
        expect(response.status).to.eq(404);
      });
    });
  });
  