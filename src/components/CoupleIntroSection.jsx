import header from "../assets/images/header.png";
import background from "../assets/images/background.jpeg";

const CoupleIntroSection = () => {
  return (
    <section id="couple-intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={header} className="header" />
            <div className="family-info">
              <div
                className="parent-section"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                <div className="title">Nhà Trai</div>
                <div className="name">Ông: Thiều Văn Vinh</div>
                <div className="name">Bà: Thiều Văn Vinh</div>
                <div className="address">Xã Văn Lý, Huyện Lý Nhân, Tỉnh Hà Nam</div>
              </div>
              <div
                className="parent-section"
                data-aos="fade-up-right"
                data-aos-once="false"
              >
                <div className="title">Nhà Gái</div>
                <div className="name">Ông: Thiều Văn Vinh</div>
                <div className="name">Bà: Thiều Văn Vinh</div>
                <div className="address">Xã Văn Lý, Huyện Lý Nhân, Tỉnh Hà Nam</div>
              </div>
            </div>
            <div className="couple">
              <div
                className="title"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                Trân Trọng Báo Tin Lễ Tân Hôn Của
              </div>
              <div
                className="name"
                data-aos="fade-up-left"
                data-aos-once="false"
              >
                Thiều Đại Dương
              </div>
              <div
                className="and"
                data-aos="fade-down-right"
                data-aos-once="false"
              >
                &
              </div>
              <div
                className="name"
                data-aos="fade-up-right"
                data-aos-once="false"
              >
                Trần Hà Uyên
              </div>
              <div className="image">
                <img
                  src={background}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-once="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleIntroSection;
