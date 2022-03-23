/// <reference types="cypress" />

describe("Chatbot - Templates bot tests", () => {
    beforeEach(() => {
      cy.visit("https://chat.blip.ai/?appKey=aG90ZWwxMTo0ZGNlMmFkOC1mYmU0LTQ1ZmQtYjNlOS1hYzhiZjVjOTExMmE=&_gl=1*huqwcu*_ga*MzM3MDA5MDA1LjE2NDczNjUxOTU.*_ga_VYKG6G92NK*MTY0ODAzNjQ1Ny41MTUuMS4xNjQ4MDM4NDEwLjA.");
    });
  
    it("Teste Real Bot", () => {
        cy.get("[id=msg-textarea]").type("ola");
        cy.get("[id=blip-send-message]").click();
        cy.contains("Ola! Esse e um bot para testar testes de fluxos automatizados");
        cy.contains("Gostou da ideia?");
        cy.get("[class=disable-selection]").should("contain", "Sim");
        cy.get("[class=disable-selection]").should("contain", "Mais ou menos");
        cy.get("[class=disable-selection]").should("contain", "Nao");
        cy.get("[id=msg-textarea]").type("sim");
        cy.get("[id=blip-send-message]").click();
        cy.contains("Entendi!");
        cy.contains("O que voce acha que pode ser melhorado?");
        cy.get("[id=msg-textarea]").type("adicionar trackings");
        cy.get("[id=blip-send-message]").click();
        cy.contains("Obrigado pela interacao!");
        
    });
  
  });
  