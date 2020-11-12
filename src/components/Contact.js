import React from "react";

function Contact() {
  return (
    <div className="container card shadow mt-5 p-4">
      <div className="row">
        <div className="col-md-9 content-wrapper">
          <h1>CONTACT ME</h1>
          <p>Feel free to contact me using the form below or directly!</p>
          <p>
            <strong>Email: </strong> <a href="mailto:">jacksolaro@gmail.com</a>
          </p>
          <p>
            <strong>Phone: </strong> (310)318-4555
          </p>

          {/* <!-- Contact Form --> */}
          <form>
            <hr />
            {/* <!-- Name Input Field --> */}
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="contactName"
                aria-describedby="contactName"
              />
            </div>
            {/* <!-- Email Address Input Field --> */}
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="contactEmail"
                aria-describedby="contactEmail"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            {/* <!-- Custom Message Input Field --> */}
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="contactMessage"
                rows="3"
              ></textarea>
            </div>
            {/* <!-- Submit Button --> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
  );
}

export default Contact;
