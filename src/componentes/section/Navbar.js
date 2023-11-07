import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/wellingtonfernando7547/'><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href='https://www.linkedin.com/in/wellington-ferreira-b1a4831a5/'><FaLinkedin size={30}></FaLinkedin></a></li>
                <li><a href='https://github.com/welli1205'><FaGithub size={30}></FaGithub></a></li>
            </ul>
        </div>
    )
}
export default Navbar