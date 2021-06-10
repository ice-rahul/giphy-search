import React, { useState, useEffect } from 'react';
import { ImageContainer, Modal } from 'components';
import { useQuery } from 'react-query';
import getImage from 'utils/getImage';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getTrendingURL from 'utils/getTrendingURL';
import getSearchURL from 'utils/getSearchURL';

const trendingGifs = async () => {
  const res = await fetch(getTrendingURL(0));
  return res.json();
};

const searchGifs = async (query) => {
  const res = await fetch(getSearchURL(query, 0));
  return res.json();
};

function Home({ setPage }) {
  const { term } = useParams();
  const { data } = useQuery(term ? ['search', term] : 'trending', term ? () => searchGifs(term) : trendingGifs, {
    refetchOnWindowFocus: false,
  });
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState('');
  useEffect(() => {
    if (setPage) setPage('Home');
  }, []);
  const handleModal = (value) => {
    setModal(true);
    setLink(`${process.env.REACT_APP_BASE_URL}${value}`);
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
