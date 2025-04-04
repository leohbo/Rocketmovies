import styled from 'styled-components'

export const Container = styled.button`

width: 100%;
background-color: ${({theme}) => theme.COLORS.PINK};
color: ${({theme}) => theme.COLORS.BACKGROUND_800};

height: 5.6rem;
padding: 0 1.6rem;
border: 0;
margin-top: 2.4rem;
border-radius: 10px;
font-weight: 500;

&:disabled {
  opacity: 0.5;

}

`