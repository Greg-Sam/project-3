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
            <MDBCardBody className='stylish-color-dark'>
              <MDBCardHeader className="form-header peach-gradient rounded">
                <h3 className="my-3 white-text text-center">
                  <MDBIcon icon="comment-dollar" /> What are we selling today?
                </h3>
              </MDBCardHeader>
              <>
                <div className="grey-text ">
                  <MDBInput
                    className='text-white'
                    label="Item name"
                    icon="frog"
                    group
                    name="name"
                    value={props.name}
                    onChange={props.handleInputChange}
                  />


                  <MDBInput
                    className='text-white'
                    label="Description"
                    icon="align-left"
                    type="textarea"
                    outline
                    name="description"
                    value={props.description}
                    onChange={props.handleInputChange}
                  />

                  <MDBInput
                    className='text-white'
                    label="Price"
                    icon="money-bill-alt"
                    group
                    name="price"
                    value={props.price}
                    onChange={props.handleInputChange}
                  />
                  <MDBInput
                    className='text-white'
                    label="Condition"
                    icon="hand-point-right"
                    group
                    name="condition"
                    value={props.condition}
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
                  <MDBRow className="text-center">
                    <MDBCol md="6"className="text-center justify-content-center">
                  <MDBDropdown name="category" >
                        <MDBDropdownToggle caret color="peach-gradient" className="rounded">
                      {props.category}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic >
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Electronics')}>Electronics</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Automotive')}>Automotive</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Household')}>Household</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Pets')}>Pets</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCategory('Clothing')}>Clothing</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                    </MDBCol>
                 
                 


                  {/* <MDBDropdown name="conditino">
                    <MDBDropdownToggle caret className="stylish-color-dark rounded">
                      {props.condition}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('New')}>New</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('New—open box')}>New—open box</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('Used-good condition')}>Used-good condition</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => props.handleSelectCondition('Used-some wear and tear')}>Used-some wear and tear</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown> */}
                  

                    <MDBCol md="6" className="text-center justify-content-center">
                  <div>
                    {/* Material inline */}
                    <MDBFormInline>

                      <h5 className="mt-2">Select Image File   </h5>
                      <input
                            className="pl-2  text-truncate"
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
                    </MDBCol>
                  </MDBRow>



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
                    rounded
                    gradient="peach"
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