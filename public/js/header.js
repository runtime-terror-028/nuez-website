// creating header using DOM

//target ID
const HEADER = "header";
//containers ID 
const container_id_social_bar = "social_bar";
const container_id_main_bar = "main_bar";

//social bar child
const child_class_social_bar_phone = "social_bar_phone social_bar_child";
const child_class_social_bar_whatsapp = "social_bar_whatsapp social_bar_child";
const child_class_social_bar_email = "social_bar_email social_bar_child";
const child_class_social_bar_track_order = "social_bar_track_order social_bar_child";

//main bar child
const child_id_main_bar_logo = "main_bar_logo";
const child_id_main_bar_nav_bar = "nav_bar";


//code insertion target
const header = document.getElementById(HEADER);

//create parents for social bar
const container_social_bar = document.createElement('div');
container_social_bar.id = container_id_social_bar;

const container_main_bar = document.createElement('div');
container_main_bar.id = container_id_main_bar;

//append child (social bar and child bar to header)
header.appendChild(container_social_bar);
header.appendChild(container_main_bar);

//create childs for social bar----
//phone
const child_social_bar_phone = document.createElement('div');
child_social_bar_phone.className = child_class_social_bar_phone;
const img_phone = document.createElement('img');
img_phone.alt = "Phone";
const a_phone = document.createElement('a');
a_phone.href = "/contactus";
a_phone.textContent = "9090085440"
child_social_bar_phone.appendChild(img_phone);
child_social_bar_phone.appendChild(a_phone);

//whatsapp
const child_social_bar_whatsapp = document.createElement('div');
child_social_bar_whatsapp.className = child_class_social_bar_whatsapp;
const img_whatsapp = document.createElement('img');
img_whatsapp.alt = "whatsapp";
const a_whatsapp = document.createElement('a');
a_whatsapp.href = "/contactus";
a_whatsapp.textContent = "Whatsapp"
child_social_bar_whatsapp.appendChild(img_whatsapp);
child_social_bar_whatsapp.appendChild(a_whatsapp);

//phone
const child_social_bar_email = document.createElement('div');
child_social_bar_email.className = child_class_social_bar_email;
const img_email = document.createElement('img');
img_email.alt = "Email";
const a_email = document.createElement('a');
a_email.href = "/contactus";
a_email.textContent = "Email"
child_social_bar_email.appendChild(img_email);
child_social_bar_email.appendChild(a_email);

//phone
const child_social_bar_track_order = document.createElement('div');
child_social_bar_track_order.className = child_class_social_bar_track_order;
const a_track_order = document.createElement('a');
a_track_order.href = "/store_locater";
a_track_order.textContent = "Track your order"
child_social_bar_track_order.appendChild(a_track_order);

//append child to social bar
container_social_bar.appendChild(child_social_bar_phone);
container_social_bar.appendChild(child_social_bar_whatsapp);
container_social_bar.appendChild(child_social_bar_email);
container_social_bar.appendChild(child_social_bar_track_order);
//------------------------------------------------------------------------------

//create childs for main bar----
//logo
const main_bar_logo = document.createElement('div');
main_bar_logo.id = child_id_main_bar_logo;
const a_logo = document.createElement('a');
a_logo.href = "/";
main_bar_logo.appendChild(a_logo);
const img_logo = document.createElement('img');
img_logo.id = "logo";
a_logo.appendChild(img_logo);

//navbar
const navbar = document.createElement('div');
navbar.id = child_id_main_bar_nav_bar;

//ul li for nav bar
const ul_navbar = document.createElement('ul');

const li_navbar_lighting = document.createElement('li');
const li_navbar_smart_benche = document.createElement('li');
const li_navbar_cctv = document.createElement('li');
const li_navbar_bms = document.createElement('li');
const li_navbar_more = document.createElement('li');
const li_navbar_store_locater = document.createElement('li');

li_navbar_lighting.className = "nav_bar_dropdown";
li_navbar_more.className = "nav_bar_dropdown";


//li lighting has 2 child
//child 1
const a_lighting_button = document.createElement('a');
a_lighting_button.className = "nav_bar_dropdown_button";
a_lighting_button.textContent = "Lighting";
li_navbar_lighting.appendChild(a_lighting_button);
//child 2
const lighting_dropdown_content = document.createElement('div');
lighting_dropdown_content.className = "nav_bar_dropdown_content";
li_navbar_lighting.appendChild(lighting_dropdown_content);

//child 2.1
lighting_dropdown_content_child = document.createElement('div');
lighting_dropdown_content_child.className = "nav_bar_dropdown_content_child";
lighting_dropdown_content.appendChild(lighting_dropdown_content_child)
//2.1.1
lighting_sub_dropdown = document.createElement('div');
lighting_sub_dropdown.className = "sub_dropdown";
lighting_dropdown_content_child.appendChild(lighting_sub_dropdown);

lighting_dropdown_heading_indoor = document.createElement('h6')
lighting_dropdown_heading_indoor.textContent = "Indoor";
//2.1.1 a
a_ceiling_light = document.createElement('a');
a_ceiling_light.href = "/ceiling_light";
a_ceiling_light.textContent = "Ceiling Lighing"

a_wall_light = document.createElement('a');
a_wall_light.href = "/wall_light";
a_wall_light.textContent = "Wall Light"

a_ceiling_lamp = document.createElement('a');
a_ceiling_lamp.href = "/ceiling_lamp";
a_ceiling_lamp.textContent = "Ceiling Lamp"

a_table_lamp= document.createElement('a');
a_table_lamp.href = "/table_lamp";
a_table_lamp.textContent = "Table Lamp"

a_chandelier = document.createElement('a');
a_chandelier.href = "/chandelier";
a_chandelier.textContent = "Chandelier"

a_floor_lamp = document.createElement('a');
a_floor_lamp.href = "/floor_lamp";
a_floor_lamp.textContent = "Floor Lamp"

a_wall_lamp = document.createElement('a');
a_wall_lamp.href = "/wall_lamp";
a_wall_lamp.textContent = "Wall Lamp"

//append all lighting a to sub_dropdown
lighting_sub_dropdown.appendChild(lighting_dropdown_heading_indoor);
lighting_sub_dropdown.appendChild(a_ceiling_light);
lighting_sub_dropdown.appendChild(a_wall_light);
lighting_sub_dropdown.appendChild(a_ceiling_lamp);
lighting_sub_dropdown.appendChild(a_wall_lamp);
lighting_sub_dropdown.appendChild(a_chandelier);
lighting_sub_dropdown.appendChild(a_table_lamp);
lighting_sub_dropdown.appendChild(a_floor_lamp);

//2.1.2
lighting_sub_dropdown_2 = document.createElement('div');
lighting_sub_dropdown_2.className = "sub_dropdown";
lighting_dropdown_content_child.appendChild(lighting_sub_dropdown_2);

lighting_dropdown_heading_outdoor = document.createElement('h6')
lighting_dropdown_heading_outdoor.textContent = "Outdoor";
//2.1.2 a
a_street_light = document.createElement('a');
a_street_light.href = "/street_light";
a_street_light.textContent = "Street Light"

a_flood_light = document.createElement('a');
a_flood_light.href = "/flood_light";
a_flood_light.textContent = "Flood Light"

a_highbay_light = document.createElement('a');
a_highbay_light.href = "/highbay_light";
a_highbay_light.textContent = "Highbay Light"

a_garden_ballard = document.createElement('a');
a_garden_ballard.href = "/garden_ballard";
a_garden_ballard.textContent = "Garden Ballard"

//append all lighting a to sub_dropdown
lighting_sub_dropdown_2.appendChild(lighting_dropdown_heading_outdoor);
lighting_sub_dropdown_2.appendChild(a_street_light);
lighting_sub_dropdown_2.appendChild(a_flood_light);
lighting_sub_dropdown_2.appendChild(a_highbay_light);
lighting_sub_dropdown_2.appendChild(a_garden_ballard);


//li smart benche
 a_smart_benche = document.createElement('a');
a_smart_benche.href = "/smart_benches";
a_smart_benche.textContent = "Smart Benches"
li_navbar_smart_benche.appendChild(a_smart_benche);

//li cctv
a_cctv = document.createElement('a');
a_cctv.href = "/cctv"
a_cctv.textContent = "CCTV"
li_navbar_cctv.appendChild(a_cctv);

//li bms
a_bms = document.createElement('a');
a_bms.href = "/bms"
a_bms.textContent = "BMS"
li_navbar_bms.appendChild(a_bms);

//li more
a_more = document.createElement('a');
a_more.textContent = "More";
a_more.className = "nav_bar_dropdown"
more_content = document.createElement('div');
more_content.className = "nav_bar_dropdown_content"

a_aboutus = document.createElement('a');
a_aboutus.href = "/aboutus"
a_aboutus.textContent = "About us"
a_testimony = document.createElement('a');
a_testimony.textContent = "Testimony"
a_testimony.href = "/testimony";
a_contactus = document.createElement('a');
a_contactus.textContent = "Contact us";
a_contactus.href = "/contactus";
more_content.appendChild(a_aboutus);
more_content.appendChild(a_testimony);
more_content.appendChild(a_contactus);

li_navbar_more.appendChild(a_more);
a_more.appendChild(more_content);

// li store locater
a_store_locater = document.createElement('a');
a_store_locater.href = "/store_locater";
a_store_locater.textContent = "Store Locater";
li_navbar_store_locater.appendChild(a_store_locater);

//append li to ul in nav bar
ul_navbar.appendChild(li_navbar_lighting);
ul_navbar.appendChild(li_navbar_smart_benche);
ul_navbar.appendChild(li_navbar_cctv);
ul_navbar.appendChild(li_navbar_bms);
ul_navbar.appendChild(li_navbar_more);
ul_navbar.appendChild(li_navbar_store_locater);

//append ul to nav bar
navbar.appendChild(ul_navbar);

//append child to main bar
container_main_bar.appendChild(main_bar_logo);
container_main_bar.appendChild(navbar);

