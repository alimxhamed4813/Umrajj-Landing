import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <img src="images/pico.png" alt="Hero Image" />
      <h1>Welcome to Our App</h1>
      <p>Your gateway to a seamless travel experience.</p>
    </section>
  );
};

const Destinations = () => {
  const destinations = [
    { name: 'Medina', image: 'images/medina.jpg' },
    { name: 'Mount Arafat', image: 'images/mountarafat.jpg' },
    { name: 'Masjid Nabawi', image: 'images/masjidnabawi.jpg' },
    { name: 'Makkah', image: 'images/prayingumrah.jpeg' },
  ];

  return (
    <section className="destinations">
      <h2>Explore Our Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <div key={destination.name} className="destination">
            <img src={destination.image || "/placeholder.svg"} alt={destination.name} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="feature-grid">
        <div className="feature">
          <img src="images/agencyapp.png" alt="App Interface" />
          <h3>User-Friendly Interface</h3>
          <p>Enjoy a smooth and intuitive experience.</p>
        </div>
        {/* Add more features here */}
      </div>
    </section>
  );
};


const App = () => {
  return (
    <div className="app">
      <Hero />
      <Destinations />
      <Features />
    </div>
  );
};

export default App;

