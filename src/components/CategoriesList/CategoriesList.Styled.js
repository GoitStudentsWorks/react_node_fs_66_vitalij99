import styled from 'styled-components';

export const CategoriesSection = styled.div`
  background-color: ${props => props.theme.categoriesPage.background};
`;

export const CategoriesNavListStyled = styled.div`
  display: flex;
  /* border-bottom: 1px solid
    ${props => props.theme.addRecipePage.listOfItems.underline}; */
`;

export const CategoriesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  width: 100%;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    gap: 14px;
    row-gap: 100px;
  }
`;

export const CategoriesImgWrap = styled.div`
  position: relative;

  &:hover,
  &:focus {
    div {
      background-color: ${props =>
        props.theme.mainPage.footer.button.hoverFill};
      transition: 0.6s;
      animation: easeIn;
    }
    p {
      color: ${props => props.theme.mainPage.menuMobileModal.hover};
      transition: 0.6s;
      animation: easeIn;
    }
  }

  &:not(:hover),
  &:not(:focus) {
    div {
      transition: 0.6s;
      animation: easeOut;
    }
    p {
      transition: 0.6s;
      animation: easeOut;
    }
  }
`;

export const CategoriesImg = styled.img`
  display: inline-block;
  border-radius: 8px;
  max-width: 343px;

  @media (min-width: 768px) {
    max-width: 336px;
  }
  @media (min-width: 1440px) {
    max-width: 300px;
  }
`;

export const ProductNameWrap = styled.div`
  display: flex;
  position: absolute;
  width: 307px;
  height: 52px;
  bottom: 24px;
  left: 18px;
  border-radius: 8px;
  background-color: ${props =>
    props.theme.categoriesPage.list.recipePlate.background};

  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 268px;
  }
`;

export const ProductName = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.categoriesPage.list.recipePlate.text};

  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
  }
`;
