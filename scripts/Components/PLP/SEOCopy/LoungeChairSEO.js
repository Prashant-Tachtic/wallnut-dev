import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LoungeChairSEO = () => (
  <div className="grid justify-center font-serif">
    <SeoCopyWrapper>
      <Title>Lounge Chairs</Title>
      <Copy>
        A washable armchair you can spill on without worrying? Look no further than our comfortable,
        stain-resistant, and machine-washable living room chairs in a variety of colors and styles.
        Shop all of our lounge chairs now for the perfect addition to your living room or bedroom.
      </Copy>
      <SecondaryTitle>Machine-washable</SecondaryTitle>
      <Copy>
        Say goodbye to restoring old furniture and worrying about the cost of new fabric. Just throw
        our upholstered Chair Covers in your washer and dryer to refresh them. You can even
        interchange the Chair Covers in minutes to try out new colors and prints!
      </Copy>
      <SecondaryTitle>Stain-resistant </SecondaryTitle>
      <Copy>
        Our stain-resistant, contemporary lounge chairs can withstand tough culprits such as coffee,
        hot sauce, red wine, and oil. One wash and this kid-friendly, pet-friendly, and
        life-friendly furniture looks brand new.
      </Copy>
      <SecondaryTitle>Comfortable </SecondaryTitle>
      <Copy>
        Just because our living room furniture comes with washable covers doesn’t mean we compromise
        on comfort. In fact, it’s a top priority! Relax with your family or your favorite furry
        friend in one of our cozy lounge chairs after a long day. We promise you’ll want to stay
        awhile.
      </Copy>
    </SeoCopyWrapper>
  </div>
);

const SeoCopyWrapper = styled.div(() => [tw` max-w-screen-xxl px-11 py-12 lg:pb-18 text-base`]);

const Title = styled.h4(() => [tw`text-2.5xl mb-4 md:text-3xl text-navy`]);

const SecondaryTitle = styled.h6(() => [tw`text-xl lg:text-2xl pl-2 lg:pl-0 mb-3 mt-2 lg:mb-2`]);

const Copy = styled.span(() => [tw`text-base`]);

export default LoungeChairSEO;
