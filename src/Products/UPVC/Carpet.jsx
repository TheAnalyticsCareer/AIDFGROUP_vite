

// import React, { useState, useEffect, useRef } from "react";
// import "./Carpet.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiDownload } from "react-icons/fi";

// // Image Imports
// import heroImage from "./img/skirting/heroImg2.jpg";
// import wall from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
// import product01 from "./img/carpet/app1-500x500.webp";
// import product2 from "./img/carpet/trump.webp";
// import product3 from "./img/carpet/auditorium-carpet-500x500.webp";
// import product4 from "./img/carpet/cut-pile-carpet-1000x1000.webp";
// import product5 from "./img/carpet/banquet-carpets-500x500.webp";
// import product6 from "./img/carpet/home-theater-carpet-500x500.webp";
// import product7 from "./img/carpet/carpets-for-media-room-500x500.webp";
// import product8 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
// import product9 from "./img/carpet/epoxy-flooring-services-500x500.webp";
// import product10 from "./img/carpet/harmony-carpet-500x500.webp";
// import product11 from "./img/carpet/luxury-carpets-500x500.webp";
// import product12 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
// import product13 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
// import product14 from "./img/carpet/carpet-tile.webp";
// import product15 from "./img/carpet/loop-pile-carpet-500x500.webp";
// import product16 from "./img/carpet/loop-pile-carpets.webp";
// import product17 from "./img/carpet/nylon-carpet-500x500.webp";
// import product18 from "./img/carpet/runway-loop-pile-carpet-500x500.webp";
// import product19 from "./img/carpet/taupe matte.webp";
// import product20 from "./img/carpet/stone nylon.webp";
// import product21 from "./img/carpet/seawater.webp";
// import product22 from "./img/carpet/pewter.webp";
// import product23 from "./img/carpet/arabica.webp";
// import product24 from "./img/carpet/raven.webp";
// import product25 from "./img/carpet/floral.webp"; 
// import product26 from "./img/carpet/nylon polish.webp"; 
// import product27 from "./img/carpet/nylon-highlighting-carpet-500x500.webp"; 
// import product28 from "./img/carpet/nylon grey.webp"; 
// import product29 from "./img/carpet/grey-rectangular.webp"; 
// import product30 from "./img/carpet/pvc carpet.webp";





// import p13  from "./img/carpet/welspun-carpet-tiles.pdf"
// import p14  from "./img/carpet/carpet-tile.pdf"
// import p15  from "./img/carpet/loop-pile-carpet.pdf"
// import p19  from "./img/carpet/nylon welspun.pdf"
// import p20  from "./img/carpet/nylon welspun.pdf"
// import p21 from "./img/carpet/nylon welspun.pdf"




// const Carpet = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const categoryRefs = {
//     all: useRef(null),
//     wallToWall: useRef(null),
//     carpetTile: useRef(null),
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

//   const downloadBrochure = (productName) => {
//     // Find the product by name
//     const productKey = Object.keys(products).find(
//       key => products[key].name === productName
//     );
    
//     if (productKey && products[productKey].brochure) {
//       // Open the PDF in a new tab
//       window.open(products[productKey].brochure, '_blank');
//     } else {
//       // Fallback if no PDF is found
//       toast.error("Brochure not available for this product");
//     }
//   };

//   useEffect(() => {
//     if (isModalOpen && currentProduct) {
//       myFormik.setFieldValue("name", currentProduct.name);
//       myFormik.setFieldValue("price", currentProduct.price);

//       const pileHeightDetail = currentProduct.details.find(d => d.label === "Pile Height");
//       const materialDetail = currentProduct.details.find(d => d.label === "Material");
//       const styleDetail = currentProduct.details.find(d => d.label === "Style");

//       myFormik.setFieldValue("pileHeight", pileHeightDetail ? pileHeightDetail.value : "");
//       myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
//       myFormik.setFieldValue("style", styleDetail ? styleDetail.value : "");
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
   
//     { id: "wallToWall", name: "Wall to Wall Carpet", image: product01 },
//     { id: "carpetTile", name: "Carpet Tile", image: product12 },
//   ];

//   const products = {

//     // wall to wall carpet


//     product1: {
//       id: 'p1',
//       name: "Wall to Wall Carpet Product",
//       price: "₹85 / Square feet",
//       image: product01, // Ensure this image is imported and available
//       category: "wallToWall",
//       description: <ul> <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> </ul> ,
//       details: [
       
//       ]
//     },
//     product2: {
//       id: 'p2',
//       name: "Trump Carpet flooring",
//       price: "₹99 / Square feet",
//       image: product2,
//       category: "wallToWall",
//       description: "Backed with a group of highly talented experts, we are providing wide range of Trump Carpet. These products are developed by vendors using top quality raw material and new techniques. All our products meet with industry standards. Strong in nature our products are highly applauded in market for their features.",
//       details: [
//         { label: "Pile Height", value: "12mm" },
//         { label: "Material", value: "Polyester" },
//         { label: "Size", value: "6x7 Feet" },
//         { label: "Wash Type", value: "Hand Wash" },
//         { label: "Thickness", value: "5-8 mm" },
//         { label: "Country of Origin", value: "Made in India" }

//       ]
//     },
//     product3: {
//       id: 'p3',
//       name: "Polyester Multicolor Auditorium Carpet Flooring",
//       price: "₹82 / Square feet",
//       image: product3,
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Auditorium Carpet Flooring to our clients. Our range of all products is widely appreciated by our clients.",
//       details: [
//         { label: "Usage/Application	", value: "Auditorium" },
//         { label: "Material", value: "Polypropylene" },
//         { label: "Packaging Type	", value: "Roll" },
//         { label: "Usage", value: "Beach Tent, Party, Traditional, Advertising Tent, Wedding, Military, Event, Soprts" },
//         { label: "Length	", value: "10-20 Mtr" },
//         { label: "Thickness", value: "9 mm" },


//       ]
//     },
//     product4: {
//       id: 'p4',
//       name: "Cut Pile Carpet",
//       price: "₹ 120 / sq ft ",
//       image: product4,
//       category: "wallToWall",
//       description: "We are one of the reputed firms ofCut Pile Carpet. Our products are completed using the top quality raw material that is sourced from trustworthy vendors of market. The most modern machines are used to give soft finishing in the product. These products are checked by industry experts. Owing beautiful designs, these products are widely praised in industry. Our products are highly strong and sturdy in nature.",
//       details: [
//         { label: "Usage/Application	", value: "Floor" },
//         { label: "Color", value: "Red" },
//         { label: "Usage	", value: "Commercial" },
//         { label: "Dimension", value: "4 Meter X 30 Meter" },
//         { label: "Thickness", value: "10 mm" },

//       ]
//     },
//     product5: {
//       id: 'p5',
//       name: "Banquet Carpets",
//       price: "₹ 110 / sq ft ",
//       image: product5,
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Banquet Carpets  to our clients. Our range of all products is widely appreciated by our clients.",
//       details: [
//         { label: "Color", value: "Brown" },
//         { label: "Technique	", value: "Handloom" }, 
//         { label: "Material	", value: "Polyester" },
//         { label: "Thickness", value: "4-6 mm" }, 
//         { label: "Length", value: "30 m" },
//         { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer, Tapestry, Exercise" },
//         { label: "Country of Origin", value: "Made in India" }
//       ]
//     },
//     product6: {
//       id: 'p6',
//       name: "Home Theater Carpet",
//       price: "₹ 83 / sq ft ",
//       image: product6,
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Home Theater Carpet  to our clients. Our range of all products is widely appreciated by our clients",
//       details: [
//         { label: "Color", value: "Red" },
//         { label: "Thickness", value: "12 mm" }, 
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Usage/Application	", value: "Home" },
//         { label: "Size", value: "2000 sq ft" },
//         { label: "Shape	", value: "Rectangular" },
//         { label: "Material", value: "Nylon" }



//       ]
//     },
//     product7: {
//       id: 'p7',
//       name: "Home Theater Carpet",
//       price: "₹ 83 / sq ft ",
//       image: product7,
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Home Theater Carpet  to our clients. Our range of all products is widely appreciated by our clients",
//       details: [
//         { label: "Color", value: "Red" },
//         { label: "Thickness", value: "12 mm" }, 
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Usage/Application	", value: "Home" },
//         { label: "Size", value: "2000 sq ft" },
//         { label: "Shape	", value: "Rectangular" },
//         { label: "Material", value: "Nylon" }



//       ]
//     },
//     product8: {
//       id: 'p8',
//       name: "Carpets For Media Room",
//       price: "₹ 82 / sq ft",
//       image: product8,
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Carpets For Media Room to our clients. Our range of all products is widely appreciated by our clients.",
//       details: [
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Red" },
//         { label: "Shape", value: "Custom" },
//         { label: "Thickness", value: "10 - 12 mm" },
//         { label: "Pattern", value: "Printed" },
//         { label: "Wash Type", value: "Machine Wash" },
//         { label: "Material", value: "Polyester" }
//       ]
//     },
    
//     product9: {
//       id: 'p9',
//       name: "Wall To Wall Floor Carpets",
//       price: "₹ 108 / sq ft",
//       image: product9, // Replace with the correct image variable or path
//       category: "wallToWall",
//       description: "We offer premium quality Wall To Wall Floor Carpets designed specifically for hotel applications. These carpets provide both aesthetics and durability, ideal for large-scale installations.",
//       details: [
//         { label: "Usage/Application", value: "Hotel" },
//         { label: "Color", value: "Red" },
//         { label: "Brand", value: "Indian" },
//         { label: "Minimum Order Quantity", value: "1000 sq ft" },
//         { label: "Weight", value: "800 gram" }
//       ]
//     },
//     product10: {
//       id: 'p10',
//       name: "Printed Carpet",
//       price: "₹ 101 / sq ft",
//       image: product10, // Replace with the correct image variable or path
//       category: "wallToWall",
//       description: "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
//       details: [
       
//       ]
//     },
//     product11: {
//       id: 'p11',
//       name: "Polyester Harmony Carpet",
//       price: "₹ 100 / sq ft",
//       image: product11, // Replace with the correct image variable or path
//       category: "wallToWall",
//       description: "Our company is a renowned supplier of Harmony Carpet. These products are highly applauded in the market due to their long life, superior finish, and attractive look. Sourced from reliable vendors, we offer these carpets at affordable prices.",
//       details: [
//         { label: "Usage/Application", value: "Home" },
//         { label: "Color", value: "Green" },
//         { label: "Pattern", value: "Plain" },
//         { label: "Material", value: "Polyester" },
//         { label: "Thickness", value: "2-5 mm" },
//         { label: "Stain Resistent", value: "Yes" }
//       ]
//     },
//     product12: {
//       id: 'p12',
//       name: "Rectangular Polyester Printed Luxury Carpets",
//       price: "₹ 100 / sq ft",
//       image: product12, // Replace with the correct image variable or path
//       category: "wallToWall",
//       description: "We are engaged in offering a wide range of Luxury Carpets to our clients. These carpets are widely appreciated for their elegant design, vibrant color, and premium quality, making them ideal for home, commercial, and hotel use.",
//       details: [
//         { label: "Design", value: "Printed" },
//         { label: "Color", value: "Red" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Shape", value: "Rectangular" },
//         { label: "Material", value: "Polyester" },
//         { label: "Pattern", value: "Printed" },
//         { label: "Usage", value: "Decoration, Commercial, Hotel" },
//         { label: "Thickness", value: "7-11 mm" },
//         { label: "Minimum Order Quantity", value: "100 sq ft" }
//       ]
//     },

// // carpet tile


//     product13: {
//       id: 'p13',
//       name: "Nylon Matte Carpet Tiles",
//       price: "₹ 120 / sq ft",
//       image: product13, // Replace with the correct image variable or path
//       category: "carpetTile",
//       brochure: p13,
//       description: "Nylon Matte Carpet Tiles by Welspun are ideal for office flooring. These tiles feature a durable matte finish, floral patterns, and are water-resistant. Designed for both aesthetics and functionality.",
//       details: [
//         { label: "Tile Size", value: "50 x 50 cm" },
//         { label: "Material", value: "Nylon" },
//         { label: "Tile Thickness", value: "5-6 mm" },
//         { label: "Finish", value: "Matte" },
//         { label: "Box Contains", value: "11 pieces" },
//         { label: "Usage/Application", value: "Office Flooring" },
//         { label: "Color", value: "Midnight" },
//         { label: "Brand Name", value: "Welspun" },
//         { label: "Pattern", value: "Floral" },
//         { label: "Is It Water Resistance", value: "Yes" }
//       ]
//     },
//     product14: {
//       id: 'p14',
//       name: "Nylon or Polypropylene Multicolour Floor Carpet Tiles",
//       price: "₹ 110 / sq ft",
//       image: product14, // Replace with the correct image variable or path
//       brochure: p14,
//       category: "carpetTile",
//       description: "We are engaged in offering a wide range of Floor Carpet Tiles to our clients. These multicolour tiles, made from Nylon or Polypropylene, are known for their durability, elegant polish, and suitability for various commercial and home environments.",
//       details: [
//         { label: "Size", value: "1x2 Feet" },
//         { label: "Surface Finish", value: "Polished" },
//         { label: "Material", value: "Nylon or Polypropylene" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Usage", value: "Office, Conference Room, Meeting Room" },
//         { label: "Pile Height", value: "3-8 mm" },
//         { label: "Pile Weight", value: "450-1200g/sqm" },
//         { label: "Total Height", value: "5-15 mm" },
//         { label: "Country of Origin", value: "Made in India" }
//       ]
//     },
//     product15: {
//       id: 'p15',
//       name: "Loop Pile Carpet",
//       price: "₹ 35 / sq ft",
//       brochure: p15,
//       image: product15, // Replace with the correct image variable or path
//       category: "carpetTile",
//       description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//       details: [
//         { label: "Usage/Application", value: "Floor" },
//         { label: "Thickness", value: "3-8 mm" },
//         { label: "Usage", value: "Home, Decoration, Commercial, Hotel" },
//         { label: "Feature", value: "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria" },
//         { label: "Pile Height", value: "3.2/4.0 mm" },
//         { label: "Total Weight", value: "5000 g/m²" },
//       ]
//     },
//     product16: {
//       id: 'p16',
//       name: "Nylon Loop Pile Carpets",
//       price: "₹ 160 / sq ft",
//       image: product16, // Replace with the correct image variable or path
//       category: "carpetTile",
//       description: "We are a quality conscious organization, offering a broad assortment of Loop Pile Carpet. The offered carpet is highly demanded its fine finish, superb quality and mesmerizing design. Our offered carpet is designed using premium quality basic material and advanced technology at vendors’ end in line with industry standards. We offer this carpet to our clients in different designs, patterns, sizes, colours and styles.",
//       details: [
//         { label: "Color", value: "Brown" },
//         { label: "Usage/Application", value: "Floor" },
//         { label: "Pattern", value: "Printed" },
//         { label: "Material", value: "Nylon" },
//         { label: "Thickness", value: "8 mm" },
//         { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath" }
//       ]
//     },
//     product17: {
//       id: 'p17',
//       name: "Brown Nylon Carpet Tile",
//       price: "₹ 98 / sq ft",
//       image: product17, // Replace with the correct image variable or path
//       category: "carpetTile",
//       description: "Owing to our vast experience in this domain, we are engaged in offering a wide range of Nylon Carpet to our clients. The offered carpet is perfectly designed in line with the latest trends using high-grade nylon and innovative machines at vendors’ end. In addition to this, we provide this carpet in various colors and designs as per the varied demands of our esteemed clients.",
//       details: [
//         { label: "Color", value: "Brown" },
//         { label: "Pattern", value: "Plain" },
//         { label: "Packaging Type", value: "Roll" },
//         { label: "Material", value: "Nylon" },
//         { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer" },
//         { label: "Thickness", value: "5 mm" }
//       ]
//     },
//     product18: {
//       id: 'p18',
//       name: "Runway Loop Pile Carpet",
//       price: "₹ 110 / sq ft",
//       image: product18, // Replace with the correct image variable or path
//       category: "carpetTile",
//       description: "Owing to our expertise of this industry, our company is occupied in offering an extensive range of Runway Loop pile Carpet . These offered products are made by industry vendors, who have rich acquaintance of this field. After manufacturing, they also check the quality on diverse industry parameters to make sure the reliable performance and long working life. Due to robust nature, reliable performance and small prices, these are high demand.",
//       details: [
//         { label: "Usage/Application", value: "Floor" },
//         { label: "Color", value: "Brown" },
//         { label: "Wash Care", value: "Dry clean" },
//         { label: "Technics", value: "Loop" },
//         { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor" },
//         { label: "Features", value: "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria" },
//         { label: "Thickness", value: "12 mm" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Features", value: "Durable nature, Reliable performance, Sturdy design" }
//       ]
//     },
// // 

//     product19: {
//       id: 'p19',
//       name: "Taupe Matte Nylon Carpet Tiles",
//       price: "₹ 110 / sq ft",
//       image: product19, // Replace with the correct image variable or path
//       brochure: p19,
//       category: "carpetTile",
//       description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//       details: [
//         { label: "Tile Size", value: "50 x 50 cm" },
//         { label: "Material", value: "Nylon" },
//         { label: "Tile Thickness", value: "5-6 mm" },
//         { label: "Finish", value: "Matte" },
//         { label: "Box Contains (No of Pieces)", value: "11" },
//         { label: "Color", value: "Taupe" },
//         { label: "Brand Name", value: "Welspun" },
//         { label: "Pattern", value: "Cheque" },
//         { label: "Design", value: "Reflection" },
//         { label: "Is It Water Resistance", value: "Water Resistance" },
//         { label: "Country of Origin", value: "Made in India" }
//       ]
//     },

//     product20: {
//   id: 'p20',
//   name: "Stone Nylon Matte Carpet Tiles",
//   price: "₹ 110 / sq ft",
//   image: product20, // Replace with the correct image variable or path
//   brochure: p20,
//   category: "carpetTile",
//   description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Finish", value: "Matte" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Box Contains (No of Pieces)", value: "8" },
//     { label: "Usage/Application", value: "Commercial Flooring" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Color", value: "Stone" },
//     { label: "Pattern", value: "Plain" },
//     { label: "Design Name", value: "Movement" },
//     { label: "Is It Water Resistance", value: "Water Resistance" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product21: {
//   id: 'p21',
//   name: "Seawater Matte Nylon Carpet Tiles",
//   price: "₹ 110 / sq ft",
//   image: product21, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "We are a leading manufacturer and supplier of Graphic Carpet Tiles that are produced from the highest quality material, by the use of superior technology, that is in line with the industry standards. Keeping in mind the high demand of graphic carpet tiles, we have the largest stocking collection for these series.",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Finish", value: "Matte" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Usage/Application", value: "Commercial Flooring" },
//     { label: "Box Contains (No of Pieces)", value: "8" },
//     { label: "Color", value: "Seawater" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Pattern", value: "Floral" },
//     { label: "Is It Water Resistance", value: "Water Resistance" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product22: {
//   id: 'p22',
//   name: "Pewter Matte Nylon Carpet Tiles",
//   price: "₹ 120 / sq ft",
//   image: product22, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Finish", value: "Matte" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Usage/Application", value: "Commercial Flooring" },
//     { label: "Box Contains (No of Pieces)", value: "11" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Color", value: "Pewter" },
//     { label: "Pattern", value: "Cheque" },
//     { label: "Is It Water Resistance", value: "Non Water Resistance" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product23: {
//   id: 'p23',
//   name: "Arabica Matte Nylon Carpet Tiles",
//   price: "₹ 110 / sq ft",
//   image: product23, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "We are a leading manufacturer and supplier of Nylon Carpet Tiles that are produced from the highest quality material, by the use of superior technology, that is in line with the industry standards. Keeping in mind the high demand of graphic carpet tiles, we have the largest stocking collection for these series.",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Finish", value: "Matte" },
//     { label: "Usage/Application", value: "Office Flooring" },
//     { label: "Box Contains (No of Pieces)", value: "8" },
//     { label: "Color", value: "Arabica" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Is It Water Resistance", value: "Water Resistance" },
//     { label: "Number Of Piece In A Box", value: "8" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product24: {
//   id: 'p24',
//   name: "Raven Matte Nylon Carpet Tiles",
//   price: "₹ 130 / sq ft",
//   image: product24, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "Raven Matte Nylon Carpet Tiles by Welspun are designed for premium office flooring. These tiles feature a sophisticated Raven color, a smooth matte finish, and excellent water resistance for long-lasting performance.",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Finish", value: "Matte" },
//     { label: "Box Contains (No of Pieces)", value: "4" },
//     { label: "Usage/Application", value: "Office Flooring" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Color", value: "Raven" },
//     { label: "Pattern", value: "Plain" },
//     { label: "Is It Water Resistance", value: "Water Resistance" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },

// //
// product25: {
//   id: 'p25',
//   name: "Floral Nylon Polished Carpet Tiles",
//   price: "₹ 120 / sq ft",
//   image: product25, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "We are engaged in offering a wide range of Welspun Carpet Tiles  to our clients. Our range of all products is widely appreciated by our clients",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm, 1x1 Feet" },
//     { label: "Material", value: "Nylon" },
//     { label: "Surface Finish", value: "Polished" },
//     { label: "Tile Design", value: "Floral" },
//     { label: "Color", value: "Iron" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Design", value: "Movement" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product26: {
//   id: 'p26',
//   name: "Nylon Polished Carpet Tiles",
//   brochure: p21,
//   price: "₹ 110 / sq ft",
//   image: product26, // Replace with the correct image variable or path
//   category: "carpetTile",
//   description: "We are engaged in offering a wide range of   Welspun Carpet Tiles to our clients. Our range of all products is widely appreciated by our clients",
//   details: [
//     { label: "Size", value: "1x2 Feet, 50 x 50 cm" },
//     { label: "Material", value: "Nylon" },
//     { label: "Surface Finish", value: "Polished" },
//     { label: "Color", value: "Iron" },
//     { label: "Tile Thickness", value: "5-6 mm" },
//     { label: "Brand Name", value: "Welspun" },
//     { label: "Usage/Application", value: "Commercial Spaces" }
//   ]
// },
// product27: {
//   id: 'p27',
//   name: "Nylon Highlighting Carpet",
//   price: "₹ 110 / sq ft",
//   image: product27, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "We are highly engaged in supplying a wide gamut of Nylon Highlighting Carpet. The offered carpet is crafted by our vendors’ experts using topmost basic material with the aid of innovative technology in adherence with industry norms. Our provided carpet is available in different styles and designs as per demands of our valuable clients. Made with handspun, hightwist ghazni wool for unique texture for added interest, this carpet is perfect for any contemporary setting.",
//   details: [
//     { label: "Design", value: "Plain" },
//     { label: "Type", value: "Nylon Highlighting Carpet" },
//     { label: "Material", value: "Nylon" },
//     { label: "Thickness", value: "5 mm" },
//     { label: "Feature", value: "Anti-Slip, Anti-Bacteria" },
//     { label: "Usage", value: "Home, Commercial, Hotel" },
//     { label: "Country of Origin", value: "Made in India" }
//   ]
// },
// product28: {
//   id: 'p28',
//   name: "Nylon Gray Floor Carpet Tiles",
//   price: "₹ 110 / sq ft",
//   image: product28, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
//   details: [
//     { label: "Tile Size", value: "50 x 50 cm" },
//     { label: "Usage/Application", value: "Commercial Flooring" },
//     { label: "Material", value: "Nylon" },
//     { label: "Color", value: "Gray" },
//     { label: "Size", value: "50 x 50 cm" },
//     { label: "Thickness", value: "6 - 8 mm" },
//     { label: "Packaging Type", value: "Roll" },
//     { label: "Usage", value: "Home, Decoration, Commercial, Hotel" }
//   ]
// },
// product29: {
//   id: 'p29',
//   name: "Grey Rectangular Nylon Carpet",
//   price: "₹ 112 / sq ft",
//   image: product29, // Replace with the correct image variable or path
//   brochure: p21,
//   category: "carpetTile",
//   description: "Owing to our extensive years of industry experience and market understanding, we are providing a wide gamut of Nylon Carpet. We offer this flooring with sanitised treatment that provides anti-bacterial evaluation and prevention of other harmful organisms. Our offered flooring is uniquely designed using the best quality basic material and innovative technology at vendors’ end. Moreover, we provide this flooring to our clients at market leading prices.",
//   details: [
//     { label: "Color", value: "Grey" },
//     { label: "Shape", value: "Rectangular" },
//     { label: "Size", value: "4x6 feet" },
//     { label: "Material", value: "Nylon" },
//     { label: "Thickness", value: "5 mm" },
//     { label: "Use", value: "Bedroom, Commercial, Decorative, Home, Hotel" }
//   ]
// },
// product30: {
//   id: 'p30',
//   name: "PVC Carpet Tiles",
//   price: "₹ 75 / sq ft",
//   brochure: p21,
//   image: product30, // Replace with the correct image variable or path
//   category: "carpetTile",
//   description: "Modular Carpet and Joints Hightlighting.",
//   details: [
//     { label: "Thickness", value: "6 - 8 mm" },
//     { label: "Usage/Application", value: "Home" },
//     { label: "Material", value: "PVC" },
//     { label: "Shape", value: "Tiles" },
//     { label: "Finish", value: "Mosaic" },
//     { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Exercise, Auto" }
//   ]
// }











































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
//       <div className="carpet-product-card" data-aos="fade-up">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="carpet-product-image"
//         />
//         <div className="carpet-product-content">
//           <h3>{product.name}</h3>
//           <p className="carpet-product-description">{product.description}</p>
//           <div className="carpet-product-price">
//             {product.price}
//           </div>
//           <ul className="carpet-product-details">
//             {product.details.map((detail, index) => (
//               <li key={index}>
//                 <span>{detail.label}:</span> {detail.value}
//               </li>
//             ))}
//           </ul>
//           <div className="carpet-product-actions">
//             <button
//               className="carpet-quote-button"
//               onClick={() => openModal(productKey)}
//             >
//               Get Quote
//             </button>
//             <button
//               className="carpet-brochure-button"
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
//     <div className="carpet-component">
//       {/* Hero Banner Section */}
//       <section className="carpet-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Carpet Solutions"
//           className="carpet-hero-image"
//         />
//         <div className="carpet-hero-overlay">
//           <div className="carpet-hero-content">
//             <h1 data-aos="fade-up">Premium Carpet Collections</h1>
//           </div>
//         </div>
//       </section>

//       {/* Category List Section */}
//       <div className="carpet-container">
//         <h2 className="carpet-section-title" data-aos="fade-up">
//           Explore Our Carpet Range
//         </h2>
//         <div className="carpet-category-grid">
//           {categories.map((category, index) => (
//             <div
//               key={category.id}
//               className={`carpet-category-item ${activeCategory === category.id ? 'active' : ''}`}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               onClick={() => scrollToCategory(category.id)}
//             >
//               <div className="carpet-category-image-wrapper">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="carpet-category-image"
//                 />
//               </div>
//               <div className="carpet-category-content">
//                 <h3>{category.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

     

//       {/* Category Sections */}
//       {categories.slice(1).map(category => (
//         <section 
//           key={category.id} 
//           className="carpet-product-section" 
//           ref={categoryRefs[category.id]}
//         >
//           <div className="carpet-container">
//             <h2 className="carpet-section-title" data-aos="fade-up">
//               {category.name}
//             </h2>
//             <div className="carpet-product-grid">
//               {Object.keys(products)
//                 .filter(key => products[key].category === category.id)
//                 .map(productKey => renderProductCard(productKey))}
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="carpet-modal-overlay">
//           <div className="carpet-modal-content">
//             <button className="carpet-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="carpet-product-info">
//               <img
//                 src={currentProduct.image}
//                 alt={currentProduct.name}
//                 className="carpet-modal-product-image"
//               />
//               <h3>{currentProduct.name}</h3>
//               <p className="carpet-modal-description">{currentProduct.description}</p>
//               <div className="carpet-modal-price">
//                 {currentProduct.price}
//               </div>
//               <ul className="carpet-modal-specs">
//                 {currentProduct.details.map((detail, index) => (
//                   <li key={index}>
//                     <span>{detail.label}:</span> {detail.value}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="carpet-brochure-button"
//                 onClick={() => downloadBrochure(currentProduct.name)}
//               >
//                 <FiDownload /> Download Brochure
//               </button>
//             </div>
//             <div className="carpet-contact-form">
//               <p className="carpet-contact-message">
//                 We'll contact you shortly with the quote details
//               </p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="carpet-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="carpet-form-input"
//                   />
//                 </div>
//                 <div className="carpet-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="carpet-form-input"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="carpet-submit-button"
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

// export default Carpet;















import React, { useState, useEffect, useRef } from "react";
import "./Carpet.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";

// Image Imports
import heroImage from "./img/skirting/heroImg2.jpg";
import wallToWallImage from "./img/carpet/wall-to-wall-gold-patterned-carpet-blue-wall.jpg";
import carpetTileImage from "./img/carpet/welspun-carpet-tiles-500x500.webp";

// Product images (shortened for brevity)
import product1 from "./img/carpet/app1-500x500.webp";
import product2 from "./img/carpet/trump.webp";
import product3 from "./img/carpet/auditorium-carpet-500x500.webp";
import product4 from "./img/carpet/cut-pile-carpet-1000x1000.webp";
 import product5 from "./img/carpet/banquet-carpets-500x500.webp";
 import product6 from "./img/carpet/home-theater-carpet-500x500.webp";
 import product7 from "./img/carpet/carpets-for-media-room-500x500.webp";
import product8 from "./img/carpet/carpet-rolls-foam-for-theater-auditorium-500x500.webp";
import product9 from "./img/carpet/epoxy-flooring-services-500x500.webp";
import product10 from "./img/carpet/harmony-carpet-500x500.webp";
import product11 from "./img/carpet/luxury-carpets-500x500.webp";
import product13 from "./img/carpet/welspun-carpet-tiles-500x500.webp";
import product14 from "./img/carpet/carpet-tile.webp";
import product15 from "./img/carpet/loop-pile-carpet-500x500.webp";
import product16 from "./img/carpet/loop-pile-carpets.webp";
import product17 from "./img/carpet/nylon-carpet-500x500.webp";
import product18 from "./img/carpet/runway-loop-pile-carpet-500x500.webp";



// PDF brochures
import p13  from "./img/carpet/welspun-carpet-tiles.pdf"
import p14  from "./img/carpet/carpet-tile.pdf"
import p15  from "./img/carpet/loop-pile-carpet.pdf"

const Carpet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Refs for category sections
  const categoryRefs = {
    wallToWall: useRef(null),
    carpetTile: useRef(null)
  };

  const myFormik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      price: "",
      pileHeight: "",
      material: "",
      style: "",
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

      const pileHeightDetail = currentProduct.details.find(
        (d) => d.label === "Pile Height"
      );
      const materialDetail = currentProduct.details.find(
        (d) => d.label === "Material"
      );
      const styleDetail = currentProduct.details.find(
        (d) => d.label === "Style"
      );

      myFormik.setFieldValue("pileHeight", pileHeightDetail ? pileHeightDetail.value : "");
      myFormik.setFieldValue("material", materialDetail ? materialDetail.value : "");
      myFormik.setFieldValue("style", styleDetail ? styleDetail.value : "");
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
    { 
      id: "wallToWall", 
      name: "Wall to Wall Carpet", 
      image: wallToWallImage,
      description: "Premium quality wall-to-wall carpets for residential and commercial spaces"
    },
    { 
      id: "carpetTile", 
      name: "Carpet Tile", 
      image: carpetTileImage,
      description: "Modular carpet tiles for flexible and durable flooring solutions"
    },
  ];

  // Products organized by category
  const products = {
    // Wall to Wall Carpet products
    product1: {
      id: 'p1',
      name: "Wall to Wall Carpet Product",
      price: "₹105 / Square feet",
      image: product1,
      category: "wallToWall",
      description: "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
      details: [
      ]
    },
    product2: {
      id: 'p2',
      name: "Trump Carpet flooring",
      price: "₹130 / Square feet",
      image: product2,
      category: "wallToWall",
      description: "Backed with a group of highly talented experts, we are providing wide range of Trump Carpet. These products are developed by vendors using top quality raw material and new techniques. All our products meet with industry standards. Strong in nature our products are highly applauded in market for their features.",
      details:[
  { label: "Pile Height", value: "12mm" },
  { label: "Material", value: "Polyester" },
  { label: "Size", value: "6x7 Feet" },
  { label: "Material Type", value: "Polyester" },
  { label: "Wash Type", value: "Hand Wash" },
  { label: "Thickness", value: "5-8 mm" },
  { label: "Country of Origin", value: "Made in India" }
]

    },
    product3: {
      id: 'p3',
       name: "Polyester Multicolor Auditorium Carpet Flooring",
       price: "₹82 / Square feet",
       image: product3,
      category: "wallToWall",
       description: "We are engaged in offering a wide range of Auditorium Carpet Flooring to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
       { label: "Usage/Application	", value: "Auditorium" },
         { label: "Material", value: "Polypropylene" },
         { label: "Packaging Type	", value: "Roll" },
         { label: "Usage", value: "Beach Tent, Party, Traditional, Advertising Tent, Wedding, Military, Event, Soprts" },
         { label: "Length	", value: "10-20 Mtr" },
         { label: "Thickness", value: "9 mm" },


      ]
    },
 product4: {
       id: 'p4',
       name: "Cut Pile Carpet",
       price: "₹ 120 / sq ft ",
       image: product4,
       category: "wallToWall",
       description: "We are one of the reputed firms ofCut Pile Carpet. Our products are completed using the top quality raw material that is sourced from trustworthy vendors of market. The most modern machines are used to give soft finishing in the product. These products are checked by industry experts. Owing beautiful designs, these products are widely praised in industry. Our products are highly strong and sturdy in nature.",
      details: [
       { label: "Usage/Application	", value: "Floor" },
         { label: "Color", value: "Red" },
         { label: "Usage	", value: "Commercial" },
         { label: "Dimension", value: "4 Meter X 30 Meter" },
         { label: "Thickness", value: "10 mm" },

       ]
     },

 product5: {
     id: 'p5',
      name: "Banquet Carpets",
       price: "₹ 110 / sq ft ",
      image: product5,
       category: "wallToWall",
      description: "We are engaged in offering a wide range of Banquet Carpets  to our clients. Our range of all products is widely appreciated by our clients.",
      details: [
      { label: "Color", value: "Brown" },
        { label: "Technique	", value: "Handloom" }, 
       { label: "Material	", value: "Polyester" },
        { label: "Thickness", value: "4-6 mm" }, 
        { label: "Length", value: "30 m" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer, Tapestry, Exercise" },
        { label: "Country of Origin", value: "Made in India" }
      ]
     },
      product7: {
      id: 'p7',
       name: "Home Theater Carpet",
       price: "₹ 83 / sq ft ",
       image: product6,
       category: "wallToWall",
       description: "We are engaged in offering a wide range of Home Theater Carpet  to our clients. Our range of all products is widely appreciated by our clients",
      details: [
        { label: "Color", value: "Red" },
        { label: "Thickness", value: "12 mm" }, 
         { label: "Country of Origin", value: "Made in India" },
        { label: "Usage/Application	", value: "Home" },
       { label: "Size", value: "2000 sq ft" },
        { label: "Shape	", value: "Rectangular" },
        { label: "Material", value: "Nylon" }



      ]
    },
     product8: {
       id: 'p8',
       name: "Carpets For Media Room",
      price: "₹ 82 / sq ft",
       image: product7,
       category: "wallToWall",
       description: "We are engaged in offering a wide range of Carpets For Media Room to our clients. Our range of all products is widely appreciated by our clients.",
       details: [
         { label: "Usage/Application", value: "Office" },
         { label: "Color", value: "Red" },
         { label: "Shape", value: "Custom" },
         { label: "Thickness", value: "10 - 12 mm" },
         { label: "Pattern", value: "Printed" },         { label: "Wash Type", value: "Machine Wash" },
        { label: "Material", value: "Polyester" }
       ]
     },
    
     product9: {
       id: 'p9',
       name: "Wall To Wall Floor Carpets",
      price: "₹ 108 / sq ft",
      image: product8, // Replace with the correct image variable or path
      category: "wallToWall",
      description: "We offer premium quality Wall To Wall Floor Carpets designed specifically for hotel applications. These carpets provide both aesthetics and durability, ideal for large-scale installations.",
       details: [
         { label: "Usage/Application", value: "Hotel" },
         { label: "Color", value: "Red" },
        { label: "Brand", value: "Indian" },
        { label: "Minimum Order Quantity", value: "1000 sq ft" },
        { label: "Weight", value: "800 gram" }
      ]
    },
    product10: {
      id: 'p10',
      name: "Printed Carpet",
      price: "₹ 101 / sq ft",
      image: product9, // Replace with the correct image variable or path
      category: "wallToWall",
      description: "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
      details: [
       
      ]
    },
    product11: {
      id: 'p11',
      name: "Polyester Harmony Carpet",
      price: "₹ 100 / sq ft",
      image: product10, // Replace with the correct image variable or path
      category: "wallToWall",
      description: "Our company is a renowned supplier of Harmony Carpet. These products are highly applauded in the market due to their long life, superior finish, and attractive look. Sourced from reliable vendors, we offer these carpets at affordable prices.",
      details: [
        { label: "Usage/Application", value: "Home" },
        { label: "Color", value: "Green" },
        { label: "Pattern", value: "Plain" },
        { label: "Material", value: "Polyester" },
        { label: "Thickness", value: "2-5 mm" },
        { label: "Stain Resistent", value: "Yes" }
      ]
    },
    product12: {
      id: 'p12',
      name: "Rectangular Polyester Printed Luxury Carpets",
      price: "₹ 100 / sq ft",
      image: product11, // Replace with the correct image variable or path
      category: "wallToWall",
      description: "We are engaged in offering a wide range of Luxury Carpets  to our clients. Our range of all products is widely appreciated by our clients",
      details: [
        { label: "Design", value: "Printed" },
        { label: "Color", value: "Red" },
        { label: "Usage/Application", value: "Home" },
        { label: "Shape", value: "Rectangular" },
        { label: "Material", value: "Polyester" },
        { label: "Pattern", value: "Printed" },
        { label: "Usage", value: "Decoration, Commercial, Hotel" },
        { label: "Thickness", value: "7-11 mm" },
        { label: "Minimum Order Quantity", value: "100 sq ft" }
      ]
    },

    // carpet tiles
    product13: {
      id: 'p13',
      name: "Nylon Matte Carpet Tiles",
      price: "₹ 120 / sq ft",
      image: product13, // Replace with the correct image variable or path
      category: "carpetTile",
      brochure: p13,
      description: "Design- BroadcastColorMidnightile Size50 x 50 cmMaterialNylonFinishMatteTile Thickness5-6 mmBox Contains(No of Pieces):11Usage/ApplicationOffice FlooringBrand NameWelspunColorMidnightPatternFloralIs It Water ResistanceWater ResistanceNumber Of Piece In A Box11Carpet TypefloralSpecific Usage AreaHallPackaging TypeboxDesignstandardBox Contain11ShapeSquareChemical ResistanceNoCountry of OriginMade in India.",
      details: [
        { label: "Tile Size", value: "50 x 50 cm" },
        { label: "Material", value: "Nylon" },
        { label: "Tile Thickness", value: "5-6 mm" },
        { label: "Finish", value: "Matte" },
        { label: "Box Contains", value: "11 pieces" },
        { label: "Usage/Application", value: "Office Flooring" },
        { label: "Color", value: "Midnight" },
        { label: "Brand Name", value: "Welspun" },
        { label: "Pattern", value: "Floral" },
        { label: "Is It Water Resistance", value: "Yes" }
      ]
    },
    product14: {
      id: 'p14',
      name: "Nylon or Polypropylene Multicolour Floor Carpet Tiles",
      price: "₹ 110 / sq ft",
      image: product14, // Replace with the correct image variable or path
      brochure: p14,
      category: "carpetTile",
      description: "We are engaged in offering a wide range of Floor Carpet Tiles to our clients. These multicolour tiles, made from Nylon or Polypropylene, are known for their durability, elegant polish, and suitability for various commercial and home environments.",
      details: [
        { label: "Size", value: "1x2 Feet" },
        { label: "Surface Finish", value: "Polished" },
        { label: "Material", value: "Nylon or Polypropylene" },
        { label: "Usage/Application", value: "Home" },
        { label: "Usage", value: "Office, Conference Room, Meeting Room" },
        { label: "Pile Height", value: "3-8 mm" },
        { label: "Pile Weight", value: "450-1200g/sqm" },
        { label: "Total Height", value: "5-15 mm" },
        { label: "Country of Origin", value: "Made in India" }
      ]
    },
    product15: {
      id: 'p15',
      name: "Loop Pile Carpet",
      price: "₹ 35 / sq ft",
      brochure: p15,
      image: product15, // Replace with the correct image variable or path
      category: "carpetTile",
      description: "Annapurna Interiors Decorators & Furnitures are most trustworthy and renowned Importer, Trader and Supplier of Wooden Flooring, Laminated Flooring, Vinyl Flooring, Carpet Tiles, Window Blinds, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring,Cinema Hall Carpet,Auditorium Carpet,Banquate Carpet etc.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Thickness", value: "3-8 mm" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel" },
        { label: "Feature", value: "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria" },
        { label: "Pile Height", value: "3.2/4.0 mm" },
        { label: "Total Weight", value: "5000 g/m²" },
      ]
    },
    product16: {
      id: 'p16',
      name: "Nylon Loop Pile Carpets",
      price: "₹ 160 / sq ft",
      image: product16, // Replace with the correct image variable or path
      category: "carpetTile",
      description: "We are a quality conscious organization, offering a broad assortment of Loop Pile Carpet. The offered carpet is highly demanded its fine finish, superb quality and mesmerizing design. Our offered carpet is designed using premium quality basic material and advanced technology at vendors’ end in line with industry standards. We offer this carpet to our clients in different designs, patterns, sizes, colours and styles.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Floor" },
        { label: "Pattern", value: "Printed" },
        { label: "Material", value: "Nylon" },
        { label: "Thickness", value: "8 mm" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath" }
      ]
    },
    product17: {
      id: 'p17',
      name: "Brown Nylon Carpet Tile",
      price: "₹ 98 / sq ft",
      image: product17, // Replace with the correct image variable or path
      category: "carpetTile",
      description: "Owing to our vast experience in this domain, we are engaged in offering a wide range of Nylon Carpet to our clients. The offered carpet is perfectly designed in line with the latest trends using high-grade nylon and innovative machines at vendors’ end. In addition to this, we provide this carpet in various colors and designs as per the varied demands of our esteemed clients.",
      details: [
        { label: "Color", value: "Brown" },
        { label: "Pattern", value: "Plain" },
        { label: "Packaging Type", value: "Roll" },
        { label: "Material", value: "Nylon" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor, Bath, Prayer" },
        { label: "Thickness", value: "5 mm" }
      ]
    },
    product18: {
      id: 'p18',
      name: "Runway Loop Pile Carpet",
      price: "₹ 110 / sq ft",
      image: product18, // Replace with the correct image variable or path
      category: "carpetTile",
      description: "Owing to our expertise of this industry, our company is occupied in offering an extensive range of Runway Loop pile Carpet . These offered products are made by industry vendors, who have rich acquaintance of this field. After manufacturing, they also check the quality on diverse industry parameters to make sure the reliable performance and long working life. Due to robust nature, reliable performance and small prices, these are high demand.",
      details: [
        { label: "Usage/Application", value: "Floor" },
        { label: "Color", value: "Brown" },
        { label: "Wash Care", value: "Dry clean" },
        { label: "Technics", value: "Loop" },
        { label: "Usage", value: "Home, Decoration, Commercial, Hotel, Outdoor" },
        { label: "Features", value: "Anti-Slip, Adhesive Protective, Corrosion-Resistant, Anti-Bacteria" },
        { label: "Thickness", value: "12 mm" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Features", value: "Durable nature, Reliable performance, Sturdy design" }
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
      <div className="carpet-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="carpet-product-image"
        />
        <div className="carpet-product-content">
          <h3>{product.name}</h3>
          <p className="carpet-product-description">{product.description}</p>
          <div className="carpet-product-price">{product.price}</div>
          <ul className="carpet-product-details">
            {product.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
          <div className="carpet-product-actions">
            <button
              className="carpet-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            {product.brochure && (
              <button
                className="carpet-brochure-button"
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
    <div className="carpet-component">
      {/* Hero Banner Section */}
      <section className="carpet-hero-section">
        <img
          src={heroImage}
          alt="Premium Carpet Solutions"
          className="carpet-hero-image"
        />
        <div className="carpet-hero-overlay">
          <div className="carpet-hero-content">
            <h1 data-aos="fade-up">Premium Carpet Collections</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              High-quality carpet solutions for every space
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="carpet-container">
        <h2 className="carpet-section-title" data-aos="fade-up">
          Explore Our Carpet Range
        </h2>
        <div className="carpet-category-grid">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`carpet-category-item ${activeCategory === category.id ? 'active' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => scrollToCategory(category.id)}
            >
              <div className="carpet-category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.name}
                  className="carpet-category-image"
                />
              </div>
              <div className="carpet-category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category) => (
        <section 
          key={category.id} 
          className="carpet-product-section" 
          ref={categoryRefs[category.id]}
        >
          <div className="carpet-container">
            <h2 className="carpet-section-title" data-aos="fade-up">
              {category.name}
            </h2>
            <div className="carpet-product-grid">
              {getProductsByCategory(category.id).map((productKey) =>
                renderProductCard(productKey)
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="carpet-modal-overlay">
          <div className="carpet-modal-content">
            <button className="carpet-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="carpet-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="carpet-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="carpet-modal-description">
                {currentProduct.description}
              </p>
              <div className="carpet-modal-price">{currentProduct.price}</div>
              <ul className="carpet-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              {currentProduct.brochure && (
                <button
                  className="carpet-brochure-button"
                  onClick={() => downloadBrochure(currentProduct.name)}
                >
                  <FiDownload /> Download Brochure
                </button>
              )}
            </div>
            <div className="carpet-contact-form">
              <p className="carpet-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="carpet-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="carpet-form-input"
                  />
                </div>
                <div className="carpet-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="carpet-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="carpet-submit-button"
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

export default Carpet;