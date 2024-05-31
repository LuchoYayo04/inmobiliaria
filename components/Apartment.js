import React from "react";
import styles from "@/styles/components/Apartment.module.css";

const Apartment = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((property) => (
        <div key={property._id} className={styles.properties__box}>
           <img
            src={`http://localhost:8080/${property.filename}`}
            alt={property.nameApartment}
            className={styles.property__image}
          />
          <h3>{property.nameApartment}</h3>
          <p>{property.description}</p>
          <ul>
            <li><span>Precio:</span> ${property.price}</li>
            <li><span>Ubicación:</span> {property.location}</li>
            <li><span>Habitaciones:</span> {property.bedrooms}</li>
            <li><span>Baños:</span> {property.bathrooms}</li>
          </ul>
         
          <a href="#">Más información</a>
        </div>
      ))}
    </div>
  );
};

export default Apartment;
