import TitleCard from '../components/TitleCard.js';
function Home({ header = "hi, i'm evan", description }) {
  return (
    <div className="page home-page">
      <div className="page-content">
        <TitleCard header={header} description={description} />
      </div>
    </div>
  );
}

export default Home;
