import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Rockets = ({ ReserveRocketClick, CancelReserveClick }) => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="row">
      <hr />
      {rockets.map((rocket) => (
        <div className="cardRock col-12" key={rocket.id}>
          <div className="row row2">
            <div className="rocketImg col-sm-3">
              <img src={rocket.flickr_images} alt="rocketImg" />
            </div>
            <div className="rocketdata col-9">
              <h3>{rocket.rocket_name}</h3>
              <p>
                <span className="badge rounded-pill text-light bg-info" style={{ display: rocket.reserved ? 'inline-block' : 'none' }}>RESERVED</span>
                {rocket.description}

              </p>
              <button type="button" className="rocketBtn" style={{ display: rocket.reserved ? 'none' : 'inline-block' }} onClick={() => ReserveRocketClick(rocket)}>Reserve Rocket</button>
              <button type="button" className="rockCancel" style={{ display: rocket.reserved ? 'inline-block' : 'none' }} onClick={() => CancelReserveClick(rocket)}>Cancel Reservation</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Rockets.propTypes = {
  ReserveRocketClick: PropTypes.func.isRequired,
  CancelReserveClick: PropTypes.func.isRequired,
};

export default Rockets;
