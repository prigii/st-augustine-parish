// src/pages/About.js
import React from 'react';
import ParishCenterCarousel from '../components/imageCarousel';

const AboutParish = () => {
  return (
    <>
      
      <section id="about" className="py-4 px-10">
        <h1 className="text-4xl font-bold mb-8 px-10 text-center">About Us</h1>
        <ParishCenterCarousel />
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl text-center font-bold mb-4 mt-8 text-yellow-500">About St Augustine Catholic Parish, Juja</h2>
          <p className="mb-4">
            St. Augustine Catholic Parish and University Chaplaincy was carved out of St. Theresa Catholic Parish,
            Kalimoni and inaugurated in September 2002, by the then Archbishop of Nairobi, the late Archbishop
            Raphael Ndingi Mwana a’Nzeki. We serve the Catholic community in part of Kiaora Ward of Juja SubCounty, Kiambu County, including the Catholic community at Jomo Kenyatta University of Agriculture and Technology
            (JKUAT), also referred to as CatCom.
          </p>
          <p className="mb-4">
            Our mission is to provide a place of worship and spiritual growth, where everyone feels welcomed and valued. We offer a variety of services and programs to support the spiritual, social, and educational needs of our parishioners.
            The Parish celebrates four (4) Masses at the St. Augustine Centre on Sundays and one Mass in each of our
            two other Outstations namely St. Paul Gachororo and Mary Mother of God Mirimaini making a total
            number of 6 Masses each Sunday. There is a total number of 49 Small Christian Communities with an
            estimated total population of 2,155 Christians. The ecclesial groups operational in the Parish include;
            (CMA, CWA, Senior Youth, YCA, MYM, PMC, and Choir) which are active and growing, and so are the
            devotional groups (Legion of Mary, and Sacred Heart of Jesus)
          </p>
          <p className="mb-4">
            From our regular Mass schedules to our community outreach programs, we strive to live out the teachings of Christ in everything we do. Join us for worship, get involved in our ministries, or simply come to learn more about our faith.
            The pastoral activities and the administration of the Parish are under the guidance of Rev. Fr. Patrick
            Ndung’u, Rev. Fr. (Prof.) Lawrence Njoroge, Rev. Fr. Bernard Njuguna and the Pastoral Parish Council
            (PPC). Further the Pastoral ministry is supported by the generosity of the visiting priests in the name of
            Frs. Eric Muceeri and Chris Letikerich.
          </p>
          <p className="mb-4">
            The Parish is under the patronage of St. Augustine of Hippo, Bishop and Doctor of the Church. St.
            Augustine was born on 13th November 354 at Thagaste. He died on 28th August 430, the date in which his
            memorial is celebrated. St. Augustine embraced Christianity through the grace of the prayers of his mother,St. Monica. He was baptized by St. Ambrose in Milan. He returned to Africa where he led a life of
            abstinence from worldly pleasures.
           </p>
          <p className='mb-4'>
            Augustine was elected bishop of Hippo where he was an outstanding pastor for thirty four years. Through
            his writings, he explained the faith, fought errors and led strong foundations for the growth of the Church.
            He is regarded as one of the most renown theologian of all times. Among the outstanding works by St.
            Augustine is his spiritual autobiography published under the title The Confessions of Saint Augustine. The
            confessions covers the first 35 years of his life. It is from the confessions that Saint Augustine stated the
            famous passage:
            <blockquote className="italic pl-8 mt-4 font-bold">
              "You have made us for yourself, O Lord, and our hearts are restless until they find rest in you."
            </blockquote>
            <div className='text-yellow-500 font-bold p-4'>
              <p className='mt-4 '><a href="/saint-augustine" target='new' className='text-color-red-800 underline'>Learn more about St Augustine of Hippo here</a></p>
            </div>      </p>
          <p className='font-bold mb-4'>Mass times:</p>
          <p className='font-semibold mb-2'>First Mass: <i>Sunday 7am - 8.30am</i></p>
          <p className='font-semibold mb-2'>Second Mass: <i>Sunday 9am - 11am</i></p>
          <p className='font-semibold mb-2'>Third Mass: <i>Sunday 11am - 12.30pm</i></p>
          <p className='font-semibold mb-2'>St Paul Gachororo: <i>Sunday 9am - 11am</i></p>
          <p className='font-semibold mb-2'>Mary Mother of God: <i>Sunday 7.30am - 9am</i></p>
          <p className='font-semibold mb-2'>Morning Masses at the parish center:<i> Mon - Fri 6.15am - 7am, Sat 7am - 8am</i></p>
          <p className='font-semibold mb-2'>Confession at the parish center: <i>Sat 8am</i> </p>
          <p className='font-bold mb-8 mt-4 text-center'></p>
 
          <p>May St. Augustine of Hippo continue to keep watch over our Parish.</p>
        </div>
      </section>
    </>
  );
};

export default AboutParish;





