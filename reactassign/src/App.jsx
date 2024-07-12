import BasketballPlayerCard from "./Components/BasketballPlayerCard"

function App() {
  
  return (
    <>
    <BasketballPlayerCard
     name='Allen Iverson' 
     image='https://img.freepik.com/free-photo/portrait-afro-american-sportsman-basketball-player-sportswear-with-ball-dark-background_613910-6485.jpg?t=st=1720762032~exp=1720765632~hmac=31a8760860c7edbe43b53a90a1baf6f5b82b5fd4b432b0a25f00dff78c2c0d14&w=996' 
     position='Shooting Guard, Safe Guard ' 
     stats={{pointsPerGame:4.5,assistsPerGame:2,reboundsPerGame:3.7}}
     />
    </>
  )
}

export default App
