import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => {
  // İkon genişliğini belirlemek için bir stil nesnesi oluştur
  // İkon stilini belirle
  const iconStyle = item.id === 2 || item.id === 5
    ? { width: '35px', height: 'auto', marginTop: '20px' } // Genişlik ve aşağı boşluk
    : { width: 'auto' };

  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__item">
        <span className="mb-3 d-inline-block" style={{color:'#f9a826'}}>
          {typeof item.icon === 'string' ? (
            <i className={item.icon} />
          ) : (
            React.cloneElement(item.icon, { style: iconStyle }) // İkon bileşenine stil ekle
          )}
        </span>

        <h6 className="section__title">{item.title}</h6>
        <p className="section__description">{item.desc}</p>
      </div>
    </Col>
  );
};

export default ServicesList;
