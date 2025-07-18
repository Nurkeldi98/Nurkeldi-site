import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Location from './location';

import React from 'react';
import { FaWhatsapp, FaInstagram, FaTelegram } from 'react-icons/fa';
import './App.css';

import Header from './Header'; 

function App() {
  return (
    <>
     <Header />
     
            <section id="about">
                <h2>Гарантия на все виды работ</h2>
                <p>
                  Выполняем диагностику и ремонт автоэлектрики любой сложности. 
                <br />Работаем с легковыми и коммерческими авто. 
                <br />Toyota, BMW, Audi, Volkswagen, Hyundai, Kia и другие марки
                </p>
                <div className="wrapper">
                <div className="brands">
                    <img src="/img/toyota.svg" alt="toyota" width="80" />
                    <img src="/img/bmw.svg" alt="bmw" width="70" />
                    <img src="/img/audi.svg" alt="audi" width="75" />
                    <img src="/img/volkswagen.svg" alt="volkswagen" width="65" />
                    <img src="/img/hyundai.svg" alt="hyundai" width="75" />
                    <img src="/img/kia.svg" alt="kia" width="75" />
                </div>
                </div>

                <div className='services-grid'>
                  <div className='card'>
                    <img src='/img/diagnostika.jpg' alt='Диагностика' width={400}/>
                    <h3>Компьютерная диагностика</h3>
                    <p>
                      Комплекс мер по проверке блоков электронной системы управления, электронных узлов автомобиля, датчиков, индикаторов, модулей.
                <br />Диагностика дает точную оценку технического состояния электроники автомобиля и исправность бортовой системы.
                </p>
                <button>Заказать</button>
                  </div>

                  <div className='card'>
                    <img src='/img/remont.jpg' alt='Ремонт' width={400}/>
                    <h3>Ремонт</h3>
                    <p>
                      Ремонт Генераторов, Стартеров, Инжектора, Катушек, Трамблёров, Коммутаторов, Бензонасосов, Компьютеров в Алматы
                      </p>
                      <button>Заказать</button>
                    </div>

                    <div className='card'>
                      <img src='/img/immo.png' alt='Иммобилайзер' width={400}/>
                      <h3>Разблокировка ключей</h3>
                      <p>
                        Сегодня практически на каждом современном автомобиле установлен иммобилайзер.<br />
                        Задача устройства состоит в том, чтобы путем блокировки зажигания, стартера, подачи горючего,
                        <br />а также других электронных систем предотвратить не санкционированное управление автомобилем.
                      </p>
                      <button>Заказать</button>
                    </div>

                    <div className='card'>
                      <img src='/img/svechi.jpg' alt='Замена' width={400}/>
                      <h3>Замена</h3>
                      <p>
                        Мы предлагаем сервисные услуги по замене любых видов ремней, свечей и фильтров.
                      <br />С применением профессионального оборудования, мы даем гарантию на работы.
                      </p>
                      <button>Заказать</button>
                    </div>
                </div>
            </section>

            <section id="gallery">
                  <h2>Наша команда:</h2>
               <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation 
                  pagination={{ clickable: true}}
                  autoplay={{ delay: 3000, disableOnInteraction: false}}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}  
                  >
                    <SwiperSlide>
                      <img src='/img/electrician.webp' alt='Фото 1' width={400} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/img/elektrik.jpg' alt='Фото 2' width={400} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/img/elektrik 2.jpg' alt='Фото 3' width={400} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/komanda.jpg" alt="Фото 4" width={400}/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src='/img/142.jpg' alt='Фото 5' width={400}/>
                    </SwiperSlide>
                 </Swiper> 
            </section> 


            <section id="contact">
                <div className="social-links">
                  <h2>Свяжитесь с нами:</h2>
                  <div className="icons">
                    <a href="https://wa.me/77478340292" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={50} color="#25D366" />
                    </a>
                    <a href="https://t.me/@FreemanNM" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={50} color="#0088cc" />
                    </a>
                    <a href="https://instagram.com/Freeman.NM" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={50} color="#E1306C" />
                    </a>
                  </div>
                  <a 
                  href="https://wa.me/77478340292"
                  className="floating-whatsapp"
                  target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={40} color="#fff" />
                  </a>
                </div>
            </section>


                 <Location />
 
                 <footer>
                            <p>&copy; 2025 Нуркелди. Все права защищены.</p>
                 </footer>
      </>
   ); 
}

export default App;