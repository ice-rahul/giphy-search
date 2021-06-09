import React from 'react';
import getDateString from 'utils/getDateString';
import * as COLORS from 'constants/Colors';
import { Button, Share } from 'components';
import PropTypes from 'prop-types';
import './GifDetails.scss';
import getGif from 'utils/getGif';
import getVideo from 'utils/getVideo';
import downloadFile from 'utils/downloadFile';

function GifDetails({
  gifId, shareUrl, title, publishedDate,
}) {
  return (
    <div className="bg-white d-flex flex-column min-width-20 ml-5px mr-5px padding-10px text-left GifDetails">
      <span className="font-1-2-em font-bold padding-10px pb-0">{title}</span>
      <span className="padding-10px">
        {getDateString(publishedDate)}
      </span>
      <Button
        buttonColor={COLORS.GREEN}
        className="margin-5px hide-xs-350px"
        text="Download Gif &#x21E9;"
        textColor={COLORS.WHITE}
        onClick={() => downloadFile(getGif(gifId), 'Download Gif')}
      />

      <Button
        buttonColor={COLORS.BLACK}
        className="margin-5px hide-xs-350px"
        text="Download Mp4 &#x21E9;"
        textColor={COLORS.WHITE}
        onClick={() => downloadFile(getVideo(gifId), 'Download Mp4')}
      />

      <Button
        className="margin-5px"
        text="Copy Embed URL"
      />
      <span className="border-left-4px font-bold margin-10px padding-5px">
        Share Gif
      </span>
      <Share url={shareUrl} />
    </div>
  );
}

GifDetails.propTypes = {
  gifId: PropTypes.string,
  shareUrl: PropTypes.string,
  title: PropTypes.string,
  publishedDate: PropTypes.string,
};

GifDetails.defaultProps = {
  gifId: '',
  shareUrl: '',
  title: '',
  publishedDate: '',
};

export default GifDetails;
