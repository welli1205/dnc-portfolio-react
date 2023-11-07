import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/wellingtonfernando7547/'><FaInstagram size={30}></FaInstagram></a></li>
                <li><a href='https://www.linkedin.com/in/wellington-ferreira-b1a4831a5/'><FaLinkedin size={30}></FaLinkedin></a></li>
                <li><a href='https://github.com/welli1205'><FaGithub size={30}></FaGithub></a></li>
            </ul>
            <p><a href="https://www.google.com/intl/pt-BR/gmail/about/">wellington1205fernando@gmail.com</a></p>
            <p>Wellington ferreira ₢ 2023 </p>
        </div>
    )
}
export default Footer