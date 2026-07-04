import React, { useState } from "react";
import "../css/reserve.css";
import {
  FaClock,
  FaPhoneAlt,
  FaUsers,
  FaMapMarkerAlt
} from "react-icons/fa";
import axios from "axios";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    guests: "1 Person",
    date: "",
    time: "",
    request: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.date) {
      newErrors.date = "Date required";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "Past date not allowed";
      }
    }

    if (!formData.time) {
      newErrors.time = "Time required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:8080/api/reservation",
        formData
      );

      console.log(response.data);
      setShowPopup(true);

    } catch (error) {
      console.log(error);
      alert("Reservation failed!");
    }
  };

  const closePopup = () => {
    setShowPopup(false);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      guests: "1 Person",
      date: "",
      time: "",
      request: ""
    });
  };

  return (
    <section className="reservation">
      <div className="left-box">
        <h2>Contact Info</h2>

        <p className="contact-text">
          We're happy to help you plan the perfect dining experience.
        </p>

        <div className="contact-item">
          <div className="icon-box"><FaClock /></div>
          <div>
            <h4>OPENING HOURS</h4>
            <p>Wed - Sun, 9 AM - 11 PM</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box"><FaPhoneAlt /></div>
          <div>
            <h4>CALL FOR BOOKING</h4>
            <p>+1 (800) 123-4567</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box"><FaUsers /></div>
          <div>
            <h4>GROUP DINING</h4>
            <p>Special menus for 10+ guests</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box"><FaMapMarkerAlt /></div>
          <div>
            <h4>LOCATION</h4>
            <p>42 Flavor Street, NY</p>
          </div>
        </div>
      </div>

      <form className="form-box" onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              onChange={handleChange}
            />
            <span>{errors.fullName}</span>
          </div>

          <div>
            <label>Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <span>{errors.phone}</span>
          </div>
        </div>

        <div className="row">
          <div>
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <span>{errors.email}</span>
          </div>

          <div>
            <label>Guests *</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4 People</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div>
            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <span>{errors.date}</span>
          </div>

          <div>
            <label>Time *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <span>{errors.time}</span>
          </div>
        </div>

        <div>
          <label>Special Requests</label>
          <textarea
            name="request"
            value={formData.request}
            placeholder="Allergies, dietary needs..."
            onChange={handleChange}
          />
        </div>

        <button type="submit">Confirm Reservation</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Reservation Confirmed ✅</h2>

            <p><b>Name:</b> {formData.fullName}</p>
            <p><b>Phone:</b> {formData.phone}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>Guests:</b> {formData.guests}</p>
            <p><b>Date:</b> {formData.date}</p>
            <p><b>Time:</b> {formData.time}</p>
            <p><b>Request:</b> {formData.request}</p>

            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservation;