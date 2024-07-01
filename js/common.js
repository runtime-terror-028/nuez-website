

document.addEventListener('DOMContentLoaded', function () {
    var common_header_content = document.getElementById('common_header');
    var common_footer_content = document.getElementById('common_footer');

    var new_header_content = `


    <div class="social_bar">
        <div class="social_bar_phone"><img alt="">   9090085440</div>
        <div class="social_bar_whatsapp"><img alt="">   Whatsapp</div>
        <div class="social_bar_email"><img alt="">   Email</div>
        <div class="social_bar_track_order">Track your order</div>
    </div>
    <div class="main_bar">
        <div class="main_bar_child">
            <!-- <div class="empty_space"></div> -->
            <div class="main_bar_logo"><a href="index.html"><img id="logo"></a></div>
            <!-- <div class="main_bar_account">
                <div class="account_profile account"><img alt=""> Account</div>
                <div class="account_wishlist account"><img alt=""> WishList</div>
                <div class="account_cart account"><img alt=""> Cart</div>
            </div> -->
        </div>
    </div>
    <div class="nav_bar">
    
        <ul>
            <li class="nav_bar_dropdown">
                <a class="nav_bar_dropdown_button">Lighting</a>
                <div class="nav_bar_dropdown_content">
                    <div class="nav_bar_dropdown_content_child">
                        <div class="sub_dropdown">
                            <h6><u>Indoor Lighting</u></h6>
                            <a href="ceiling_light.html">Ceiling Lighting</a>
                            <a href="wall_light.html"> Wall Lighting</a>
                            <a href="ceiling_lamp.html">Ceiling Lamps</a>
                            <a href="wall_lamp.html">Wall Lamps</a>
                            <a href="chandelier.html">Chandeliers</a>
                            <a href="table_lamp.html">Table Lamps</a>
                            <a href="floor_lamp.html">Floor Lamps</a>
    
    
                        </div>
                        <div class="sub_dropdown"> 
                            <h6><u>Outdoor Lamps</u></h6>
                            <a href="street_light.html">Street Lighting</a>
                            <a href="flood_light.html">Flood Lighting</a>
                            <a href="highbay_light.html">Highbay Lighting</a>
                            <a href="garden_ballard.html">Garden Bollards</a>
                        </div>
                    </div>
                </div>
            </li>
    
            <li><a href="smart_benches.html">Smart Benches</a></li>
    
            <li><a href="cctv.html">CCTV</a></li>
    
            <li><a href="bms.html">BMS</a></li>
    
            <li class="nav_bar_dropdown">
                <a class="nav_bar_dropdown_button" href="">More</a>
                <div class="nav_bar_dropdown_content">
                    <a href="">More</a>
                    <a href="">More</a>
                </div>
            </li>
    
    
            <li><a href="">Store Locator</a></li>
        </ul>
    
    </div>

    `;

    var new_footer_content = `

       <div class="footer_top">
            <div class="footer_contact">

                <div class="footer_heading">
                    Contact Us
                </div>
                <div class="footer_address">
                    <p>Lorem ipsum dolor, sit amet consectetur <br>
                        adipisicing elit. Excepturi, rem autem! Nisi<br>
                        maiores laborum labo</p>
                    <img alt="">
                </div>
                <div class="footer_email">
                    <p>nuez@gmail.com</p>
                    <img alt="">
                </div>
                <div class="footer_phone">
                    <p>9090085440</p>
                    <img alt="">
                </div>
                <div class="footer_whatsapp">
                    <p>@whatsapp</p>
                    <img alt="">
                </div>

            </div>





            <div class="footer_social">
                <div class="footer_heading">
                    Follow Us
                </div>
                <div class="footer_facebook">
                    <p>Facebook</p>
                    <img alt="">
                </div>
                <div class="footer_twitter">
                    <p>Twitter</p>
                    <img alt="">
                </div>
                <div class="footer_instagram">
                    <p>Instagram</p>
                    <img alt="">
                </div>
                <div class="footer_youtube">
                    <p>Youtube</p>
                    <img alt="">
                </div>
            </div>
        </div>

        <div class="footer_bottom">
            This is page is copyrighted by NUEZ Tech
        </div>

    `;

    common_header_content.innerHTML = new_header_content;
    common_footer_content.innerHTML = new_footer_content;
});
