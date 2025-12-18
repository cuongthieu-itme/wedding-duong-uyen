import header from "../assets/images/header.png";
import image02 from "../assets/images/image02.jpg";

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
                <div className="name">Ông: Lưu Văn Thanh</div>
                <div className="name">Bà: Phạm Thị Dương</div>
                <div className="address">P. Tam Bình, Tp. Hổ Chí Minh</div>
              </div>
              <div
                className="parent-section"
                data-aos="fade-up-right"
                data-aos-once="false"
              >
                <div className="title">Nhà Gái</div>
                <div className="name">Ông: Trần Khắc Thành</div>
                <div className="name">Bà: Trần Thị Hương</div>
                <div className="address">P. 2, Bảo Lộc, Lâm Đồng</div>
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
                Lưu Văn Tiền
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
                Trần Thị Phương
              </div>
              <div className="image">
                <img
                  src={image02}
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
