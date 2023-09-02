import styled from 'styled-components';

export const Button = styled.button`
  /* button */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.75rem 0.75rem 0.8125em;
gap: 10px;


/* violet */
background: #5222D0;
box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
border-radius: 0.375rem;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 1.25em;
display: flex;
align-items: center;
text-align: center;

/* text erica */
color: #DBFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`