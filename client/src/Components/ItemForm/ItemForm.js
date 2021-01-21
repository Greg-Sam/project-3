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
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
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
              <>
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
                    label="Description"
                    icon="align-left"
                    type="textarea"
                    outline
                    name="description"
                    value={props.description}
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
                  {/* <select id="dropdown"
                    onChange={props.handleDropdownChange} >
                    <option value="null">Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Household">Household</option>
                    <option value="Pets">Pets</option>
                    <option value="Clothing">Clothing</option>
                  </select> */}

                  <MDBDropdown name="category">
                    <MDBDropdownToggle caret color="default">
                      {props.category}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Electronics')}>Electronics</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Automotive')}>Automotive</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Household')}>Household</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Pets')}>Pets</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Clothing')}>Clothing</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                

                 


                  <MDBDropdown name="condition">
                    <MDBDropdownToggle caret color="default">
                      {props.condition}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('New')}>New</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('New—open box')}>New—open box</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('Used-good condition')}>Used-good condition</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('Used-some wear and tear')}>Used-some wear and tear</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  


                  <div>
                    {/* Material inline */}
                    <MDBFormInline>

                      <h5 className="mt-2">Select Image File   </h5>
                      <input
                      className="pl-2"
                        type='file'
                        label="Image link"
                        icon="medkit"
                        group
                        name="image"
                        // value={fileState}
                        onChange={props.onFileChange}
                      />

                    </MDBFormInline>
                  </div>



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
              </>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ItemForm;