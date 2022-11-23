import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const newState = missions.map((mission) => {
    if (mission.mission_id !== mission.id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });

  return (
    <ul>
      {newState.map((display) => (
        <li key={display.mission_id}>{display.mission_name}</li>
      ))}
    </ul>
  );
};

export default MissionsList;
