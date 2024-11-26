// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="py-5" style={{ backgroundColor: "#299FB2" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
        <h3 className="mb-4" style={{  color: "#fff" }}>Testimonios</h3>
          
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card" style={{ backgroundColor: "rgba(192, 192, 192, 0.733)" }}>
            <div
              className="card-up"
              style={{ backgroundColor: "#ada9ad" }}
            ></div>
            <div className="avatar mx-auto ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody >
              <h4 className="mb-4">Maria Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet eos adipisci, consectetur
                adipisicing elit.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
        <MDBCard className="testimonial-card" style={{ backgroundColor: "rgba(192, 192, 192, 0.733)" }}>
            <div
              className="card-up"
              style={{ backgroundColor: "#ada9ad" }}
            ></div>
            <div className="avatar mx-auto ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody >
              <h4 className="mb-4">Maria Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet eos adipisci, consectetur
                adipisicing elit.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
        <MDBCard className="testimonial-card" style={{ backgroundColor: "rgba(192, 192, 192, 0.733)" }}>
            <div
              className="card-up"
              style={{ backgroundColor: "#ada9ad" }}
            ></div>
            <div className="avatar mx-auto ">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody >
              <h4 className="mb-4">Maria Smantha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet eos adipisci, consectetur
                adipisicing elit.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

