import React from 'react';
import PropTypes from 'prop-types';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LineIcon,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalShareButton,
  LivejournalIcon,
  MailruShareButton,
  MailruIcon,
  OKShareButton,
  OKIcon,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  PocketIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
} from 'react-share';

import './Share.scss';

function Share({ url }) {
  return (
    <div className="Share pl-10px pr-10px">
      <EmailShareButton url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <HatenaShareButton url={url}>
        <HatenaIcon size={32} round />
      </HatenaShareButton>
      <InstapaperShareButton url={url}>
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
      <LineShareButton url={url}>
        <LineIcon size={32} round />
      </LineShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <LivejournalShareButton url={url}>
        <LivejournalIcon size={32} round />
      </LivejournalShareButton>
      <MailruShareButton url={url}>
        <MailruIcon size={32} round />
      </MailruShareButton>
      <OKShareButton url={url}>
        <OKIcon size={32} round />
      </OKShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={32} round />
      </PocketShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon size={32} round />
      </TumblrShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <ViberShareButton url={url}>
        <ViberIcon size={32} round />
      </ViberShareButton>
      <VKShareButton url={url}>
        <VKIcon size={32} round />
      </VKShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <WorkplaceShareButton url={url}>
        <WorkplaceIcon size={32} round />
      </WorkplaceShareButton>
    </div>
  );
}

Share.propTypes = {
  url: PropTypes.string,
};

Share.defaultProps = {
  url: '',
};

export default Share;
