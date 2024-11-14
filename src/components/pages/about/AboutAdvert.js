


import { aboutlist } from "./aboutlist"; 


 
export default function AboutAdvert() { 
 
  return ( 
    <div className="about_advert_container" data-aos="fade-up"> 
      <div className="about_advert_content"> 
        <div className="about_items"> 
          <div className="about_overlay"> 
            <marquee data-aos="fade-right" scrollamount={50}>About us</marquee> 
          </div> 
        </div> 
        <p data-aos="fade-left" className="about_text"> 
            Choice Supermarket is a retail chain known for providing a wide range of quality products at affordable prices. Shoppers can find everything from fresh produce, dairy, and bakery items to household essentials, personal care products, and more. The supermarket aims to offer a convenient shopping experience with excellent customer service, ensuring that customers can easily find what they need for their daily lives. Choice Supermarket is committed to meeting the diverse needs of its community by maintaining well-stocked shelves and offering frequent promotions and discounts.
            </p> 
        <div className="about_content"> 
          {aboutlist.map((about, i) => ( 
            <div className="about_item" key={about.id} data-aos="fade-up"> 
              <h2 className="title" data-aos="zoom-in"> 
                {about.name} 
              </h2> 
              <div className="about_side"> 
                <div 
                  className="about_item_picture" 
                  data-aos="flip-left" 
                  data-aos-duration="1000" 
                > 
                  <img src={about.picture} alt={about.name} /> 
                </div> 
                <p data-aos="fade-up">{about.content}</p> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </div> 
  ); 
}