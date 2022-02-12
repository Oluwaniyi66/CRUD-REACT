import React, { useState } from "react";

function ModalAdd({id}) {
  const [contacts, setContacts] = useState(
    localStorage.getItem("ropocontacts")
      ? JSON.parse(localStorage.getItem("ropocontacts"))
      :' []'
  );
  const [contact, setContact] = useState({
    name: "",
    email: "",
    job: "",
    phone: "",
    image: "",
    location: "",
  });


  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setContacts([...contacts, contact]);
    
// how to add id to the local storage
    const updatedContacts = [...contacts, {...contact, id: contacts.length+1}];
    setContacts(updatedContacts)
    localStorage.setItem("ropocontacts", JSON.stringify(updatedContacts));
    setContact({
        name: "",
        email: "",
        job: "",
        phone: "",
        image: "",
        location: "",
      });
  };
  return (
    /* <!-- Button trigger modal --> */

    /* <!-- Modal --> */
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Add a Member
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {/* form in the modal */}
            <form
              className="col-lg-12"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <input
                type="text"
                placeholder="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                className="col-lg-6"
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                className="col-lg-6"
              />
              <input
                type="text"
                placeholder="job"
                name="job"
                value={contact.job}
                onChange={handleChange}
                className="col-lg-6"
              />
              <input
                type="text"
                placeholder="phone"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                className="col-lg-6"
              />
              <input
                type="file"
                placeholder="image"
                name="image"
                value={contact.image}
                onChange={handleChange}
                className="col-lg-6"
              />
              <input
                type="text"
                placeholder="location"
                name="location"
                value={contact.location}
                onChange={handleChange}
                className="col-lg-12"
              />
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">
                  Add
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAdd;
