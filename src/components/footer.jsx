import Link from "next/link";
import './footer.scss'


export default function Footer(){

    return(
        <footer>
            <Link href={'/Integrantes'}> 
            <p>integrantes</p>
            </Link>
            
        </footer>
    );
}