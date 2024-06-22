import { Box, Grid, Typography } from "@mui/material";
import PageWrapper from "components/page-wrapper/page-wrapper.component";
import NumericCards from "./numeric-cards/numeric-cards.component";
import {
  CalendarMonth,
  ElectricCar,
  LocalHospital,
  PeopleAlt,
  RequestQuote,
  Vaccines,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <PageWrapper data-testid="Dashboard.Container">
      <Typography variant="h5">Dashboard</Typography>
      <Box py={1} mt={1}>
        <Grid container spacing={2}>
          <NumericCards Icon={LocalHospital} value="558" title="Patients" />
          <NumericCards Icon={RequestQuote} value="$1234" title="Avg.Cost" />
          <NumericCards Icon={PeopleAlt} value="112" title="Staffs" />
          <NumericCards Icon={ElectricCar} value="16" title="Vehicles" />
          <NumericCards Icon={CalendarMonth} value="220" title="Appointments" />
          <NumericCards Icon={Vaccines} value="10" title="Operations" />
        </Grid>
      </Box>
    </PageWrapper>
  );
};

export default Dashboard;
