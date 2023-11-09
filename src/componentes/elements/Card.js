import styles from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'


function Card({ img, title, tech, description, repo, site }) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }
    function infoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={infoOff} className={styles.card}>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt='ERRO'></img>
            </a>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse nosso repositório' link={repo}></ButtonB>
                </section>
            )}




        </div>
    )
}
export default Card