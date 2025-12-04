import homeImg from './img/home.jpg';

function Home() {

    const sections = [
        {
          emoji: '🥦',
          title: 'Overall Introduction',
          content:
            'Our grocery section provides everything you need for daily life — from fresh produce and meats to household supplies and snacks. Every item is carefully chosen to ensure freshness, quality, and great value for your family.',
        },
        {
          emoji: '📦',
          title: 'Quality Assurance',
          content:
            'We work closely with trusted suppliers and local farms to bring you the best ingredients. Whether it’s organic vegetables, fresh-baked bread, or premium dairy products, you can always shop with confidence knowing our products meet strict quality standards.',
        },
        {
          emoji: '🛒',
          title: 'Shopping Experience',
          content:
            'Shopping for groceries should be easy and enjoyable. Our organized layout and simple navigation help you find what you need quickly, while our online ordering and delivery options save you time and effort.',
        },
        {
          emoji: '🚚',
          title: 'Service and Commitment',
          content:
            'We’re committed to making your shopping experience convenient and reliable. From fast delivery to friendly customer service, our goal is to make sure your grocery shopping is always smooth, satisfying, and stress-free.',
        },
      ];

      


  return (
    <>
    <div className="d-flex justify-content-center mt-2">
      <img
        src={homeImg}
        alt="home"
        style={{ width: '30vw', height: 'auto' }}
      />
    </div>

    <div className="container mt-4">
      {sections.map((section, index) => (
        <div key={index} className="card mb-3 p-3 shadow-sm">
          <h5>
            {section.emoji} <strong>{section.title}</strong>
          </h5>
          <p>{section.content}</p>
        </div>
      ))}
    </div>

    </>
    
  );
}

export default Home;
