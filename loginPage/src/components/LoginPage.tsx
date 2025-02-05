import { Button, Container, Grid2 as Grid, TextField } from "@mui/material";

const LoginPage = () => {
    // const FormGrid = styled(Grid)(() => ({
    //     display: "flex",
    //     flexDirection: "column",
    //   }));
    console.log(5)
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid size={{xs: 12, md: 6}} >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Button>Login</Button>
    </Container>
  );
};

export default LoginPage;
