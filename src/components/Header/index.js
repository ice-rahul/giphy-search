import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button, Modal } from 'components';
import * as COLORS from 'constants/Colors';
import { useHistory } from 'react-router-dom';
import './Header.scss';

function Header({ page }) {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState('');
  const handleShare = () => {
    setModal(true);
    setLink(`${process.env.REACT_APP_BASE_URL}/`);
  };
  return (
    <div className={page && page === 'Home' ? 'Header' : 'HeaderCondensed align-center justify-between'}>
      <div
        className="cursor-pointer text-center"
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
        onClick={() => history.push('/')}
      >
        <p className={`font-2-5-em font-bold mb-0 ${page && page !== 'home' && 'mt-0'}`}>
          <span className="color-red">G</span>
          iphy&nbsp;
          <span className="color-blue">S</span>
          hare
        </p>
        <span className="font-1-2-em">Lets make chat&apos;s more engaging</span>
      </div>
      <div className="align-center d-flex margin-10px search-box">
        <TextInput className="flex-1" />
        <Button />
        <Button buttonColor={COLORS.GREEN} className="margin-5px hide-xs-350px" onClick={handleShare} text="Share &#10084;" textColor={COLORS.WHITE} />
      </div>
      <div className="text-center">
        <Button buttonColor={COLORS.BLACK} className="margin-5px" text="Trending" />
        <Button buttonColor={COLORS.BLUE} className="margin-5px" text="Reactions" />
        <Button buttonColor={COLORS.WHITE} className="border-1px margin-5px" text="Emotions" textColor={COLORS.BLACK} />
        <Button buttonColor={COLORS.RED} className="margin-5px" text="Sports" />
        <Button buttonColor={COLORS.SKIN} className="margin-5px" text="Entertainment" textColor={COLORS.BLACK} />
      </div>
      <Modal modal={modal} link={link} onClose={() => setModal(false)} />
    </div>
  );
}
Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {
  page: 'home',
};

export default Header;
