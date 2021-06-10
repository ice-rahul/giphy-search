import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getImage from 'utils/getImage';
import { useQuery, useInfiniteQuery } from 'react-query';
import {
  GifDetails, ImageContainer, Modal, Loading,
} from 'components';
import getDetailById from 'utils/getGifDetailsById';
import getSearchURL from 'utils/getSearchURL';

import 'assets/css/my-giphy.scss';

const searchGifsById = async (id) => {
  const res = await fetch(getDetailById(id));
  return res.json();
};

const searchGifs = async (query, page) => {
  const res = await fetch(getSearchURL(query, page));
  return res.json();
};

function MyGiphy({ setPage }) {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState('');

  const { data, isLoading } = useQuery(['getDetailById', id], () => searchGifsById(id), {
    refetchOnWindowFocus: false,
  });

  const {
    data: searchResult, refetch, isLoading: loadingSearch, isFetching, fetchNextPage,
  } = useInfiniteQuery(['search', title], ({ pageParam }) => searchGifs(title, pageParam), {
    refetchOnWindowFocus: false,
    enabled: false,
    getNextPageParam: (lastPage) => {
      const { pagination: { total_count: totalCount, count, offset } } = lastPage;
      const pageNo = Math.floor(offset / count);
      const nextPage = totalCount > (count + offset) && pageNo + 1;
      return nextPage;
    },
  });

  const lastElement = useRef();
  const watchLastElement = useCallback((element) => {
    if (lastElement.current) lastElement.current.disconnect();
    lastElement.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    if (element) lastElement.current.observe(element);
  });

  const handleModal = (value) => {
    setModal(true);
    setLink(`${process.env.REACT_APP_BASE_URL}${value}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

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

  useEffect(() => {
    if (title) {
      refetch();
    }
  }, [title]);

  return (
    <>
      <div className="bg-white d-flex margin-auto text-center justify-center align-center gap-20px giphy-container">
        <div className="margin-10px container-left">
          <ImageContainer linkTo={`/detail/${id}`} onShare={(sharelink) => handleModal(sharelink)} url={getImage(id)} />
        </div>
        {!isLoading && <GifDetails className="container-right" gifId={id} title={title} publishedDate={publishedDate} shareUrl={`${process.env.REACT_APP_BASE_URL}/detail/${id}`} /> }
      </div>
      {searchResult && searchResult.pages && (
        <div className="bg-white mt-20px">
          {loadingSearch && <Loading />}
          <span className="align-center d-flex color-black font-bold font-2-5-em pt-20px pl-8">
            <span className="color-blue">R</span>
            elated &nbsp;
            <span className="color-red">G</span>
            ifs
          </span>
          <div className="align-center d-flex flex-wrap justify-center text-center mt-20px padding-20px">
            {searchResult.pages.map((pageData, pageNo) => (
              pageData.data.map((val, idx) => {
                if ((pageData.data.length === idx + 1)
                    && (searchResult.pages.length === pageNo + 1)) {
                  return (
                    <div key={val.id} ref={watchLastElement}>
                      <ImageContainer
                        className="margin-5px"
                        linkTo={`/detail/${val.id}`}
                        onShare={(sharelink) => handleModal(sharelink)}
                        url={getImage(val.id)}
                      />
                    </div>
                  );
                }
                return (
                  <div key={val.id}>
                    <ImageContainer
                      className="margin-5px"
                      linkTo={`/detail/${val.id}`}
                      onShare={(sharelink) => handleModal(sharelink)}
                      url={getImage(val.id)}
                    />
                  </div>
                );
              })
            ))}
          </div>
          {isFetching && <Loading />}
          <Modal modal={modal} link={link} onClose={() => setModal(false)} />
        </div>
      )}
    </>
  );
}

MyGiphy.propTypes = {
  setPage: PropTypes.func,
};

MyGiphy.defaultProps = {
  setPage: null,
};

export default MyGiphy;
