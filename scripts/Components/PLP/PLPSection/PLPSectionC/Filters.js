import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import FilterDropdown from './FilterDropdown';
import plpContext from './plpContext';

const Filters = ({ stickyFilter, colorFilters, colors = [], chairTypes, collectionTitle }) => {
  const { allFilters, setAllFilters, checkFilters } = useContext(plpContext);
  const { style, chairType, color } = allFilters;
  const [menuOpen, setMenuOpen] = useState('');

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (menuOpen) {
        const idArr = [];
        e.composedPath().forEach((element) => {
          idArr.push(element.id);
        });
        if (!idArr.includes('filterMenu') && !idArr.includes('dropdown')) {
          setMenuOpen('');
        }
      }
    });
    return () => {
      document.body.removeEventListener('click', (e) => {
        if (menuOpen) {
          const idArr = [];
          e.composedPath().forEach((element) => {
            idArr.push(element.id);
          });
          if (!idArr.includes('filterMenu') && !idArr.includes('dropdown')) {
            setMenuOpen(null);
          }
        }
      });
    };
  }, [menuOpen]);

  const handleClearAll = () => {
    setAllFilters({ style: [], chairType: [], color: ['All'] });
  };

  const handleMenuOpen = () => {
    if (window.scrollY >= 250) {
      setMenuOpen('');
    }
  };

  const hasOneRow = () => {
    if (chairTypes.length === 1) {
      return true;
    }

    if (collectionTitle.includes('Chair Collection')) {
      return true;
    }

    return false;
  };

  window.addEventListener('scroll', handleMenuOpen);

  return (
    <>
      {stickyFilter && <SpaceHolder />}
      <Content id="filters" {...{ stickyFilter }}>
        <div className="bg-lynxwhite w-full">
          <div className="bg-lynxwhite flex max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 gap-y-4 md:flex py-4.5 md:pl-8 mx-auto md:mx-0 justify-items-center">
              {collectionTitle !== 'Dining Chairs' && collectionTitle !== 'Lounge Chairs' && (
                <FilterDropdown
                  filterName="chairType"
                  setMenuOpen={setMenuOpen}
                  filterType="type"
                  menuOpen={menuOpen}
                  filterTitle="Chair Type"
                  options={chairTypes}
                  hasOneRow={hasOneRow()}
                />
              )}
              {!collectionTitle.includes('Chair Collection') && (
                <FilterDropdown
                  filterName="style"
                  setMenuOpen={setMenuOpen}
                  filterType="collection"
                  menuOpen={menuOpen}
                  filterTitle="Style"
                  options={
                    collectionTitle === 'Products'
                      ? ['Classic', 'Scandinavian', 'Extra Chair Cover', 'E-Gift Card']
                      : ['Classic', 'Scandinavian']
                  }
                  hasOneRow={hasOneRow()}
                />
              )}
              <FilterDropdown
                filterName="color"
                setMenuOpen={setMenuOpen}
                filterType="colorpicker"
                menuOpen={menuOpen}
                colorFilters={colorFilters}
                filterTitle="Color"
                colors={colors}
                collectionTitle={collectionTitle}
                hasOneRow={hasOneRow()}
              />
            </div>
            {(checkFilters && window.location.href.includes('all')) ||
            (checkFilters && window.location.href.includes('pattern-chairs')) ||
            (checkFilters && window.location.href.includes('seasonal-favorites')) ||
            style.length > 0 ||
            chairType.length > 0 ||
            (!color.includes('All') &&
              !window.location.href.includes('all') &&
              !window.location.href.includes('pattern-chairs') &&
              !window.location.href.includes('seasonal-favorites')) ? (
              <div className="relative bg-lynxwhite w-20 hidden md:block">
                <div
                  className="-translate-x-1/2 -translate-y-1/2 absolute font-serif left-1/2 text-base text-center top-1/2 transform underline w-20"
                  onClick={() => handleClearAll()}
                  tabIndex={0}
                  onKeyDown={() => {}}
                  role="button"
                >
                  Clear All
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          {(checkFilters && window.location.href.includes('all')) ||
          (checkFilters && window.location.href.includes('pattern-chairs')) ||
          (checkFilters && window.location.href.includes('seasonal-favorites')) ||
          style.length > 0 ||
          chairType.length > 0 ||
          (!color.includes('All') &&
            !window.location.href.includes('all') &&
            !window.location.href.includes('pattern-chairs') &&
            !window.location.href.includes('seasonal-favorites')) ? (
            <div className="bg-white w-full md:hidden">
              <div
                className="bg-white pl-4 font-serif text-base underline"
                onClick={() => handleClearAll()}
                tabIndex={0}
                onKeyDown={() => {}}
                role="button"
              >
                Clear All
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </Content>
    </>
  );
};

Filters.defaultProps = {
  colors: [],
};

Filters.propTypes = {
  chairTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  colorFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  stickyFilter: PropTypes.bool.isRequired,
  collectionTitle: PropTypes.string.isRequired,
};

const Content = styled.div(({ stickyFilter }) => [
  stickyFilter && tw`fixed w-screen z-1 top-14 lg:top-18`,
]);

const SpaceHolder = styled.div(() => [`height: 63.27px`]);

export default Filters;
