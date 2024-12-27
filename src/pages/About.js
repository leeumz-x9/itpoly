import React from 'react';

function About() {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* About Us section header */}
        <h2 className="text-4xl font-semibold text-yellow-500 mb-6">About Us</h2>

        {/* Image section */}
        <div className="mb-8">
          <div className="flex justify-center gap-8">
            {/* Image of Khun Buuthong Kitibutr */}
            <div className="flex justify-center items-center">
              <div className="border-4 border-yellow-500 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/295547707_472662288193202_1461993109557391189_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_CC9rT_UaJwQ7kNvgH4iXcV&_nc_oc=AdgoiJt5o6EBVjij7Ud9EdgWWMj7uVcsIs1Ays5nALNZWGLntgTOiw_Vrck48I1tyqY&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A7cBw6xjb_dK6V6hTm4UQSq&oh=00_AYAqkpgwu4vyXsSzAKtUUF0WnR6g61RF-Mym9jkUWtF1dA&oe=6773ED45"
                  className="w-64 h-64 object-cover"
                  alt="Khun Buuthong Kitibutr"
                />
              </div>
            </div>

            {/* Lanna Polytechnic Logo */}
            <div className="flex justify-center items-center">
              <div className="border-4 border-yellow-500 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://www.lannapoly.ac.th/web/assets/logo_lannapoly-CnawhWXg.png"
                  className="w-64 h-64 object-cover"
                  alt="Lanna Polytechnic Logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text content section */}
        <div className="text-left text-lg text-gray-400 space-y-6">
          <p>
            Lanna Polytechnic Chiang Mai, located at 2 Sukasem Road, Pa Tan Subdistrict, Mueang District, Chiang Mai, has been authorized by the Ministry of Education since December 18, 1978. The institution aims to promote vocational education for the youth of Chiang Mai and the northern region, providing opportunities to study in industrial trades at a level equivalent to leading institutions nationwide.
          </p>
          <p>
            When the institution first opened, it operated with one building called Tipyamonkol Building. It had 350 students, and the campus covered 10 rai. Initially, Lanna Polytechnic Chiang Mai offered the vocational certificate (Vocation Certificate or Vocational Certificate - V.C.) in three departments: Automotive Engineering, Electrical Engineering, and Business Administration.
          </p>

          {/* Mission Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-4">Mission</h3>
            <p>
              Our mission is to provide high-quality vocational education that equips students with the skills and knowledge required to succeed in their chosen careers. We are committed to fostering innovation, creativity, and professional development in all our students.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-yellow-500 mb-4">Vision</h3>
            <p>
              Our vision is to become a leading educational institution in northern Thailand, recognized for our academic excellence, industry partnerships, and contribution to the local community.
            </p>
            {/* Insert image between Vision */}
            <div className="my-6">
              <img
                src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/287364821_5626452760698281_8820890121130721538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=szMmNeHhdsYQ7kNvgFCPOR1&_nc_oc=AdhlsuFoSBdWmWs1c0GWNcZVONVLyZilRLT1UWDR84rSlCbFDhS7o5c4LLiac9FSdpE&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AomXPGHPulr_6bXidI58kq9&oh=00_AYBioR60cLutBG_r11UFjAPnEQ64pCvF5j5ZDuby4x76jA&oe=6773FF7E"
                alt="Vision Image"
                className="mx-auto w-96 h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
