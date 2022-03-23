/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe("Chatbot - flow onboarding bot tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start a conversation and get some responses with 'quick reply' buttons and flow texts", () => {
    cy.contains("Such Wow Pets")

    cy.get("[id=msg-textarea]").type("Olá");
    cy.get("[id=blip-send-message]").click();

    cy.contains("Olá, sou o assistente virtual da Such Wow Pets 🐶");
    cy.contains("Por aqui, posso te apresentar nossos serviços para cuidar do seu pet, como banho, tosa, hotelzinho, e produtos em geral!");
    cy.contains("Por favor me diga qual pet vai aproveitar nossos serviços:");

    cy.get("[class=item-list]").should("to.have.length", 1);
    cy.get("[class=disable-selection]").should("to.have.length", 3);

    cy.get("[class=disable-selection]").contains("Cão");
    cy.get("[class=disable-selection]").contains("Gato");
    cy.get("[class=disable-selection]").contains("Outro pet");

    cy.get("[class=disable-selection]").contains("Cão").click();
    cy.contains("Certo, e qual é o porte/tamanho do seu cão? Para referência, por favor considere: Pequeno: abaixo de 15kg Médio: de 15kg a 25kg Grande: Acima de 25kg");
    
    cy.get("[class=item-list]").should("to.have.length", 1);
    cy.get("[class=disable-selection]").should("to.have.length", 3);

    cy.get("[class=disable-selection]").contains("Pequeno");
    cy.get("[class=disable-selection]").contains("Médio");
    cy.get("[class=disable-selection]").contains("Grande");
    
    cy.get("[class=disable-selection]").contains("Pequeno").click();
    cy.contains("Só pra confirmar, estamos falando então de um Cão de porte/tamanho Pequeno?");
    
    cy.get("[class=item-list]").should("to.have.length", 1);
    cy.get("[class=disable-selection]").should("to.have.length", 2);

    cy.get("[class=disable-selection]").contains("Isso mesmo");
    cy.get("[class=disable-selection]").contains("Corrigir");

    cy.get("[class=disable-selection]").contains("Isso mesmo").click();
    cy.contains("Por aqui posso te ajudar com essas opções para o seu Cão de porte/tamanho Pequeno: 1 - Banho e Tosa 2 - Hotel 3 - Produtos E você também pode falar com nossos atendentes digitando a opção: 4 - Falar com Atendente");
    cy.contains("💡_Dica: A qualquer momento de nossa conversa digite *menu* para ver essas opções novamente!_");
  });

});
