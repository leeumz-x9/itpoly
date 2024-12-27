import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // ใช้ไฟล์ CSS ที่รองรับในเวอร์ชันล่าสุด

function Home() {
  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-semibold text-yellow-500 mb-6">Welcome to IT POLY Department</h1>
        <p className="text-lg mb-6">The Department of Information Technology at Polytech Lanna College.</p>
        
        {/* เพิ่มรูปภาพที่เป็นลิงก์ */}
        <a href="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg" 
            alt="Department Activity" 
            className="mx-auto rounded-lg shadow-lg mb-6"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
        
        <p className="text-lg text-gray-300">Explore more about the department and our activities.</p>

        {/* Swiper for Activity Images */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Department Activities</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000, // Set delay between slides in ms (3000ms = 3s)
              disableOnInteraction: false, // Prevent autoplay stop when user interacts
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <a href="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/471482133_1095496179038494_5561592027701869317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mlG7q-uMDIcQ7kNvgEIX-0S&_nc_oc=AdjesyB_JS9raXbBMfOdXjS5-XngUTeCJu1P30RRCGRWjakqorFF1VsKY8rU_sjeqSQ&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Ahpa3mqjEXy26qONHbyHyOF&oh=00_AYD4T9--lptHibrFPX5w5YiYCLPJhYco5FauWzHmkRpDyQ&oe=6773EE40" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/471482133_1095496179038494_5561592027701869317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mlG7q-uMDIcQ7kNvgEIX-0S&_nc_oc=AdjesyB_JS9raXbBMfOdXjS5-XngUTeCJu1P30RRCGRWjakqorFF1VsKY8rU_sjeqSQ&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Ahpa3mqjEXy26qONHbyHyOF&oh=00_AYD4T9--lptHibrFPX5w5YiYCLPJhYco5FauWzHmkRpDyQ&oe=6773EE40"
                  alt="Department Activity 1"
                  className="w-full rounded-lg object-cover"
                  style={{ height: 'auto', maxHeight: '500px' }}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/471236050_1119620743497350_7781311657508832092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vwPCMndhsgYQ7kNvgFqSDow&_nc_oc=Adi0ph93H2UnQsfTEDs9bWf4hy48kVhmGrthmBcrdy1VlsWD5G04WDU-6N8Eo4hDTmI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A9ptSwXYyxjsIh6POcSVcKb&oh=00_AYBP4LtVUEDq-M-wPMQlRL9diaCS2BUHl2HMS-pCirM4HA&oe=67740203" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/471236050_1119620743497350_7781311657508832092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vwPCMndhsgYQ7kNvgFqSDow&_nc_oc=Adi0ph93H2UnQsfTEDs9bWf4hy48kVhmGrthmBcrdy1VlsWD5G04WDU-6N8Eo4hDTmI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A9ptSwXYyxjsIh6POcSVcKb&oh=00_AYBP4LtVUEDq-M-wPMQlRL9diaCS2BUHl2HMS-pCirM4HA&oe=67740203"
                  alt="Department Activity 2"
                  className="w-full rounded-lg object-cover"
                  style={{ height: 'auto', maxHeight: '500px' }}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/471236050_1119620743497350_7781311657508832092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vwPCMndhsgYQ7kNvgFqSDow&_nc_oc=Adi0ph93H2UnQsfTEDs9bWf4hy48kVhmGrthmBcrdy1VlsWD5G04WDU-6N8Eo4hDTmI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=A9ptSwXYyxjsIh6POcSVcKb&oh=00_AYBP4LtVUEDq-M-wPMQlRL9diaCS2BUHl2HMS-pCirM4HA&oe=67740203" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAy99wg5L7iaRsK9l496OtUi2JGiuqqswPA&s"
                  alt="Department Activity 2"
                  className="w-full rounded-lg object-cover"
                  style={{ height: 'auto', maxHeight: '500px' }}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
