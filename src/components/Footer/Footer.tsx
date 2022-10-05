import { Grid } from '@mui/material'
import { Button } from '../Button/Button'
import { FooterContainer } from './styles'
import { useContextForm } from '../../contexts/FormContext'

type FooterProps = {
  showBack?: boolean
  hasEmptyFields?: boolean
  handleSubmit?: () => void
  hideSave?: boolean
}

export function Footer({
  showBack,
  hasEmptyFields,
  handleSubmit,
  hideSave,
}: FooterProps) {
  const { activeStep, setActiveStep } = useContextForm()

  return (
    <FooterContainer>
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{ flexDirection: { xs: 'column-reverse', md: 'unset' } }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: 'center', padding: '0 20px' }}
        >
          {showBack && (
            <Button
              variant="nobackground"
              text="Go Back"
              onClick={() => setActiveStep(activeStep - 1)}
            ></Button>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: 'center', padding: '0 20px' }}
        >
          {!hideSave && (
            <Button
              variant="default"
              text="Save And Continue"
              hasEmptyFields={hasEmptyFields}
              onClick={handleSubmit}
            ></Button>
          )}
        </Grid>
      </Grid>
    </FooterContainer>
  )
}
