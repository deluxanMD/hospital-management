import {
  Avatar,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

type NumericCardsProps = {
  Icon: any;
  value: string;
  title: string;
};

const NumericCards = ({ Icon, value, title }: NumericCardsProps) => {
  const theme = useTheme();

  return (
    <Grid item xs={6} md={4} lg={2} data-testid="NumericCards">
      <Paper elevation={2} sx={{ p: 2 }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.light,
              width: 64,
              height: 64,
              borderRadius: 2,
            }}
            variant="rounded"
          >
            <Icon fontSize="large" />
          </Avatar>
          <Stack justifyContent="center">
            <Typography variant="h5">{value}</Typography>
            <Typography variant="body2" color="GrayText">
              {title}
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default NumericCards;
