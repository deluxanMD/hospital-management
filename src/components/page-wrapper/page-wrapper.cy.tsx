import PageWrapper from "./page-wrapper.component";

describe("<PageWrapper />", () => {
  it("load component", () => {
    cy.mount(
      <PageWrapper data-testid="TestId">
        <p>Test Page</p>
      </PageWrapper>
    );

    cy.findByTestId("TestId").should("exist");
    cy.get("p").should("have.text", "Test Page");
  });
});
