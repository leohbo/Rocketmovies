import {Container, Profile} from "./styles"

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                src="https://github.com/orodrigogo.png"
                alt="Foto do usuário"
                />
                
                <div>
                <strong>Mayk Brito</strong>
                <span>sair</span>
                
                </div>
            </Profile>
        </Container>
    );
}