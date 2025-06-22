import React, { useState } from 'react';

const App = () => {
  const dinnerItems = [
    {
      id: 1,
      name: 'Momo',
      price: 120,
      calories: 250,
      benefits: 'High in protein (with meat filling), satisfying and flavorful.',
      healthy: 'Moderate — steamed is better than fried.',
      recommendation: '4-6 pieces for one person.',
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      price: 250,
      calories: 500,
      benefits: 'Rich in protein and spices that aid digestion.',
      healthy: 'Occasionally — high in oil and carbs.',
      recommendation: '1 medium bowl.',
    },
    {
      id: 3,
      name: 'Paneer Curry',
      price: 200,
      calories: 400,
      benefits: 'Good source of calcium and protein.',
      healthy: 'Yes, when eaten with roti or rice in moderate portion.',
      recommendation: '1 cup paneer curry.',
    },
    {
      id: 4,
      name: 'Dal Bhat Tarkari',
      price: 150,
      calories: 600,
      benefits: 'Complete Nepali meal with carbs, protein, and vitamins.',
      healthy: 'Very — a balanced diet.',
      recommendation: '1 plate (Dal, Bhat, Veg).',
    },
    {
      id: 5,
      name: 'Sekuwa',
      price: 180,
      calories: 300,
      benefits: 'Grilled meat with minimal oil, high protein.',
      healthy: 'Yes — better than fried meat.',
      recommendation: '4-5 pieces.',
    },
    {
      id: 6,
      name: 'Gundruk Sadeko',
      price: 100,
      calories: 80,
      benefits: 'High in fiber and probiotics.',
      healthy: 'Yes — great for digestion.',
      recommendation: '2-3 tablespoons as side dish.',
    },
    {
      id: 7,
      name: 'Choila',
      price: 160,
      calories: 280,
      benefits: 'Spicy meat dish rich in protein.',
      healthy: 'Yes — if not too spicy.',
      recommendation: 'Half plate with beaten rice.',
    },
    {
      id: 8,
      name: 'Yomari',
      price: 90,
      calories: 200,
      benefits: 'Sweet rice dumpling with sesame/molasses.',
      healthy: 'Yes — in small amount as dessert.',
      recommendation: '1-2 pieces.',
    },
    {
      id: 9,
      name: 'Thukpa',
      price: 130,
      calories: 350,
      benefits: 'Hot noodle soup with veggies/meat.',
      healthy: 'Yes — light and nutritious.',
      recommendation: '1 full bowl.',
    },
    {
      id: 10,
      name: 'Chatamari',
      price: 140,
      calories: 300,
      benefits: 'Nepali pizza made with rice flour and toppings.',
      healthy: 'Yes — when homemade.',
      recommendation: '1 piece.',
    },
  ];

  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ Nepali Dinner Menu</h1>

      <div style={styles.menu}>
        {dinnerItems.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3>{item.name}</h3>
            <p style={styles.subtitle}>
              See what {item.name} does to your body — just a click away!
            </p>
            <p>Price: Rs. {item.price}</p>
            <button
              style={styles.button}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rs. {item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: Rs. {total}</h3>

      {/* Food Detail Modal */}
      {selectedItem && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{selectedItem.name}</h2>
            <p>
              <strong>Calories:</strong> {selectedItem.calories} kcal
            </p>
            <p>
              <strong>Benefits:</strong> {selectedItem.benefits}
            </p>
            <p>
              <strong>Healthy:</strong> {selectedItem.healthy}
            </p>
            <p>
              <strong>Recommended Intake:</strong> {selectedItem.recommendation}
            </p>
            <button style={styles.closeBtn} onClick={() => setSelectedItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <div>
          <p>📍 Location: Waling, Madikhola</p>
          <p>📞 Contact: 98271152153</p>
          <p>
            🔗{' '}
            <a
              href="https://www.facebook.com/nitesa.bhattara.i/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{' '}
            |{' '}
            <a href="https://github.com/niteeshbhattu" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
        <p style={{ marginTop: '15px', fontSize: '13px' }}>
          © {new Date().getFullYear()} @niteeshbhattarai. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: 20,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  title: {
    marginBottom: 30,
    color: '#333',
    fontSize: 32,
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 20,
    marginBottom: 30,
  },
  card: {
    border: '1px solid #ccc',
    padding: 15,
    width: 220,
    borderRadius: 10,
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  button: {
    padding: '6px 12px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: 10,
  },
  footer: {
    marginTop: 50,
    padding: '30px 10px',
    backgroundColor: '#333',
    color: '#eee',
    borderTop: '4px solid #27ae60',
    fontSize: 15,
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
    textAlign: 'left',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
  },
  closeBtn: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: 5,
    cursor: 'pointer',
  },
};

export default App;
