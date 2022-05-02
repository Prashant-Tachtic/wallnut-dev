import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ClassicCollectionSEO = () => (
  <div className="grid justify-center font-serif">
    <SeoCopyWrapper>
      <Title>About these chairs</Title>
      <Copy>
        The Classic Lounge Chair does it all. Blending style and comfort, the chair&apos;s clean
        lines and premium cushions form the perfect addition to your reading nook or living room.
        Modern but classic, this armchair feels right in any space. With machine-washable and
        stain-resistant features, you never have to let the fear of a spill hold you back.
      </Copy>
      <br />
      <span className="p-2" />
      <br />
      <Copy>
        The Classic Dining Chair takes a familiar dining chair style and adds ambiance and
        sophistication to any room. With a range of fabrics and leg options to choose from, this
        minimalist dining chair complements many home styles, from farmhouse chic to modern
        contemporary. But unlike your typical upholstered armless dining chair, this chair allows
        you to quit worrying about sticky fingers.
      </Copy>
      <TitleSecond>Features</TitleSecond>
      <SecondaryTitle>Machine-washable cover</SecondaryTitle>
      <Copy>
        Say goodbye to restoring old furniture and worrying about the cost of new fabric. Just throw
        our upholstered Chair Covers in your washer and dryer to refresh them. You can even
        interchange the Chair Covers in minutes to try out new colors and prints!
      </Copy>
      <SecondaryTitle>Stain-resistant upholstery</SecondaryTitle>
      <Copy>
        Designed with stain-resistant fabric, our Classic Dining and Lounge Chairs can withstand
        tough stain culprits such as coffee, hot sauce, red wine, and oil. One wash and these chairs
        look brand new.
      </Copy>
      <SecondaryTitle>Spill-proof base</SecondaryTitle>
      <Copy>
        Germs will not seep into the foam of these chair bases and their washable Chair Covers.
        Covered with a waterproof fabric, our chairs repel liquids rather than soaking them in.
      </Copy>
      <SecondaryTitle>Ultra-comfortable cushions</SecondaryTitle>
      <Copy>
        Let your family, friends, or even your dog watch TV or dine in comfort in these chairs!
        Premium features like form-fitting memory foam cradle your body and offer support where you
        need it most.
      </Copy>
      <SecondaryTitle>Easy attachment system</SecondaryTitle>
      <Copy>
        Life is busy and messy enough without furniture fuss. With innovative attachment features
        like Smart-Cinch bungees and wide-mouth zippers, each chair only takes minutes to put back
        intact. The Chair Covers go on easily and, unlike a traditional slipcover, they truly look
        like a part of the chair.
      </Copy>
    </SeoCopyWrapper>
  </div>
);

const SeoCopyWrapper = styled.div(() => [tw` max-w-screen-xxl px-11 py-12 lg:pb-18 text-base`]);

const Title = styled.h4(() => [tw`text-2.5xl mb-4 md:text-3xl text-navy`]);
const TitleSecond = styled.h4(() => [tw`text-2.5xl mb-4 mt-2 md:text-3xl text-navy mt-2`]);

const SecondaryTitle = styled.h6(() => [tw`text-xl lg:text-2xl pl-2 lg:pl-0 mb-3 mt-2 lg:mb-2`]);

const Copy = styled.span(() => [tw`text-base`]);

export default ClassicCollectionSEO;
