export default function footer(){
    return(
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
    )
}