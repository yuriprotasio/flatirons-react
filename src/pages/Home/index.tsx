import { Wizard } from "../../components/Wizard/Wizard";
import { Grid, Box } from '@mui/material';
import { GradientDiv } from './styles'
import { SignupForm } from "./components/SignupForm/SignupForm";
import { useState } from 'react'
import { Provider } from "../Provider";

export function Home () {
  const [activeStep, setActiveStep] = useState(0)

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return <SignupForm setActiveStep={setActiveStep}></SignupForm>
      case 1:
        return <Provider setActiveStep={setActiveStep} />
      case 2:
        return <div>Success</div>
      default:
        return <div>Not Found</div>
    }
  }

  return (
    <>
      <Grid container>
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <GradientDiv></GradientDiv>
        </Grid>
        <Grid item justifyContent="center" xs={12} md={6}>
          <Box sx={{margin: '40px 40px', width: { xs: '100%', md: '50%' }, marginLeft: 'auto', marginRight: 'auto'}}>
            <Wizard activeStep={activeStep} />
          </Box>
          {_renderStepContent(activeStep)}
        </Grid>
      </Grid>
    </>
  )
}