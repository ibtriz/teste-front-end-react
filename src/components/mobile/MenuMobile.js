import { Container } from '../../styles/Mobilecontainer';
import { Menu } from '../../styles/Mobilecontainer';
import { Icon } from '@iconify/react';

export function MenuMobile({menuIsVisible, setMenuIsVisible }){
    return(
        <Container> 
<Icon onClick={() => setMenuIsVisible(false)} icon="eva:close-fill" width="45"  style={{
    position: 'absolute', top:'1rem', left:'1rem'
  }}/>
<Menu>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#tabela">Tabela</a>
        <a href="#faleconosco">Fale Conosco</a>
    </Menu>
        </Container>
    ); 
}