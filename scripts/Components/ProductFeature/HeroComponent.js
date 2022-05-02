import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const ButtonLink = () => {
  const header = `Don't Stress the Mess`;
  const bodyText = `No more off-limits furniture or noisy plastic covers! Levity lets you sit back and relax.
    We've got you covered.`;
  return (
    <div className="justify-items-center md:w-98 lg:w-110 ">
      <div className="py-8 px-6 lg:px-10 bg-creamwhite h-full flex flex-col justify-center text-center">
        <Header>{header}</Header>
        <BodyCopy>{bodyText}</BodyCopy>
        <Button
          link="/products/the-classic-lounge-chair"
          brown
          styles="mt-8 md:mt-16 whitespace-nowrap"
        >
          <div className="font-normal tracking-wider my-1">Shop Now</div>
        </Button>
      </div>
    </div>
  );
};

const Hero = () => {
  const rightImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/PFP_Hero_FULL_2x_304140de-0cf4-48e1-ac0c-26ab9ddcab2b.jpg';
  const tabletRightImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/Tab_Hero-RightV2_2x_5a301968-46d3-4840-a426-f27e7f78fba9.jpg';
  const mobileRightImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/Mobile_Hero-Above_2x_51fdeb6b-3851-465c-8439-2924b1e82a23.jpg';

  return (
    <Container>
      <div className="max-w-screen-xxl m-auto">
        <div className="hidden lg:flex lg:flex-row-reverse">
          <HeroImage img={rightImage} />
          <ButtonLink />
        </div>
        <div className="md:hidden">
          <MobileHero img={mobileRightImage} />
          <ButtonLink />
        </div>
        <div className="hidden md:flex md:flex-row-reverse lg:hidden">
          <TabletHero img={tabletRightImage} />
          <ButtonLink />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div.attrs({
  className: 'font-serif',
})``;

const HeroImage = styled.div.attrs({
  className: 'bg-center bg-cover w-full h-110 hidden lg:grid lg:grid-cols-12',
})`
  background-image: url(${(props) => props.img});
`;

const TabletHero = styled.div.attrs({
  className: 'hidden w-full bg-cover bg-center md:grid md:grid-cols-12 lg:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const MobileHero = styled.div.attrs({
  className: 'w-full h-97 bg-cover bg-bottom md:hidden',
})`
  background-image: url(${(props) => props.img});
`;

const Header = styled.div.attrs({
  className: 'text-3.5xl md:text-5xl lg:text-5.5xl text-blue-dark',
})``;

const BodyCopy = styled.div.attrs({
  className: 'mt-2 text-base lg:text-lg',
})``;

export default Hero;
