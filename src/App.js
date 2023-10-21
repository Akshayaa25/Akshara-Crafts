import './App.css';
import Navbar from './Components/navbar';
import Poster from './Components/Poster';
import Card from './Components/Card';
import datas from './data';

function App() {
  const cards = datas.map((item) => {
    return (
      <Card key={item.id} {...item} />
    );
  })
  return (
    <div className="App">
      <Navbar/>
      <Poster/>
      <div className='cards-list'>
      {cards}
      </div>
    </div>
  );
}

export default App;
