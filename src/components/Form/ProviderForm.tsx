import { FormContainer } from './styles'
import { useForm } from 'react-hook-form'
import { Grid, TextField, FormControl } from '@mui/material'
import { Footer } from '../Footer/Footer'
import { useState } from 'react'
import { useContextForm } from '../../contexts/FormContext'
import { Header } from '../Header/Header'
import { ProviderFormProps } from './types'

export function ProviderForm() {
  const { providerForm, setProviderForm, setActiveStep } = useContextForm()
  const { register, getValues, handleSubmit } = useForm({
    defaultValues: providerForm,
  })

  const [hasEmptyFields, setHasEmptyFields] = useState(() => hasEmpty())

  function checkHasEmptyFields() {
    setHasEmptyFields(hasEmpty())
  }

  function hasEmpty() {
    const { insurances, specialty, aboutYourself } = getValues()
    const hasEmptyFields = !insurances || !specialty || !aboutYourself
    return hasEmptyFields
  }

  function onSubmit(data: ProviderFormProps) {
    setProviderForm(data)
    setActiveStep(2)
  }

  return (
    <>
      <Header
        title="Provider Information"
        description="Tell us about your practice."
      ></Header>
      <Grid data-testid="provider-formid" container justifyContent={'center'}>
        <Grid item xs={12}>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent={'center'}>
              <Grid item xs={11} md={8}>
                <FormControl
                  sx={{
                    width: '100%',
                    '& .MuiTextField-root': { margin: '20px 0 6px 0' },
                  }}
                >
                  <TextField
                    {...register('insurances', {
                      onChange: () => checkHasEmptyFields(),
                    })}
                    label="Insurances"
                  />

                  <TextField
                    {...register('specialty', {
                      onChange: () => checkHasEmptyFields(),
                    })}
                    label="Specialty"
                  />

                  <TextField
                    {...register('aboutYourself', {
                      onChange: () => checkHasEmptyFields(),
                    })}
                    label="Tell us about yourself"
                    multiline
                    rows={3}
                  ></TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Footer
                  showBack={true}
                  hasEmptyFields={hasEmptyFields}
                  onClick={handleSubmit(onSubmit)}
                ></Footer>
              </Grid>
            </Grid>
          </FormContainer>
        </Grid>
      </Grid>
    </>
  )
}
