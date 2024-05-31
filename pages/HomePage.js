import "dotenv/config";
import React, { useState, useEffect } from "react";
import styles from "@/styles/HomePage.module.css";
import axios from "axios";
import Apartment from "@/components/Apartment";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const HomePage = () => {
  const [data, setData] = useState([]);

  const URL_BD = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${URL_BD}/api/apartments`);
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener propiedades:", error);
      }
    };

    fetchProperties();
  }, []);

  console.log(data);

  return (
    <React.Fragment>
      <div className={styles.container}>
        {/* Cabecera de la pagina */}

        <header className={styles.header}>
          <h1>
            <a href="/HomePage">Inmobiliaria</a>
          </h1>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#propiedades">Propiedades</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Seccion de bienvenida a la pagina */}
        <section id="inicio" className={styles.inicio}>
          <h2>¡Bienvenido a la inmobiliaria que estabas buscando!</h2>
          <p>
            Esto es Inmobiliaria, donde convertimos tus sueños de hogar en
            realidad. Descubre las mejores opciones para tu vivienda con
            nosotros, expertos en encontrar lo que realmente necesitas. Explora
            nuestras propiedades cuidadosamente seleccionadas y déjate guiar
            hacia el hogar perfecto para ti y tu familia.
          </p>
        </section>

        {/* Seccion de propiedades */}
        <section id="propiedades" className={styles.properties}>
          <h2>Propiedades disponibles</h2>
          {/* Lista de propiedades */}
          <div>
            <Apartment data={data} />
          </div>
        </section>

        {/* Sección de contacto */}
        <section id="contacto" className={styles.contact}>
          <h2>Contacto</h2>
          <p>¿Tienes dudas? Contáctanos</p>
          <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <label for="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Hola, estoy interesado en una propiedad..."
            />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>

      {/* Pie de pagina */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Inmobiliaria. Todos los derechos reservados.</p>
        <div className={styles.contactInfo}>
          <div>
            <h4><FaWhatsapp /></h4>
            <a href="tel:+123456789">+569 94259719</a>
          </div>
          <div>
            <h4><FaInstagram/></h4>
            <a href="#">InmobiGram</a>
          </div>
          <div>
            <h4>Dirección:</h4>
            <p>Calle, Ciudad</p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default HomePage;
