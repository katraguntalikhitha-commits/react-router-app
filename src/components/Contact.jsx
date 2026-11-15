function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <div className="contact-card">
        <p><strong>Email:</strong> example@gmail.com</p>
        <p><strong>Phone:</strong> 9876543210</p>
        <p><strong>Location:</strong> Andhra Pradesh, India</p>

        <h3>Send us a message</h3>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Message submitted successfully!');
        }}>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <textarea
            placeholder="Enter your message"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;