import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const DiningChairSEO = () => (
  <div className="grid justify-center font-serif">
    <SeoCopyWrapper>
      <Title>Dining Chairs</Title>
      <Copy>
        A dining room chair you can spill on without worrying? Look no further than our comfortable,
        stain-resistant, and machine-washable dining room chairs in a variety of colors and styles.
        Shop all of our dining chair styles now for the perfect addition to your kitchen, dining
        room, or home office.
      </Copy>
      <SecondaryTitle>Machine-washable</SecondaryTitle>
      <Copy>
        Say goodbye to restoring old furniture and worrying about the cost of new fabric. Just throw
        our upholstered Chair Covers in your washer and dryer to freshen them up. You can even
        interchange the Chair Covers in minutes to try out new colors and prints!
      </Copy>
      <SecondaryTitle>Stain-resistant </SecondaryTitle>
      <Copy>
        Our stain-resistant dining chairs can withstand tough culprits, such as coffee, hot sauce,
        red wine, and oil. One wash and this kid-friendly, pet-friendly, and life-friendly furniture
        looks brand new.
      </Copy>
      <SecondaryTitle>Comfortable </SecondaryTitle>
      <Copy>
        Even dining chairs can be comfortable if you have the right cushion under your dining chair
        cushion covers! Kick back after a long day and chow down on a meal with the family. Make
        memories in the comfort of your own dining room without the worry of a mess or stain.
      </Copy>
    </SeoCopyWrapper>
  </div>
);

const SeoCopyWrapper = styled.div(() => [tw` max-w-screen-xxl px-11 py-12 lg:pb-18 text-base`]);

const Title = styled.h4(() => [tw`text-2.5xl mb-4 md:text-3xl text-navy`]);

const SecondaryTitle = styled.h6(() => [tw`text-xl lg:text-2xl pl-2 lg:pl-0 mb-3 lg:mb-2`]);

const Copy = styled.span(() => [tw`text-base`]);

export default DiningChairSEO;
