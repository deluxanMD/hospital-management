import { TextField } from "./text-field.component";
import { FormWrapper } from "../../../../test-utils/forms-test-utils";
import { useForm } from "react-hook-form";
import { AccountCircle } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const TestComponent = ({
  dataTestId,
  Icon,
  error,
}: {
  dataTestId?: string;
  Icon?: any;
  error?: boolean;
}) => {
  const formMethods = useForm({
    resolver: yupResolver(
      object().shape({
        testname: string().required(),
      })
    ),
  });

  return (
    <FormWrapper formMethods={formMethods}>
      <TextField
        name="testname"
        data-testid={dataTestId}
        Icon={Icon}
        error={error}
      />
    </FormWrapper>
  );
};

describe("<TextField />", () => {
  it("should load the component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TextField").should("exist");
    cy.findByTestId("TestForm.Button").click();
  });

  it("should load with custom test id", () => {
    cy.mount(<TestComponent dataTestId="Test.Text.Field" />);
    cy.findByTestId("Test.Text.Field").should("exist");
  });

  it("should load with Icon", () => {
    cy.mount(<TestComponent Icon={AccountCircle} />);
    cy.findByTestId("TextField.Icon").should("exist");
  });

  it("should display error", () => {
    cy.mount(<TestComponent error />);
    cy.findByTestId("TestForm.Button").click();
    cy.findByTestId("TextField.HelperText").should(
      "have.text",
      "testname is a required field"
    );
  });
});
