import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const Team = () => {
  return (
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Billy Coleman</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Wev developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Billy Coleman</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Wev developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Billy Coleman</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Wev developer</p>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default Team;