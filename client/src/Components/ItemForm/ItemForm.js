import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBFormInline
} from "mdbreact";

const ItemForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3 white-text">
                  <MDBIcon icon="comment-dollar" /> What are we selling today?
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Item name"
                    icon="frog"
                    group
                  />

                  <MDBInput
                    label="Price"
                    icon="money-bill-alt"
                    group
                  />

                  <MDBInput
                    label="Category"
                    icon="folder-open"
                    group
                  />

                  <MDBInput
                    label="Condition"
                    icon="medkit"
                    group
                  />

                  <div>
                    {/* Material inline */}
                    <MDBFormInline>
                      <MDBInput
                        label='New'
                        type='checkbox'
                        id='checkbox1'
                        containerClass='mr-5'
                      />
                      <MDBInput
                        label='Refurbished'
                        type='checkbox'
                        id='checkbox2'
                        containerClass='mr-5'
                      />
                      <MDBInput
                        label='Pre-owned'
                        type='checkbox'
                        id='checkbox3'
                        containerClass='mr-5'
                      />
                      <MDBInput
                        label='Other'
                        type='checkbox'
                        id='checkbox4'
                        containerClass='mr-5'
                      />
                    </MDBFormInline>
                  </div>

                  <MDBInput
                    label="(Development) Image link"
                    icon="medkit"
                    group
                  />

                  <MDBInput
                    label="(Development) User ID"
                    icon="medkit"
                    group
                  />
                  
                </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit"
                  >
                    Create listing
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ItemForm;