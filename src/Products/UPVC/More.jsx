import React, { useState, useEffect } from 'react';
import './More.css';
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
import product7 from "./img/aluminium_glass/transparent-laminated-glass-partition-for-office-500x500.webp";

const More = () => {
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
        <li>Unlike conventional 'use and throw' matting, only inserts need to be changed after its useful life</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
      details: [
        { label: "Material", value: "Glass" },
        { label: "Usage/Application", value: "Home" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Minimum Order Quantity", value: "50 Square feet" }
      ],
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
        <li>Unlike conventional 'use and throw' matting, only inserts need to be changed</li>
        <li>Available in multiple of feet in length and width up to maximum of 10 feet on each side.</li>
      </ul>,
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
      ]
    },
    product3: {
      id: 'p3',
      name: "Aluminium Acoustic Slim Glass Partition",
      price: "₹395 / Square feet",
      image: product3,
      description: <ul> 
        <li>Established in the year 1995 at Delhi, we are leading Wholesaler, Service provider</li>
        <li>Specialized in Wooden Flooring, Laminate Flooring, Vinyl Flooring, Carpet Tiles</li>
        <li>High quality aluminum profiles and engineered wood products</li>
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
      ]
    },
    product4: {
      id: 'p4',
      name: "Transparent Laminated Glass Partition, For Office",
      price: "₹350 / Square feet",
      image: product4,
      description: <ul> 
        <li>Premium quality transparent laminated glass partitions</li>
        <li>Perfect for modern office spaces and commercial buildings</li>
        <li>Customizable sizes and thickness options available</li>
      </ul>,
      details: [
        { label: "Thickness", value: "6mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
        { label: "Pattern", value: "Plain" },
        { label: "Shape", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
      ]
    },
    product5: {
      id: 'p5',
      name: "Aluminium Grid Partition",
      price: "₹310 / Square feet",
      image: product6,
      description: <ul>
        <li>Unique durable design where profiles click into each other</li>
        <li>Made from high-quality aluminum acoustic material</li>
        <li>Excellent sound insulation properties</li>
        <li>Available in multiple configurations</li>
      </ul>,
      details: [
        { label: "Thickness", value: "2mm" },
        { label: "Usage/Application", value: "All" },
        { label: "Material", value: "Aluminium Acoustic" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Surface Treatment", value: "PE Coated" },
        { label: "Open Style", value: "Hinged" },
        { label: "Country of Origin", value: "Made in India" },
      ]
    },
    product6: {
      id: 'p6',
      name: "Slimline Glass Partition",
      price: "₹320 / Square feet",
      image: product5,
      description: <ul>
        <li>Sleek and modern slimline design</li>
        <li>Perfect for contemporary office spaces</li>
        <li>Excellent acoustic properties</li>
        <li>Easy to install and maintain</li>
      </ul>,
      details: [
        { label: "Usage/Application", value: "Commercial" },
        { label: "Material", value: "Glass" },
        { label: "Insulation", value: "Acoustic" },
        { label: "Open Style", value: "Hinged" },
        { label: "Color", value: "Multicolor" },
        { label: "Country of Origin", value: "Made in India" },
      ]
    },
    product7: {
      id: 'p7',
      name: "Transparent Laminated Glass Partition",
      price: "₹350 / sq ft",
      image: product7,
      description: <ul>
        <li>High-quality transparent laminated glass</li>
        <li>Safety glass that holds together when shattered</li>
        <li>Reduces UV transmission by up to 99%</li>
        <li>Available in various thicknesses and sizes</li>
      </ul>,
      details: [
        { label: "Pattern", value: "Plain" },
        { label: "Shape", value: "Rectangular" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Thickness", value: "6 mm" },
        { label: "Usage/Application", value: "Office" },
        { label: "Color", value: "Transparent" },
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

  const downloadBrochure = (productName) => {
    console.log(`Downloading brochure for ${productName}`);
    toast.info(`Brochure download started for ${productName}`);
  };

  const renderProductCard = (productKey) => {
    const product = products[productKey];
    return (
      <div className="more-product-card" data-aos="fade-up" key={product.id}>
        <img
          src={product.image}
          alt={product.name}
          className="more-product-image"
        />
        <div className="more-product-content">
          <h3 className="more-product-title">{product.name}</h3>
          <div className="more-product-description">{product.description}</div>
          <div className="more-product-price">
            {product.price}
          </div>
          <ul className="more-product-details">
            {product.details.map((detail, index) => (
              <li key={index} className="more-product-detail-item">
                <span className="more-detail-label">{detail.label}:</span> 
                <span className="more-detail-value">{detail.value}</span>
              </li>
            ))}
          </ul>
          <div className="more-product-actions">
            <button
              className="more-quote-button"
              onClick={() => openModal(productKey)}
            >
              Get Quote
            </button>
            <button
              className="more-brochure-button"
              onClick={() => downloadBrochure(product.name)}
            >
              <FiDownload className="more-button-icon" /> Brochure
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="more-container">
      {/* Hero Banner Section */}
      <section className="more-hero-section">
        <img
          src={heroImage}
          alt="Premium Aluminium Glass Solutions"
          className="more-hero-image"
        />
        <div className="more-hero-overlay">
          <div className="more-hero-content">
            <h1 className="more-hero-title" data-aos="fade-up">More Products</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="more-product-section">
        <div className="more-inner-container">
          <h2 className="more-section-title" data-aos="fade-up">
            Our Aluminium Glass Partition Collection
          </h2>
          <div className="more-product-grid">
            {Object.keys(products).map(productKey => renderProductCard(productKey))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && currentProduct && (
        <div className="more-modal-overlay">
          <div className="more-modal-content">
            <button className="more-modal-close" onClick={closeModal}>
              <FiX className="more-close-icon" />
            </button>
            <div className="more-modal-product-info">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="more-modal-product-image"
              />
              <h3 className="more-modal-product-title">{currentProduct.name}</h3>
              <div className="more-modal-product-description">{currentProduct.description}</div>
              <div className="more-modal-product-price">
                {currentProduct.price}
              </div>
              <ul className="more-modal-product-specs">
                {currentProduct.details.map((detail, index) => (
                  <li key={index} className="more-modal-spec-item">
                    <span className="more-modal-spec-label">{detail.label}:</span> 
                    <span className="more-modal-spec-value">{detail.value}</span>
                  </li>
                ))}
              </ul>
              <button
                className="more-modal-brochure-button"
                onClick={() => downloadBrochure(currentProduct.name)}
              >
                <FiDownload className="more-modal-button-icon" /> Download Brochure
              </button>
            </div>
            <div className="more-contact-form">
              <p className="more-contact-message">
                We'll contact you shortly with the quote details
              </p>
              <form onSubmit={myFormik.handleSubmit} className="more-form">
                <div className="more-form-group">
                  <label htmlFor="phone" className="more-form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={myFormik.values.phone}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="Phone no."
                    className="more-form-input"
                  />
                </div>
                <div className="more-form-group">
                  <label htmlFor="user-email" className="more-form-label">Email</label>
                  <input
                    type="email"
                    id="user-email"
                    name="email"
                    value={myFormik.values.email}
                    onChange={myFormik.handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="more-form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="more-submit-button"
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

export default More;