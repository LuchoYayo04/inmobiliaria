import React from "react";
import styles from "@/styles/HomePage.module.css";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* Cabecera de la pagina */}
      <header className={styles.header}>
        <h1>Inmobiliaria</h1>
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
          Somos una empresa dedicada a entregarte la mejor opción para tu
          vivienda. Somos una empresa dedicada a entregarte la mejor opción para tu
          vivienda. Somos una empresa dedicada a entregarte la mejor opción para tu
          vivienda. 
        </p>
      </section>

      {/* Seccion de propiedades */}
      <section id="propiedades" className={styles.properties}>
        <h2>Propiedades disponibles</h2>
        {/* Lista de propiedades */}
        <div className={styles.properties__box}>
          <h3>Nombre de la propiedad</h3>
          <p>
            Descripcion breve de la propiedad. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.{" "}
          </p>
          <ul>
            <li>Precio: $XXX</li>
            <li>Ubicacion: Ciudad, País</li>
            <li>Habitaciones: X</li>
            <li>Baños: X</li>
          </ul>
          <a href="">Más información</a>
        </div>
      </section>

      {/* Sección de contacto */}
      <section id="contacto" className={styles.section__contact}>
        <h2>Contacto</h2>
        <p>¿Tienes dudas? Contáctanos</p>
        <form>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required placeholder="Hola, estoy interesado en una propiedad..."/>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* Pie de pagina */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Inmobiliaria. Todos los derechos reservados.</p>
      </footer>
    </React.Fragment>
  );
};

export default HomePage;
