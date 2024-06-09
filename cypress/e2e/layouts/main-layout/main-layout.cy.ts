describe("<MainLayout />", () => {
  it("desktop", () => {
    cy.visit("http://localhost:3000");

    cy.findByTestId("MainLayout").should("exist");
    cy.findByTestId("ResponsiveAppBar").should("exist");
    cy.findByTestId("DesktopSidebar.Drawer").should("exist");
  });

  it("phone", () => {
    cy.viewport(480, 750);
    cy.visit("http://localhost:3000");

    cy.findByTestId("MainLayout").should("exist");
    cy.findByTestId("ResponsiveAppBar").should("exist");

    cy.findByTestId("PhoneSidebar.Drawer").should(
      "have.css",
      "visibility",
      "hidden"
    );
    cy.findByTestId("MenuIcon").click();
    cy.findByTestId("PhoneSidebar.Drawer").should(
      "not.have.css",
      "visibility",
      "hidden"
    );
    cy.findByTestId("CloseIcon").click();
    cy.findByTestId("PhoneSidebar.Drawer").should(
      "have.css",
      "visibility",
      "hidden"
    );
  });
});
