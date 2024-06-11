import { Box } from "@mui/material";
import { ReactNode } from "react";

type PageWrapperProps = {
  "data-testid": string;
  children: ReactNode;
};

const PageWrapper = ({
  "data-testid": dataTestId,
  children,
}: PageWrapperProps) => {
  return (
    <Box data-testid={dataTestId} mt={12} px={2}>
      {children}
    </Box>
  );
};

export default PageWrapper;
