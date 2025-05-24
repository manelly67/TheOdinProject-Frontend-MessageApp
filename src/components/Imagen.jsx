const Imagen = (props) => {
  const { imgLargeMedium, imgSmall } = props;

  return (
    <>
      <picture style={{ width: "70%" }}>
        <source srcSet={imgLargeMedium} media="(min-width: 621px)" />

        <img
          loading="lazy"
          src={imgSmall}
          alt="pigeon carrying a mail sack"
          width="70%"
          height="auto"
        />
      </picture>
    </>
  );
};

export default Imagen;
