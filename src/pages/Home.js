import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { ImageContainer, Modal, Loading } from 'components';
import { useInfiniteQuery } from 'react-query';
import getImage from 'utils/getImage';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getTrendingURL from 'utils/getTrendingURL';
import getSearchURL from 'utils/getSearchURL';

const trendingGifs = async ({ pageParam = 0 }) => {
  const res = await fetch(getTrendingURL(pageParam));
  return res.json();
};

const searchGifs = async ({ query, pageParam = 0 }) => {
  const res = await fetch(getSearchURL(query, pageParam));
  return res.json();
};

function Home({ setPage }) {
  const { term } = useParams();
  const key = term ? ['search', term] : 'trending';

  const {
    data, isLoading, isFetching, fetchNextPage,
  } = useInfiniteQuery(key,
    term
      ? ({ pageParam }) => searchGifs({ query: term, pageParam })
      : ({ pageParam }) => trendingGifs({ pageParam }), {
      refetchOnWindowFocus: false,
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

  const [modal, setModal] = useState(false);
  const [link, setLink] = useState('');
  useEffect(() => {
    if (setPage) setPage('Home');
  }, []);
  const handleModal = (value) => {
    setModal(true);
    setLink(`${process.env.REACT_APP_BASE_URL}${value}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="align-center d-flex flex-wrap justify-center text-center">
        {
          data && data.pages && data.pages.map((pageData, pageNo) => (
            pageData.data.map((val, idx) => {
              if ((pageData.data.length === idx + 1) && (data.pages.length === pageNo + 1)) {
                return (
                  <div ref={watchLastElement} key={val.id}>
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
          ))
        }
      </div>
      {isFetching && <Loading />}
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
