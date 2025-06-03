import { RiJavascriptLine } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";


const serviceData = [
  {
    id: 1,
    title: "React",
    icon: "ri-reactjs-fill",
    desc: "React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Bileşen tabanlı yapısı sayesinde, dinamik ve etkileşimli web uygulamaları geliştirmeyi kolaylaştırır.",
  },

  {
    id: 2,
    title: "Javascript",
    icon: <RiJavascriptLine  />,
    desc: "JavaScript, web sayfalarına etkileşim ve dinamik içerik ekleyen popüler bir programlama dilidir. Hem istemci hem de sunucu tarafında kullanılabilir, modern web geliştirmede temel bir rol oynar.",
  },

  {
    id: 3,
    title: "Css (Cascading Style Sheets)",
    icon: "ri-css3-line",
    desc: "CSS (Cascading Style Sheets), web sayfalarının stilini ve düzenini belirlemek için kullanılan bir dilidir. HTML ile birlikte çalışarak, sayfanın görünümünü özelleştirmeye olanak tanır.",
  },

  {
    id: 4,
    title: "Html (HyperText Markup Language)",
    icon: "ri-html5-line",
    desc: "HTML, web sayfalarının yapısını oluşturmak için kullanılan temel işaretleme dilidir. İçeriği başlıklar, paragraflar ve görsellerle düzenler.",
  },

  {
    id: 5,
    title: "Resim (İmage)",
    icon: <FaRegImage />,
    desc: "Resim, görsel içerik sunmak için kullanılan dijital medya dosyasıdır. Web sayfalarında dikkat çekmek ve mesaj iletmek için sıkça kullanılır.",
  },
];

export default serviceData;
