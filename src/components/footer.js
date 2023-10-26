export default function footer(){
    return(
        <footer id="footer">
		<div class="container">
			<div class="row">
				<div class="flex-container flex-wrap">

				<div class="col-md-4 widget-menu">
					<div class="footer-menu d-flex justify-content-center">
						<ul class="list-unstyled mr-5 text-uppercase">
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Portfolio</a></li>
						</ul>
						<ul class="list-unstyled text-uppercase">
							<li><a href="#">Blog</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>

				<div class="col-md-4 widget-menu footer-social-logo text-center">
					<div class="footer-logo text-center mb-3">
						<img src="images/footer-logo.png" class="mb-3"/>
					</div>	
					<div class="social-links">
						<ul class="list-unstyled d-flex">
							<li class="mr-3"><a href="#"><i class="icon icon-facebook m-1"></i></a></li>
							<li class="mr-3"><a href="#"><i class="icon icon-twitter m-1"></i></a></li>
							<li><a href="#"><i class="icon icon-youtube m-1"></i></a></li>
						</ul>
					</div>
				</div>

				<div class="col-md-4 widget-menu">
					<div class="footer-contact">
						<h5 class="widget-title text-uppercase">Stay in touch</h5>
						<ul class="list-unstyled">
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