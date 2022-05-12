import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css"

const url="https://course-api.com/react-tours-project";

function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);

  const removeTour=(id)=>{
    const newTour=tours.filter(t=>t.id!=id)
    console.log(newTour.length);
    setTours(newTour);
  }

  const fetchTours=async ()=>{
    setLoading(true);
    try {
      const response=await fetch(url);
      const tours=await response.json();
      setTours(tours)
      setLoading(false)
    } catch (e) {
      setLoading(false);
    }

    
  }

  useEffect(()=>{
    fetchTours();
  },[]);

  if(loading){
      return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length==0){
    return (
    <main>
      <div className="title">
        <h2>0 Tours Left</h2>
        <button className="btn" onClick={fetchTours}>Refresh</button>
      </div>
    </main>
    )
  }
  return <main>
    <Tours tour={tours} removeTour={removeTour}/>
  </main>
}

export default App;
