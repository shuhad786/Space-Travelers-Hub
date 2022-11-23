import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const reservedDisplay = missions.filter((mission) => (mission.reserved) === true);
  return (
    <ul>
      {reservedDisplay.map((display) => (
        <li key={display.id}>{display.mission_name}</li>
      ))}
    </ul>
  );
};

export default MissionsList;
