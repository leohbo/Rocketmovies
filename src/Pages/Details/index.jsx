import {Container} from "./styles.js"

import {Button} from "../../components/Button"

export function Details() {

return(
  <Container>
<h1>Hello World!</h1>
<span>Leonardo Oliveira</span>
<Button title="Entrar" loading/>
<Button title="Cadastrar"/>
<Button title="Voltar"/>
  </Container>

  )
}