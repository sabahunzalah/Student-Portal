import React from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import syalaniImage from "assets/images/smit-stud.png";

const IdCard = () => {
  const downloadIdCard = () => {
    html2canvas(document.querySelector("#pdf-content")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = 210;
      const pdfHeight = 297;
      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
      });
      const imgWidth = canvas.width * 0.264583;
      const imgHeight = canvas.height * 0.264583;
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;
      pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
      pdf.save("id-card.pdf");
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div id="pdf-content" style={{ width: "210mm", padding: "20mm", boxSizing: "border-box" }}>
          <div
            id="id-card"
            style={{
              width: "700px",
              height: "500px",
              border: "6px solid #127168",
              padding: "20px",
              position: "relative",
              display: "flex",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                flex: "1",
                borderRight: "1px solid #127168",
                paddingRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={syalaniImage} alt="SMIT" style={{ width: "150px", height: "auto" }} />
              <div
                style={{
                  color: "#127168",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <h3>Sylani Mass IT Training Program</h3>
              </div>
              <br />
              <div
                style={{
                  border: "3px solid #88C343",
                  borderRadius: "2px",
                  padding: "10px",
                  marginBottom: "10px",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  // src={formValues.picture ? URL.createObjectURL(formValues.picture) : ""}
                  alt="Profile"
                  style={{ width: "100px", height: "100px", borderRadius: "30%" }}
                />
              </div>
              <br />
              <div style={{ textAlign: "center", color: "#127168" }}>
                <h4> SANA KHAN</h4>
                <h5>Web and Mobile App Development</h5>
                <h4>WMA-XXXXXX</h4>
              </div>
            </div>
            <div
              style={{
                flex: "1",
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                color: "#127168",
                textAlign: "left",
              }}
            >
              <h5>
                <strong>Name:</strong> SANA KHAN
              </h5>
              <h5>
                <strong>Father&apos;s Name: </strong>MUHAMMAD ALI
              </h5>
              <h5>
                <strong>CNIC:</strong> XXXXX-XXXXXXX-X
              </h5>
              <h5>
                <strong>Course:</strong> WMA BATCH 11
              </h5>

              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <QRCode
                  // value={`Name: ${formValues.fullName}, CNIC: ${formValues.cnic}`}
                  size={100}
                />
              </div>

              <p style={{ marginTop: "20px", fontSize: "14px", textAlign: "center" }}>
                Note: This Card is for SMIT&apos;s premises only. If found, please return to SMIT.
              </p>

              <div style={{ marginTop: "50px", textAlign: "center" }}>
                <p
                  style={{
                    borderTop: "1px solid #127168",
                    width: "200px",
                    margin: "0 auto",
                    paddingTop: "10px",
                  }}
                >
                  Issuing Authority
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px", padding: "10mm", borderTop: "1px solid #127168" }}>
            <h2 style={{ textAlign: "center", color: "#127168" }}>Instructions</h2>
            <ul
              style={{
                lineHeight: "1.6",
                color: "#127168",
                fontSize: "16px",
                textAlign: "left",
                listStyle: "none",
              }}
            >
              <li>Please color print of this Admit/ID card.</li>
              <li>Attestation of ID/Admit Card is extremely mandatory from SMIT.</li>
              <li>
                No student will be allowed to enter in Entry Test without attestation of Admit/ID
                Card.
              </li>
              <li>
                Bring CNIC and Last qualification Marksheet/Certification (both original) at the
                time of Attestation.
              </li>
              <li>
                Address: Gulshan Campus (2nd Floor, Mumtaz Mobile Mall, Gulshan Chowrangi)/ A-25,
                Saylani Head office, Char Minar Chowrangi Bahadurabad.
              </li>
              <li>
                Gulshan Campus Location:{" "}
                <a
                  style={{ color: "#86C042", cursor: "pointer" }}
                  href="https://goo.gl/maps/oTtdJ7BRqxoAto2w9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps Link
                </a>
              </li>
              <li>
                Headoffice Campus Location:{" "}
                <a
                  style={{ color: "#86C042", cursor: "pointer" }}
                  href="https://goo.gl/maps/dDWnwFT85pTwSJTMA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps Link
                </a>
              </li>
              <li>
                For further information please like & follow our Facebook Page:{" "}
                <a
                  style={{ color: "#86C042", cursor: "pointer" }}
                  href="https://www.facebook.com/SaylaniMassITraining"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saylani Mass IT Training
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Button outside the PDF content */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={downloadIdCard}
            style={{
              color: "white",
              backgroundColor: "#127168",
              fontSize: "18px",
              width: "300px",
              fontWeight: "400",
              height: "50px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
