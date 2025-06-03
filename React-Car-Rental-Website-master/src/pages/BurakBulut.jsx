import React from "react";
import BurakLogo from "../assets/all-images/burakgame/Burak.jpg";
import "../styles/burakbulut.css"
import CommonSection from "../components/UI/CommonSection";
import  Helmet  from "../components/Helmet/Helmet";



const Burak = () =>{
    return(
        <div className="burak-scroll">
            <Helmet title="Burak Bulut" />
            <CommonSection title="Burak Bulut"/>
            <center>
            <h1 style={{marginBottom:"5%", textDecoration:"underline"}}>Ekip Bilgisi</h1>

            <div className="burak-img">
                <img src={BurakLogo} alt="buraklogo" width="250" height="250" />
            </div>
            <div className="burak-info">
                <h1>Ad-Soyad: Burak Bulut</h1>
                <h3>Doğum Tarihi: 17/05/2007</h3>
                <h3>Okul: Hkmtal Lise Mezunu</h3>
                <h3 style={{marginRight:"-24%", marginTop:"-16.5%"}}>Hakkımda</h3>
                <h4>Merhaba Ben Burak Bulut, 2019 yılında "Hkmtal" mezunuyum. Bu sene <br /> 
                üniversite sınavına hazılanıyorum ilk hedefim: <b>bilgisayar programcılığı</b> <br /> ikinci hedefim: <b>bilgisayar mühendisliği 4 yıllık</b></h4>
                
            </div>
            </center>
        </div>
    );
};

export default Burak;