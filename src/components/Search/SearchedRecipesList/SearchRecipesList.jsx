import { CardItem } from 'components/Categories/CardItem';
import Container from 'components/Container/Container';
import { Section } from 'components/Search/SearchedRecipesList/SearchRecipesList.styled';
import React, { useEffect, useMemo, useState } from 'react';

import { SearchNotFound } from '../SearchNotFound/SearchNotFound';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const SearchRecipesList = () => {
  const [searchParams] = useSearchParams();
  const [listRes, setListRes] = useState([]);
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  useEffect(() => {
    const { query, ingredient } = params;

    const fetchData = async () => {
      try {
        if (query) {
          const response = await axios.get(`recipes/search?title=${query}`);
          setListRes(response);
        } else if (ingredient) {
          const response = await axios.get(
            `/recipes/ingredients?ingredients=${ingredient}`
          );
          setListRes(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [params]);

  return (
    <>
      <Section>
        <Container>
          {listRes ? <SearchNotFound /> : <CardItem data={listRes} />}
        </Container>
      </Section>
    </>
  );
};
