import {Container, Profile, Brand} from "./styles"

export function Header(){
    return(
        <Container>
            <Brand>
            <h1>RocketMovies</h1>
            </Brand>
            <Profile>
            
            <div>
              <strong>Rodrigo Gonçalves</strong>
               <span>sair</span>
                </div>

                <img 
                src="https://github.com/orodrigogo.png"
                alt="Foto do usuário"/>
            </Profile>
        </Container>
    );
}