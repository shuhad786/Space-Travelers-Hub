import React from 'react';
import { useSelector } from 'react-redux';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const filterItem = missions.filter((item) => item.reserved === true);

  return (
    <ul>
      {filterItem.map((display) => (
        <li key={display.mission_id}>{display.mission_name}</li>
      ))}
    </ul>
  );
};

export default MissionsList;
