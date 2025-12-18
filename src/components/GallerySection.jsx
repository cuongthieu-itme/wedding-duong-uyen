import title_image from '../assets/images/title.png'
import background from '../assets/images/background.jpeg'
import background2 from '../assets/images/background2.jpeg'
import gallery02 from '../assets/images/gallery02.jpeg'
import gallery04 from '../assets/images/gallery04.jpeg'
import gallery05 from '../assets/images/gallery05.jpeg'
import gallery01 from '../assets/images/gallery01.jpeg'

const GallerySection = () => {
  return (
    <section id="gallery-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gallery">
              <div className="title" data-aos="fade-up" data-aos-once="false">
                <p>Album hình cưới</p>
                <img src={title_image} alt="" />
              </div>
              <div className="album">
                <img src={background} className='img img1' alt="" data-aos="fade-up" data-aos-once="false" />
                <img src={background2} className='img img2' alt="" data-aos="fade-up" data-aos-once="false" />
                <img src={gallery02} className='img img3' alt="" data-aos="fade-up" data-aos-once="false" />
                <img src={gallery04} className='img img4' alt="" data-aos="fade-up" data-aos-once="false" />
                <img src={gallery05} className='img img5' alt="" data-aos="fade-up" data-aos-once="false" />
                <img src={gallery01} className='img img6' alt="" data-aos="fade-up" data-aos-once="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
