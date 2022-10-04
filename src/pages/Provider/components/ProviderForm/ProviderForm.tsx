import { FormContainer } from "../../../Home/components/SignupForm/styles";
import { useForm } from "react-hook-form";
import { Grid, TextField, FormControl } from '@mui/material';
import { Footer } from "../../../Home/components/Footer/Footer";

export function ProviderForm () {
  const { register } = useForm();

  return (
    <>    
      <FormContainer>
        <Grid container justifyContent={'center'}>
          <Grid item xs={11} md={8}>
            <FormControl sx={{ width: '100%', '& .MuiTextField-root': { margin: '20px 0 6px 0' }}}>
              <TextField {...register("insurances")} label="Insurances" />

              <TextField {...register("specialty")} label="Specialty" />

              <TextField {...register("aboutYourself")} label="Tell us about yourself" multiline rows={3}></TextField>

            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Footer></Footer>
          </Grid>
        </Grid>
      </FormContainer>
    </>
  )
}