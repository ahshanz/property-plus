import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';

const ShareButtons = ({ property }) => {
  const shareURL = `${process.env.NEXT_PUBLIC_DOMAIN}/${property._id}`;
  return (
    <>
      <h3 className='text-xl font-bold text-center pt-2'>
        Share this property
      </h3>
      <div className='flex gap-3 justify-center pb-5'>
        <FacebookShareButton
          url={shareURL}
          qoute={property.name}
          hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareURL}
          title={property.name}
          hashtag={[`${property.type.replace(/\s/g, '')}ForRent`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareURL}
          title={property.name}
          separator=':: '
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareURL}
          subject={property.name}
          body={`Check out this property listing ${shareURL}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
