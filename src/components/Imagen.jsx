import imgLargeMedium from "../assets/img/paloma_large_medium.jpg";
import imgSmall from "../assets/img/paloma_small.jpg";

const Imagen = () => {
  return (
    <>
      <picture style={{ width: "70%" }}>
        <source srcSet={imgLargeMedium} media="(min-width: 981px)" />
        <source
          srcSet={imgLargeMedium}
          media="(min-width:621px) and (max-width:980px)"
        />
        <img
          src={imgSmall}
          alt="pigeon carrying a mail sack"
          width="70%"
          height="80%"
        />
      </picture>
    </>
  );
};

export default Imagen;
