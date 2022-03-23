/// <reference types="cypress" />

describe("Chatbot - Templates bot tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should start a conversation and get templates", () => {       
      cy.get("[id=msg-textarea]").type("Olá");
      cy.get("[id=blip-send-message]").click();
      
      cy.get("[class=blip-card\\ blip-container\\ media-link\\ image]").contains("Media link title");
      cy.get("[class=blip-card\\ blip-container\\ media-link\\ image]").contains("Media link subtitle");
      
      cy.get("[class=blip-container\\ collection]").contains("First title");
      cy.get("[class=blip-container\\ collection]").contains("First subtitle");

      cy.get("[class=fixed-options]").find("ul").find("li").should("contain", "First option");
    //   each ver doc

    });
  
  });
  