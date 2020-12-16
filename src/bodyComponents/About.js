import React from 'react';
import "./about.css";
const About = () => {
    return (
        <main>
            <h2 className="About-Header"><u>About Me</u></h2>
            <section className="section">
            <img className="About-image" src="https://lh3.googleusercontent.com/xabkKF0s2XY65q7-AtkCsjhbNof2b5uslxXiprWmKxxYBzOGoxHQFPTcBA4lT4C_shDSg2XEY51aocSEg8PDU6kLN6Kzwng3XBt4DvRq293hOS1s9YijZmtrLnTnfgPaV0KXgTe6_0g-lDgS4UnVDYTnsae5LYvUqyMcPYEWJSqG6UNXcNnoCcviR7IMJwpj0w2n3BX12d1kTn7fl7mHasiBaKpRbVg875uVqDfdhL4UWQeKyWJBYZbZZx8QCMzjJgSBmQzg3vNQyXxWGqHs4Nzek9B-KhxS4WdLVzHZsk_4ftOPQgF4B4TVUJ6QZivtcrQpJuwkFC2it_lAzd6pcH_Ps_CuuVpQFLeeKmk7XuxZGEUaz5P4TuKvE02dGkiHn1PNgKGhq4qrNVGhPzKKWvR5U7J5h1rFnsxsklgbA_ePb41KAj7iu8m9sy0ePwLI-MIX_YrvVqy56C8_Wz6oDsNrl2TwZIzFQsQSWcWI3czLBVSKGfc45EMWCz7vr25sh7rpsD5YXTb5cmEprWSrwofAIvzFHOp4z7_t-iuBZbQxj83WO-FrAhOWsusHxjCAUgDTgQiuL6QylZ_QaP4cegwiRC3tqt6D_V1-kzCRtMYyL8SprqH0m_fhT4i2lVbmCNkGNlE0nXs9j_eWQRZ9TeGVV1CaDa1PHjjE9lJ03-D_hsGLcIa43xRw_dbf=w1301-h867-no?authuser=0" alt="Umbrella Skys"/>
            <p className="About-text">
                As a web developer, inspiration is what motivates me. My inspiration for this website came from a trip to Europe where I came upon Sextafeira's Umbrella Sky, a sprawling art exhibit covering the plaza of Le Village Royal in Paris. I hoped to portay the fun, adventure and whimsy I felt there in this website.
            </p>
            </section>
            <section>
            <p className="About-text">
                My inspiration to work in web development derives from a small Real Estate Company in Ithaca, New York. At <a href="https://www.carolbushberg.com" target="__blank">Carol Bushberg Real Estate</a>, I worked as the IT director setting up the technology she would need to run her business while also taking my first foray into working with code editing her website. After years working in the hospitality industry in New York, I have circled back to finding a passion for technology but have also retained my passion from the hospitality industry in serving people.
            </p>
            <img src="" alt="" className="About-image"/>
            </section>
        </main>
    );
};

export default About;