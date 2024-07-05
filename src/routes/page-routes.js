// routes/products.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Path-----------

//--Path to folder
const VIEWS = "../views/";
const NAV_LINK = VIEWS + "nav_links/";
const PAGE_PRODUCT = NAV_LINK + "product/";

//--Path to HTML Page
const PAGE_INDEX = VIEWS + "index.html";
const PAGE_ABOUT = NAV_LINK + "aboutus.html";
const PAGE_CONTACT_US = NAV_LINK + "contactus.html";
const PAGE_STORE_LOCATER = NAV_LINK + "store_locater.html";
const PAGE_TESTIMONY = NAV_LINK + "testimony.html";
const PAGE_BMS = NAV_LINK + "bms.html";
const PAGE_CCTV = NAV_LINK + "cctv.html";
const PAGE_SMART_BENCHE = NAV_LINK + "smart_benches.html";

const PAGE_CEILING_LIGHT = PAGE_PRODUCT + "ceiling_light.html";
const PAGE_CEILING_LAMP = PAGE_PRODUCT + "ceiling_lamp.html";
const PAGE_CHANDELIER = PAGE_PRODUCT + "chandelier.html";
const PAGE_FLOOR_LIGHT = PAGE_PRODUCT + "floor_light.html";
const PAGE_FLOOR_LAMP = PAGE_PRODUCT + "floor_lamp.html";
const PAGE_GARDEN_BALLARD = PAGE_PRODUCT + "garden_ballard.html";
const PAGE_HIGHBAY_LIGHT = PAGE_PRODUCT + "highbay_light.html";
const PAGE_STREET_LIGHT = PAGE_PRODUCT + "street_light.html";
const PAGE_TABLE_LAMP = PAGE_PRODUCT + "table_lamp.html";
const PAGE_WALL_LAMP = PAGE_PRODUCT + "wall_lamp.html";
const PAGE_WALL_LIGHT = PAGE_PRODUCT + "wall_light.html";



//PAGE ROUTES--------

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_INDEX));
});

router.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_ABOUT));
});

router.get('/contactus', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_CONTACT_US));
});

router.get('/store_locater', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_STORE_LOCATER));
});

router.get('/testimony', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_TESTIMONY));
});

router.get('/bms', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_BMS));
});

router.get('/cctv', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_CCTV));
});

router.get('/ceiling_light', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_CEILING_LIGHT));
});

router.get('/ceiling_lamp', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_CEILING_LAMP));
});

router.get('/chandelier', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_CHANDELIER));
});

router.get('/flood_light', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_FLOOR_LIGHT));
});

router.get('/floor_lamp', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_FLOOR_LAMP));
});

router.get('/garden_ballard', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_GARDEN_BALLARD));
});

router.get('/highbay_light', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_HIGHBAY_LIGHT));
});

router.get('/smart_benches', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_SMART_BENCHE));
});

router.get('/table_lamp', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_TABLE_LAMP));
});

router.get('/wall_lamp', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_WALL_LAMP));
});

router.get('/wall_light', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_WALL_LIGHT));
});

router.get('/street_light', (req, res) => {
  res.sendFile(path.join(__dirname, PAGE_STREET_LIGHT));
});









module.exports = router;