import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'


function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Wellington Fernando!', 'Desenvolvedor front End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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