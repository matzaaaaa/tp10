
const Home = () =>{
    return(
<><div id="body-wrapper" className="bg-grey">


<section id="about" className="about-us padding-medium bg-sand">
    <div className="container">
        <div className="row">
            <div className="text-content text-center col-md-8">
                <div className="section-header">
                    <h2 className="section-title pb-4 text-uppercase">LA MÁS GRANDE GALERÍA DE MÚSICA A NIVEL MUNDIAL</h2>
                    <p>Bienvenido a nuestro portafolio, una ventana al asombroso mundo del arte en su máxima expresión. Aquí, te presentamos una cuidadosa selección de obras maestras creadas por artistas de renombre internacional. Cada pieza en este portafolio es un testimonio del talento, la creatividad y la innovación que han cautivado a audiencias en todo el mundo.</p>
                    <p>Nuestro objetivo es compartir la riqueza y diversidad del arte contemporáneo a través de estas obras magistrales. Desde la pintura y la escultura hasta la fotografía y las instalaciones, este portafolio presenta una amplia gama de disciplinas artísticas. Cada obra refleja la visión única de su creador y la habilidad de comunicar emociones, conceptos y narrativas de una manera inigualable.</p>
                    <p>A través de estas creaciones, podrás explorar el poder del arte para inspirar, provocar pensamientos y evocar emociones profundas. Estas obras, provenientes de artistas icónicos de todo el mundo, han dejado una huella indeleble en la historia del arte y siguen siendo fuentes inagotables de admiración y reflexión.</p>
                </div>
                <figure>
                    <img src="images/dark-logo.png" alt="logo"/>
                  </figure>
            </div>
        </div>
    </div>
</section>

<section id="portfolios" className="portfolios fancyboxeffect mb-6">
    <div className="container">
        <div className="row">
            <div className="section-header text-center">
                <h2 className="section-title pb-4 text-uppercase">~ Portfolios ~</h2>
            </div>
            <div className="portfolios-content d-flex flex-wrap">
                <div className="content col-md-4 mb-3">
                    <a className="image-link js-scroll down-enter" rel="gallery" href="images/model1.jpg">
                        <img src="images/model1.jpg" alt="model" className="portoImg"/>
                            <div className="overlay-content text-center light">
                                <h3 className="title">Portraits</h3>
                                <span>View More</span>
                            </div>
                        </a>
                </div>

                <div className="content col-md-4 mb-3">
                    <a className="image-link js-scroll down-enter" rel="gallery" href="images/model2.jpg">
                        <img src="images/model2.jpg" alt="model" className="portoImg"/>
                            <div className="overlay-content text-center light">
                                <h3 className="title">Wedding</h3>
                                <span>View More</span>
                            </div>
                        </a>
                </div>

                <div className="content col-md-4">
                    <a className="image-link js-scroll down-enter" rel="gallery" href="images/model3.jpg">
                        <img src="images/model3.jpg" alt="model" className="portoImg"/>
                            <div className="overlay-content text-center light">
                                <h3 className="title">Wedding</h3>
                                <span>View More</span>
                            </div>
                        </a>
                </div>
            </div>
        </div>
        <div className="pix_btn text-center">
            <button className="btn-hvr-effects5 mt-5"><span>View Portfolio</span></button>
        </div>
    </div>
</section>

<section id="services" className="services padding-large darkest dark-overlay" /*style="background: url(images/servicebg.jpg) no-repeat; background-size: cover; filter: grayscale(100%);"*/>
    <div className="container">
        <div className="row">
            <div className="section-header text-center light">
                <h2 className="section-title text-uppercase pb-4">~ Services ~</h2>
            </div>
            <div className="text-content light text-center color-secondary col-md-5">
                <p>Photography that captures connections and emotions that you celebrate on your wedding day.Photography that captures connections and emotions that you celebrate on your wedding day. </p>
                <div className="light-btn newsletter-button d-flex justify-content-center padding-small">
                    <input type="text" name="Subscribe" placeholder="Your Email Address"/>
                        <div className="pix_btn text-center">
                            <button className="btn-hvr-effects6"><span className="color-primary text-uppercase">Send it</span></button>
                        </div>
                   </div>
            </div>
            <div className="content-row text-center light d-flex flex-wrap">
                <div className="content-block col-md-4">
                    <h3>Photo Sessions</h3>
                    <p>Photography that captures connections and emotions that you celebrate on your wedding day.</p>
                </div>
                <div className="content-block col-md-4">
                    <h3>Occasions</h3>
                    <p>Photography that captures connections and emotions that you celebrate on your wedding day.</p>
                </div>
                <div className="content-block col-md-4">
                    <h3>Photo Editing</h3>
                    <p>Photography that captures connections and emotions that you celebrate on your wedding day.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="testimonials" className="testimonials-wrap padding-medium">
    <div className="container">
        <div className="row">
            <div className="reviews-content col-md-12 text-center">
                <div className="section-header text-center">
                    <h2 className="section-title text-uppercase">~ Testimonials ~</h2>
                </div>

                <div className="testimonial-slider">
                    <div className="testimonials-inner text-center pt-50">
                        <img src="images/couple.jpg" alt="reviewer" className="reviewImg img-circle align-center"/>
                            <p>Amazing photographer. Jack was very easy to work with and made us feel really ease. The finished product was exactly what we envisioned. He listened to exactly what we wanted, and I never felt like I was being made to pose - the whole process was very natural. We were able to go and enjoy our night with the guests and Jack took care of the rest</p>
                            <div className="testimonial-author text-uppercase">
                                <strong className="name d-flex justify-content-center mt-3">"Austin & Caterine"</strong>
                            </div>
                    </div>

                    <div className="testimonials-inner pt-50">
                        <img src="images/couple.jpg" alt="reviewer" className="reviewImg img-circle align-center"/>
                            <p>He was very easy to work with and made us feel really ease. The finished product was exactly what we envisioned. He listened to exactly what we wanted, and I never felt like I was being made to pose - the whole process was very natural. We were able to go and enjoy our night with the guests and Jack took care of the rest</p>
                            <div className="testimonial-author text-uppercase">
                                <strong className="name d-flex justify-content-center mt-3">"Simona"</strong>
                            </div>
                        </div>

                    <div className="testimonials-inner pt-50">
                        <img src="images/couple.jpg" alt="reviewer" className="reviewImg img-circle align-center"/>
                            <p>Photography that captures connections and emotions that you celebrate on your wedding day.</p>
                            <div className="testimonial-author text-uppercase">
                                <strong className="name d-flex justify-content-center mt-3">"Jean Morgan"</strong>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="gallery" className="gallery-wrap padding-medium">
    <div className="section-header text-center">
        <h2 className="section-title text-uppercase pb-4">~ Gallery ~</h2>
    </div>
    <div className="gallery-content">

        <div className="gallery-row">

            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg1.jpg">
                        <img src="images/galleryimg1.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg2.jpg">
                        <img src="images/galleryimg2.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg3.jpg">
                        <img src="images/galleryimg3.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>

        </div>

        <div className="gallery-row">
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg4.jpg">
                        <img src="images/galleryimg4.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg5.jpg">
                        <img src="images/galleryimg5.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg6.jpg">
                        <img src="images/galleryimg6.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
        </div>

        <div className="gallery-row">
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg1.jpg">
                        <img src="images/galleryimg1.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg2.jpg">
                        <img src="images/galleryimg2.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
            <div className="content col-md-4 pb-4">
                <figure>
                    <a className="image-link" href="images/largegalleryimg3.jpg">
                        <img src="images/galleryimg3.jpg" alt="model" className="galleryImg"/>
                            <div className="overlay">
                                <i className="icon icon-search-plus"></i>
                            </div>
                        </a>
                </figure>
            </div>
        </div>

    </div>

    <div className="pix_btn text-center">
        <button className="btn-hvr-effects5 mt-5"><span>View Gallery</span></button>
    </div>

</section>

<section id="blog" className="latest-blogs padding-large light">

    <div className="bg" data-scroll>

        <div className="blog-content">

            <div className="container">
                <div className="row">

                    <div className="post-item col-md-6 padding-large">

                        <div className="content">
                            <h2 className="post-title">Eloping in Mountainous Terrain</h2>
                            <p>Imagine spending the day hiking with your best friend, in an amazing landscape,to make vows of marriage to one another.</p>
                            <div className="meta-tags">
                                <span className="meta-date">Simon</span>
                                <em className="meta-date">May 14, 2020</em>
                            </div>
                        </div>
                        <div className="pix_btn">
                            <button className="btn-hvr-effects5 mt-5"><span>Read More</span></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>


        <div className="bg-image" /*style={{background: 'url(images/blogbg.jpg)', 'no-repeat'/*background-size: 'cover'}}*/>
        </div>
        </div></section>

<section id="association" className="association-with padding-medium">
    <div className="container">
        <div className="row">
            <div className="section-header text-center">
                <h2 className="section-title text-uppercase pb-4">~ Seen in ~</h2>
            </div>
            <div className="content col-md-12">
                <ul className="d-flex list-unstyled flex-container flex-wrap">
                    <li className="mb-4">
                        <a href="#">
                            <img src="images/associate1.png" alt="photography" className="associateImg pr-20"/>
                            </a>
                    </li>
                    <li className="mb-4">
                        <a href="#">
                            <img src="images/associate2.png" alt="photography" className="associateImg pr-20"/>
                            </a>
                    </li>
                    <li className="mb-4">
                        <a href="#">
                            <img src="images/associate3.png" alt="photography" className="associateImg pr-20"/>
                            </a>
                    </li>
                    <li className="mb-4">
                        <a href="#">
                            <img src="images/associate4.png" alt="photography" className="associateImg pr-20"/>
                            </a>
                    </li>
                    <li className="mb-4">
                        <a href="#">
                            <img src="images/associate5.png" alt="photography" className="associateImg"/>
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section id="contact" className="contact-information">
    <div className="container">
        <div className="row">
            <form className="contact-form d-flex flex-wrap mt-4 col-md-12 dark">
                <div className="text-input flex-container">
                    <div className="inputContainer col-md-6 pl-0 pr-0">
                        <input type="text" name="name" placeholder="First Name" className="name mb-3"/>
                            <i className="icon icon-user"></i>
                        </div>
                    <div className="inputContainer col-md-6 pr-0">
                        <input type="text" name="name" placeholder="Last Name" className="name mb-3"/>
                            <i className="icon icon-user"></i>
                        </div>
                </div>
                <div className="text-input flex-container">
                    <div className="inputContainer col-md-6 pl-0 pr-0">
                        <input type="text" name="E-mail" placeholder="Your E-mail Address" className="mr-3 mb-3"/>
                            <i className="icon icon-envelope"></i>
                        </div>
                    <div className="inputContainer col-md-6 pr-0">
                        <input type="text" name="Subject" placeholder="Subject" className="mb-3"/>
                            <i className="icon icon-phone"></i>
                        </div>
                </div>
                <div className="inputContainer col-md-12 pl-0 pr-0">
                    <input type="text" name="Subject" placeholder="Subject" className="mb-3"/>
                        <i className="icon icon-edit"></i>
                    </div>
                <div className="inputContainer col-md-12 pl-0 pr-0">
                    <textarea placeholder="Message" style={{height: 150+ 'px'}}></textarea>
                    <i className="icon icon-edit"></i>
                </div>
            </form>
        </div>
    </div>
    <div className="pix_btn text-center">
        <button className="btn-hvr-effects5 mt-5"><span>Send it</span></button>
    </div>
</section>

<section className="instagram padding-medium">
    <div className="container">
        <div className="row">
            <div className="section-header text-center">
                <h2 className="section-title text-uppercase pb-4">instagram</h2>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg1.jpg" alt="instagram"/>
                        </a>
                </figure>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg2.jpg" alt="instagram"/>
                        </a>
                </figure>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg3.jpg" alt="instagram"/>
                        </a>
                </figure>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg4.jpg" alt="instagram"/>
                        </a>
                </figure>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg5.jpg" alt="instagram"/>
                        </a>
                </figure>
            </div>
            <div className="col-md-2 text-center mb-3">
                <figure>
                    <a href="#">
                        <img src="images/galleryimg6.jpg" alt="instagram">
                        /</img></a>
                </figure>
            </div>
        </div>
    </div>
</section>

<footer id="footer">
    <div className="container">
        <div className="row">
            <div className="flex-container flex-wrap">

                <div className="col-md-4 widget-menu">
                    <div className="footer-menu d-flex justify-content-center">
                        <ul className="list-unstyled mr-5 text-uppercase">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                        <ul className="list-unstyled text-uppercase">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 widget-menu footer-social-logo text-center">
                    <div className="footer-logo text-center mb-3">
                        <img src="images/footer-logo.png" className="mb-3"/>
                        </div>
                    <div className="social-links">
                        <ul className="list-unstyled d-flex">
                            <li className="mr-3"><a href="#"><i className="icon icon-facebook m-1"></i></a></li>
                            <li className="mr-3"><a href="#"><i className="icon icon-twitter m-1"></i></a></li>
                            <li><a href="#"><i className="icon icon-youtube m-1"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 widget-menu">
                    <div className="footer-contact">
                        <h5 className="widget-title text-uppercase">Stay in touch</h5>
                        <ul className="list-unstyled">
                            <li><strong>Capturer Photography</strong></li>
                            <li>Sandviksveien 68</li>
                            <li>N5035 Bergen</li>
                            <li>Norway</li>
                            <li><a href="#">hello@yourcompany.com</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </div>
</footer>

<div className="footer-bottom bg-mine-shaft">
    <div className="container">
        <div className="padding-xsmall text-center">
            <div className="copyright color-secondary">
                <p className="mb-0">© 2022 Capturer. All Rights Reserved. Template by <a href="https://www.templatesjungle.com/" target="_blank">TemplatesJungle</a></p>
            </div>
        </div>
    </div>
</div>

</div><script src="js/jquery-1.11.0.min.js"></script><script type="text/javascript" src="bootstrap/js/bootstrap.js"></script><script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script><script type="text/javascript" src="slick/slick/slick.min.js"></script><script type="text/javascript" src="aos/aos.js"></script><script type ="text/javascript" src="js/locomotive-scroll.min.js"></script>

<><script type="text/javascript" src="js/plugins.js"></script><script type="text/javascript" src="js/script.js"></script></></>

    );
}

export default Home;
