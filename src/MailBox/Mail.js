import React from "react";
import { Link } from "react-router-dom";
import "./Mail.css";
import mail from "./MailData";

function Mail() {
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
                <input
                  type="text"
                  className="inp-search"
                  placeholder="search here...."
                />
              </div>
              <div className="col-lg-12 m-0 p-0">
                <div className="inp-search1">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="col-lg-2 d-flex justify-content-around check-all">
                        <input type="checkbox" />
                        <h4>Check all</h4>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex">
                        <div className="mx-2">
                          <i class="fas fa-bell"></i>
                        </div>
                        <div className="mx-2">
                          <i class="fas fa-star"></i>
                        </div>
                        <div className="mx-2">
                          <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div className="mx-2">
                          <div>
                            <i class="fas fa-ellipsis-v"></i>
                            {/* <div className="d-flex">
                              <div>
                                <i class="fas fa-book-open"></i>
                              </div>
                              <div>
                                <i class="fas fa-book-reader"></i>
                              </div>
                              <div>
                                <i class="fas fa-trash-alt"></i>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {mail.map((item, index) => (
                <Link to ={`/mailpage/${item.id} `}>
                  <div className="col-lg-12 inp-search2 mt-2 d-flex">
                    <div className="col-lg-3 d-flex">
                      <div className="col-lg-3 hhh">
                        <input type="checkbox" className="insp-inp" />
                      </div>
                      <div className="col-lg-3 d-flex justify-content-start ">
                        <div className="insp-img">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 rolu m-0 p-0">
                        <h4 className="mt-2">{item.name}</h4>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                      <div className="col-lg-10 d-flex">
                        {item.file ? (
                          <div className="mx-1">
                            <i class="fas fa-paperclip"></i>
                          </div>
                        ) : (
                          ""
                        )}

                        <div className="mx-1 rolu">
                          <h4>{item.title}</h4>
                        </div>
                        {/* <div className="mx-2 rolu">
                          <p>{item.description}</p>
                        </div> */}
                      </div>
                      <div className="col-lg-2 ">
                        <div className=" col-lg-2 td"></div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <p> {item.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
