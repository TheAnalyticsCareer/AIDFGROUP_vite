
// import React, { useState, useEffect } from 'react';
// import './Aluminium_glass.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from "axios";
// import { useFormik } from "formik";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FiX, FiDownload } from "react-icons/fi";

// // Import images
// import heroImage from "./img/skirting/heroImg2.jpg";
// import product1 from "./img/aluminium_glass/curved-glass-partition-1000x1000.webp";
// import product2 from "./img/aluminium_glass/aluminum-slim-glass-partition-1000x1000.webp";
// import product3 from "./img/aluminium_glass/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.webp";
// import product4 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
// import product5 from "./img/aluminium_glass/slim-line.webp";
// import product6 from "./img/aluminium_glass/aluminium-grid-partition-500x500.webp";
// import product7 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-500x500.webp";


// const Aluminium_glass = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

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

//   const products = {
//     product1: {
//       id: 'p1',
//       name: "Curved Glass Partition",
//       price: "₹1000 / Square feet",
//       image: product1, // Ensure image is defined
//       description: <ul>
//      <li> Unique durable design where profiles click into each other.</li>
//      <li>StepUp is made from inserting textile in to aluminium retainer.</li>  
//      <li>Installed on the  oor with ramps on all four sides.</li>
//      <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//      <li>Available in multiple ofl feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul> ,
//       category: "office-partitions", // or "home-interiors"
//       details: [
//         { label: "Material", value: "Glass" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Surface Treatment", value: "PE Coated" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern", value: "Plain" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Minimum Order Quantity", value: "50 Square feet" }
//       ],
//     },
//     product2: {
//        id: 'p2',
//   name: "Aluminum Slim Glass Partition",
//   price: "₹315 / Square feet",
//   image: product2, // Ensure this image is imported and available
//   description: <ul>
//     <li>Unique durable design where pro les click into each other.</li>
//     <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//     <li>Installed on the  oor with ramps on all four sides.</li>
//     <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//     <li>Available in multiple ofl feet in length and width up to maximum of 10 feet on each side.</li>
//   </ul> ,
//   category: "office-partitions", // or "home-interiors"
//   details: [
//     { label: "Material", value: "Aluminium Acoustic" },
//     { label: "Usage/Application", value: "All" },
//     { label: "Thickness", value: "3mm" },
//     { label: "Insulation", value: "Thermal" },
//     { label: "Surface Treatment", value: "PVDF Coated" },
//     { label: "Open Style", value: "All" },
//     { label: "Color", value: "Multicolor" },
//     { label: "Country of Origin", value: "Made in India" },
//     { label: "Minimum Order Quantity", value: "50 Square feet" }
//   ]
//     },
//     product3: {
//       id: 'p3',
//       name: "Aluminium Acoustic Slim Glass Partition",
//       price: "₹395 / Square feet",
//       image: product3, // Ensure this image is imported and available
//       description: <ul> <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> </ul> ,
//       details: [
//         { label: "Thickness", value: "6mm" },
//         { label: "Usage/Application	", value: "Office" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern	", value: "Rectangular" },
//         { label: "Country of Origin", value: "Made in India" },
//       ]
//     },



//     product4: {
//       id: 'p4',
//       name: "Transparent Laminated Glass Partition, For Office",
//       price: "₹350 / Square feet",
//       image: product4, // Ensure this image is imported and available
//       description: <ul> <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> </ul> ,
//       details: [
//         { label: "Thickness", value: "6mm" },
//         { label: "Usage/Application	", value: "Office" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern	", value: "Plain" },
//         { label: "Shape	", value: "Rectangular" },
//         { label: "Country of Origin", value: "Made in India" },
//       ]
//     },

    
//     product5: {
//       id: 'p5',
//       name: "Aluminium Grid Partition",
//       price: "₹310 / Square feet",
//       image: product6, // Ensure this image is imported and available
//       description:
//           <ul>
//             <li>Unique durable design where pro les click into each other.</li>
//             <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//             <li>Installed on the  oor with ramps on all four sides.</li>
//             <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//             <li>Available in multiple ofl feet in length and width up to maximum of 10 feet on each side.</li>
//           </ul>
//       ,
//       details: [
//         { label: "Thickness", value: "2mm" },
//         { label: "Usage/Application	", value: "All" },
//         { label: "Material", value: "Aluminium Acoustic" },
//         { label: "Insulation	", value: "Acoustic" },
//         { label: "Surface Treatment		", value: "PE Coated" },
//         { label: "Open Style		", value: "Hinged" },
//         { label: "Country of Origin", value: "Made in India" },
//       ]
//     },
//     product6: {
//       id: 'p6',
//       name: "Slimline Glass Partition",
//       price: "₹320 / Square feet",
//       image: product5, // Ensure this image is imported and available
//       description:
//           <ul>
//             <li>Unique durable design where pro les click into each other.</li>
//             <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//             <li>Installed on the  oor with ramps on all four sides.</li>
//             <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//             <li>Available in multiple ofl feet in length and width up to maximum of 10 feet on each side.</li>
//           </ul>
//       ,
//       details: [
//         { label: "Usage/Application	", value: "Commercial" },
//         { label: "Material", value: "Glass" },
//         { label: "Insulation	", value: "Acoustic" },
//         { label: "Open Style		", value: "Hinged" },
//         { label: "Color		", value: "Multicolor" },
//         { label: "Country of Origin", value: "Made in India" },
//       ]
//     },
//     product7: {
//       id: 7,
//       name: "Transparent Laminated Glass Partition",
//       price: "₹350 / sq ft",
//       image: product7, // Replace with the actual image import or path
//       category: "130", // Update based on your category system
//       description: "Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.",
//       details: [
//         { label: "Pattern", value: "Plain" },
//         { label: "Shape", value: "Rectangular" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Thickness", value: "6 mm" },
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Transparent" },
//       ],
//     },
   
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

//   const downloadBrochure = (productName) => {
//     console.log(`Downloading brochure for ${productName}`);
//     toast.info(`Brochure download started for ${productName}`);
//   };

//   const renderProductCard = (productKey) => {
//     const product = products[productKey];
//     return (
//       <div className="aluminium-product-card" data-aos="fade-up">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="aluminium-product-image"
//         />
//         <div className="aluminium-product-content">
//           <h3>{product.name}</h3>
//           <p className="aluminium-product-description">{product.description}</p>
//           <div className="aluminium-product-price">
//             {product.price}
//           </div>
//           <ul className="aluminium-product-details">
//             {product.details.map((detail, index) => (
//               <li key={index}>
//                 <span>{detail.label}:</span> {detail.value}
//               </li>
//             ))}
//           </ul>
//           <div className="aluminium-product-actions">
//             <button
//               className="aluminium-quote-button"
//               onClick={() => openModal(productKey)}
//             >
//               Get Quote
//             </button>
//             <button
//               className="aluminium-brochure-button"
//               onClick={() => downloadBrochure(product.name)}
//             >
//               <FiDownload /> Brochure
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="aluminium-component">
//       {/* Hero Banner Section */}
//       <section className="aluminium-hero-section">
//         <img
//           src={heroImage}
//           alt="Premium Aluminium Glass Solutions"
//           className="aluminium-hero-image"
//         />
//         <div className="aluminium-hero-overlay">
//           <div className="aluminium-hero-content">
//             <h1 data-aos="fade-up">Aluminium Glass Partitions</h1>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="aluminium-product-section">
//         <div className="aluminium-container">
//           <h2 className="aluminium-section-title" data-aos="fade-up">
//             Our Aluminium Glass Partition Collection
//           </h2>
//           <div className="aluminium-product-grid">
//             {Object.keys(products).map(productKey => renderProductCard(productKey))}
//           </div>
//         </div>
//       </section>

//       {/* Quote Modal */}
//       {isModalOpen && currentProduct && (
//         <div className="aluminium-modal-overlay">
//           <div className="aluminium-modal-content">
//             <button className="aluminium-modal-close" onClick={closeModal}>
//               <FiX />
//             </button>
//             <div className="aluminium-product-info">
//               <img
//                 src={currentProduct.image}
//                 alt={currentProduct.name}
//                 className="aluminium-modal-product-image"
//               />
//               <h3>{currentProduct.name}</h3>
//               <p className="aluminium-modal-description">{currentProduct.description}</p>
//               <div className="aluminium-modal-price">
//                 {currentProduct.price}
//               </div>
//               <ul className="aluminium-modal-specs">
//                 {currentProduct.details.map((detail, index) => (
//                   <li key={index}>
//                     <span>{detail.label}:</span> {detail.value}
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="aluminium-brochure-button"
//                 onClick={() => downloadBrochure(currentProduct.name)}
//               >
//                 <FiDownload /> Download Brochure
//               </button>
//             </div>
//             <div className="aluminium-contact-form">
//               <p className="aluminium-contact-message">
//                 We'll contact you shortly with the quote details
//               </p>
//               <form onSubmit={myFormik.handleSubmit}>
//                 <div className="aluminium-form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={myFormik.values.phone}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="Phone no."
//                     className="aluminium-form-input"
//                   />
//                 </div>
//                 <div className="aluminium-form-group">
//                   <label htmlFor="user-email">Email</label>
//                   <input
//                     type="email"
//                     id="user-email"
//                     name="email"
//                     value={myFormik.values.email}
//                     onChange={myFormik.handleChange}
//                     required
//                     placeholder="example@gmail.com"
//                     className="aluminium-form-input"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="aluminium-submit-button"
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

// export default Aluminium_glass;










import React, { useState, useEffect } from 'react';
import './Aluminium_glass.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiDownload } from "react-icons/fi";

// Import images
import heroImage from "./img/skirting/heroImg2.jpg";
import product1 from "./img/aluminium_glass/curved-glass-partition-1000x1000.webp";
import product2 from "./img/aluminium_glass/aluminum-slim-glass-partition-1000x1000.webp";
import product3 from "./img/aluminium_glass/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.webp";
import product4 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
import product5 from "./img/aluminium_glass/slim-line.webp";
import product6 from "./img/aluminium_glass/aluminium-grid-partition-500x500.webp";









const Aluminium_glass = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (isModalOpen && currentProduct) {
      myFormik.setFieldValue("name", currentProduct.name);
      myFormik.setFieldValue("price", currentProduct.price);

      const thicknessDetail = currentProduct.details.find(d => d.label === "Thickness");
      const materialDetail = currentProduct.details.find(d => d.label === "Material");
      const finishDetail = currentProduct.details.find(d => d.label === "Finish");

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

  const products = {
    product1: {
      id: 'p1',
      name: "Curved Glass Partition",
      price: "₹1000 / Square feet",
      image: product1,
      description: <ul>
        <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>  
        <li>Installed on the floor with ramps on all four sides.</li>
        <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
      category: "office-partitions",
      details: [
        { label: "Material", value: "Glass" },
        { label: "Usage/Application", value: "Home" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 Square feet" }
      ],
      brochureLink: null // No brochure available for this product
    },
    product2: {
      id: 'p2',
      name: "Aluminum Slim Glass Partition",
      price: "₹315 / Square feet",
      image: product2,
      description: <ul>
        <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>
        <li>Installed on the floor with ramps on all four sides.</li>
        <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
      category: "office-partitions",
      details: [
        { label: "Material", value: "Aluminium Acoustic" },
        { label: "Usage/Application", value: "All" },
        { label: "Thickness", value: "3mm" },
        { label: "Insulation", value: "Thermal" },
        { label: "Surface Treatment", value: "PVDF Coated" },
        { label: "Open Style", value: "All" },
        { label: "Color", value: "Multicolor" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 Square feet" }
      ],
      brochureLink: "/brochures/aluminum-slim-glass-partition.pdf" // Example brochure link
    },
    product3: {
      id: 'p3',
      name: "Aluminium Acoustic Slim Glass Partition",
      price: "₹395 / Square feet",
      image: product3,
      description: <ul> 
        <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
      ],
      brochureLink: null // No brochure available for this product
    },
    product4: {
      id: 'p4',
      name: "Transparent Laminated Glass Partition, For Office",
      price: "₹350 / Square feet",
      image: product4,
      description: <ul> 
        <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Shape", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
      ],
      brochureLink: "/brochures/transparent-laminated-glass-partition.pdf" // Example brochure link
    },
    product5: {
      id: 'p5',
      name: "Aluminium Grid Partition",
      price: "₹310 / Square feet",
      image: product6,
      description: <ul>
        <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>
        <li>Installed on the floor with ramps on all four sides.</li>
        <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
      details: [
        { label: "Thickness", value: "2mm" },
        { label: "Usage/Application", value: "All" },
        { label: "Material", value: "Aluminium Acoustic" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Open Style", value: "Hinged" },
        { label: "Country of Origin", value: "Made in India" },
      ],
      brochureLink: null // No brochure available for this product
    },
    product6: {
      id: 'p6',
      name: "Slimline Glass Partition",
      price: "₹320 / Square feet",
      image: product5,
      description: <ul>
        <li>Unique durable design where profiles click into each other.</li>
        <li>StepUp is made from inserting textile in to aluminium retainer.</li>
        <li>Installed on the floor with ramps on all four sides.</li>
        <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
      details: [
        { label: "Usage/Application", value: "Commercial" },
        { label: "Material", value: "Glass" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Open Style", value: "Hinged" },
        { label: "Color", value: "Multicolor" },
        { label: "Country of Origin", value: "Made in India" },
      ],
      brochureLink: "/brochures/slimline-glass-partition.pdf" // Example brochure link
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

  const downloadBrochure = (productName, brochureLink) => {
    if (brochureLink) {
      console.log(`Downloading brochure for ${productName}`);
      // In a real implementation, you would initiate the download here
      // window.open(brochureLink, '_blank');
      toast.info(`Brochure download started for ${productName}`);
    } else {
      toast.info(`No brochure available for ${productName}`);
    }
  };

  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="aluminium-product-card" data-aos="fade-up">
        <img
          src={product.image}
          alt={product.name}
          className="aluminium-product-image"
        />
        <div className="aluminium-product-content">
          <h3>{product.name}</h3>
          <p className="aluminium-product-description">{product.description}</p>
          <div className="aluminium-product-price">
            {product.price}
          </div>
          <ul className="aluminium-product-details">
            {product.details.map((detail, index) => (
              <li key={index}>
                <span>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
          <div className="aluminium-product-actions">
            <button
              className="aluminium-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            {product.brochureLink && (
              <button
                className="aluminium-brochure-button"
                onClick={() => downloadBrochure(product.name, product.brochureLink)}
              >
                <FiDownload /> Brochure
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="aluminium-component">
      {/* Hero Banner Section */}
      <section className="aluminium-hero-section">
        <img
          src={heroImage}
          alt="Premium Aluminium Glass Solutions"
          className="aluminium-hero-image"
        />
        <div className="aluminium-hero-overlay">
          <div className="aluminium-hero-content">
            <h1 data-aos="fade-up">Aluminium Glass Partitions</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="aluminium-product-section">
        <div className="aluminium-container">
          <h2 className="aluminium-section-title" data-aos="fade-up">
            Our Aluminium Glass Partition Collection
          </h2>
          <div className="aluminium-product-grid">
            {Object.keys(products).map(productKey => renderProductCard(productKey))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="aluminium-modal-overlay">
          <div className="aluminium-modal-content">
            <button className="aluminium-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <div className="aluminium-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="aluminium-modal-product-image"
              />
              <h3>{currentProduct.name}</h3>
              <p className="aluminium-modal-description">{currentProduct.description}</p>
              <div className="aluminium-modal-price">
                {currentProduct.price}
              </div>
              <ul className="aluminium-modal-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index}>
                    <span>{detail.label}:</span> {detail.value}
                  </li>
                ))}
              </ul>
              {currentProduct.brochureLink && (
                <button
                  className="aluminium-brochure-button"
                  onClick={() => downloadBrochure(currentProduct.name, currentProduct.brochureLink)}
                >
                  <FiDownload /> Download Brochure
                </button>
              )}
            </div>
            <div className="aluminium-contact-form">
              <p className="aluminium-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit}>
                <div className="aluminium-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="aluminium-form-input"
                  />
                </div>
                <div className="aluminium-form-group">
                  <label htmlFor="user-email">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="aluminium-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="aluminium-submit-button"
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

export default Aluminium_glass;