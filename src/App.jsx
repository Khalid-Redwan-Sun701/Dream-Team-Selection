import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Newsletter from './components/Newsletter/Newsletter';
import Toggle from './components/Toggle/Toggle';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';

function App() {
  const [coin, setCoin] = useState(0);
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleChoosePlayer = (player) => {
    // Check if the maximum number of selected players is reached
    if (selectedPlayers.length >= 6) {
      toast.error("You can't choose more than 6 players", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false, // Hide progress bar
        closeOnClick: true, // Allow closing on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Allow dragging
        theme: 'dark', // Set the theme (light or dark)
      });
      return;
    }

    const playerAlreadySelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.name === player.name
    );

    if (playerAlreadySelected) {
      // alert('This player is already in your selected list.');
      toast.error('This player is already in your selected list.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false, // Hide progress bar
        closeOnClick: true, // Allow closing on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Allow dragging
        theme: 'dark', // Set the theme (light or dark)
      });
      return;
    }

    if (coin < player.price) {
      toast.error('Not Enough money to buy this player. Claim some Credit', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false, // Hide progress bar
        closeOnClick: true, // Allow closing on click
        pauseOnHover: true, // Pause on hover
        draggable: true, // Allow dragging
        theme: 'dark', // Set the theme (light or dark)
      });
      return;
    }

    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers);
    setCoin(coin - player.price);
    setSelectedNumber(selectedNumber + 1);
    toast.success(`Congrats !! ${player.name} is now in your Squad`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false, // Hide progress bar
      closeOnClick: true, // Allow closing on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      theme: 'light', // Set the theme (light or dark)
    });
  };

  const handleClickedOnAvailable = () => {
    setAvailable(true);
    setSelected(false);
  };

  const handleClickedOnSelected = () => {
    setSelected(true);
    setAvailable(false);
  };

  const claimCreditCoin = () => {
    setCoin(coin + 2000000);
    toast.success('Credit Added to Your Account', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false, // Hide progress bar
      closeOnClick: true, // Allow closing on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      theme: 'colored', // Set the theme (light or dark)
    });
  };

  const handleSelectedRemoveBtn = (selectedPlayer) => {
    const afterRemove = selectedPlayers.filter(
      (player) => player.name !== selectedPlayer.name
    );
    setSelectedPlayers(afterRemove);
    setSelectedNumber(selectedNumber - 1);
    toast.info(`${selectedPlayer.name} is Removed from your Squad `, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false, // Hide progress bar
      closeOnClick: true, // Allow closing on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      theme: 'colored', // Set the theme (light or dark)
    });
  };

  const handleAddMorePlayer = () => {
    setAvailable(true);
    setSelected(false);
  };

  useEffect(() => {
    fetch('players.json')
      .then((response) => response.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <>
      <div>
        <div className="w-11/12 mx-auto mb-[300px]">
          <Navbar totalCoin={coin}></Navbar>
          <Banner claimCreditCoin={claimCreditCoin}></Banner>
          <Toggle
            handleClickedOnAvailable={handleClickedOnAvailable}
            handleClickedOnSelected={handleClickedOnSelected}
            available={available}
            selected={selected}
            selectedNumber={selectedNumber}
          ></Toggle>

          {available && (
            <AvailablePlayers
              allPlayers={allPlayers}
              coin={coin}
              handleChoosePlayer={handleChoosePlayer}
            />
          )}

          {selected && (
            <SelectedPlayers
              selectedNumber={selectedNumber}
              selectedPlayers={selectedPlayers}
              handleSelectedRemoveBtn={handleSelectedRemoveBtn}
              handleAddMorePlayer={handleAddMorePlayer}
            />
          )}
        </div>

        {/* Newsletter and Footer Start */}
        <div className="bg-[#06091A] border-4">
          <div className="-mt-[200px]">
            <Newsletter></Newsletter>
          </div>
          <Footer></Footer>
        </div>
        {/* Newsletter and footer ends */}

        {/* Include ToastContainer here */}
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
