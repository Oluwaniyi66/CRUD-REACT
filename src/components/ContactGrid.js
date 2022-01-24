import React from "react";
import "./Header.css";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";

function ContactGrid({ id, image, name, job, email, location, phone }) {
  return (
    <div className="container">
      <div className="konta my-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div class="form-check col-lg-1 ckb">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="col-lg-11">
                <div className="row">
                  <div className="col-lg-3 emm1">
                    <div className="row">
                      <div className="col-lg-3 pic">
                        <img src={image} alt="" />
                      </div>
                      <div className="col-lg-9 row">
                        <h3 className="emm2 col-lg-3">{name}</h3>
                        <h4 className="emm2 col-lg-9">{job}</h4>
                      </div>
                    </div>
                  </div>
                  <h4 className="col-lg-9 emm">{email}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <h4 className="col-lg-2 emm1">{location}</h4>
                  <h4 className="col-lg-10 emm">{phone}</h4>
                </div>
              </div>
              <div class="form-check col-lg-2 ckb">
                <div className="row">
                  <div className="col-lg-6">
                    <i
                      type="button"
                      class="fas  fa-pen"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    ></i>
                  </div>
                  <div className="col-lg-6">
                    <i
                      type="button"
                      class="fas  fa-user-minus"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalEdit />
        <ModalDelete />
      </div>
    </div>
  );
}

export default ContactGrid;
