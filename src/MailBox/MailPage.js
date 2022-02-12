import React from "react";
import "./Mail.css";
import mail from "./MailData";

function MailPage() {
  return (
    <div className="mail">
      <div className="container">
        <div className="col-lg-12 pt-4">
          <div className="row">
            <div className="col-lg-2 m-0 p-0">
              <div className="side-card">
                <div className="btn-icon">
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div className="side-card1 d-flex">
                <div className="col-lg-10">
                  <div className="btn-icon1 col-lg-10">
                    <i class="fas fa-inbox"></i>
                  </div>
                  <div className="col-lg-10">
                    <h3 className="btn-letter">Inbox</h3>
                  </div>
                </div>
                <div className="col-lg-2 num">
                  <h4>4</h4>
                </div>
              </div>
              <div className="side-card1">
                <div className="btn-icon1">
                  <i class="fas fa-star"></i>
                </div>
                <div>
                  <h3 className="btn-letter">Important</h3>
                </div>
              </div>
              <div className="side-card1">
                <div className="btn-icon1">
                  <i class="fas fa-paper-plane"></i>
                </div>
                <div>
                  <h3 className="btn-letter">Draft</h3>
                </div>
              </div>
              <div className="side-card2">
                <div className="btn-icon1">
                  <i class="fas fa-exclamation-circle"></i>
                </div>
                <div>
                  <h3 className="btn-letter">Spam</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-10 m-0 p-0">
              <div className="col-lg-12 m-0 p-0">
                <div className="inp-search d-flex">
                  <div className="col-lg-1">
                    <i class="fas fa-long-arrow-alt-left"></i>
                  </div>
                  <div className="col-lg-3">
                    <h4>Promotion page</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 m-0 p-0">
                <div className="inp-search1a d-flex">
                  <div className="col-lg-11">
                    <div className="col-lg-8 d-flex justify-content-start ">
                      <div className="insp-img  col-lg-6">
                        <img src={mail[0].image} alt="" />
                      </div>
                      <div className="col-lg-6 rolp">
                        <h4>{mail[0].name}</h4>
                        <div className="d-flex">
                          <h5 className="mx-1">{mail[0].email}</h5>
                          <h5>{mail[0].date}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1 d-flex">
                    <div className="col-lg-6">
                      <i class="fas fa-arrow-right"></i>
                    </div>
                    <div className="col-lg-6">
                      <i class="fas fa-arrow-left"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 m-0 p-0">
                <div className="inp-search1a d-flex">
                  <div className="col-lg-12">
                    <p>{mail[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 m-0 p-0">
                <div className="inp-search1a">
                  <div className="col-lg-9 mx-5 mb-4 d-flex">
                    
                      <div className="col-lg-4">
                        <div className="mp-img">
                          <img
                            src={mail[0].imageA}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mp-img">
                          <img
                            src={mail[0].imageB}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="mp-img">
                          <img
                            src={mail[0].imageC}
                            alt=""
                          />
                        </div>
                      </div>
                
                  </div>
                  <div className="col-lg-12 vvv">
                  <p>SUBCONTENT</p>
                  </div>
                  <div>
                  <p>NAME</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailPage;
