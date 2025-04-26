import {Container} from "./styles.js"

import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"
import {Header} from "../../components/Header"
import {Section} from "../../components/Section"
import {Tag} from "../../components/Tag"

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir filme"/>
      <Section title="Marcadores">
      <Tag title="Ficção Científica"/>
      <Tag title="Drama"/>
      <Tag title="Família">
      </Tag>


      </Section>
      <Button title="Voltar" />
    </Container>
  )
}