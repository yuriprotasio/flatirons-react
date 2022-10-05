import { Grid } from '@mui/material'
import { Button } from '../Button/Button'
import { FooterContainer } from './styles'
import { useContextForm } from '../../contexts/FormContext'

type FooterProps = {
  showBack?: boolean
  hasEmptyFields?: boolean
  onClick?: () => void
  hideSave?: boolean
}

export function Footer({
  showBack,
  hasEmptyFields,
  onClick,
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
              dataTestId="goback-id"
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
              dataTestId="save-id"
              variant="default"
              text="Save And Continue"
              hasEmptyFields={hasEmptyFields}
              onClick={onClick}
            ></Button>
          )}
        </Grid>
      </Grid>
    </FooterContainer>
  )
}
