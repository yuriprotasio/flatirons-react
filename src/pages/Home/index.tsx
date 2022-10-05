import { Wizard } from '../../components/Wizard/Wizard'
import { Grid, Box } from '@mui/material'
import { GradientBackground } from './styles'
import { Form } from '../../components/Form/Form'
import { useContextForm } from '../../contexts/FormContext'

export function Home() {
  const { activeStep } = useContextForm()

  return (
    <>
      <Grid container>
        <Grid item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <GradientBackground></GradientBackground>
        </Grid>
        <Grid item justifyContent="center" xs={12} md={6}>
          <Box
            sx={{
              margin: '40px 40px',
              width: { xs: '100%', md: '50%' },
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Wizard activeStep={activeStep} />
          </Box>
          <Form></Form>
        </Grid>
      </Grid>
    </>
  )
}
