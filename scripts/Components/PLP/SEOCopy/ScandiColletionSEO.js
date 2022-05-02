import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ScandiCollectionSEO = () => (
  <div className="grid justify-center font-serif ">
    <SeoCopyWrapper>
      <Title>The Scandinavian Chair Collection</Title>
      <Copy>
        The Scandinavian Lounge Chair is the perfect addition to your living room, bedroom, or
        study. The solid wood frame creates a mid-century aesthetic. Premium foam cushions make this
        contemporary lounge chair the perfect place to relax after a long day. The best part?
        Machine-washable and stain-resistant features that make cleanups easy.
      </Copy>
      <br />
      <Copy>
        The Scandinavian Dining Chair looks as great in your dining room as it does in a Paris cafe.
        Tapered legs and a curved backrest make this minimalist dining chair classic and charming,
        without compromising on comfort. And with removable, machine-washable upholstery, you can
        drink your morning coffee without worrying about a spill.
      </Copy>
      <TitleSecond>Features</TitleSecond>
      <SecondaryTitle>Machine-washable cover</SecondaryTitle>
      <Copy>
        You’ll never have to reupholster a chair again! Wash and dry our removable Chair Covers
        safely at home. As an added bonus, they’re interchangeable, so you can purchase extra Chair
        Covers in new colors and prints.
      </Copy>
      <SecondaryTitle>Stain-resistant upholstery</SecondaryTitle>
      <Copy>
        Designed with stain-resistant fabric, our modern Scandinavian furniture can withstand tough
        stain culprits such as coffee, hot sauce, red wine, and oil. One wash and these chairs look
        brand new.
      </Copy>
      <SecondaryTitle>Spill-proof base</SecondaryTitle>
      <Copy>
        Germs won’t be seeping into our Scandinavian chair bases and cushions! Covered with a
        waterproof fabric, our cushions repel liquids rather than soaking them in.
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
const TitleSecond = styled.h4(() => [tw`text-2.5xl mb-4 mt-2 md:text-3xl text-navy`]);

const SecondaryTitle = styled.h6(() => [tw`text-xl lg:text-2xl pl-2 lg:pl-0 mb-3 mt-2 lg:mb-2`]);

const Copy = styled.span(() => [tw`text-base`]);

export default ScandiCollectionSEO;
