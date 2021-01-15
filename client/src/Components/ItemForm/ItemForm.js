import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBFormInline
} from "mdbreact";

const ItemForm = (props) => {
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
                    name="name"
                    value={props.name}
                    onChange={props.handleInputChange}
                  />

                  <MDBInput
                    label="Price"
                    icon="money-bill-alt"
                    group
                    name="price"
                    value={props.price}
                    onChange={props.handleInputChange}
                  />

                  <MDBInput
                    label="Category"
                    icon="folder-open"
                    group
                    name="category"
                    value={props.category}
                    onChange={props.handleInputChange}
                  />

                  <MDBInput
                    label="Description"
                    type="textarea"
                    outline
                    name="description"
                    value={props.description}
                    onChange={props.handleInputChange}
                  />

                  <MDBInput
                    label="Condition"
                    icon="medkit"
                    group
                    name="condition"
                    value={props.condition}
                    onChange={props.handleInputChange}
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
                    name="image"
                    value={props.image}
                    onChange={props.handleInputChange}
                  />

                  {/* <MDBInput
                    label="(Development) User ID"
                    icon="medkit"
                    group
                    name="_id"
                    value={props._id}
                    onChange={props.handleInputChange}
                  /> */}
                  
                </div>

                <div className="text-center mt-4">
                  <MDBBtn
                    color="light-blue"
                    className="mb-3"
                    type="submit"
                    onClick={(event) => props.postItem(event)}
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