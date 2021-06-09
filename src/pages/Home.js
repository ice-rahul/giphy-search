/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { ImageContainer, Modal } from 'components';
import { useQuery } from 'react-query';
import getImage from 'utils/getImage';
import PropTypes from 'prop-types';

const trendingGifs = async () => {
  const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=Sp6spcUcBELoU5Fv6plloyNIYM4vD9GQ&limit=25&rating=r');
  return res.json();
};

function Home({ setPage }) {
  const { data } = useQuery('trending', trendingGifs);
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState('');
  useEffect(() => {
    if (setPage) setPage('Home');
  }, []);
  console.log(data);
  const handleModal = (value) => {
    setModal(true);
    setLink(`${process.env.REACT_APP_BASE_URL}${value}`);
    console.log('clicked');
  };
  return (
    <>
      <div className="align-center d-flex flex-wrap justify-center text-center">
        {
          data && data.data.map((val) => (
            <ImageContainer className="margin-5px" key={val.id} linkTo={`/detail/${val.id}`} onShare={(sharelink) => handleModal(sharelink)} url={getImage(val.id)} />
          ))
        }
      </div>
      <Modal modal={modal} link={link} onClose={() => setModal(false)} />
    </>
  );
}

Home.propTypes = {
  setPage: PropTypes.func,
};

Home.defaultProps = {
  setPage: null,
};

export default Home;
