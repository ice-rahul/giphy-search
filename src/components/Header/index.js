import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Button } from 'components';
import * as COLORS from 'constants/Colors';
import './Header.scss';

function Header({ page }) {
  return (
    <div className={page && page === 'home' ? 'Header' : 'HeaderCondensed'}>
      <p className="font-2-5-em font-bold mb-0">
        <span className="color-red">G</span>
        iphy&nbsp;
        <span className="color-blue">S</span>
        hare
      </p>
      <span className="font-1-2-em">Lets make chat&apos;s more engaging</span>
      <div className="align-center d-flex margin-10px search-box">
        <TextInput className="flex-1" />
        <Button />
        <Button buttonColor={COLORS.GREEN} className="margin-5px hide-xs-350px" text="Share &#10084;" textColor={COLORS.WHITE} />
      </div>
      <div className="text-center">
        <Button buttonColor={COLORS.BLACK} className="margin-5px" text="Trending" />
        <Button buttonColor={COLORS.BLUE} className="margin-5px" text="Reactions" />
        <Button buttonColor={COLORS.WHITE} className="border-1px margin-5px" text="Emotions" textColor={COLORS.BLACK} />
        <Button buttonColor={COLORS.RED} className="margin-5px" text="Sports" />
        <Button buttonColor={COLORS.SKIN} className="margin-5px" text="Entertainment" textColor={COLORS.BLACK} />
      </div>
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
