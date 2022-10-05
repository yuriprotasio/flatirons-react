import { FormContainer } from './styles'
import { useForm } from 'react-hook-form'
import {
  Grid,
  Box,
  Select,
  OutlinedInput,
  MenuItem,
  Chip,
  TextField,
  FormControl,
  InputLabel,
} from '@mui/material'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { SelectChangeEvent } from '@mui/material/Select'
import { Footer } from '../Footer/Footer'
import { Error } from '../Error/Error'
import { phone } from 'phone'
import { useContextForm } from '../../contexts/FormContext'
import { Header } from '../Header/Header'
import { SignupFormProps } from './types'

export function SignupForm() {
  const { setActiveStep, form, setForm } = useContextForm()
  const {
    register,
    getValues,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({ defaultValues: form })
  const options = ['English', 'Spanish', 'French', 'Chinese', 'Portuguese']
  const [languages, setLanguages] = useState<string[]>(form.languages || [])
  const [hasEmptyFields, setHasEmptyFields] = useState(() => hasEmpty())
  const theme = useTheme()

  function checkHasEmptyFields() {
    setHasEmptyFields(hasEmpty())
  }

  function hasEmpty() {
    const { firstName, languages, lastName, phoneNumber } = getValues()
    const hasEmptyFields = !firstName || !languages || !lastName || !phoneNumber
    return hasEmptyFields
  }

  const handleSelect = (event: SelectChangeEvent<typeof languages>) => {
    const {
      target: { value },
    } = event
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }

  function onSubmit(data: SignupFormProps) {
    setForm(data)
    setActiveStep(1)
  }

  const handleLanguageDelete = (event: any, value: any) => {
    event.preventDefault()
    const indexFound = languages.findIndex((language) => language === value)
    languages.splice(indexFound, 1)
    setLanguages([...languages])
  }

  function isValidPhoneNumber(value: any) {
    const { isValid } = phone(value)
    return isValid
  }

  function isValidLanguages() {
    const { languages } = getValues()
    return languages && languages.length > 0
  }

  return (
    <>
      <Header
        title="Personal Information"
        description="Tell us about yourself."
      ></Header>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent={'center'}>
          <Grid item xs={10} md={8}>
            <FormControl
              sx={{
                width: '100%',
                '& .MuiTextField-root': { margin: '20px 0 6px 0' },
              }}
            >
              <TextField
                {...register('firstName', {
                  required: true,
                  onChange: () => checkHasEmptyFields(),
                  onBlur: () => trigger('firstName'),
                })}
                label="First Name"
              />
              {errors.firstName && <Error></Error>}
              <TextField
                {...register('lastName', {
                  required: true,
                  onChange: () => checkHasEmptyFields(),
                  onBlur: () => trigger('lastName'),
                })}
                label="Last Name"
              />
              {errors.lastName && <Error></Error>}

              <FormControl sx={{ width: '100%' }}>
                <InputLabel sx={{ marginTop: '18px' }}>Language</InputLabel>
                <Select
                  {...register('languages', {
                    required: true,
                    onChange: () => checkHasEmptyFields(),
                    validate: isValidLanguages,
                    onBlur: () => trigger('languages'),
                  })}
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={languages}
                  onChange={handleSelect}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Language" />
                  }
                  sx={{
                    width: '100%',
                    height: '48px',
                    marginBottom: '6px',
                    marginTop: '20px',
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          onDelete={(event) => {
                            handleLanguageDelete(event, value)
                          }}
                          deleteIcon={
                            <span
                              style={{
                                color: theme.colors['red-800'],
                                fontWeight: 500,
                                fontSize: '16px',
                              }}
                            >
                              x
                            </span>
                          }
                          sx={{
                            zIndex: 9999,
                            background: theme.colors['red-100'],
                            padding: '4px 8px 4px 8px',
                            borderRadius: '12px',
                            marginRight: '5px',
                            fontWeight: '700',
                            fontSize: '12px',
                            color: theme.colors['red-800'],
                          }}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {options.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.languages && <Error></Error>}
              <TextField
                {...register('phoneNumber', {
                  required: true,
                  validate: isValidPhoneNumber,
                  onChange: () => checkHasEmptyFields(),
                  onBlur: () => trigger('phoneNumber'),
                })}
                label="Phone Number"
              />
              {errors.phoneNumber && <Error></Error>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Footer
              hasEmptyFields={hasEmptyFields}
              handleSubmit={handleSubmit(onSubmit)}
            ></Footer>
          </Grid>
        </Grid>
      </FormContainer>
    </>
  )
}
