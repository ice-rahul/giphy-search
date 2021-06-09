/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getImage from 'utils/getImage';
import { useQuery } from 'react-query';
import { GifDetails } from 'components';

function MyGiphy({ setPage }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const { data, isLoading } = useQuery('getDetailById', async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
    return response.json();
  });

  console.log(`https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);

  useEffect(() => {
    if (setPage) setPage('MyGiphy');
  }, []);

  useEffect(() => {
    if (data) {
      const { data: { title: myTitle, import_datetime: dop } } = data;
      setTitle(myTitle);
      setPublishedDate(dop);
    }
  }, [data]);

  return (
    <div className="d-flex text-center justify-center">
      <img src={getImage(id)} className="border-radius-4px" alt={title} />
      {!isLoading && <GifDetails gifId={id} title={title} publishedDate={publishedDate} shareUrl={`${process.env.REACT_APP_BASE_URL}/detail/${id}`} /> }
    </div>
  );
}

MyGiphy.propTypes = {
  setPage: PropTypes.func,
};

MyGiphy.defaultProps = {
  setPage: null,
};

export default MyGiphy;
