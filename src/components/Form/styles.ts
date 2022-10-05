import styled, { css } from 'styled-components'

export const Container = styled.div``

export const FormContainer = styled.form`
  ${({ theme }) => css`
    width: 100%;
    font-family: ${theme.font.name.primary};
    margin-bottom: 50px;

    label {
      font-size: 15px;
    }

    input {
      border-radius: 4px;
      width: 100%;
      padding: 13px;
    }
    `
  }
`
