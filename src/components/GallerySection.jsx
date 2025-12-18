import title_image from '../assets/images/title.png'
import gallery01 from '../assets/images/image04.jpg'
import gallery02 from '../assets/images/image02.jpg'
import gallery03 from '../assets/images/image12.jpg'
import gallery04 from '../assets/images/image14.jpg'
import gallery05 from '../assets/images/image11.jpg'
import gallery06 from '../assets/images/image13.jpg'

const GallerySection = () => {
  return (
    <section id="gallery-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gallery">
              <div className="title" data-aos="flip-left" data-aos-once="false">
                <p>Album hình cưới</p>
                <img src={title_image} alt="" />
              </div>
              <div className="album">
                <img src={gallery01} className='img img1' alt="" data-aos="zoom-in" data-aos-once="false"/>
                <img src={gallery02} className='img img2' alt="" data-aos="zoom-in-up" data-aos-once="false"/>
                <img src={gallery03} className='img img3' alt="" data-aos="zoom-in-down" data-aos-once="false"/>
                <img src={gallery04} className='img img4' alt="" data-aos="zoom-in-left" data-aos-once="false"/>
                <img src={gallery05} className='img img5' alt="" data-aos="zoom-in-right" data-aos-once="false"/>
                <img src={gallery06} className='img img6' alt="" data-aos="zoom-out-up" data-aos-once="false"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
