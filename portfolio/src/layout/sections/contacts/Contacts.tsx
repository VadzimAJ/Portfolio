import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Contacts = () => {
  return(
      <StylesContacts id="contact">
        <Container>
          <SectionTitle>Contacts</SectionTitle>

          <StyledForm>
            <Field placeholder='example'/>
            <Field placeholder='value'/>
            <Field placeholder='hi, i will ...' as={"textarea"}/>
            <Button type = {"submit"}>Submit</Button>
          </StyledForm>
        </Container>
      </StylesContacts>
    

  );
};

const StylesContacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  
`
const StyledForm = styled.form`
  max-width: 33.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;


  textarea {
    resize: none;
    height: 10.3125em;
  }

  outline:focus{
    color: ${theme.colors.secondaryBgLgt};
  }

  ${Button}{
    margin-top: -12px;
  }
`
const Field = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.9375em 1.125em 0.9375em 1.125em;
  
  border-radius: 6px;
  border: 1px solid #534084;

  color: ${theme.colors.fontAccentLgt};
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &::placeholder{
    color: ${theme.colors.placeholderLgt};
    text-transform: capitalize;
    font-size: 0.875em;
  }

  &:focus-visible{
    outline: 0.125em solid var(--violet, #5222D0);
  }

  
`