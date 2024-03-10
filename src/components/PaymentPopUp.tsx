import React, { useState, useEffect } from "react";
import "../styles/PaymentPopUp.css";
import Navbar from "./Navbar";

const PaymentPopup = () => {
  const [processing, setProcessing] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const downloadBill = () => {
    // Implement the logic to download the bill PDF
    console.log("Downloading bill PDF...");
    generatePDF();
  };

  const generatePDF = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/generate-pdf");
      const blob = await response.blob();

      // Create a download link for the PDF
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "bill.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="payment-popup">
        {processing && (
          <div className="loader" style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              💳 PAYMENT PROCESSING...
            </p>
            <img
              src="https://media.tenor.com/FIzWAbQcjpYAAAAM/loading-splash.gif" // Replace with the URL of your loading GIF
              // src="https://media2.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.webp?cid=790b7611500mxbel8dg62wxxalogh7pcjl6mgjbr098mf19j&ep=v1_gifs_search&rid=giphy.webp&ct=g"
              // alt="Processing..."
              style={{ width: "80%", height: "80%", borderRadius: "50%" }}
            />
          </div>
        )}
        {success && (
          <div className="success">
            <span>Payment Successful! </span>
            <img
              className="payment-done"
              src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/media/1cbd3594bb5e8d90924a105d4aae924c.gif"
            />
            <button onClick={downloadBill}>Download Bill PDF</button>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentPopup;
