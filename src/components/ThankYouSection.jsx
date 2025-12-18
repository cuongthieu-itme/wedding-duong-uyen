import photo_07 from "../assets/images/image06.jpg";

const ThankYouSection = () => {
  return (
    <section id="thank-you-section">
      <div className="footer" data-aos="zoom-out-down" data-aos-once="false">
        <img src={photo_07} alt="" />
        <div className="footer-thanks">
          <p className="text_01">thankyou</p>
          <p className="text_02">Rất hân hạnh được đón tiếp!</p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
