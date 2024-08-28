// components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
    <header className="header">
        <div className="logo">
        <img src="/img/Group 38.png" alt="Logo de PrimeNex IT" />
        </div>
        <nav>
        <ul>
            <li><Link href="#inicio">Our Work</Link></li>
            <li><Link href="#servicios">Services</Link></li>
            <li><Link href="#quienes-somos">About Us</Link></li>
            <li><Link href="#contacto">Contact Us</Link></li>
        </ul>
        </nav>
    </header>
    );
}
