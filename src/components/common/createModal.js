import { useState } from "react";
import { Col, Form, Button, Modal, Row } from "react-bootstrap";
import "./createModal.css";

function CreateModal({ show, handleClose, handleFormData, editFormData, modalTitle }) {
  const [formData, setFormData] = useState({
    name: editFormData?.name || '',
    email:  editFormData?.email || '',
    mobile: editFormData?.mobile || '',
    course: editFormData?.course || '',
    gender: editFormData?.gender || '',
    designation: editFormData?.designation || '',
    image: null,
  });

  console.log("editFormData",editFormData)

  const [errors, setErrors] = useState({});
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setFormData({ ...formData, image: file });
    } else {
      setErrors({ ...errors, image: 'Please upload a JPG or PNG image.' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // if (!formData.username.match(/^\w{8}$/)) {
    // if (!formData.username.match(/^\w{8}$/)) {
    //   setErrors({ ...errors, username: 'Username must be 8 characters.' });
    //   return;
    // }

    // if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@gmail.com$/)) {
    //   setErrors({ ...errors, email: 'Invalid email address (must end with "@gmail.com").' });
    //   return;
    // }

    // if (!formData.mobileNumber.match(/^\d{10}$/)) {
    //   setErrors({ ...errors, mobileNumber: 'Invalid mobile number (must be 10 digits).' });
    //   return;
    // }

    // // Validate course
    // if (!formData.course) {
    //   setErrors({ ...errors, course: 'Please select a course.' });
    //   return;
    // }

    // if (!formData.gender) {
    //   setErrors({ ...errors, gender: 'Please select a gender.' });
    //   return;
    // }

    // if (!formData.designation) {
    //   setErrors({ ...errors, designation: 'Please enter a designation.' });
    //   return;
    // }

    // if (formData.email === 'example@gmail.com') {
    //   setIsEmailDuplicate(true);
    //   return;
    // }

    console.log('Form data:', formData);
    if(modalTitle === "Update"){
      console.log(formData)
      formData.id = editFormData?.id;
      handleFormData(formData);
    } else {
      handleFormData(formData);
    }
    setFormData({
      name: '',
      email: '',
      mobile: '',
      course: '',
      gender: '',
      designation: '',
      image: null,
    });
    setErrors({});
    setIsEmailDuplicate(false);
    handleClose();
  };
  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={handleClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit} className="FormValidate">
        <Form.Group controlId="formUsername" className="formGroup">
          <Form.Label className="NameLabel">Username</Form.Label>
          <Form.Control
            className="InputTag"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            isInvalid={errors.username}
          />
         
        </Form.Group>

        <Form.Group controlId="formEmail" className="formGroup">
          <Form.Label className="NameLabel">Email</Form.Label>
          <Form.Control
            className="InputTag"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            isInvalid={errors.email || isEmailDuplicate}
          />
        </Form.Group>

        <Form.Group controlId="formMobileNumber" className="formGroup">
          <Form.Label className="NameLabel">Mobile</Form.Label>
          <Form.Control
            className="InputTag"
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            isInvalid={errors.mobileNumber}
          />
        </Form.Group>
        <Form.Group controlId="formGender" className="genderFormGroup">
          <Form.Label className="ganderLabel">Gender</Form.Label>
          <div className='genderInput'>
            <Form.Check
              className="ganderInputTag"
              type="radio"
              label="Male"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              isInvalid={errors.gender}
            />
            <Form.Check
            className="ganderInputTag"
              type="radio"
              label="Female"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              isInvalid={errors.gender}
            />
            <Form.Check
            className="ganderInputTag"
              type="radio"
              label="other"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleInputChange}
              isInvalid={errors.gender}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formDesignation" className="formGroup">
          <Form.Label className="NameLabel">Designation</Form.Label>
          <Form.Control
            className="InputTag"
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            isInvalid={errors.designation}
          />
        </Form.Group>

        <Form.Group controlId="formCourse" className="formGroup">
          <Form.Label className="NameLabel">Course</Form.Label>
          <Form.Control
            className="InputTag"
            as="select"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            isInvalid={errors.course}
          >
            <option value="">Select</option>
            <option value="Course A">Course A</option>
            <option value="Course B">Course B</option>
            <option value="Course C">Course C</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formImage" className="formGroup">
          <Form.Label className="NameLabel">Image</Form.Label>
          <Form.Control
           className="InputTag"
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
            isInvalid={errors.image}
          />
        </Form.Group>

          <Col>
          <Row>
            <Col md={6}>
              <Button onClick={handleClose} variant="primary" className="btn">
                Cancel
              </Button>
            </Col>
            <Col md={6}>
              <Button variant="success" type="submit" className="btn">
                {modalTitle}
              </Button>
            </Col>
          </Row>
          </Col>
      </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateModal;
