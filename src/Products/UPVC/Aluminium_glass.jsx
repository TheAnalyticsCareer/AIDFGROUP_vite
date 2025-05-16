

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
//       image: product1,
//       description: <ul>
//         <li>Unique durable design where profiles click into each other.</li>
//         <li>StepUp is made from inserting textile in to aluminium retainer.</li>  
//         <li>Installed on the floor with ramps on all four sides.</li>
//         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul>,
//       category: "office-partitions",
//       details: [
//         { label: "Material", value: "Glass" },
//         { label: "Usage/Application", value: "Home" },
//         { label: "Surface Treatment", value: "PE Coated" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern", value: "Plain" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Minimum Order Quantity", value: "50 Square feet" }
//       ],
//       brochureLink: null // No brochure available for this product
//     },
//     product2: {
//       id: 'p2',
//       name: "Aluminum Slim Glass Partition",
//       price: "₹315 / Square feet",
//       image: product2,
//       description: <ul>
//         <li>Unique durable design where profiles click into each other.</li>
//         <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//         <li>Installed on the floor with ramps on all four sides.</li>
//         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul>,
//       category: "office-partitions",
//       details: [
//         { label: "Material", value: "Aluminium Acoustic" },
//         { label: "Usage/Application", value: "All" },
//         { label: "Thickness", value: "3mm" },
//         { label: "Insulation", value: "Thermal" },
//         { label: "Surface Treatment", value: "PVDF Coated" },
//         { label: "Open Style", value: "All" },
//         { label: "Color", value: "Multicolor" },
//         { label: "Country of Origin", value: "Made in India" },
//         { label: "Minimum Order Quantity", value: "50 Square feet" }
//       ],
//       brochureLink: "/brochures/aluminum-slim-glass-partition.pdf" // Example brochure link
//     },
//     product3: {
//       id: 'p3',
//       name: "Aluminium Acoustic Slim Glass Partition",
//       price: "₹395 / Square feet",
//       image: product3,
//       description: <ul> 
//         <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
//       </ul>,
//       details: [
//         { label: "Thickness", value: "6mm" },
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern", value: "Rectangular" },
//         { label: "Country of Origin", value: "Made in India" },
//       ],
//       brochureLink: null // No brochure available for this product
//     },
//     product4: {
//       id: 'p4',
//       name: "Transparent Laminated Glass Partition, For Office",
//       price: "₹350 / Square feet",
//       image: product4,
//       description: <ul> 
//         <li>Established in the year 1995 at Delhi, we, Annapurna Interiors Decorators & Furnitures are leading and paramount Wholesaler, Service provider, Exporter and Importer of Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles, Aluminum Profiles, Engineered Wood, Wooden Flooring Pieces, Machine Tufted Carpets, Brazilian Flooring etc.</li> 
//       </ul>,
//       details: [
//         { label: "Thickness", value: "6mm" },
//         { label: "Usage/Application", value: "Office" },
//         { label: "Color", value: "Transparent" },
//         { label: "Pattern", value: "Plain" },
//         { label: "Shape", value: "Rectangular" },
//         { label: "Country of Origin", value: "Made in India" },
//       ],
//       brochureLink: "/brochures/transparent-laminated-glass-partition.pdf" // Example brochure link
//     },
//     product5: {
//       id: 'p5',
//       name: "Aluminium Grid Partition",
//       price: "₹310 / Square feet",
//       image: product6,
//       description: <ul>
//         <li>Unique durable design where profiles click into each other.</li>
//         <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//         <li>Installed on the floor with ramps on all four sides.</li>
//         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul>,
//       details: [
//         { label: "Thickness", value: "2mm" },
//         { label: "Usage/Application", value: "All" },
//         { label: "Material", value: "Aluminium Acoustic" },
//         { label: "Insulation", value: "Acoustic" },
//         { label: "Surface Treatment", value: "PE Coated" },
//         { label: "Open Style", value: "Hinged" },
//         { label: "Country of Origin", value: "Made in India" },
//       ],
//       brochureLink: null // No brochure available for this product
//     },
//     product6: {
//       id: 'p6',
//       name: "Slimline Glass Partition",
//       price: "₹320 / Square feet",
//       image: product5,
//       description: <ul>
//         <li>Unique durable design where profiles click into each other.</li>
//         <li>StepUp is made from inserting textile in to aluminium retainer.</li>
//         <li>Installed on the floor with ramps on all four sides.</li>
//         <li>Unlike conventional "use and throw" matting, only inserts need to be changed after its useful life making the system cheaper than the conventional matting.</li>
//         <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
//       </ul>,
//       details: [
//         { label: "Usage/Application", value: "Commercial" },
//         { label: "Material", value: "Glass" },
//         { label: "Insulation", value: "Acoustic" },
//         { label: "Open Style", value: "Hinged" },
//         { label: "Color", value: "Multicolor" },
//         { label: "Country of Origin", value: "Made in India" },
//       ],
//       brochureLink: "/brochures/slimline-glass-partition.pdf" // Example brochure link
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

//   const downloadBrochure = (productName, brochureLink) => {
//     if (brochureLink) {
//       console.log(`Downloading brochure for ${productName}`);
//       // In a real implementation, you would initiate the download here
//       // window.open(brochureLink, '_blank');
//       toast.info(`Brochure download started for ${productName}`);
//     } else {
//       toast.info(`No brochure available for ${productName}`);
//     }
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
//             {product.brochureLink && (
//               <button
//                 className="aluminium-brochure-button"
//                 onClick={() => downloadBrochure(product.name, product.brochureLink)}
//               >
//                 <FiDownload /> Brochure
//               </button>
//             )}
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
//               {currentProduct.brochureLink && (
//                 <button
//                   className="aluminium-brochure-button"
//                   onClick={() => downloadBrochure(currentProduct.name, currentProduct.brochureLink)}
//                 >
//                   <FiDownload /> Download Brochure
//                 </button>
//               )}
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
import AOS from 'aos';
import './Aluminium_glass.css';
import 'aos/dist/aos.css';
import axios from "axios";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiX, FiArrowRight, FiDownload } from "react-icons/fi";

// Import images
import heroImage from "./img/skirting/heroImg2.jpg";
import product1 from "./img/aluminium_glass/curved-glass-partition-1000x1000.webp";
import product2 from "./img/aluminium_glass/aluminum-slim-glass-partition-1000x1000.webp";
import product3 from "./img/aluminium_glass/aluminium-acoustic-slim-glass-partition-for-office-1000x1000.webp";
import product4 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-1000x1000.webp";
import product5 from "./img/aluminium_glass/slim-line.webp";
import product6 from "./img/aluminium_glass/aluminium-grid-partition-500x500.webp";

// PDF brochures
// import p1 from "./img/aluminium_glass/curved-glass-partition-brochure.pdf";
// import p2 from "./img/aluminium_glass/slim-glass-partition-brochure.pdf";
// import p3 from "./img/aluminium_glass/acoustic-glass-partition-brochure.pdf";

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

  // const downloadBrochure = (productName) => {
  //   const productKey = Object.keys(products).find(
  //     (key) => products[key].name === productName
  //   );
    
  //   if (productKey && products[productKey].brochure) {
  //     window.open(products[productKey].brochure, "_blank");
  //   } else {
  //     toast.error("Brochure not available for this product");
  //   }
  // };

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
      myFormik.setFieldValue(
        "material",
        materialDetail ? materialDetail.value : ""
      );
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
      id: 1,
      name: "Curved Glass Partition",
      price: "₹1000 / sq ft",
      image: product1,
      // brochure: p1,
      description:
        "Unique durable design where profiles click into each other. StepUp is made from inserting textile into aluminium retainer. Installed on the floor with ramps on all four sides. Unlike conventional 'use and throw' matting, only inserts need to be changed after its useful life making the system cheaper than conventional matting.",
      details: [
        { label: "Material", value: "Glass" },
        { label: "Usage/Application", value: "Home, Office" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Thickness", value: "6mm, 8mm, 10mm" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Max Panel Size", value: "10ft x 10ft" },
      ],
    },
    product2: {
      id: 2,
      name: "Aluminum Slim Glass Partition",
      price: "₹315 / sq ft",
      image: product2,
      // brochure: p2,
      description:
        "Sleek and modern aluminum slim glass partitions perfect for contemporary office spaces. These partitions provide excellent sound insulation while maintaining an open feel. The slim profile maximizes space efficiency without compromising on durability or functionality.",
      details: [
        { label: "Material", value: "Aluminium Acoustic" },
        { label: "Usage/Application", value: "All" },
        { label: "Thickness", value: "3mm" },
        { label: "Insulation", value: "Thermal" },
        { label: "Surface Treatment", value: "PVDF Coated" },
        { label: "Open Style", value: "Sliding, Hinged" },
        { label: "Color", value: "Multicolor" },
        { label: "Sound Reduction", value: "Up to 42dB" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
      ],
    },
    product3: {
      id: 3,
      name: "Aluminium Acoustic Slim Glass Partition",
      price: "₹395 / sq ft",
      image: product3,
      // brochure: p3,
      description:
        "High-performance acoustic glass partitions designed for office environments requiring sound control. These partitions combine aesthetic appeal with functional sound insulation, making them ideal for meeting rooms, executive offices, and open-plan workspaces.",
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent, Frosted" },
        { label: "Pattern", value: "Rectangular" },
        { label: "Material", value: "Aluminium with Glass" },
        { label: "Sound Reduction", value: "Up to 50dB" },
        { label: "Fire Rating", value: "60 minutes" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
      ],
    },
    product4: {
      id: 4,
      name: "Transparent Laminated Glass Partition",
      price: "₹350 / sq ft",
      image: product4,
      description:
        "Premium transparent laminated glass partitions offering safety and security while maintaining visibility. The laminated construction provides additional strength and safety features, making these partitions ideal for high-traffic areas and security-conscious environments.",
      details: [
        { label: "Thickness", value: "6mm, 8mm, 10mm" },
        { label: "Usage/Application", value: "Office, Commercial" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Shape", value: "Rectangular, Curved" },
        { label: "Lamination", value: "PVB Interlayer" },
        { label: "Safety Rating", value: "Class 1" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
      ],
    },
    product5: {
      id: 5,
      name: "Aluminium Grid Partition",
      price: "₹310 / sq ft",
      image: product6,
      description:
        "Versatile aluminium grid partitions that combine glass and metal for a modern industrial look. These partitions offer excellent durability and can be customized with different grid patterns and glass types to suit various design requirements.",
      details: [
        { label: "Thickness", value: "2mm" },
        { label: "Usage/Application", value: "All" },
        { label: "Material", value: "Aluminium Acoustic" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Open Style", value: "Hinged, Sliding" },
        { label: "Grid Options", value: "Square, Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
      ],
    },
    product6: {
      id: 6,
      name: "Slimline Glass Partition",
      price: "₹320 / sq ft",
      image: product5,
      description:
        "Ultra-slim glass partitions that maximize natural light flow while providing space division. The minimal framework creates a seamless look that enhances modern interior designs. These partitions are perfect for creating private spaces without sacrificing the open feel of an area.",
      details: [
        { label: "Usage/Application", value: "Commercial, Residential" },
        { label: "Material", value: "Glass with Aluminium Frame" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Open Style", value: "Hinged, Sliding" },
        { label: "Color", value: "Multicolor" },
        { label: "Frame Width", value: "20mm" },
        { label: "Glass Options", value: "Clear, Frosted, Tinted" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 sq ft" },
      ],
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
      <div className="aluminium-product-card" data-aos="fade-up">
        <div className="aluminium-product-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="aluminium-product-image"
          />
        </div>
        <div className="aluminium-product-content">
          <h3 className="aluminium-product-title">{product.name}</h3>
          <div className="aluminium-product-price">{product.price}</div>
          <div className="aluminium-product-description-container">
            <p className="aluminium-product-description">{product.description}</p>
          </div>
          <div className="aluminium-product-details-container">
            <ul className="aluminium-product-details">
              {product.details.map((detail, index) => (
                <li key={index}>
                  <span className="aluminium-detail-label">{detail.label}:</span>{" "}
                  <span className="aluminium-detail-value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aluminium-product-actions">
            <button
              className="aluminium-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote <FiArrowRight className="aluminium-button-icon" />
            </button>
            {product.brochure && (
              <button
                className="aluminium-brochure-button"
                onClick={() => downloadBrochure(product.name)}
              >
                <FiDownload className="aluminium-button-icon" /> Brochure
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
            <p data-aos="fade-up" data-aos-delay="200">
              Premium quality glass partitions for modern spaces
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="aluminium-product-section">
        <div className="aluminium-container">
          <h2 className="aluminium-section-title" data-aos="fade-up">
            Our Glass Partition Products
          </h2>
          <p className="aluminium-section-subtitle" data-aos="fade-up" data-aos-delay="100">
            High-quality aluminium glass partitions for various applications
          </p>
          <div className="aluminium-product-grid">
            {Object.keys(products).map((productKey) =>
              renderProductCard(productKey)
            )}
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
            <div className="aluminium-modal-left">
              <div className="aluminium-product-info">
                <div className="aluminium-modal-image-container">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="aluminium-modal-product-image"
                  />
                </div>
                <h3 className="aluminium-modal-product-title">{currentProduct.name}</h3>
                <div className="aluminium-modal-price">{currentProduct.price}</div>
                <div className="aluminium-modal-description-container">
                  <p className="aluminium-modal-description">
                    {currentProduct.description}
                  </p>
                </div>
                <div className="aluminium-modal-specs-container">
                  <ul className="aluminium-modal-specs">
                    {currentProduct.details.map((detail, index) => (
                      <li key={index}>
                        <span className="aluminium-modal-spec-label">{detail.label}:</span>{" "}
                        <span className="aluminium-modal-spec-value">{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="aluminium-modal-right">
              <div className="aluminium-contact-form">
                <h3 className="aluminium-contact-title">Request a Quote</h3>
                <p className="aluminium-contact-message">
                  We'll contact you shortly with the quote details
                </p>
                <form onSubmit={myFormik.handleSubmit}>
                  <input type="hidden" name="name" value={currentProduct.name} />
                  <input type="hidden" name="price" value={currentProduct.price} />
                  <div className="aluminium-form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={myFormik.values.phone}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="aluminium-form-input"
                    />
                  </div>
                  <div className="aluminium-form-group">
                    <label htmlFor="user-email">Email*</label>
                    <input
                      type="email"
                      id="user-email"
                      name="email"
                      value={myFormik.values.email}
                      onChange={myFormik.handleChange}
                      required
                      placeholder="Enter your email address"
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
                {currentProduct.brochure && (
                  <button
                    className="aluminium-modal-brochure-button"
                    onClick={() => downloadBrochure(currentProduct.name)}
                  >
                    <FiDownload /> Download Brochure
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Aluminium_glass;