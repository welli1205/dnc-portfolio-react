import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.png'

function Projects() {
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
                img={lpdnc}
                title="LP- DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma landing page para o lançamento da formação em tecnologia"
                repo=""
                site=""
            ></Card>
            <Card
                img={portifolio}
                title="Portifolio react"
                tech="React"
                description="..."
                repo=""
                site=""
            ></Card>

            <ButtonB text='Acesse meu repositório ' link='https://github.com/welli1205'></ButtonB>
        </div>
    )
}
export default Projects