import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Missions = ({ joinMissionClick, cancelMissionClick }) => {
  const missions = useSelector((state) => state.missions);

  return (
    <div className="">
      <hr />
      {missions.map((mission) => (
        <div className="" key={mission.id}>
          <div className="">
            <div className="">
              <h3>{mission.mission_name}</h3>
              <p>
                <span className="reserved" style={{ display: mission.reserved ? 'inline-block' : 'none' }}>Join</span>
                {mission.description}
              </p>
              <span className="badge border rounded-pill text-success bg-light border-success" style={{ display: mission.reserved ? 'inline-block' : 'none' }}>ACTIVE MEMBER</span>
              <span className="badge border rounded-pill text-danger bg-light border-danger" style={{ display: mission.reserved ? 'none' : 'inline-block' }}>NOT ACTIVE MEMBER</span>
              <button type="button" className="joinBtn" style={{ display: mission.reserved ? 'none' : 'inline-block' }} onClick={() => joinMissionClick(mission)}>
                Join Mission
              </button>

              <button type="button" className="cancelBtn" style={{ display: mission.reserved ? 'inline-block' : 'none' }} onClick={() => cancelMissionClick(mission)}>
                Leave Mission
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Missions.propTypes = {
  joinMissionClick: PropTypes.func.isRequired,
  cancelMissionClick: PropTypes.func.isRequired,
};

export default Missions;
