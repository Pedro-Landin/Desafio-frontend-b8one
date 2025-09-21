import bannerPromocao from "../../../assets/banner/bannerPromocao.jpeg";
import setaDireita from "../../../assets/setas/setaDireita.svg";
import setaEsquerda from "../../../assets/setas/setaEsquerda.svg";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../../data/data.json";

export default function Ofertas() {
  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        onClick={onClick}
        src={setaDireita}
        alt="Seta direita"
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        onClick={onClick}
        src={setaEsquerda}
        alt="Seta esquerda"
      />
    );
  }

  const slidesToShow =
    window.innerWidth < 480
      ? 1
      : window.innerWidth < 600
      ? 2
      : window.innerWidth < 1024
      ? 3
      : 4;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className={styles.bannerOfertas}>
        <img src={bannerPromocao} alt="Banner Promoção" />
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTitle}>
          <h2>Ofertas da Semana</h2>
        </div>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.photo}
                alt={item.title}
                className={styles.cardImage}
              />

              <div className={styles.cardInfo}>
                <div className={styles.cardInfo_titlePrice}>
                  <p className={styles.cardTitle}>{item.title}</p>
                  <p className={styles.cardPrice}>
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>

                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
