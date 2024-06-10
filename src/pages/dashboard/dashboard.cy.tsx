import Dashboard from "./dashboard.component";

describe("<HomePage />", () => {
  it("should render the page", () => {
    cy.mount(<Dashboard />);
    cy.findByTestId("Dashboard.Container").should("exist");
  });
});
