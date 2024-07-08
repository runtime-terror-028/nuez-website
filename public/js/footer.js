// creating header using DOM
//change content here
const footer_address_text = "B-206, KSSIDC Complex, Block II, 2nd Cross Rd,\n Electronics City Phase 1, Electronic City,Bengaluru, \nKarnataka 560100";
const footer_email_text = "nuez@gmail.com";
const footer_phone_text = "9090085440";
const footer_whatsapp_text = "@whatsapp";
const footer_facebook_text = "Facebook";
const footer_twitter_text = "Twitter";
const footer_instagram_text = "Instagram";
const footer_youtube_text = "Youtube";
const footer_bottom_text = "   © 2000-2024, NUEZ Technologies Pvt Ltd. \nAll rights reserved.";

//target ID
const FOOTER = "footer";

//get footer
const footer = document.getElementById(FOOTER);

// add 2 container to footer
const footer_top = document.createElement('div');
footer_top.className = "footer_top";
const footer_bottom = document.createElement('div');
footer_bottom.className = "footer_bottom";

//append (footer_top && footer_bottom) ==> footer
footer.appendChild(footer_top);
footer.appendChild(footer_bottom);

//footer_contact 1/2 child of footer_top
const footer_contact = document.createElement('div');
footer_contact.className = "footer_contact";

const footer_heading = document.createElement('div');
footer_heading.className = "footer_heading";
footer_heading.textContent = "Contact Us";

const footer_address = document.createElement('div');
const footer_address_p = document.createElement('p');
const footer_address_img = document.createElement('img');
footer_address.className = "footer_address";
footer_address_p.textContent = footer_address_text;
footer_address.appendChild(footer_address_p);
footer_address.appendChild(footer_address_img);

const footer_email = document.createElement('div');
const footer_email_p = document.createElement('p');
const footer_email_img = document.createElement('img');
footer_email.className = "footer_email";
footer_email_p.textContent = footer_email_text;
footer_email.appendChild(footer_email_p);
footer_email.appendChild(footer_email_img);

const footer_phone= document.createElement('div');
const footer_phone_p = document.createElement('p');
const footer_phone_img = document.createElement('img');
footer_phone.className = "footer_phone";
footer_phone_p.textContent = footer_phone_text;
footer_phone.appendChild(footer_phone_p);
footer_phone.appendChild(footer_phone_img);

const footer_whatsapp = document.createElement('div');
const footer_whatsapp_p = document.createElement('p');
const footer_whatsapp_img = document.createElement('img');
footer_whatsapp.className = "footer_whatsapp";
footer_whatsapp_p.textContent = footer_whatsapp_text;
footer_whatsapp.appendChild(footer_whatsapp_p);
footer_whatsapp.appendChild(footer_whatsapp_img);

footer_contact.appendChild(footer_heading);
footer_contact.appendChild(footer_address);
footer_contact.appendChild(footer_email);
footer_contact.appendChild(footer_phone);
footer_contact.appendChild(footer_whatsapp);

//footer_social 2/2 child for footer_top
const footer_social = document.createElement('div');
footer_social.className = "footer_social";


const footer_heading_2 = document.createElement('div');
footer_heading_2.className = "footer_heading";
footer_heading_2.textContent = "Follow us";

const footer_facebook = document.createElement('div');
const footer_facebook_p = document.createElement('p');
const footer_facebook_img = document.createElement('img');
footer_facebook.className = "footer_facebook";
footer_facebook_p.textContent = footer_facebook_text;
footer_facebook.appendChild(footer_facebook_p);
footer_facebook.appendChild(footer_facebook_img);

const footer_twitter = document.createElement('div');
const footer_twitter_p = document.createElement('p');
const footer_twitter_img = document.createElement('img');
footer_twitter.className = "footer_twitter";
footer_twitter_p.textContent = footer_twitter_text;
footer_twitter.appendChild(footer_twitter_p);
footer_twitter.appendChild(footer_twitter_img);

const footer_instagram= document.createElement('div');
const footer_instagram_p = document.createElement('p');
const footer_instagram_img = document.createElement('img');
footer_instagram.className = "footer_instagram";
footer_instagram_p.textContent = footer_instagram_text;
footer_instagram.appendChild(footer_instagram_p);
footer_instagram.appendChild(footer_instagram_img);

const footer_youtube = document.createElement('div');
const footer_youtube_p = document.createElement('p');
const footer_youtube_img = document.createElement('img');
footer_youtube.className = "footer_youtube";
footer_youtube_p.textContent = footer_youtube_text;
footer_youtube.appendChild(footer_youtube_p);
footer_youtube.appendChild(footer_youtube_img);

footer_social.appendChild(footer_heading_2);
footer_social.appendChild(footer_facebook);
footer_social.appendChild(footer_twitter);
footer_social.appendChild(footer_instagram);
footer_social.appendChild(footer_youtube);



//footer_bottom
footer_bottom.textContent = footer_bottom_text;

//append (footer-contact && footer-social) ==> footer-top
footer_top.appendChild(footer_contact);
footer_top.appendChild(footer_social);