import styles from './Card.module.css'
import ButtonB from './ButtonB'


function Card({ img, title, tech, description, repo, site }) {
    return (
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt='ERRO'></img>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse nosso repositório' link={repo}></ButtonB>
            </section>
        </div>
    )
}
export default Card