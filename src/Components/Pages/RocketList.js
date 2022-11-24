import React from 'react';
import { useSelector } from 'react-redux';

const RocketList = (id) => {
  const rockets = useSelector((state) => state.rockets);
  const newState = rockets.map((rocket) => {
    if (rocket.id !== id && { reserved: true }) {
      return rocket;
    }
    return { ...rocket, reserved: true };
  });
  return (
    <ul>
      {newState.map((display) => (
        <li key={display.id}>{display.rocket_name}</li>
      ))}
    </ul>
  );
};

export default RocketList;
