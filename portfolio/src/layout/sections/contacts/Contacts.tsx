import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contacts = () => {
  return(
    <StylesContacts>
        <SectionTitle>Contacts</SectionTitle>

      <StyledForm>
        <Field placeholder='name'/>
        <Field placeholder='subject'/>
        <Field placeholder='message' as={"textarea"}/>
        <Button type = {"submit"}>Send message</Button>
      </StyledForm>
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
  max-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`
const Field = styled.input`
  
`