import image01 from "../assets/images/image01.jpg";
import icon from "../assets/images/icon.png";
import chu_hy from "../assets/images/chu_hy.png";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-invitation" data-aos="fade-in" data-aos-once="false">Thiệp mời</div>

            <div className="hero-couple-name" data-aos="fade-up" data-aos-once="false">
              Lưu Tiền <span>&</span> Trần Phương
            </div>

            <div className="hero-info">
              <img src={chu_hy} alt="" className="hero-logo" />
              <img src={icon} alt="" className="hero-icon-left" />
              <img src={icon} alt="" className="hero-icon-right" />

              <div className="hero-time" data-aos="fade-right" data-aos-once="false">
                <h3>Thứ 7 - 11H00</h3>
                <h5>27.12.2025</h5>
              </div>
            </div>

            <div className="hero-image" data-aos="zoom-in" data-aos-once="false">
              <img src={image01} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
