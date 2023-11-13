import Link from "next/link";
import './Footer.scss'


export default function Footer(){

    return(
        <footer>
            <Link href={'/Integrantes'}> 
            <p>integrantes</p>
            </Link>
            
        </footer>
    );
}