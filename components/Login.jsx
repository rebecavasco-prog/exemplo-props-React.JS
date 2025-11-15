import Label from "./Label.jsx"
import Labelln from "./Labelln.jsx"
import InputText from "./InputText.jsx"
import Button from "./Button.jsx"

export default function Login() {
  return (
    <>
      <Labelln texto="Login" />

      <Label texto="Usuário: " />
      <InputText placeholder="user..." /> <br />

      <Label texto="Senha: " />
      <InputText placeholder="password..." /> <br />

      <Button valor="Logar" />
    </>
  )
}
