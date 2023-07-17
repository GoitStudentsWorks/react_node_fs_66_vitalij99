import styled from 'styled-components';

export const CategoriesNavigateWrap = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  max-width: 100%;
  border-bottom: 1px solid rgb(189, 189, 189);

  @media (min-width: 768px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (min-width: 1440px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const CategoriesNavList = styled.ul`
  display: flex;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 55px;
    color: rgb(189, 189, 189);
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 100px;
  gap: 28px;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 200px;
    gap: 32px;
  }
  @media (min-width: 1440px) {
    justify-content: flex-start;
    gap: 14px;
    row-gap: 100px;
    padding-left: 99px;
    padding-right: 99px;
  }
`;

export const CategoriesImgWrap = styled.div`
  position: relative;
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
  position: absolute;
  width: 307px;
  height: 52px;
  bottom: 24px;
  left: 18px;
  border-radius: 8px;
  background: ${props =>
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
