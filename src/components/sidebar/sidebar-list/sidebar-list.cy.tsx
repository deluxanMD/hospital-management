import SidebarList from "./sidebar-list.component";

describe("<SidebarList />", () => {
  it("toggle group item", () => {
    cy.mount(<SidebarList />);

    cy.findByTestId("SidebarList").should("exist");
    cy.findByTestId("SidebarList.Group.Item").should("exist");
    cy.findByTestId("ExpandLessIcon").eq(0).click();
    cy.findByTestId("SidebarList.Group.Item").should("not.exist");
  });
});
