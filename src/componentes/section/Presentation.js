import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
function Presentation() {
    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Wellington Ferreira</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
                Aliquam venenatis pretium eros ut blandit. Fusce tellus mi,<br></br>
                blandit nec quam vitae, molestie lacinia risus. Ut ullamcorper<br></br>
                ultricies magna, nec congue sem rhoncus sed. Etiam feugiat<br></br>
                pellentesque ante vitae pellentesque.
            </p>
            <ButtonA link='https://github.com/welli1205' text='Conecte-se comigo!'></ButtonA>

        </div>
    )
}
export default Presentation