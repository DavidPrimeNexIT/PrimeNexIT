import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="#inicio">
          <img src="/images/main-logo.png" alt="PrimeNex IT Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#inicio">Our Work</Link>
          </li>
          <li>
            <Link href="#servicios">Services</Link>
          </li>
          <li>
            <Link href="#quienes-somos">About Us</Link>
          </li>
          <li>
            <Link href="#contacto">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
