import './App.css';
import useGeoLocation from './custumHook/useGeoLocation';
function App() {
  const {position : {lat,lon}, error, isLoading,getPosition}=useGeoLocation();
  return (
    <div className="App">
     <button onClick={getPosition}>
      get Location
     </button>
    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {!isLoading && !error && lat && lon &&(
      <p>
        Your GPS Location : {' '}
        <a target='_blank' rel='noreferrer' href={`https://www.saadstreetmap.org/#map=16/${lat}/${lon}`}>
        {lat},{lon}
        </a>
      </p>
    )}
    </div>
  );
}

export default App;
