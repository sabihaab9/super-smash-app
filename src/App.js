import './App.css';

function App() {
  //create an array 
  
  const fighters = ['Roy', 'Ganondorf', 'Mario', 'Luigi', 'Marth', 'Link', 'Inkling', 'Samus', 'Fox', 'Sheik', 'Zelda', 'Ken']
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {
          fighters.map((element, index) => {
            return (
            //need to return an element 
              <div>
                <img className = "fighter-img" src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${element.toLowerCase()}.png`} />
                <h5 className = "fighter-name">{element}</h5>
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
