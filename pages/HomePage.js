import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* Cabecera de la pagina */}
      <header>
        <h1>Tu Inmobiliaria</h1>
        <nav>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Propiedades</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Seccion de bienvenida a la pagina */}
      <section>
        <h2>¡Bienvenido a la inmobiliaria que estabas buscando!</h2>
        <p>
          Somos una empresa dedicada a entregarte la mejor opción para tu
          vivienda
        </p>
      </section>

      {/* Seccion de propiedades */}
      <section>
        <h2>Propiedades disponibles</h2>
        {/* Lista de propiedades */}
        <div>
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
      <section>
        <h2>Contacto</h2>
        <p>¿Tienes dudas? Contáctanos</p>
        <form>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
