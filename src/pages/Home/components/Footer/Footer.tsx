import { Box, Grid } from "@mui/material";
import { Button } from "../../../../components/Button/Button";
import { FooterContainer } from "./styles";

export function Footer ({ showBack, hasEmptyFields, handleSubmit, goBack }) {
  return (
    <FooterContainer>
      <Grid container item xs={12} md={6} sx={{flexDirection: {xs: 'column-reverse', md: 'unset'}}}>
        <Grid item xs={12} md={6} sx={{textAlign: 'center', padding: '0 20px'}}>
            {showBack && <Button variant="nobackground" text="Go Back" method={goBack}></Button>}
        </Grid>
        <Grid item xs={12} md={6} sx={{textAlign: 'center', padding: '0 20px'}}>
          <Button variant="default" text="Save And Continue" hasEmptyFields={hasEmptyFields} method={handleSubmit}></Button>
        </Grid>
      </Grid>
    </FooterContainer>
  )
}