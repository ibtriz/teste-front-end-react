import styled from 'styled-components';

export const Container = styled.div`
@media(max-width: 500px) {
    position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 4;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(77,77,77,0.7203256302521008) 37%);
}`

export const Menu = styled.div`
@media(max-width: 500px) {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20rem;
font-size: 20px;

}
@media(min-width: 500px) {
display:none
}
`