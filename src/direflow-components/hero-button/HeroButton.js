import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component';
import styles from './HeroButton.css';

const HeroButton = (props) => {
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    const event = new Event('my-event');
    dispatch(event);
  };

  return (
    <Styled styles={styles}>
          <button className='button' onClick={handleClick}>
            {props.buttonLabel}
          </button>
    </Styled>
  );
};

HeroButton.defaultProps = {
  buttonLabel: 'Select Hero from React',
}
HeroButton.propTypes = {
  buttonLabel: PropTypes.string,
};

export default HeroButton;
