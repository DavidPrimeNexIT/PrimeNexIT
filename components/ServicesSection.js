"use client"; // Esto convierte el componente en un Client Component

import { useState } from 'react';

export default function ServicesSection() {
const [activeService, setActiveService] = useState('soporte-ti');

const showService = (serviceId) => {
setActiveService(serviceId);
};

return (
<section id="servicios" className="services-section">
    <h2>Our Services</h2>
    <div className="service-buttons">
    <button onClick={() => showService('soporte-ti')}>IT Support</button>
    <button onClick={() => showService('web')}>Web</button>
    <button onClick={() => showService('analisis-datos')}>Data Analysis</button>
    </div>

    <div id="soporte-ti" className="service-container" style={{ display: activeService === 'soporte-ti' ? 'flex' : 'none' }}>
    <div className="service-column">
        <h3>Digital Transformation</h3>
        <p>Implementation of advanced technological solutions that enable companies to modernize their processes...</p>
    </div>
    <div className="service-column">
        <h3>CRM and ERP Management with AI and Chatbots</h3>
        <p>Comprehensive management of CRM and ERP systems, optimizing their performance and functionality...</p>
    </div>
    <div className="service-column">
        <h3>Database Management (Redesign and Migration)</h3>
        <p>Specialized services in database redesign and migration, ensuring that the company's critical data...</p>
    </div>
    </div>

    <div id="web" className="service-container" style={{ display: activeService === 'web' ? 'flex' : 'none' }}>
    <div className="service-column">
        <h3>Website Development (Back-end, Front-end)</h3>
        <p>Development of robust and scalable websites, both frontend and backend, using the latest technologies...</p>
    </div>
    <div className="service-column">
        <h3>Database Creation</h3>
        <p>Creation of efficient and secure databases, designed to handle large volumes of information...</p>
    </div>
    <div className="service-column">
        <h3>Servers (Hosting)</h3>
        <p>High availability hosting services, with specialized technical support to ensure your website...</p>
    </div>
    </div>

    <div id="analisis-datos" className="service-container" style={{ display: activeService === 'analisis-datos' ? 'flex' : 'none' }}>
    <div className="service-column">
        <h3>Data Mining</h3>
        <p>Application of advanced data mining techniques to discover hidden patterns and trends...</p>
    </div>
    <div className="service-column">
        <h3>Dashboard Creation</h3>
        <p>Design and development of interactive dashboards that allow you to visualize key data...</p>
    </div>
    <div className="service-column">
        <h3>Business Intelligence</h3>
        <p>Business Intelligence solutions that transform data into actionable information...</p>
    </div>
    </div>
</section>
);
}
