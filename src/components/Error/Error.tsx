import { ErrorContainer } from "./styles";

export function Error ({ text = 'This field is required.' }) {
  return (
    <ErrorContainer>{text}</ErrorContainer>
  )
}