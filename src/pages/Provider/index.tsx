import { Grid } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Footer } from "../Home/components/Footer/Footer";
import { ProviderForm } from "./components/ProviderForm/ProviderForm";

export function Provider ({ setActiveStep }) {
  const hasEmptyFields = true
  return (
    <>
      <Header title="Provider Information" description="Tell us about your practice."></Header>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12}>
          <ProviderForm></ProviderForm>
          <Footer showBack={true} goBack={() => setActiveStep(0)} hasEmptyFields={hasEmptyFields}></Footer>
        </Grid>
      </Grid>
    </>
  )
}