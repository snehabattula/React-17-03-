import React from "react";

const App: React.FC = () => {
  const handleClick = (): void => {
    alert("Explore our designs!");
  };

  return (
    <div style={styles.page}>
      
      <nav style={styles.nav}>
        <h2 style={{ margin: 0 }}>Sure Interiors</h2>
        <button style={styles.navBtn}>Contact</button>
      </nav>

     
      <div style={styles.hero}>
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Designing Spaces That Inspire Living
          </h1>
          <p style={styles.description}>
            We create elegant, functional, and modern interiors tailored to your lifestyle.
            Every detail is crafted with precision and passion.
          </p>
          <button style={styles.cta} onClick={handleClick}>
            Explore Designs
          </button>
        </div>

        <div style={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Interior Design"
            style={styles.image}
          />
        </div>
      </div>

    
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>Modern Designs</h3>
          <p>Stylish and contemporary interiors that stand out.</p>
        </div>
        <div style={styles.card}>
          <h3>Quality Materials</h3>
          <p>We use premium materials for long-lasting beauty.</p>
        </div>
        <div style={styles.card}>
          <h3>Expert Team</h3>
          <p>Professional designers bringing your vision to life.</p>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>© 2026 Sure Interiors. All rights reserved.</p>
      </footer>
    </div>
  );
};


const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  navBtn: {
    padding: "8px 16px",
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
  },
  left: {
    maxWidth: "50%",
  },
  heading: {
    fontSize: "40px",
    color: "#2c3e50",
  },
  description: {
    fontSize: "18px",
    margin: "20px 0",
    color: "#555",
  },
  cta: {
    padding: "12px 25px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  right: {
    maxWidth: "45%",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  features: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#2c3e50",
    color: "white",
  },
};

export default App;