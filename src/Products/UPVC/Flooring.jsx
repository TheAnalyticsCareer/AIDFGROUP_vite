
// import React, { useState, useEffect, useRef } from "react";
// import "./Flooring.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiDownload } from "react-icons/fi";

// // Image Imports
// import heroImage from "./img/skirting/heroImg2.jpg";
// import laminateImage from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
// import spcImage from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
// import engineeredImage from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";
// import hardwoodImage from "./img/flooring/hardwood-coswick-herringbone-collection-1.webp";
// import bambooImage from "./img/flooring/bamboo -flooring.jpg";
// import deckingImage from "./img/flooring/decking-wood.jpg";
// import thermoPineImage from "./img/flooring/thermopine.jpg";

// import product1 from "./img/flooring/engineers-laminated-flooring-500x500.webp";
// import product2 from "./img/flooring/black-oak-wood-500x500.webp";
// import product3 from "./img/flooring/laminate-flooring-500x500.webp";
// import product4 from "./img/flooring/laminate wooden flooring.webp";
// import product5 from "./img/flooring/glossy.webp";
// import product6 from "./img/flooring/oak wood wooden.webp";
// import product7 from "./img/flooring/glossy2.webp";
// import product8 from "./img/flooring/herinbong-laminate-flooring-500x500.webp";
// import product9 from "./img/flooring/engineered-flooring-500x500.webp";
// import product10 from "./img/flooring/african-mahogany-engineered-wood-flooring-500x500.webp";
// import product11 from "./img/flooring/cumaru-500x500.webp";
// import product12 from "./img/flooring/dussie-engineered-flooring-500x500.webp";
// import product13 from "./img/flooring/american-walnut-engineered-flooring-500x500.webp";
// import product14 from "./img/flooring/jatoba-engineered-wood-laminate-flooring-500x500.webp";
// import product15 from "./img/flooring/chinese-birch-engineered-flooring-500x500.webp";
// import product16 from "./img/flooring/dark brown.webp";
// import product17 from "./img/flooring/mahagony-engineered-wood-flooring-500x500.webp";
// import product18 from "./img/flooring/sucupira-engineered-flooring-500x500.webp";
// import product19 from "./img/flooring/tigerwood-engineered-flooring-500x500.webp";
// import product20 from "./img/flooring/canadian-maple-engineered-flooring-500x500.webp";
// import product21 from "./img/flooring/walnut-engineered-wood-500x500.webp";
// import product22 from "./img/flooring/engineered-flooring-500x500.webp";
// import product23 from "./img/flooring/burma-teak-engineered-flooring-500x500.webp";
// import product24 from "./img/flooring/oak wood matte 2.webp";
// import product25 from "./img/flooring/engineers-wood-flooring-500x500.webp";
// import product26 from "./img/flooring/bamboo-hardwood-flooring-500x500.webp";
// import product27 from "./img/flooring/hard-wood-flooring-500x500.webp";
// import product28 from "./img/flooring/mahagony-solid-hardwood-flooring-500x500.webp";
// import product29 from "./img/flooring/solid-wood-junkers-hardwood-flooring-500x500.webp";
// import product30 from "./img/flooring/bamboo-hardwood-flooring-500x500.webp";
// import product31 from "./img/flooring/wooden-deck-flooring-500x500.webp";
// import product32 from "./img/flooring/ipe-wooden-decking-500x500.webp";
// import product33 from "./img/flooring/wpc-deck-flooring-500x500.webp";



// import p30  from "./img/flooring/bamboo-hardwood-flooring.pdf";
// import p3  from "./img/flooring/laminate-flooring.pdf";










// const Flooring = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const categoryRefs = {
//     all: useRef(null),
//     laminate: useRef(null),
//     spc: useRef(null),
//     engineered: useRef(null),
//     hardwood: useRef(null),
//     bamboo: useRef(null),
//     decking: useRef(null),
//     thermoPine: useRef(null),
//   };

//   const myFormik = useFormik({
//     initialValues: {
//       name: "",
//       phone: "",
//       email: "",
//       price: "",
//       height: "",
//       material: "",
//       finish: "",
//     },
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       try {
//         await axios.post(`http://localhost:5588/submit-quote`, values);
//         myFormik.resetForm();
//         toast.success("Request Submitted Successfully");
//         closeModal();
//       } catch (err) {
//         toast.error("Error While Submitting Request");
//         console.error("Submission error:", err);
//       } finally {
//         setIsSubmitting(false);
//       }
//     },
//   });

//   const scrollToCategory = (category) => {
//     setActiveCategory(category);
//     categoryRefs[category].current.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//    const downloadBrochure = (productName) => {
//       // Find the product by name
//       const productKey = Object.keys(products).find(
//         key => products[key].name === productName
//       );
      
//       if (productKey && products[productKey].brochure) {
//         // Open the PDF in a new tab
//         window.open(products[productKey].brochure, '_blank');
//       } else {
//         // Fallback if no PDF is found
//         toast.error("Brochure not available for this product");
//       }
//     };

//   useEffect(() => {
//     if (isModalOpen && currentProduct) {
//       myFormik.setFieldValue("name", currentProduct.name);
//       myFormik.setFieldValue("price", currentProduct.price);

//       const thicknessDetail = currentProduct.details.find(d => d.label === "Thickness");
//       const materialDetail = currentProduct.details.find(d => d.label === "Material");
//       const finishDetail = currentProduct.details.find(d => d.label === "Finish");

//       myFormik.setFieldValue("thickness", thicknessDetail ? thicknessDetail.value : "");
//       myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
//       myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
//     }
//   }, [isModalOpen, currentProduct]);

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-in",
//       once: true,
//     });
//   }, []);

//   const categories = [
    
//     { id: "oak", name: "Oak Flooring", image: laminateImage },
//     { id: "glossyEngineered", name: "Glossy Engineered Flooring", image: engineeredImage },
//     { id: "spcIpe", name: "SPC/IPE Flooring", image: spcImage },
//   ];

//   const products = {


//     // laminate flooring
    
//     product1: {
//       id: 'p1',
//       name: "Engineers Laminated Flooring",
//       price: "₹298 / sq ft",
//       image: product1, // replace with actual image import or path
//       category: "laminate",
//       description: "Backed by a diligent team of skilled designers, we are engaged in offering clients high quality Engineers Laminated Flooring. Extensively used in homes, kitchens, offices and several other places, this laminated flooring is widely treasured in the market due to its captivating design. Available in different designs and sizes, this laminated flooring can be availed by clients in varied designs. The offered laminated flooring is designed using the best quality basic material and modern technology at vendors’ end.",
//       details: [
//         { label: "Material", value: "Solid Wood" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Color", value: "Dark Brown" },
//         { label: "Design", value: "Plain" },
//         { label: "Surface Finish", value: "Matte" },
//         { label: "Length", value: "Up to 2400 mm" },
//         { label: "Thickness", value: "12-15 mm" },
//         { label: "Usage", value: "Household, Commercial, Outdoor, Sports" }
//       ]
//     },
//     product2: {
//       id: 'p2',
//       name: "Black Oak Wood Laminate Flooring",
//       price: "₹120 / Cubic Feet",
//            brochure: p3,
//       image: product2, // Replace with actual image import or path
//       category: "laminate",
//       description: "We have introduced a new range of Black Oak Wood, which is designed by industry certified vendors. Our offered products are highly admired in the market due to their strong nature and longer working life. To maintain industry standards, our products are finished at industry approved manufacturing unit. Due to high demand, our vendors make these products in diverse specifications that meet on clients demands.",
//       details: [
//         { label: "Thickness", value: "3/8 Inch" },
//         { label: "Shape", value: "Rectangular" },
//         { label: "Usage/Application", value: "Window Frame" },
//         { label: "Color", value: "Black" },
//         { label: "Material", value: "Oak Wood" },
//         { label: "Surface Treatment", value: "Color Plated" },
//         { label: "Finish", value: "Polished" }
//       ]
//     },
//     product3: {
//       id: 'p3',
//       name: "Wood Laminate Flooring",
//       price: "₹110 / sq ft",
//        brochure: p3,
//       image: product3, // Replace with actual image import or path
//       category: "laminate",
//       description: "Laminate Flooring offers an ultra realistic wood grain finish with premium attached underlayment and PermaMax surface protection for double the wear, double the durability of ordinary laminates. ScratchGuard Advanced provides superior scratch and scuff protection. XP is an AC4 rated product, approved for general commercial traffic; suitable for your home, office, or other light commercial applications such as boutiques and hotel rooms. This rating was designated after being tested for resistance to abrasion, impact, staining and burns.",
//       details: [
//         { label: "Color", value: "Brown" },
//         { label: "Finish", value: "Glossy, Matte" },
//         { label: "Usage", value: "Household, Commercial" },
//         { label: "Thickness", value: "12 mm" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Usage/Application", value: "Residential" },
//         { label: "Material", value: "Wood" }
//       ]
//     },
//     product4: {
//       id: 'p4',
//       name: "Laminate Wooden Flooring",
//       price: "₹65 / sq ft",
//       image: product4, // Replace with actual image import or path
//       category: "laminate",
//       description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//       details: [
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Brown" },
//         { label: "Design", value: "Modern" },
//         { label: "Surface Finish", value: "Matte" },
//         { label: "Density", value: "850-920kg/M3" },
//         { label: "Material", value: "Wood" },
//         { label: "Thickness", value: "7-15 mm" },
//         { label: "Usage", value: "Household, Commercial" }
//       ]
//     },
//     product5: {
//       id: 'p5',
//       name: "Glossy Wood Laminate Flooring",
//       price: "₹120 / sq ft",
//         brochure: p3,
//       image: product5, // Replace with actual image import or path
//       category: "laminate",
//       description: "Creates a startling level of realism as the surface of the floor matches the pattern underneath it. Remember to complete your project you'll need Underlay, Trims and Threshold Bars.",
//       details: [
//         { label: "Color", value: "Brown" },
//         { label: "Design", value: "Plain" },
//         { label: "Usage", value: "Household, Commercial" },
//         { label: "Length", value: "1285 mm" },
//         { label: "Usage/Application", value: "Residential" },
//         { label: "Surface Finish", value: "Glossy" },
//         { label: "Thickness", value: "10 mm" },
//         { label: "Material", value: "Wood" },
//         { label: "Pack Coverage", value: "1.73 m" },
//         { label: "Pack Quantity", value: "7" },
//         { label: "Colour Family", value: "Medium Browns" },
//         { label: "Certifications Met", value: "FSC C018728" },
//         { label: "Finish", value: "Super Textured" },
//         { label: "Years Guaranteed", value: "30" },
//         { label: "Fitting Mechanism", value: "Rapid Fit" },
//         { label: "Brand", value: "Wickes" },
//         { label: "Type", value: "Laminate" },
       
//       ]
//     },
//     product6: {
//       id: 'p6',
//       name: "Oak Wood Wooden Laminate Flooring",
//       price: "₹85 / sq ft",
//       image: product6, // Replace with actual image import or path
//       category: "laminate",
//       description: "We are the trader, wholesaler and supplier of Laminate Flooring that is a new age flooring material, capable of upgrading the floor space. Renowned for its elegant design and smooth finish, this flooring is designed using the best quality basic material and advanced technology at vendors’ end in accordance with industry standards. Moreover, this flooring is offered in varied specifications and designs so as to fulfill exact the needs of our clients.",
//       details: [
//         { label: "Wear Resistance", value: "Yes" },
//         { label: "Surface Finish", value: "Matt Surface" },
//         { label: "Thickness", value: "8-12 mm" },
//         { label: "Usage", value: "Household, Commercial" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Color", value: "Wooden" },
//         { label: "Material", value: "Oak Wood" }
//       ]
//     },
//     product7: {
//       id: 'p7',
//       name: "Glossy Laminate Wooden Flooring",
//       price: "₹85 / sq ft",
//       image: product7, // Replace with actual image import or path
//       category: "laminate",
//       description: "As a quality-oriented organization, we are focused to provide our clients an excellent quality Wooden Flooring. The offered flooring is designed using the best quality basic material and advanced technology by our vendors’ experts. In addition to this, our provided flooring is suited for use in areas like living rooms, conference rooms, hotels and other areas. Clients can avail this flooring from us at nominal prices.",
//       details: [
//         { label: "Color", value: "Wooden" },
//         { label: "Design", value: "Plain" },
//         { label: "Material", value: "Wooden" },
//         { label: "Width", value: "125-300 mm" },
//         { label: "Length", value: "2200 mm" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Surface Finish", value: "Glossy" },
//         { label: "Thickness", value: "6-20 mm" }
//       ]
//     },
//     product8: {
//       id: 'p8',
//       name: "Herinbong Laminate Flooring",
//       price: "₹115 / sq ft",
//       image: product8, // Replace with actual image import or path
//       category: "laminate",
//       description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//       details: [
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Gray" },
//         { label: "Design", value: "Modern" },
//         { label: "Surface Finish", value: "Matte" },
//         { label: "Thickness", value: "8 mm" },
//         { label: "Material", value: "Oak Wood" },
//         { label: "Shape", value: "Square" },
//         { label: "Usage", value: "Household, Commercial" }
//       ]
//     },

//     //Engineered Flooring

//     product9: {
//   id: 'p9',
//   name: "Engineered Brazilian Flooring",
//   price: "₹89 / sq ft",
//   image: product9, // Replace with actual image import or path
//   category: "engineered",
//   description: "Engineered flooring range is perfect for contempory living. Tough and durable, engineered wood flooring is hard wearing enough for any home, adding warmth and character to any room.We offer a range of products in brushed, oiled and natural finishes.",
//   details: [
//     { label: "Surface Finish", value: "Glossy, Matte, Satin Matte, Rustic" },
//     { label: "Wear Resistance", value: "Yes" },
//     { label: "Usage", value: "Indoor, Household" },
//     { label: "Wood Flooring Type", value: "Teak, Ipe, Oak, Balsamo, Birch" },
//     { label: "Thickness", value: "2 inch - 5 inch" }
//   ]
// },
// product10: {
//   id: 'p10',
//   name: "African Mahogany Glossy Engineered Flooring",
//   price: "₹171 / sq ft",
//   image: product10, // Replace with actual image import or path
//   category: "engineered",
//   description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of African Mahogany Engineered Wood Flooring. These products are tested as per the international standards of quality before it is delivered to our clients",
//   details: [
//     { label: "Type of Wood Plank", value: "African Mahogany" },
//     { label: "Wear Resistance", value: "Yes" },
//     { label: "Thickness", value: "5-15 mm" },
//     { label: "Material", value: "Solid Wood" },
//     { label: "Function", value: "Waterproof, Thermal Insulation" },
//     { label: "Moisture Content", value: "9-12%" }
//   ]
// },
// product11: {
//   id: 'p11',
//   name: "Cumaru Glossy Engineered Flooring",
//   price: "₹112 / sq ft",
//   image: product11, // Replace with actual image import or path
//   category: "engineered",
//   description: "Our company is highly rated in providing Cumaru Engineered Flooirng to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
//   details: [
//     { label: "Brand", value: "Annapurna" },
//     { label: "Color", value: "Brown" },
//     { label: "Wood Flooring Type", value: "Teak Wood" },
//     { label: "Usage/Application", value: "Indoor" },
//     { label: "Stain Resistance", value: "Yes" },
//     { label: "Coverage Area", value: "Customize" },
//     { label: "Minimum Order Quantity", value: "500 sq ft" }
//   ]
// },
// product12: {
//   id: 'p12',
//   name: "Matte Dussie Engineered Flooring",
//   price: "₹120 / sq ft",
//   image: product12, // Replace with actual image import or path
//   category: "engineered",
//   description: "Used widely in various luxury homes, resorts and hotels, the offered Dussie Engineered Flooring is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
//   details: [
//     { label: "Type of Wood", value: "Oak" },
//     { label: "Color", value: "Red" },
//     { label: "Material", value: "Solid Wood" },
//     { label: "Density", value: "0.85-1.07 g/cm³" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Thickness", value: "15 mm" },
//     { label: "Surface Finish", value: "Matte" }
//   ]
// },
// product13: {
//   id: 'p13',
//   name: "Polished Glossy Engineered Flooring",
//   price: "₹385 / sq ft",
//   image: product13, // Replace with actual image import or path
//   category: "engineered",
//   description: "We are enlisted amongst the trusted names in the industry engaged in offering a superb quality array of American Walnut Engineered Flooring. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
//   details: [
//     { label: "Tile Size", value: "50 cm x 50 cm" },
//     { label: "Pile Height", value: "3.2/4.0 mm ±5%" },
//     { label: "Usage", value: "Indoor, Outdoor" },
//     { label: "Finishing", value: "Glossy, Polished" },
//     { label: "Wood Flooring Type", value: "Walnut Flooring" },
//     { label: "Thickness", value: "7 mm" }
//   ]
// },
// product14: {
//   id: 'p14',
//   name: "Jatoba Glossy Engineered Flooring",
//   price: "₹110 / sq ft",
//   image: product14, // Replace with actual image import or path
//   category: "engineered",
//   description: "Our company is highly rated in providing Jatoba Engineered Flooring to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
//   details: [
//     { label: "Thickness", value: "14 mm" },
//     { label: "Tile Size", value: "25 x 100 cm" },
//     { label: "Pile Height", value: "2.5 mm - 5 mm" },
//     { label: "Pile Weight", value: "21 oz/yd²" },
//     { label: "Usage", value: "Outdoor, Household" },
//     { label: "Features", value: "Eco friendly" },
//     { label: "Material", value: "Wood" }
//   ]
// },
// product15: {
//   id: 'p15',
//   name: "Chinese Birch Polished Engineered Flooring",
//   price: "₹110 / sq ft",
//   image: product15, // Replace with actual image import or path
//   category: "engineered",
//   description: "Used widely in various luxury homes, resorts and hotels, the offered Chinese Birch Engineered Flooring is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
//   details: [
//     { label: "Material", value: "Oak Wood" },
//     { label: "Moisture", value: "7-9%" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Thickness", value: "12 mm" },
//     { label: "Usage", value: "Household, Commercial" },
//     { label: "Surface Finish", value: "Polished" },
//     { label: "Color", value: "Brown" }
//   ]
// },
// product16: {
//   id: 'p16',
//   name: "Dark Brown Engineered Flooring",
//   price: "₹285 / sq ft",
//   image: product16, // Replace with actual image import or path
//   category: "engineered",
//   description: "With years of experience in this domain, we have carved a niche for ourselves, in offering a wide assortment of Engineered Flooring. Widely used in apartments, offices and homes, this flooring is designed at vendors’ end using high grade basic material and innovative technology. The offered flooring is provided in variegated designs and specifications, as per the needs of our clients. Furthermore, we provide this flooring at most reasonable prices to our clients.",
//   details: [
//     { label: "Material", value: "Wood" },
//     { label: "Surface Finish", value: "Embossed" },
//     { label: "Usage", value: "Household, Commercial, Sports" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Color", value: "Dark Brown" },
//     { label: "Usage/Application", value: "Residential" },
//     { label: "Thickness", value: "8-12 mm" }
//   ]
// },
// product17: {
//   id: 'p17',
//   name: "Mahogany Glossy Engineered Flooring",
//   price: "₹285 / sq ft",
//   image: product17, // Replace with actual image import or path
//   category: "engineered",
//   description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Santos Mahagony Engineered Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
//   details: [
//     { label: "Building Style", value: "Ground Floor" },
//     { label: "Finishing", value: "Polished" },
//     { label: "Color", value: "Brown" },
//     { label: "Thickness", value: "12 mm" },
//     { label: "Material", value: "Wood" },
//     { label: "Deck Flooring Area", value: "Home" },
//     { label: "Surface Finish", value: "Glossy" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product18: {
//   id: 'p18',
//   name: "Sucupira Glossy Engineered Flooring",
//   price: "₹160 / sq ft",
//   image: product18, // Replace with actual image import or path
//   category: "engineered",
//   description: "We are enlisted amongst the trusted names in the industry engaged in offering superb quality array of Jatoba Solid Wood. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
//   details: [
//     { label: "Thickness", value: "25 mm" },
//     { label: "Usage/Application", value: "Residential" },
//     { label: "Surface Finish", value: "Glossy" },
//     { label: "Color", value: "Red" },
//     { label: "Moisture Content", value: "7~9%" },
//     { label: "Usage", value: "Household, Outdoor, Commercial, Sports" },
//     { label: "Function", value: "Waterproof, Thermal Insulation, Anti-Static, Soundproof" }
//   ]
// },

// product19: {
//   id: 'p19',
//   name: "Tigerwood Polished Engineered Flooring",
//   price: "₹150 / sq ft",
//   image: product19, // Replace with actual image import or path
//   category: "engineered",
//   description: "Our company is highly rated in providing Tigerwood Engineered Flooring to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
//   details: [
//     { label: "Thickness", value: "12 mm" },
//     { label: "Finishing", value: "Polished" },
//     { label: "Surface Finish", value: "Polished" },
//     { label: "Function", value: "Waterproof" },
//     { label: "Usage", value: "Household" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Features", value: "Premium quality, Eco friendly, Sound absorbent" }
//   ]
// },
// product20: {
//   id: 'p20',
//   name: "Canadian Maple Glossy Engineered Flooring",
//   price: "₹160 / sq ft",
//   image: product20, // Replace with actual image import or path
//   category: "engineered",
//   description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Canadian Maple Engineered Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
//   details: [
//     { label: "Thickness", value: "7 mm" },
//     { label: "Core Board", value: "MDF, HDF optional" },
//     { label: "Size Available", value: "199x1218 mm, 170x1218 mm, 148x808 mm" },
//     { label: "Surface Finish", value: "Glossy" },
//     { label: "Tile Size", value: "50cm x 50cm" },
//     { label: "Total Weight", value: "5000g/m2" }
//   ]
// },
// product21: {
//   id: 'p21',
//   name: "Walnut Engineered Wood",
//   price: "₹2000 / Piece",
//   image: product21, // Replace with actual image import or path
//   category: "engineered",
//   description: "We offer an exclusive range of Walnut Engineered Wood. Our products are identified in the market for their features such as fine finish and sturdy construction. These products are completed from supreme raw material, bought from trustworthy vendors of industry. All our precious clientele can easily buy these products in attractive and unique range from us within the committed time period and at nominal prices.",
//   details: [
//     { label: "Shape", value: "Rectangular" },
//     { label: "Grade", value: "Industrial" },
//     { label: "Length", value: "2 to 5 feet" },
//     { label: "Color", value: "Brown" },
//     { label: "Material", value: "Wooden" }
//   ]
// },
// product22: {
//   id: 'p22',
//   name: "Engineered Wood Flooring",
//   price: "₹385 / sq ft",
//   image: product22, // Replace with actual image import or path
//   category: "engineered",
//   description: "We are occupied in offering a wide range of Engineered Wood Flooring to our most valued clientele. Our products are highly accepted in the market due to optimum quality, outstanding performance and long life service. These products are developed using the sophisticated technology and quality assured raw material that is bought from industry known sellers. Due to high demand, we offer our products at very inexpensive prices.",
//   details: [
//     { label: "Area Per Box", value: "1.50 Sqm / 16.14 sq.ft" },
//     { label: "Length", value: "1200 mm" },
//     { label: "Plank Size", value: "120x125x14 mm" },
//     { label: "Top Layer", value: "Single Strip" },
//     { label: "Top Layer Thickness", value: "3.0 mm Veneer" },
//     { label: "Total Thickness", value: "14 mm" }
//   ]
// },
// product23: {
//   id: 'p23',
//   name: "Brown Burma Teak Engineered Flooring",
//   price: "₹375 / sq ft",
//   image: product23, // Replace with actual image import or path
//   category: "engineered",
//   description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of Burma Teak Engineered Flooring. These products are tested as per the international standards of quality before it is delivered to our clients.",
//   details: [
//     { label: "Material", value: "Wooden" },
//     { label: "Type", value: "Interiors Flooring" },
//     { label: "Usage", value: "Construction Industry" },
//     { label: "Color", value: "Brown" },
//     { label: "Wood Flooring Type", value: "Burma Teak" },
//     { label: "Thickness", value: "15 mm" }
//   ]
// },
// product24: {
//   id: 'p24',
//   name: "Oak Wood Matte Engineered Flooring",
//   price: "₹98 / sq ft",
//   image: product24, // Replace with actual image import or path
//   category: "engineered",
//   description: "We are well known trader, wholesaler and supplier of very stylish range of Engineered Flooring. Used in different places like schools, houses, corporate sector, this flooring is procured from the reliable vendors’ of the market in line with industry norms. Moreover, this flooring can be designed in varied sizes and colors as per the needs of our clients. Clients can avail this flooring from us at market-leading prices.",
//   details: [
//     { label: "Density", value: "1.05-1.15 g/cm³" },
//     { label: "Moisture Content", value: "6%-12%" },
//     { label: "Usage", value: "Household, Commercial" },
//     { label: "Material", value: "Oak Wood" },
//     { label: "Surface Finish", value: "Matte" }
//   ]
// },
// product25: {
//   id: 'p25',
//   name: "Engineers Wood Flooring",
//   price: "₹285 / sq ft",
//   image: product25, // Replace with actual image import or path
//   category: "engineered",
//   description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//   details: [
//     { label: "Flooring Type", value: "Wooden" },
//     { label: "Color", value: "Dark Brown" },
//     { label: "Usage/Application", value: "Residential" },
//     { label: "Surface Finish", value: "Matte" },
//     { label: "Finish", value: "Matte" },
//     { label: "Thickness", value: "10-21 mm" },
//     { label: "Pattern", value: "Wood Grain" },
//     { label: "Usage", value: "Household, Commercial" }
//   ]
// },

// //
// product26: {
//   id: 'p26',
//   name: "Bamboo Hardwood Flooring",
//   price: "₹285 / sq ft",
//   image: product26, // Replace with actual image import or path
//   brochure: p30,
//   category: "hardwood",
//   description: "Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc. ",
//   details: [
//     { label: "Color", value: "Carbonized, Strand Woven" },
//     { label: "Wood Flooring Type", value: "Hard Wood" },
//     { label: "Usage/Application", value: "Indoor" },
//     { label: "Surface Finish", value: "Matte" },
//     { label: "Thickness", value: "14mm-15mm" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product27: {
//   id: 'p27',
//   name: "Glossy Brown Hard Wood Flooring",
//   price: "₹117 / sq ft",
//   image: product27, // Replace with actual image import or path
//   category: "hardwood",
//   description: "We take a huge pleasure in the market by offering best and excellent quality array of Hard Wood Flooring. This array is designed by our vendors with the best quality machines and basic materials. They are used for flooring materials. They are tartan along side with many quality norms to keep it as per set quality norms. The cost of this array is very cost effective rates.",
//   details: [
//     { label: "Finish Type", value: "Glossy" },
//     { label: "Wood Flooring Type", value: "Hard Wood" },
//     { label: "Usage/Application", value: "Residential" },
//     { label: "Color", value: "Brown" },
//     { label: "Thickness", value: "7 mm" },
//     { label: "Material", value: "Wood" }
//   ]
// },
// product28: {
//   id: 'p28',
//   name: "Mahogany Solid Hardwood Flooring",
//   price: "₹119 / sq ft",
//   image: product28, // Replace with actual image import or path
//   category: "hardwood",
//   description: "Our company is highly rated in providing Santos Mahagony Solid Exotic Wood Flooring to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
//   details: [
//     { label: "Color", value: "Dark Brown" },
//     { label: "Usage/Application", value: "Residential" },
//     { label: "Surface Finish", value: "Matte" },
//     { label: "Finishing", value: "Polished" },
//     { label: "Thickness", value: "12 mm" },
//     { label: "Material", value: "Solid Wood" },
//     { label: "Usage", value: "Household, Commercial" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product29: {
//   id: 'p29',
//   name: "Solid Wood Junkers Hardwood Flooring",
//   price: "₹150 / sq ft",
//   image: product29, // Replace with actual image import or path
//   category: "hardwood",
//   description: "Beech is one of Europe's most common hardwood species and the excellent strength properties, the uniform structure with white to reddish heartwood and the red-brown grain pattern provide a hard-wearing floor with a classic appearance.This floor is also available as ships decking. The black neoprene strip placed between the boards adds a maritime look to the floor.",
//   details: [
//     { label: "Thickness", value: "8 mm" },
//     { label: "Finish", value: "Glossy" },
//     { label: "Wood Flooring Type", value: "Oak Flooring" },
//     { label: "Surface Finish", value: "Polished" },
//     { label: "Usage", value: "Household, Commercial" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Material", value: "Solid Wood" },
//     { label: "Description", value: "Beech wood offers excellent strength and uniformity, providing a hard-wearing floor with a classic appearance." }
//   ]
// },
// product30: {
//   id: '30',
//   name: "Bamboo Hardwood Flooring",
//   price: "₹285 / sq ft",
//   image: product30, // Replace with actual image import or path
//    brochure: p30,
  
//   category: "bamboo",
//   description: "Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc. ",
//   details: [
//     { label: "Color", value: "Carbonized, Strand Woven" },
//     { label: "Wood Flooring Type", value: "Hard Wood" },
//     { label: "Usage/Application", value: "Indoor" },
//     { label: "Surface Finish", value: "Matte" },
//     { label: "Thickness", value: "14mm-15mm" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product31: {
//   id: 'p31',
//   name: "Wooden Deck Flooring",
//   price: "₹315 / sq ft",
//   image: product31, // Replace with actual image import or path
//   category: "decking",
//   description: "Durable wooden deck flooring with a matte finish, ideal for outdoor applications in commercial buildings.",
//   details: [
//     { label: "Thickness", value: "25 mm" },
//     { label: "Deck Flooring Area", value: "Commercial Building" },
//     { label: "Surface Finish", value: "Matte" },
//     { label: "Color", value: "Teak" },
//     { label: "Usage/Application", value: "Outdoor" },
//     { label: "Minimum Order Quantity", value: "100 sq ft" }
//   ]
// },
// product32: {
//   id: 'p32',
//   name: "IPE Wooden Decking",
//   price: "₹315 / sq ft",
//   image: product32, // Replace with actual image import or path
//   category: "decking",
//   description: "High-quality IPE wooden decking with matte and glossy finishes, ideal for outdoor applications.",
//   details: [
//     { label: "Color", value: "Brown" },
//     { label: "Usage/Application", value: "Outdoor" },
//     { label: "Finish", value: "Matte, Glossy" },
//     { label: "Deck Material", value: "Ipe" },
//     { label: "Grade", value: "Industrial" },
//     { label: "Length", value: "2 to 5 feet" }
//   ]
// },
// product33: {
//   id: 'p33',
//   name: "WPC Deck Flooring",
//   price: "₹249 / sq ft",
//   image: product33, // Replace with actual image import or path
//   category: "decking",
//   description: "Durable and modular WPC (Wood Plastic Composite) deck flooring with interlocking design and multiple surface finishes. Ideal for high-traffic areas and long-term use.",
//   details: [
//     { label: "Thickness", value: "5 mm" },
//     { label: "Surface Finish", value: "Glossy, Matte, Rustic" }
//   ],
//   features: [
//     "Unique durable design where profiles click into each other",
//     "StepUp is made from inserting textile into aluminium retainer",
//     "Installed on the floor with ramps on all four sides",
//     "Only inserts need to be changed after wear — cost-effective long term",
//     "Available in lengths and widths up to 10 feet"
//   ]
// },


















    



















    
    
    
    

    
   
//   };

//   const openModal = (productKey) => {
//     setCurrentProduct(products[productKey]);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const renderProductCard = (productKey) => {
//     const product = products[productKey];
//     return (
//       <div className="flooring-product-card" data-aos="fade-up">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="flooring-product-image"
//         />
//         <div className="flooring-product-content">
//           <h3>{product.name}</h3>
//           <p className="flooring-product-description">{product.description}</p>
//           <div className="flooring-product-price">
//             {product.price}
//           </div>
//           <ul className="flooring-product-details">
//             {product.details.map((detail, index) => (
//               <li key={index}>
//                 <span>{detail.label}:</span> {detail.value}
//               </li>
//             ))}
//           </ul>
//           <div className="flooring-product-actions">
//             <button
//               className="flooring-quote-button"
//               onClick={() => openModal(productKey)}
//             >
//               Get Quote
//             </button>
//             <button
//               className="flooring-brochure-button"
//               onClick={() => downloadBrochure(product.name)}
//             >
//               <FiDownload /> Brochure
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const filteredProducts = activeCategory === "all" 
//     ? Object.keys(products) 
//     : Object.keys(products).filter(key => products[key].category === activeCategory);

//   return (
//     <div className="flooring-component">
//       {/* Hero Banner Section */}
//       <section className="flooring-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Flooring Solutions"
//           className="flooring-hero-image"
//         />
//         <div className="flooring-hero-overlay">
//           <div className="flooring-hero-content">
//             <h1 data-aos="fade-up">Premium Flooring Collections</h1>
//           </div>
//         </div>
//       </section>

//       {/* Category List Section */}
//       <div className="flooring-container">
//         <h2 className="flooring-section-title" data-aos="fade-up">
//           Explore Our Flooring Range
//         </h2>
//         <div className="flooring-category-grid">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               className={`flooring-category-item ${activeCategory === category.id ? 'active' : ''}`}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               onClick={() => scrollToCategory(category.id)}
//             >
//               <div className="flooring-category-image-wrapper">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="flooring-category-image"
//                 />
//               </div>
//               <div className="flooring-category-content">
//                 <h3>{category.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* All Products Section */}
//       <section className="flooring-product-section" ref={categoryRefs.all}>
//         <div className="flooring-container">
//           <h2 className="flooring-section-title" data-aos="fade-up">
//             All Flooring Products
//           </h2>
//           <div className="flooring-product-grid">
//             {Object.keys(products).map(productKey => renderProductCard(productKey))}
//           </div>
//         </div>
//       </section>

//       {/* Category Sections */}
//       {categories.slice(1).map(category => (
//         <section 
//           key={category.id} 
//           className="flooring-product-section" 
//           ref={categoryRefs[category.id]}
//         >
//           <div className="flooring-container">
//             <h2 className="flooring-section-title" data-aos="fade-up">
//               {category.name}
//             </h2>
//             <div className="flooring-product-grid">
//               {Object.keys(products)
//                 .filter(key => products[key].category === category.id)
//                 .map(productKey => renderProductCard(productKey))}
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="flooring-modal-overlay">
//           <div className="flooring-modal-content">
//             <button className="flooring-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="flooring-product-info">
//               <img
//                 src={currentProduct.image}
//                 alt={currentProduct.name}
//                 className="flooring-modal-product-image"
//               />
//               <h3>{currentProduct.name}</h3>
//               <p className="flooring-modal-description">{currentProduct.description}</p>
//               <div className="flooring-modal-price">
//                 {currentProduct.price}
//               </div>
//               <ul className="flooring-modal-specs">
//                 {currentProduct.details.map((detail, index) => (
//                   <li key={index}>
//                     <span>{detail.label}:</span> {detail.value}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="flooring-brochure-button"
//                 onClick={() => downloadBrochure(currentProduct.name)}
//               >
//                 <FiDownload /> Download Brochure
//               </button>
//             </div>
//             <div className="flooring-contact-form">
//               <p className="flooring-contact-message">
//                 We'll contact you shortly with the quote details
//               </p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="flooring-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="flooring-form-input"
//                   />
//                 </div>
//                 <div className="flooring-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="flooring-form-input"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="flooring-submit-button"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting..." : "Submit Request"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       <ToastContainer position="top-center" autoClose={3000} />
//     </div>
//   );
// };

// export default Flooring;


















import React, { useState, useEffect, useRef } from "react";
import "./Flooring.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import laminateImage from "./img/flooring/Red-laminate-floor-color-example-apr19.jpg";
import spcImage from "./img/flooring/Remarkable-Features-of-SPC-Flooring.webp";
import engineeredImage from "./img/flooring/Best-Engineered-Hardwood-Flooring-Brand-Reviews-Comparison-UK.jpg";

// Product images (shortened for brevity)
import product1 from "./img/flooring/american-red-oak-flooring-500x500.webp";
import product2 from "./img/flooring/plain-wooden-flooring-500x500.webp";
import product3 from "./img/flooring/nordic-oak-wood-500x500.webp";
import product4 from "./img/flooring/oak-silver-pearl-wooden-flooring-1000x1000.webp";
import product5 from "./img/flooring/african-mahogany-solid-wooden-flooring-1000x1000.webp";
import product6 from "./img/flooring/russian-oak-wood-flooring-1000x1000.webp";
import product7 from "./img/flooring/oak-golden-pearl-interiors-decorative-flooring-1000x1000.webp";
import product8 from "./img/flooring/oak-wood-flooring-1000x1000.webp";
import product9 from "./img/flooring/sucupira-engineered-flooring-500x500.webp";
import product10 from "./img/flooring/mahagony-engineered-wood-flooring-1000x1000.webp";
import product11 from "./img/flooring/african-mahogany-engineered-wood-flooring-1000x1000.webp";
import product12 from "./img/flooring/american-walnut-engineered-flooring-1000x1000.webp";
import product13 from "./img/flooring/wooden-flooring-500x500.webp";
import product14 from "./img/flooring/cumaru-engineered-flooring-1000x1000.webp";
import product15 from "./img/flooring/canadian-maple-engineered-flooring-1000x1000.webp";
import product16 from "./img/flooring/ipe-wooden-decking-500x500.webp";
import product17 from "./img/flooring/ipe-wooden-flooring-500x500.webp";
import product18 from "./img/flooring/ipe-solid-exotic-wood-flooring-500x500.webp";

















// PDF brochures
import p1 from "./img/flooring/american-red-oak-flooring.pdf";
import p2 from "./img/flooring/wooden-flooring.pdf";
import p9 from "./img/flooring/sucupira-engineered-flooring.pdf";
import p10 from "./img/flooring/santos-mahagony-engineered-wood-flooring.pdf";

const Flooring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Refs for category sections
  const categoryRefs = {
    all: useRef(null),
    oak: useRef(null),
    glossyEngineered: useRef(null),
    spcIpe: useRef(null)
  };

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      price: "",
      height: "",
      material: "",
      finish: "",
    },
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await axios.post(`http://localhost:5588/submit-quote`, values);
        myFormik.resetForm();
        toast.success("Request Submitted Successfully");
        closeModal();
      } catch (err) {
        toast.error("Error While Submitting Request");
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    categoryRefs[category].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const downloadBrochure = (productName) => {
    const productKey = Object.keys(products).find(
      (key) => products[key].name === productName
    );
    
    if (productKey && products[productKey].brochure) {
      window.open(products[productKey].brochure, "_blank");
    } else {
      toast.error("Brochure not available for this product");
    }
  };

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);

      const thicknessDetail = currentProduct.details.find(
        (d) => d.label === "Thickness"
      );
      const materialDetail = currentProduct.details.find(
        (d) => d.label === "Material"
      );
      const finishDetail = currentProduct.details.find(
        (d) => d.label === "Finish"
      );

      myFormik.setFieldValue("thickness", thicknessDetail ? thicknessDetail.value : "");
      myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
      myFormik.setFieldValue("finish", finishDetail ? finishDetail.value : "");
    }
  }, [isModalOpen, currentProduct]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      once: true,
    });
  }, []);

  // Categories for navigation
  const categories = [
    { id: "oak", name: "Oak Flooring", image: laminateImage },
    { id: "glossyEngineered", name: "Glossy Engineered Flooring", image: engineeredImage },
    { id: "spcIpe", name: "SPC/IPE Flooring", image: spcImage },
  ];

  // Products organized by category
  const products = {
    // Oak Flooring products
    product1: {
  id: 'p1',
  name: "American Red Oak Flooring",
  price: "₹430 / sq ft",
 brochure: p1,
  
  image: product1, // Replace this with the actual image import or file path
  category: "oak",
  description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of American Red Oak Flooring. These products are tested as per the international standards of quality before it is delivered to our clients",
  details: [
    { label: "Wood Flooring Type", value: "Red Oak" },
    { label: "Usage/Application", value: "Indoor" },
    { label: "Color", value: "Red" },
    { label: "Layer Thickness", value: "0.6/2mm" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Tile Size", value: "500X500 mm" },
    { label: "Country of Origin", value: "USA" }
  ]
},

product2 : {
  id: 'p2',
  name: "Polished Plain Wooden Flooring",
  price: "₹100 / sq ft",
   brochure: p2,
  image: product2, // Replace with actual image import or file path
  category: "oak",
  description: "In our wide range of products, we are offering our customers best and elite quality assured array of Wooden Flooring. These products are designed with the use of modern machines and skills. These machines are tartan along side with many quality norms to keep it as per set quality norms. They are designed for flooring purpose. They are cost effective to buy too.",
  details: [
    { label: "Usage", value: "Household" },
    { label: "Thickness", value: "7 mm (±5%)" },
    { label: "Surface Finish", value: "Polished" },
    { label: "Material", value: "Wooden" },
    { label: "Total Weight", value: "5000g/m² (±5%)" },
    { label: "Tile Size", value: "50x50 cm" },
    { label: "Country of Origin", value: "Made in India" }
  ]
},
 product3 : {
  id: 'p3',
  name: "Brown Nordic Oak Wood",
  price: "₹650 / sq ft",
  image: product3, // Replace this with the actual image file or import
  category: "oak",
  description: "Backed by a team of our professionals, we are trading, wholesaling and supplying an extensive array of Nordic Oak Wood.",
  details: [
    { label: "Length", value: "2 to 5 feet" },
    { label: "Color", value: "Brown" },
    { label: "Shape", value: "Rectangular, Square" },
    { label: "Grade", value: "Industrial" },
    { label: "Material", value: "Nordic Oak Wood" },
    { label: "Surface Treatment", value: "Color Plated" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product4: {
  id: 'p4',
  name: "Oak Silver Pearl Wooden Flooring",
  price: "₹150 / sq ft",
  image: product4, // Replace this with the actual image file or import
  category: "oak",
  description: "We are instrumental in offering the finest quality range of Oak Silver Pearl Wooden Flooring to our valuable clientele. These products are made at high-tech manufacturing unit that is settled with superior machinery and tools. To maintain the quality, our quality analysts check these products on diverse quality parameters. Moreover, these products are available in diverse specifications that meet on clients demand.",
  details: [
    { label: "Color", value: "Silver" },
    { label: "Usage/Application", value: "Residential" },
    { label: "Thickness", value: "12mm" },
    { label: "Finishing", value: "Polished" },
    { label: "Wood Flooring Type", value: "Oak Flooring, Balsamo Flooring" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product5: {
  id: 'p5',
  name: "African Mahogany Solid Wooden Flooring",
  price: "₹455 / sq ft",
  image: product5, // Replace this with the actual image file or import
  category: "oak",
  description: "Used widely in various luxury homes, resorts and hotels, the offered African Mahogany Solid Wooden Flooring is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
  details: [
    { label: "Finish Type", value: "Glossy" },
    { label: "Color", value: "Wooden" },
    { label: "Usage/Application", value: "Indoor" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Thickness", value: "7–10 mm" },
    { label: "Material", value: "Solid Wood" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product6: {
  id: 'p6',
  name: "Russian Oak Wood Flooring",
  price: "₹430 / sq ft",
  image: product6, // Replace this with the actual image file or import
  category: "oak",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Russian Oak Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price",
  details: [
    { label: "Usage/Application", value: "Residential" },
    { label: "Surface Finish", value: "Matte" },
    { label: "Color", value: "Black" },
    { label: "Function", value: "Anti-Static, Soundproof" },
    { label: "Thickness", value: "10 mm" },
    { label: "Material", value: "Wood" },
    { label: "Country of Origin", value: "Made in India" }
  ]
},

product7: {
  id: 'p7',
  name: "Oak Golden Pearl Interiors Decorative Flooring",
  price: "₹110 / sq ft",
  image: product7, // Replace this with the actual image file or import
  category: "oak",
  description: "We are one of the leading organizations of Oak Golden Pearl Interiors Decorative Flooring that is developed using the highly developed technology and industry approved raw material that is sourced from reliable vendors of market. These products are highly admired in the market for their fine finish. Due to high demand, we offer",
  details: [
    { label: "Color", value: "Brown" },
    { label: "Wood Flooring Type", value: "Oak Golden Pearl Interiors Decorative Flooring" },
    { label: "Usage/Application", value: "Residential" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Finish", value: "Glossy" },
    { label: "Moisture Content", value: "8–12%" },
    { label: "Thickness", value: "8–15 mm" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product8: {
  id: 'p8',
  name: "Oak Wood Flooring",
  price: "₹130 / sq ft",
  image: product8, // Replace this with the actual image file or import
  category: "oak",
  description: "We are engaged in offering a wide range of Oak Wood Flooring to our clients. Our range of all products is widely appreciated by our clients Russian Oak Wood Flooring",
  details: [
    { label: "Wood Flooring Type", value: "Teak Wood" },
    { label: "Usage/Application", value: "Indoor" },
    { label: "Color", value: "Brown" },
    { label: "Finish", value: "Matte" },
    { label: "Wear Resistance", value: "Yes" },
    { label: "Stain Resistance", value: "Yes" },
    { label: "Thickness", value: "12–15 mm" },
    { label: "Material", value: "Wood" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},


    // Glossy Engineered Flooring products
   
   product9: {
 id: 'p18',
  name: "Sucupira Glossy Engineered Flooring",
  price: "₹450 / sq ft",
  image: product9, // Replace with actual image import or path
  brochure: p9,
  
  category: "glossyEngineered",
  description: "We are enlisted amongst the trusted names in the industry engaged in offering superb quality array of Jatoba Solid Wood. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
  details: [
    { label: "Thickness", value: "25 mm" },
    { label: "Usage/Application", value: "Residential" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Color", value: "Red" },
    { label: "Moisture Content", value: "7~9%" },
    { label: "Usage", value: "Household, Outdoor, Commercial, Sports" },
    { label: "Function", value: "Waterproof, Thermal Insulation, Anti-Static, Soundproof" }
  ]
},
product10: {
  id: 'p10',
  name: "Mahogany Glossy Engineered Flooring",
  price: "₹385 / sq ft",
  brochure: p10,
  image: product10, // Replace this with the actual image file or import
  category: "glossyEngineered",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Santos Mahagony Engineered Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
  details: [
    { label: "Building Style", value: "Ground Floor" },
    { label: "Finishing", value: "Polished" },
    { label: "Color", value: "Brown" },
    { label: "Thickness", value: "12 mm" },
    { label: "Material", value: "Wood" },
    { label: "Deck Flooring Area", value: "Home" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Country of Origin", value: "Made in India" }
  ]
},

product11: {
  id: 'p11',
  name: "African Mahogany Glossy Engineered Flooring",
  price: "₹530 / sq ft",
  image: product11, // Replace this with the actual image file or import
  category: "glossyEngineered",
   brochure: p9,
  description: "Owing to our vast experience and acumen in this field, we provide our clients with a varied array of African Mahogany Engineered Wood Flooring. These products are tested as per the international standards of quality before it is delivered to our clients.",
  details: [
    { label: "Type of Wood Plank", value: "African Mahogany" },
    { label: "Wear Resistance", value: "Yes" },
    { label: "Thickness", value: "5-15 mm" },
    { label: "Material", value: "Solid Wood" },
    { label: "Function", value: "Waterproof, Thermal Insulation" },
    { label: "Moisture Content", value: "9-12%" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product12: {
  id: 'p12',
  name: "Polished Glossy Engineered Flooring",
  price: "₹385 / sq ft",
   brochure: p10,
  image: product12, // Replace this with the actual image file or import
  category: "glossyEngineered",
  description: "We are enlisted amongst the trusted names in the industry engaged in offering a superb quality array of American Walnut Engineered Flooring. The offered products are highly demanded in the market for their excellence and perfect finish. We procure the whole range of these products from some of the official sources of the industry.",
  details: [
    { label: "Thickness", value: "7 mm" },
    { label: "Tile Size", value: "50cm x 50cm" },
    { label: "Pile Height", value: "3.2/4.0mm ± 5%" },
    { label: "Usage", value: "Indoor, Outdoor" },
    { label: "Finishing", value: "Glossy, Polished" },
    { label: "Wood Flooring Type", value: "Walnut Flooring" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product13: {
  id: 'p13',
  name: "Jatoba Glossy Engineered Flooring",
  price: "₹550 / sq ft",
  image: product13, // Replace this with the actual image file or import
  category: "glossyEngineered",
   brochure: p9,
  description: "Our company is highly rated in providing Jatoba Engineered Flooring to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
  details: [
    { label: "Pile Height", value: "2.5mm-5mm" },
    { label: "Thickness", value: "14 mm" },
    { label: "Pile Weight", value: "21oz/yd²" },
    { label: "Tile Size", value: "25 x 100 cm" },
    { label: "Usage", value: "Outdoor, Household" },
    { label: "Features", value: "Eco-friendly" },
    { label: "Material", value: "Wood" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product14: {
  id: 'p14',
  name: "Cumaru Glossy Engineered Flooring",
  price: "₹450 / sq ft",
  image: product14, // Replace this with the actual image file or import
  category: "glossyEngineered",
   brochure: p10,
  description: "Our company is highly rated in providing Cumaru Engineered Flooirng to the clients. Offered range is used in offices, restaurants, hospitals, warehouses and many more related areas. This product is presented in different patterns and sizes as per the wants of clients. Solid Wood Flooring is highly admired for quality and long life.",
  details: [
    { label: "Brand", value: "Annapurna" },
    { label: "Color", value: "Brown" },
    { label: "Wood Flooring Type", value: "Teak Wood" },
    { label: "Usage/Application", value: "Indoor" },
    { label: "Stain Resistance", value: "Yes" },
    { label: "Coverage Area", value: "Customize" },
    { label: "Minimum Order Quantity", value: "500 sq ft" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product15: {
  id: 'p15',
  name: "Canadian Maple Glossy Engineered Flooring",
  price: "₹450 / sq ft",
   brochure: p10,
  image: product15, // Replace this with the actual image file or import
  category: "glossyEngineered",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of Canadian Maple Engineered Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
  details: [
    { label: "Thickness", value: "7 mm" },
    { label: "Total Weight", value: "5000 g/m²" },
    { label: "Tile Size", value: "50cm x 50cm" },
    { label: "Size Available", value: "199x1218 mm, 170x1218 mm, 148x808 mm" },
    { label: "Core Board", value: "MDF, HDF optional" },
    { label: "Surface Finish", value: "Glossy" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},




    

    // SPC/IPE Flooring products


    product16: {
  id: 'p16',
  name: "IPE Wooden Decking",
  price: "₹315 / sq ft",
  image: product16, // Replace this with the actual image file or import
      category: "spcIpe",
  description: "Used widely in various luxury homes, resorts and hotels, the offered IPE Decking is one of the most attractive flooring available in the market. Manufactured using the best quality wood and modernized equipment, the flooring offered is highly preferred in the market. Further, its long life, resistance to water and easy maintenance is highly praised in the market.",
  details: [
    { label: "Color", value: "Brown" },
    { label: "Usage/Application", value: "Outdoor" },
    { label: "Finish", value: "Matte, Glossy" },
    { label: "Deck Material", value: "IPE" },
    { label: "Grade", value: "Industrial" },
    { label: "Length", value: "2 to 5 feet" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
product17: {
  id: 'p17',
  name: "IPE Wooden Flooring",
  price: "₹455 / sq ft",
  image: product17, // Replace this with the actual image file or import
      category: "spcIpe",
  description: "We specialize in processing a stylish range of IPE. Extremely rugged in design and has a very graceful look which adds to the beauty, this flooring is designed at vendors’ end using optimum quality basic material and advanced technology. Our quality experts test this flooring on various parameters. Apart from this, offered flooring is available in variegated designs, in order to meet varied demands of clients.",
  details: [
    { label: "Wear Resistance", value: "Yes" },
    { label: "Finishing", value: "Polished" },
    { label: "Thickness", value: "12-20 mm" },
    { label: "Moisture", value: "7-9%" },
    { label: "Pattern", value: "Wood Grain" },
    { label: "Usage", value: "Household" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},

product18: {
  id: 'p18',
  name: "IPE Solid Exotic Wood Flooring",
  price: "₹390 / sq ft",
  image: product18, // Replace this with the actual image file or import
      category: "spcIpe",
  description: "Backed with years of experience, we are sincerely engaged in supplying an exclusive collection of IPE Solid Exotic Wood Flooring. The products presented by us are precisely developed by our workers employing latest tools and mechanism. To cater the genuine requirements of our customers, these Solid Wood Flooring are provided in various color combinations along with customized facilities. One can buy these Solid Wood Flooring at affordable price.",
  details: [
    { label: "Wear Resistance", value: "Yes" },
    { label: "Color", value: "Brown" },
    { label: "Material", value: "Solid Wood" },
    { label: "Finish", value: "Finishing" },
    { label: "Thickness", value: "4-18 mm" },
    { label: "Usage", value: "Household, Commercial" },
    { label: "Country of Origin", value: "Not Specified" }
  ]
},
















  };

  const openModal = (productKey) => {
    setCurrentProduct(products[productKey]);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="flooring-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="flooring-product-image"
        />
        <div className="flooring-product-content">
          <h3>{product.name}</h3>
          <p className="flooring-product-description">{product.description}</p>
          <div className="flooring-product-price">{product.price}</div>
           <ul className="skirting-product-details">
             {product.details.map((detail, index) => (
               <li key={index}>
               <span>{detail.label}:</span> {detail.value}
              </li>
             ))}
          </ul>
          <div className="flooring-product-actions">
            <button
              className="flooring-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            {product.brochure && (
              <button
                className="flooring-brochure-button"
                onClick={() => downloadBrochure(product.name)}
              >
                <FiDownload /> Brochure
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Filter products by category
  const getProductsByCategory = (category) => {
    return Object.keys(products).filter(
      (key) => products[key].category === category
    );
  };

  return (
    <div className="flooring-component">
      {/* Hero Banner Section */}
      <section className="flooring-hero-section">
        <img
          src={heroImage}
          alt="Premium Flooring Solutions"
          className="flooring-hero-image"
        />
        <div className="flooring-hero-overlay">
          <div className="flooring-hero-content">
            <h1 data-aos="fade-up">Premium Flooring Collections</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              High-quality flooring options for every space
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="flooring-container">
        <h2 className="flooring-section-title" data-aos="fade-up">
          Explore Our Flooring Range
        </h2>
        <div className="flooring-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`flooring-category-item ${activeCategory === category.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="flooring-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="flooring-category-image"
                />
              </div>
              <div className="flooring-category-content">
                <h3>{category.name}</h3>
                <p>View Collection</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Category Sections */}
      {categories.map((category) => (
        <section 
          key={category.id} 
          className="flooring-product-section" 
          ref={categoryRefs[category.id]}
        >
          <div className="flooring-container">
            <h2 className="flooring-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="flooring-product-grid">
              {getProductsByCategory(category.id).map((productKey) =>
                renderProductCard(productKey)
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="flooring-modal-overlay">
          <div className="flooring-modal-content">
            <button className="flooring-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="flooring-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="flooring-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="flooring-modal-description">
                {currentProduct.description}
              </p>
              <div className="flooring-modal-price">{currentProduct.price}</div>
              <ul className="flooring-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              {currentProduct.brochure && (
                <button
                  className="flooring-brochure-button"
                  onClick={() => downloadBrochure(currentProduct.name)}
                >
                  <FiDownload /> Download Brochure
                </button>
              )}
            </div>
            <div className="flooring-contact-form">
              <p className="flooring-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="flooring-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="flooring-form-input"
                  />
                </div>
                <div className="flooring-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="flooring-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="flooring-submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Flooring;