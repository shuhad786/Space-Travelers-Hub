import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedDisplay = rockets.filter((rocket) => (rocket.reserved) === true);
  return (
    <ul>
      {reservedDisplay.map((display) => (
        <li key={display.id}>{display.rocket_name}</li>
      ))}
    </ul>
  );
};

export default RocketList;
