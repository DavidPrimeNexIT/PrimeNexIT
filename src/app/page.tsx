import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesSection from '../../components/ServicesSection';
import Carousel from '../../components/Carousel';
import AboutUs from '../../components/AboutUs';
import ContactForm from '../../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>PrimeNex IT</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>
      <div className="background-animation">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>
      <Header />
      <main>
        <section id="inicio" className="contenedor">
          <h1>PrimeNex IT</h1>
          <p>
            PrimeNex IT stands out by delivering cutting-edge technological solutions tailored 
            to the modern market's most demanding needs. Our team of dedicated and skilled professionals
            ensures every project is executed with precision, dedication, and an unwavering focus on excellence. 
            We specialize in a broad range of technological services, from designing and developing 
            embedded systems that combine hardware and software for efficient, customized solutions to 
            creating intuitive and appealing user interfaces (UX/UI) that enhance user experience. 
            In web development, both backend and frontend, we use the latest technologies and best 
            practices to build robust, secure, and scalable platforms that adapt to your business's growth 
            and changing demands. Additionally, we offer comprehensive support for database and CRM system 
            maintenance, ensuring your technological infrastructure remains operational, efficient, and 
            optimized at all times.
          </p>
          <Carousel />

        </section>
        <ServicesSection />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
