import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBRow, MDBCol, } from
"mdbreact";

const Testmonials = () => {
return (
<div>
  <MDBRow>
    <MDBCol md='4'>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
        <MDBCardHeader color="success-color">Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional
            content.
          </MDBCardText>
          <MDBBtn color="danger" size="sm">
            go somewhere
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md='4'>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
        <MDBCardHeader color="warning-color">Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional
            content.
          </MDBCardText>
          <MDBBtn color="danger" size="sm">
            go somewhere
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol md='4'>
      <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
        <MDBCardHeader color="info-color">Featured</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Special title treatment</MDBCardTitle>
          <MDBCardText>
            With supporting text below as a natural lead-in to additional
            content.
          </MDBCardText>
          <MDBBtn color="danger" size="sm">
            go somewhere
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  
</div>
);
};

export default Testmonials;