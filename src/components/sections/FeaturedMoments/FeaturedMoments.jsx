import React, { useState } from 'react';
import {
  FEATURED_MOMENTS,
  BOOKING_DESTINATIONS,
  BOOKING_MONTHS,
  BOOKING_GROUPS
} from '../../../data/featuredMoments';
import styles from './FeaturedMoments.module.css';

function BookingWidget() {
  const [formData, setFormData] = useState({
    destination: "",
    customDestination: "",
    month: "",
    groupType: "",
    name: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.destination) {
      newErrors.destination = "Please select destination";
    }

    if (formData.destination === "custom" && !formData.customDestination.trim()) {
      newErrors.destination = "Enter custom destination";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    return newErrors;
  };

  // ✅ Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "destination" && value !== "custom" && {
        customDestination: ""
      })
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  // ✅ Submit
  const handleSubmit = async () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const finalDestination =
      formData.destination === "custom"
        ? formData.customDestination
        : formData.destination;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLhKcYAd-HdPSUZ45gtfzJ0KnY8IHfVlFXsITNhu2Afq6tq8675Vft2GlOMoYASlXZRA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          destination: finalDestination
        })
      });

      alert("Enquiry submitted successfully!");

      setFormData({
        destination: "",
        customDestination: "",
        month: "",
        groupType: "",
        name: "",
        phone: "",
        email: ""
      });

      setErrors({});

    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className={styles.widget}>
      <p className={styles.widgetTitle}>BOOKING WIDGET</p>

      <div className={styles.controls}>

        {/* Destination */}
        <div>
          <select
            name="destination"
            className={styles.select}
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">Select Destination</option>

            {BOOKING_DESTINATIONS.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}

            <option value="custom">Custom</option>
          </select>

          {errors.destination && (
            <span className={styles.errorText}>{errors.destination}</span>
          )}
        </div>

        {/* Custom Input */}
        {formData.destination === "custom" && (
          <input
            type="text"
            name="customDestination"
            placeholder="Enter your destination"
            className={styles.input}
            value={formData.customDestination}
            onChange={handleChange}
          />
        )}

        {/* Month */}
        <select
          name="month"
          className={styles.select}
          value={formData.month}
          onChange={handleChange}
        >
          <option value="">Go In</option>
          {BOOKING_MONTHS.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Group */}
        <select
  name="groupType"
  className={styles.select}
  value={formData.groupType}
  onChange={handleChange}
>
  <option value="">Group Type</option>

  {BOOKING_GROUPS.map(g =>
    g.subGroups ? (
      <optgroup key={g.label} label={g.label}>
        {g.subGroups.map(sub => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </optgroup>
    ) : (
      <option key={g.label} value={g.label}>
        {g.label}
      </option>
    )
  )}
</select>

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`${styles.input} ${errors.name ? styles.errorInput : ""}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className={`${styles.input} ${errors.phone ? styles.errorInput : ""}`}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className={`${styles.input} ${errors.email ? styles.errorInput : ""}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>

        <button className={styles.widgetBtn} onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}

export default BookingWidget;

export function FeaturedMoments() {
  return (
    <section className={styles.section}>
      <div className={styles.statsBar}>
        <div className={styles.inner}>
          <div className={styles.trackWrap}>
            <div className={styles.track}>
              {[...FEATURED_MOMENTS, ...FEATURED_MOMENTS].map((m, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.circle}>
                    <img src={m.img} alt={m.alt} loading="lazy" />
                  </div>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BookingWidget />
    </section>
  );
}