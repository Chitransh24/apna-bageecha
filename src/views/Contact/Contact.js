import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <p style={{ fontWeight: "thin", fontSize: "45px" }}>
          We'd love to hear from you!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
            marginRight: "10px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: "10px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <p>
            <div style={{ fontSize: "35px", fontWeight: "bold", }}>
              Drop Your Queries Here
            </div>
            <div style={{ margin:'5px' }}>
            <ContactForm  />
            </div>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
