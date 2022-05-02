import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import MobileContext from './ProductSection/MobileProductDetailsSection/mobileContext';

import { CloseIcon, OpenIcon } from './Icons';

const Tab = ({ tabName, children }) => {
  const { openSection, toggleOpenSection } = useContext(MobileContext);

  return (
    <div className="border-grey-50 border-b border-solid py-3">
      <div
        onClick={() => toggleOpenSection(tabName)}
        className="grid grid-cols-5"
        tabIndex={0}
        onKeyDown={() => {}}
        role="button"
      >
        <StyledTabName tabName={tabName} openSection={openSection}>
          {tabName}
        </StyledTabName>
        <AnimatePresence initial={false}>
          <div className="justify-items-end grid items-center col-span-1 pr-3">
            {tabName === openSection ? (
              <CloseIcon width="14" height="14" strokeWidth="3" stroke="gray" />
            ) : (
              <OpenIcon width="14" height="14" strokeWidth="3" stroke="gray" />
            )}
          </div>
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {tabName === openSection && (
          <motion.div
            className="py-3"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StyledTabName = styled.div.attrs(({ tabName, openSection }) => {
  let className = 'font-serif col-span-4 text-base font-normal text-lg';
  if (tabName === openSection) {
    className = `${className} text-orange-burnt`;
  } else {
    className = `${className} text-blue`;
  }
  return {
    className,
  };
})``;

Tab.defaultProps = {
  children: {},
};

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Tab;
