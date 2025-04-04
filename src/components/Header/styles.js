import styled from "styled-components";

export const Container = styled.header`
grid-area: header;

height: 11.6rem;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;

position: relative;
padding: 0 12.3rem;
`;

export const Brand = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   
> h1 {
font-size: 2.4rem;
color: ${({ theme }) => theme.COLORS.PINK};
}

`

export const Profile = styled.div`
display: flex;
align-items: center;

> img {

border-radius: 50%;
  width: 6.4rem;
  height: 6.4rem;
  border: none;

}

> div {

display: flex;
flex-direction: column;
margin-right: 0.9rem;
line-height: 1.8rem;

span {    

font-size: 1.4rem;
color: ${({theme}) => theme.COLORS.GRAY_100};

}

strong {

font-size: 1.4rem;
color: ${({theme}) => theme.COLORS.WHITE};

}


}


`;