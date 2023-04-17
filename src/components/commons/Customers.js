import React from "react";
import image_don_julio from "../../assets/customers/don-julio.jpg";
import image_koch from "../../assets/customers/koch.jpg";
import image_lala from "../../assets/customers/lala.jpg";
import image_liconsa from "../../assets/customers/liconsa.jpg";
import image_marena from "../../assets/customers/marena.png";
import image_nestle from "../../assets/customers/nestle.png";
import image_siete_leguas from "../../assets/customers/siete-leguas.png";
import image_tequila_sauza from "../../assets/customers/tequila-sauza.jpg";
import image_tequila_supremo from "../../assets/customers/tequila-supremo.jpg";
import image_tequilas_finos from "../../assets/customers/tequilas-finos.png";
import CustomerBadge from "./CustomerBadge";

const customers = [
  {
    title: "Tequila Don Julio",
    image: image_don_julio,
    link: "https://www.donjulio.com/en-us",
  },
  {
    title: "Koch México",
    image: image_koch,
    link: "https://kochllc.com/our-brands/koch-mexico/",
  },
  {
    title: "Grupo Lala",
    image: image_lala,
    link: "https://www.lala.com.mx/",
  },
  {
    title: "Liconsa",
    image: image_liconsa,
    link: "https://www.gob.mx/liconsa",
  },
  {
    title: "Hotel Marena",
    image: image_marena,
    link: "https://www.booking.com/hotel/fr/marena.es.html?aid=311839&label=marena-SWHzAHfnSnvlLoc6W0kiXQS388444254130%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-185280216%3Alp1010079%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsG_n86exEUIw&sid=4d9b6e6a66255813a7846d17edfaf535&dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1681770555;srpvid=7ddc9e1dc3fa01c4;type=total;ucfs=1&#hotelTmpl",
  },
  {
    title: "Nestlé",
    image: image_nestle,
    link: "https://www.booking.com/hotel/fr/marena.es.html?aid=311839&label=marena-SWHzAHfnSnvlLoc6W0kiXQS388444254130%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-185280216%3Alp1010079%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsG_n86exEUIw&sid=4d9b6e6a66255813a7846d17edfaf535&dest_id=-1456928;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1681770555;srpvid=7ddc9e1dc3fa01c4;type=total;ucfs=1&#hotelTmpl",
  },
  {
    title: "Casa Siete Leguas",
    image: image_siete_leguas,
    link: "https://casasieteleguas.com/",
  },
  {
    title: "Casa Sauza",
    image: image_tequila_sauza,
    link: "https://www.casasauza.com/",
  },
  {
    title: "Supremo Tequila",
    image: image_tequila_supremo,
    link: "http://supremotequila.com/inicio.html",
  },
  {
    title: "Tequilas Finos",
    image: image_tequilas_finos,
    link: "https://www.mexbest.com/empresa-fabrica-de-tequilas-finos-937.html",
  },
];

const Customers = () => (
  <div className="bg-white py-8">
    <p className="text-center text-2xl font-bold text-blue-700 pb-8">
      Nuestros clientes
    </p>
    <div className="flex justify-around px-12 flex-wrap">
      {customers.map((customer) => (
        <CustomerBadge data={customer} />
      ))}
    </div>
  </div>
);

export default Customers;
