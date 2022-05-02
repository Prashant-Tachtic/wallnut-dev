import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

import ExitIcon from './Icons/ExitIcon';
import Button from './Button';

import { objectToQueryString, isValidEmail } from '../utils';

const getLocalStorageData = () => {
  const userPageData = localStorage.getItem('userPageData');

  return userPageData ? JSON.parse(userPageData) : null;
};

const setLocalStorageData = (key, value) => {
  if (key && value) {
    const currentUserData = getLocalStorageData() || {};
    let mergeData = {};

    if (value.constructor.name === 'Array') {
      mergeData = {
        [key]: currentUserData[key] ? [...currentUserData[key], ...value] : [...value],
      };
    }

    if (
      value.constructor.name === 'String' &&
      value.constructor.name === 'Boolean' &&
      value.constructor.name === 'Number'
    ) {
      mergeData = {
        [key]: value,
      };
    }

    const newData = {
      ...currentUserData,
      ...mergeData,
    };

    return localStorage.setItem('userPageData', JSON.stringify(newData));
  }

  return null;
};

const clearPageVisitsFromLocalStorage = () => {
  localStorage.setItem('userPageData', JSON.stringify({}));
};

const shouldShowLastChance = (lastChanceShownPageLimit = 3) => {
  // 3 page default
  const userData = getLocalStorageData();
  const { modalShown, ...restProps } = userData;

  return (
    Object.keys(restProps).length === lastChanceShownPageLimit &&
    userData[location.pathname].length === 1
  );
};

const showModal = (setOpen, initialLoadTime = 5000) => {
  setTimeout(() => {
    setOpen(true);
    setLocalStorageData('modalShown', [new Date()]);
  }, initialLoadTime);
};

const lastVisitedIsInLimit = (timeLimit = 172800000) => {
  // 2 day default
  const userData = getLocalStorageData();
  if (!userData) return false;

  const currentDate = new Date();
  const { modalShown, ...restProps } = userData;
  const lastTimesVisited = Object.keys(restProps).reduce((acc, key) => {
    acc.push(...restProps[key]);

    return acc;
  }, []);

  const lastVisitedDate = new Date(lastTimesVisited.sort()[lastTimesVisited.length - 1]);

  return currentDate.getTime() - lastVisitedDate.getTime() > timeLimit;
};

const firstVisit = () => {
  const userData = getLocalStorageData();

  return !Object.prototype.hasOwnProperty.call(userData, 'modalShown');
};

const visitedBefore = () => {
  const userData = getLocalStorageData();

  return userData && Object.keys(userData).length > 2;
};

const addPageVisit = () => {
  setLocalStorageData(location.pathname, [new Date()]);
};

const processUserActions = (setOpen, restProps) => {
  const { initial_pop_up_time, last_chance_page_limit, initial_load_time } = restProps;

  if (lastVisitedIsInLimit(initial_pop_up_time)) {
    clearPageVisitsFromLocalStorage();
    showModal(setOpen, initial_load_time);
  }

  addPageVisit();

  if (firstVisit()) {
    showModal(setOpen, initial_load_time);
  } else if (visitedBefore()) {
    if (shouldShowLastChance(last_chance_page_limit)) {
      showModal(setOpen, initial_load_time);
    }
  }
};

const PopUpModal = ({ settings }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const {
    image_desktop,
    image_tablet,
    line_1_text,
    line_3_text,
    offer_title,
    button_text,
    legal_text,
    ...restProps
  } = settings;

  useEffect(() => {
    processUserActions(setOpen, restProps);
  }, [restProps]);

  const handleSubmit = async () => {
    const body = objectToQueryString({
      g: 'VMM4Xm',
      $fields:
        'Source, Medium, Campaign, customSource, $source, $consent_form_id, $consent_method, $source_swell_modal',
      email,
      Source: 'direct',
      Medium: 'direct',
      Campaign: 'direct',
      customSource: 'Entrance Modal',
      $source: 'Entrance Modal',
      $consent_form_id: 'SxEnPF',
      $consent_method: 'Klaviyo Form',
      $source_swell_modal: 'Entrance Modal',
    });

    try {
      const fetchResponse = await fetch(
        'https://manage.kmail-lists.com/ajax/subscriptions/subscribe',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache',
          },
          body,
        }
      ).then((res) => res.json());

      if (fetchResponse.success === true) {
        setSubmitted(true);
      } else {
        throw new Error(JSON.stringify(fetchResponse.errors));
      }
    } catch (err) {
      setError('Please try again');
      setTimeout(() => {
        setError('');
      }, 3000);
      console.log(err);
    }
  };

  const handleClickOutsideModal = (e) => {
    if (e.target.id === 'pop-up-modal') {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id="pop-up-modal"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.5 }}
          onClick={handleClickOutsideModal}
          className="
              bg-gray-800 bg-opacity-70 fixed grid h-full items-center
              justify-items-center left-0 top-0 w-full z-40
            "
        >
          <Modal>
            <div
              className="absolute right-4 top-4 lg:right-8 lg:top-8 cursor-pointer z-50"
              onClick={() => setOpen(!open)}
              tabIndex={0}
              onKeyDown={() => {}}
              role="button"
            >
              <ExitIcon />
            </div>
            <div className="hidden lg:block pl-8 py-8">
              <StyledImage className="hidden xl:block" img={image_desktop} />
              <StyledImage className="hidden lg:block xl:hidden" img={image_tablet} />
            </div>
            <div className="grid items-center justify-items-center relative">
              <div
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
                role="button"
                tabIndex={0}
                className="grid justify-items-center font-serif center"
              >
                {submitted ? (
                  <>
                    <div className="mb-5 text-2xl text-blue">Thanks for subscribing!</div>
                    <div className="text-blue text-lg">
                      Check your email <br />
                      for a confirmation message
                    </div>
                    <div className="mb-8 w-full uppercase mt-5">
                      <Button brown buttonAction={() => setOpen(false)}>
                        Start Shopping
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-base lg:text-lg">{line_1_text}</div>
                    <div className="text-4xl text-blue mb-5 mt-2">{offer_title}</div>
                    <div className="text-base lg:text-lg mb-12">{line_3_text}</div>
                    <input
                      className="mb-0 border-b-1 border-black border-l-0 border-r-0 border-t-0 rounded-none text-base w-full focus:shadow-none"
                      type="text"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="text-red-600 text-xs mt-2">{error}</div>
                    <div className="mb-8 w-full uppercase mt-5">
                      <Button brown isValid={isValidEmail(email)} buttonAction={handleSubmit}>
                        {button_text}
                      </Button>
                    </div>
                    <LegalText dangerouslySetInnerHTML={{ __html: legal_text }} />
                  </>
                )}
              </div>
            </div>
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Modal = styled.div.attrs({
  className: 'bg-white grid relative rounded-lg lg:grid-cols-2',
})`
  width: 343px;
  height: 527px;

  @media (min-width: 1024px) {
    height: 600px;
    width: 800px;
  }
`;

const StyledImage = styled.div.attrs({
  className: 'bg-cover h-full w-full',
})`
  background-image: url(${(props) => props.img});
`;

const LegalText = styled.div.attrs({
  className: 'absolute bottom-8 center leading-4 text-xxs',
})`
  a {
    ${tw`underline`};
  }
`;

PopUpModal.propTypes = {
  settings: PropTypes.shape({
    image_desktop: PropTypes.string.isRequired,
    image_tablet: PropTypes.string.isRequired,
    line_1_text: PropTypes.string.isRequired,
    line_3_text: PropTypes.string.isRequired,
    offer_title: PropTypes.string.isRequired,
    button_text: PropTypes.string.isRequired,
    legal_text: PropTypes.string.isRequired,
  }).isRequired,
};

export default PopUpModal;
