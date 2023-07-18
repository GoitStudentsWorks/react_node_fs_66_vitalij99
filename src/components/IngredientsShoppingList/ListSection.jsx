import React from 'react';
import {
  CloseIcon,
  DataSection,
  ImageContainer,
  ImageSection,
  Item,
  List,
  Number,
} from './IngredientsShoppingList.styled';
import { Svg } from './Svg';

export const ListSection = ({ data, onClick }) => {
  return (
    <>
      <List>
        {data.map(item => (
          <Item key={item.id ? item.id : null}>
            <ImageSection>
              <ImageContainer>
                <img
                  src={item.img ? item.img : null}
                  alt={item.name ? item.name : null}
                />
              </ImageContainer>
              <p>{item.name ? item.name : null}</p>
            </ImageSection>

            <DataSection>
              <Number>
                <p>{item.measure ? item.measure : 0}</p>
              </Number>
              <CloseIcon onClick={() => onClick(item.item)}>
                <Svg />
              </CloseIcon>
            </DataSection>
          </Item>
        ))}
      </List>
    </>
  );
};
