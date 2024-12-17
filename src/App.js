import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="team">Team:</label>
        <select name="team" id="team">
          <option value="none" defaultValue disabled hidden>Select A Team</option>
          <option value="anaheim">Anaheim Ducks</option>
          <option value="boston">Boston Bruins</option>
          <option value="buffalo">Buffalo Sabres</option>
          <option value="calgary">Calgary Flames</option>
          <option value="carolina">Carolina Hurricanes</option>
          <option value="chicago">Chicago Blackhawks</option>
          <option value="columbus">Columbus Blue Jackets</option>
          <option value="dallas">Dallas Stars</option>
          <option value="detroit">Detroit Red Wings</option>
          <option value="edmonton">Edmonton Oilers</option>
          <option value="florida">Florida Panthers</option>
          <option value="los_angeles">Los Angeles Kings</option>
          <option value="minnesota">Minnesota Wild</option>
          <option value="montreal">Montral Canadiens</option>
          <option value="nashville">Nashville Predators</option>
          <option value="new_jersey">New Jersey Devils</option>
          <option value="nyi">New York Islanders</option>
          <option value="nyr">New York Rangers</option>
          <option value="ottawa">Ottawa Senators</option>
          <option value="philadelphia">Philadelphia Flyers</option>
          <option value="pittsburgh">Pittsburgh Penguins</option>
          <option value="san_jose">San Jose Sharks</option>
          <option value="seattle">Seattle Kraken</option>
          <option value="st_louis">	St. Louis Blues</option>
          <option value="tampa_bay">Tampa Bay Lightning</option>
          <option value="toronto">Toronto Maple Leafs</option>
          <option value="utah">Utah Hockey Club</option>
          <option value="vancouver">Vancouver Canucks</option>
          <option value="las_vegas">Vegas Golden Knights</option>
          <option value="washington">Washington Capitals</option>
          <option value="winnipeg">Winnipeg Jets</option>
        </select>
        <MyButton></MyButton>
      </header>
    </div>
  );
}

function MyButton()
{
 GetFetchResult("https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/player/8478402/game-log/now")
  return(
  <button>Click me</button>
  );
}

function GetFetchResult(url)
{
  fetch(url,
    {
      method: 'GET'
    }
  )
  .then((res => res.json()))
  .then((data) => {
    console.log(data);
  });
}
export default App;

