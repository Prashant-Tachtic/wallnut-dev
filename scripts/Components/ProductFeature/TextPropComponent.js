import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import {
  MachineWashableIconColored,
  StainIconColored,
  InterchangableIconColored,
  ComfortableIconColored,
} from '../Icons';

const TextPropComponent = () => {
  const mobileImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/Mobile-ClassicLounge_Side.png';
  const tabletImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/Tab-ClassicLounge_Side.png?v=1634156475';
  const desktopImage =
    'https://cdn.shopify.com/s/files/1/0492/6321/4743/files/Desktop-ClassicLounge_Side.png?v=1634156475';
  const textProps1 = [
    {
      header: 'Machine-Washable Cover',
      body: `Spot a stain? Simply pop your chair cover in the washing machine for worry-free cleaning.`,
      icon: 'Machine-Washable',
    },
    {
      header: 'Water-Resistant Fabric Base',
      body: `Don't cry over spilled milk, coffee, red wine, or oil. The base fabric layer keeps messy and smelly liquids out of the cushion, for long-lasting comfort.`,
      icon: 'Stain-Resistant',
    },
  ];

  const textProps2 = [
    {
      header: 'Interchangeable Style',
      body: `Change your style like you change your clothes. Simply swap your chair cover for another pattern, color or look whenever you need a refresh.`,
      icon: 'Interchangable',
    },
    {
      header: 'Memory Foam Comfort',
      body: `Kick back and relax on high quality memory foam cushions that won't sag or droop over time.`,
      icon: 'Comfortable',
    },
  ];

  const valueProps = [
    {
      text: 'Machine-Washable',
      icon: <MachineWashableIconColored width={46} height={46} />,
    },
    {
      text: 'Stain-Resistant',
      icon: <StainIconColored width={46} height={46} />,
    },
    {
      text: 'Interchangable',
      icon: <InterchangableIconColored width={46} height={46} />,
    },
    {
      text: 'Comfortable',
      icon: <ComfortableIconColored width={46} height={46} />,
    },
  ];

  return (
    <MainContainer>
      <Heading>Re-engineered for Real Life</Heading>
      <Container>
        <div className="lg:order-2">
          <MobileImage src={mobileImage} />
          <TabletImage src={tabletImage} />
          <DesktopImage src={desktopImage} />
        </div>
        <div className="lg:order-1">
          {textProps1.map((item, i) => {
            const matchingIcon = valueProps.find((obj) => obj.text === item.icon);
            return (
              <div key={i} className="flex mb-8">
                <div className="mr-4">{matchingIcon.icon}</div>
                <div className="md:w-90">
                  <Header>{item.header}</Header>
                  <Body>{item.body}</Body>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:order-3">
          {textProps2.map((item, i) => {
            const matchingIcon = valueProps.find((obj) => obj.text === item.icon);
            return (
              <div key={i} className="flex mb-8 ">
                <div className="mr-4">{matchingIcon.icon}</div>
                <div className="md:w-90">
                  <Header>{item.header}</Header>
                  <Body>{item.body}</Body>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <Button link="/products/the-classic-lounge-chair" styles="md:w-98" brown>
        SHOP CLASSIC LOUNGE
      </Button>
    </MainContainer>
  );
};

const MainContainer = styled.div.attrs({
  className: 'flex flex-col items-center font-serif py-10 px-4.5',
})``;
const Container = styled.div.attrs({
  className: 'flex flex-col items-center lg:flex-row',
})``;

const Heading = styled.div.attrs({
  className: 'text-2xl md:text-3xl text-blue-light whitespace-nowrap',
})``;

const Header = styled.div.attrs({
  className: 'text-base text-blue-light',
})``;

const Body = styled.div.attrs({
  className: 'text-sm',
})``;
const MobileImage = styled.img.attrs({
  className: 'md:hidden',
})``;
const TabletImage = styled.img.attrs({
  className: 'hidden md:block lg:hidden',
})``;
const DesktopImage = styled.img.attrs({
  className: 'hidden lg:block',
})``;

export default TextPropComponent;
