import { LocalHospital } from "@mui/icons-material";
import NumericCards from "./numeric-cards.component";

describe("<NumericCards />", () => {
  it("should render the component", () => {
    cy.mount(<NumericCards Icon={LocalHospital} title="Hospital" value="25" />);
    cy.findByTestId("NumericCards").should("exist");
  });
});
