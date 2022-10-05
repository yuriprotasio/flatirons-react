import { Stepper, Step, StepLabel } from '@mui/material'
import { WizardIcon } from './styles'
import { useTheme } from 'styled-components'
import { useContextForm } from '../../contexts/FormContext'

export function Wizard() {
  const theme = useTheme()
  const { activeStep } = useContextForm()
  const steps: string[] = ['Personal Info', 'Provider Info', 'Contact Info']

  return (
    <Stepper nonLinear activeStep={activeStep} alternativeLabel>
      {steps.map((label, index) => {
        return (
          <Step
            key={label}
            sx={{
              '& .MuiStepConnector-root': {
                left: 'calc(-50% + 11px)',
                right: 'calc(50% + 12px)',
              },
              '& .MuiStepConnector-line': {
                borderTopWidth: '2px',
                borderColor: theme.colors['gray-100'],
              },
            }}
          >
            <StepLabel
              sx={{
                '& .MuiStepLabel-alternativeLabel': {
                  fontFamily: 'Nunito Sans !important',
                  fontWeight: '700 !important',
                  marginTop: '2px !important',
                  color: `${theme.colors['gray-400']} !important`,
                },
                '& .Mui-active': {
                  color: `${theme.colors['red-300']} !important`,
                },
              }}
              icon={
                <WizardIcon isActive={activeStep >= index}>
                  <span>{index + 1}</span>
                </WizardIcon>
              }
            >
              {label}
            </StepLabel>
          </Step>
        )
      })}
    </Stepper>
  )
}
