import React, { Component } from "react";
import Hero from "../components/Hero";

class Faq extends Component {
  state = {
    faq: [],
  };

  render() {
    return (
      <>
        <Hero title="FAQ" />
        <div className="page-content-wrapper">
          <div className="faq-area section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="faq-wrapper">
                    <div className="single-faq">
                      <h2 className="faq-title">Frequently Asked Questions</h2>
                      <div className="accordion" id="shippingInfo">
                        {this.state.faq.map((faq) => (
                          <div className="accordion-item" key={faq.id}>
                            <h2
                              className="accordion-header"
                              id={"heading" + faq.id}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#collapse" + faq.id}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                {faq.title}
                              </button>
                            </h2>
                            <div
                              id={"collapse" + faq.id}
                              className="accordion-collapse collapse"
                              aria-labelledby={"heading" + faq.id}
                              data-bs-parent="#shippingInfo"
                            >
                              <div className="accordion-body">
                                <p>{faq.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Faq;
