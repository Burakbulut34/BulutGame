import React, { useState } from 'react';
import  Helmet  from '../components/Helmet/Helmet';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import "../styles/gamecnt.css"

const ContactForm = () => {
  const [formDataText, setFormDataText] = useState({
    Ad: '',
    Email: '',
    gameMode: '',
    KaçKişilik: '',
    Mesaj: '',
  });

  const handleChangeText = (event) => {
    const { name, value } = event.target;
    setFormDataText((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('Ad', formDataText.Ad);
    data.append('Email', formDataText.Email);
    data.append('gameMode', formDataText.gameMode);
    data.append('KaçKişilik', formDataText.KaçKişilik);
    data.append('Mesaj', formDataText.Mesaj);

    try {
      const response = await fetch('https://formcarry.com/s/SJ-52yU6er7', {
        method: 'POST',
        body: data,
      });
      
      if (response.ok) {
        setFormDataText({
          Ad: '',
          Email: '',
          gameMode: '',
          KaçKişilik: '',
          Mesaj: '',
        });
        alert('Form başarıyla gönderildi!');
      } else {
        const errorText = await response.text();
        console.error('Form gönderilirken hata oluştu:', response.status, errorText);
        alert(`Form gönderilirken hata oluştu: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Fetch hatası:', error);
      alert(`Form gönderilirken hata oluştu: ${error.message}`);
    }
  };

  // Oyun modlarını tanımlama
  const gameModes = [
    { value: "", label: "Seçiniz" },
    { value: "1", label: "Hayatta Kalma" },
    { value: "2", label: "Strateji" },
    { value: "3", label: "Simülasyon" },
    { value: "4", label: "Aksiyon" },
    { value: "5", label: "Spor" },
    { value: "6", label: "Ryo" },
    { value: "7", label: "Bulmaca" },
    { value: "8", label: "Yarış" },
    { value: "9", label: "Yaş" },
    { value: "10", label: "Kart" },
    { value: "11", label: "Macera" },
    { value: "12", label: "Basit Eğlence" },
    { value: "13", label: "Aile" },
    { value: "14", label: "Masa" },
  ];

  return (
    <>
      <Helmet title="Oyun İletişim"/>
      <CommonSection title="Oyun İletişim" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h1 className="fw-bold mb-4">İletişime Geçin</h1>
              <h5 className='fw-bold'>Oyunlarınızı paylaşmak mı istiyorsunuz?</h5>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup className="contact__form">
                  <Input
                    type="text"
                    name="Ad"
                    placeholder="Ad"
                    value={formDataText.Ad}
                    onChange={handleChangeText}
                    required
                    className="form__data"
                  />
                </FormGroup>

                <FormGroup className="contact__form">
                  <Input
                    type="email"
                    name="Email"
                    placeholder="E-posta"
                    value={formDataText.Email}
                    onChange={handleChangeText}
                    required
                    className="form__data"
                  />
                </FormGroup>

                <FormGroup className="contact__form">
      <label htmlFor="gameMode" className="fw-bold mb-2 d-block">
        Oyun Modu 
      </label>
      <Input
        type="select"
        name="gameMode"
        id="gameMode"
        value={formDataText.gameMode}
        onChange={handleChangeText}
        required
        className="form__data"
      >
        {gameModes.map((mode) => (
          <option key={mode.value} value={mode.label}>
            {mode.label}
          </option>
        ))}
      </Input>
    </FormGroup>

                <FormGroup className="contact__form">
                  <label htmlFor="gamePlayers" className="fw-bold mb-2 d-block">
                    Oyun Kaç Kişilik?
                  </label>
                  <Input
                    type="select"
                    name="KaçKişilik"
                    id="gamePlayers"
                    value={formDataText.KaçKişilik}
                    onChange={handleChangeText}
                    required
                    className="form__data"
                  >
                    <option value="">Seçiniz</option>
                    <option value="1">1 Kişilik</option>
                    <option value="2">2 Kişilik</option>
                    <option value="3">3 Kişilik</option>
                    <option value="4plus">4+ Kişilik</option>
                  </Input>
                </FormGroup>

                <FormGroup className="contact__form">
                  <textarea
                    name="Mesaj"
                    rows="7"
                    cols="102"
                    placeholder="Mesaj..."
                    className="textarea"
                    value={formDataText.Mesaj}
                    onChange={handleChangeText}
                    required
                    
                  ></textarea>
                </FormGroup>

                

                <button className="contact__btn" type="submit">
                  Başvuru Gönder
                </button>
              </form>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
