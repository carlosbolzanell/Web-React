import './Formulario.css'
import CampoTexto from '../CampoTexto'

export default function Formulario (){
    return(
        <section className='forms'>
            <form>
                <h2>Preencha os seus dados:</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Sobrenome" placeholder="Digite seu sobrenome"/>
            </form>
        </section>
    )
}