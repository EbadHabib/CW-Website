$( document ).ready(function() {
    // $('.loader').fadeOut(500)

    $(document).click(function(e){
        if (!e.target.closest('.main-menu, .menu-toggle')) {
            // $('.menu-toggle').click()
        }
    });

    $('head').append('<script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>')
    setCookie();
});

function setCookie() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "setcookie.php", true);
    xhttp.send();
} 

$('.main-menu').append(`
        <div class="menu-links">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="javascript:void(0)" class="button" id="one">Services</a></li>
                <li><a href="our-works.html">Our Work</a></li>
                <li><a href="https://catchworldinternational.net/profile/" target="__blank">Portfolio</a></li>
                <!--<li><a href="blog.html">Blog</a></li>--!> 
                <li><a href="javascript:void(0)" class="contact">Contact</a></li>
            </ul>
        </div>
        <div class="social-media">
            <div class="social-link-holder"><a href="#" target="__blank"><i class="fa fa-facebook" style="color:#FFFFFF;"></i></a></div>
            <div class="social-link-holder"><a href="#" target="__blank"><i class="fa fa-twitter" style="color:#FFFFFF;"></i></a></div>
            <div class="social-link-holder"><a href="#" target="__blank"><i class="fa fa-instagram" style="color:#FFFFFF;"></i></a></div>
            <div class="social-link-holder"><a href="#" target="_blank"><i class="fa fa-linkedin" style="color:#FFFFFF;"></i></a></div>
            <div class="social-link-holder contact"><a href="#" target="__blank"><i class="fa fa-pinterest" style="color:#FFFFFF;"></i></a></div>
            <div class="social-link-holder contact"><a href="javascript:void(0)"><i class="fa fa-envelope" style="color:#FFFFFF;"></i></a></div>
        </div>
`)

$('nav').append(`
    <div class="row">
        <div class="col">
            <div class="logo-holder">
                <a href="index.html"><img class="logo" style="width: 80px;" src="./images/CW Logo.png" alt="Catchworld"></a><!--style="min-width: 120px;"-->
            </div>
        </div>
        <div class="col text-right">
            <div class="social-media">
                <div class="social-link-holder"><a href="#"><i class="fa fa-facebook"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-twitter"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-instagram"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-linkedin"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-pinterest"></i></a></div>
                <div class="social-link-holder contact"><a href="javascript:void(0)"><i class="fa fa-envelope"></i></a></div>
            </div>
        </div>
    </div>
`)

$('.prt_contact_wrapper').append(`
    <div class="prt_close_wrapper">
        <i class="fa fa-arrow-right prt_close"></i>
        <!--<img src="images/contact/header/right_arrow.png" alt="Close" class="prt_close">-->
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="prt_heading_wrapper">
                    <div class="prt_heading">
                        <h1>get in touch</h1>
                        <div class="typed-strings">
                            <p>contact us</p>
                            <p>let's talk</p>
                        </div>
                        <p class="typed"></p>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="prt_contact_info">
                    <h1>How we can help you ?</h1>
                    <div class="prt_contact_form">
                        <div class="row">
                            <div class="col-12">
                                <form>
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="first_name" placeholder="Your Name" class="require">
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="email" placeholder="Your Email" class="require" data-valid="email" data-error="Email should be valid.">
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" name="subject" placeholder="Subject" class="require">
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <textarea rows="4" name="message" placeholder="Message" class="require"></textarea>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="response"></div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <button type="button" class="prt_btn submitForm" form-type="contact">submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="prt_contact_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.807569576264!2d-73.99043689999999!3d40.74425960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a5d1fb95a1%3A0xef42bb82af5e727f!2s30%20W%2026th%20St%2C%20New%20York%2C%20NY%2010010%2C%20USA!5e0!3m2!1sen!2s!4v1696870111669!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="prt_contact_details">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="prt_contact_details_box details_box1">
                            <h4 class="text-center"><i class="fa fa-phone"></i>&ensp;Phone</h4>
                            <p class="text-center"><a href="tel:+1 (347)5354318">+1 (347) 535-4318</a><br></p>
                            <br>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="prt_contact_details_box details_box2">
                            <h4 class="text-center"><i class="fa fa-envelope"></i>&ensp;Email</h4>
                            <p class="text-center"><a href="javascript:void(0)">Catchworld@gmail.com</a><br><a href="javascript:void(0)">Catchworld@gmail.com
                            </a></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="prt_contact_details_box details_box3">
                            <h4 class="text-center"><i class="fa fa-map-marker"></i>&ensp;Address</h4>
                            <p class="text-center">30 W. 26th Street, Sixth Floor New York<br>NY 10010 US</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`)

$('footer').append(`
    <div class="row">
        <div class="col">
            <div class="lg-text">
                <span>ready to build & grow?</span><br>
                <span>speak to our experts today!</span>
            </div>
            <div class="normal-text">
                <p>Catchworld helped B2B and B2C businesses to generate better customer<br>
                insights and improve brand marketing.to the next level.
                <br>
                We develop campaigns that will make a long-term difference
                <br>
                to your brand because we understand that your brand is more
                <br>than a website and color scheme.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="contact-info-holder">
                <div class="title">Call us</div>
                <div class="contact-info">
                    <a href="tel:+1 (347) 535-4318">+1 (347) 535-4318</a>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="contact-info-holder">
                <div class="title">E-mail</div>
                <div class="contact-info">
                    <a href="mailto:Catchworld@gmail.com">Catchworld@gmail.com</span></a>
                </div>
                <div class="social-media">
                <div class="social-link-holder"><a href="#"><i class="fa fa-facebook"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-twitter"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-instagram"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-linkedin"></i></a></div>
                <div class="social-link-holder"><a href="#"><i class="fa fa-pinterest"></i></a></div>
                </div>
            </div>
        </div>
    </div>
`)

$('.prt_footer_wrapper').append(`
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <p>Copyright © 2023 <a href="Catchworld.com">Catchworld</a>. All Rights Reserved</p>
                <!-- <ul>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="javascript:void(0)"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                </ul> -->
            </div>
        </div>
    </div>
`)

$('body').append(`
    <div id="modal-container">
        <div class="modal-background">
            <div class="modal">
                <h2>What we can do for you!</h2>
                <a href="logo-design.html"><p>Logo Design</p></a>
                <a href="website-packages.html"><p>Website Design</p></a>
                <a href="ecommerce-solutions.html"><p>E-Commerce Solutions</p></a>
                <a href="webapp-solutions.html"><p>Web App Solutions</p></a>
                <a href="video-animations.html"><p>Video Animations</p></a>
                <a href="branding-design.html"><p>Branding & Design</p></a>
                <a href="seo.html"><p>SEO</p></a>
                <a href="content-writting.html"><p>Content & Writting</p></a>
                <a href="social-media-management.html"><p>Social Media Management</p></a>
                <a href="digital-marketing-services.html"><p>Digital Marketing Services</p></a>
            </div>
        </div>
    </div>
`)

//dropdown on  hover //
$(".dropdown_hover ").on({
    mouseenter: function () {
       $(".drop-content .drop-hover").slideDown();
    },
    mouseleave: function () {
       $(".drop-content .drop-hover").slideUp();
    }
});

$(".dropdown_hover .drop-content .drop-hover li span").on('click', function() {
    $(".dropdown_hover .selected  span").html($(this).html());
    $(".dropdown_hover .drop-content .drop-hover").slideUp();
}); 

$(document).bind('click', function(e) {
    var $clickhide = $(e.target);
    if (! $clickhide.parents().hasClass("dropdown_c"))
        $(".dropdown_c .drop-content ul").slideUp();
});
// 2nd
$(".dropdown_hover1 ").on({
    mouseenter: function () {
       $(".drop-content1 .drop-hover1").slideDown();
    },
    mouseleave: function () {
       $(".drop-content1 .drop-hover1").slideUp();
    }
});

$(".dropdown_hover1 .drop-content1 .drop-hover1 li span").on('click', function() {
    $(".dropdown_hover1 .selected1  span").html($(this).html());
    $(".dropdown_hover1 .drop-content1 .drop-hover1").slideUp();
}); 

$(document).bind('click', function(e) {
    var $clickhide = $(e.target);
    if (! $clickhide.parents().hasClass("dropdown_c1"))
        $(".dropdown_c1 .drop-content1 ul").slideUp();
});

// Service Menu Work
$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
    $('.menu-toggle').click()
})

$('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
    $('.menu-toggle').click()
});
