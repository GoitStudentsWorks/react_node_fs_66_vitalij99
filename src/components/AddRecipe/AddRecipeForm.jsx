import Container from 'components/Container/Container';
import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ContainerAddRecipe, Form } from './AddRecipe.styled';
import PopularRecipe from './PopularRecipe/PopularRecipe';
import RecipeDescriptionFields from './RecipeDescription/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredients/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparation/RecipePreparationFields';
import onValidationForm from './validationForm';
import { Link } from 'react-router-dom';
import sendRecipeData from './Api'

const checkScreenWidth = () => {
  return window.innerWidth;
};

function arrayToString(arr) {
  return arr.join('\r\n');
}

const AddRecipeForm = () => {
  const initialRecipeData = {
    thumb: null,
    title: '',
    description: '',
    category: '',
    time: '',
    tags: [],
    ingredients: [],
    instructions: [],
  };

  const [recipeData, setRecipeData] = useState(initialRecipeData);

  const handleInputChange = (name, value) => {
    setRecipeData(prevData => {
      if (name === 'category') {
        return {
          ...prevData,
          [name]: value,
          tags: [value],
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validatedData = onValidationForm(recipeData);
    if (validatedData) {
      try {
        const recipeDataToSend = {
          ...recipeData,
          instructions: arrayToString(recipeData.instructions),
        };
        await sendRecipeData(recipeDataToSend);
        Notify.success('Recipe Added');
        setRecipeData(initialRecipeData);
      } catch (error) {
        console.log('Error while adding the recipe:', error.message);
      }
    }
  };

  const [screenWidth, setScreenWidth] = useState(checkScreenWidth());

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(checkScreenWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <ContainerAddRecipe>
        <Form onSubmit={handleFormSubmit}>
          <RecipeDescriptionFields
            recipeData={recipeData}
            handleInputChange={handleInputChange}
          />
          {screenWidth >= 1440 ? <PopularRecipe /> : null}
          <RecipeIngredientsFields
            ingredients={recipeData.ingredients}
            setIngredients={updatedIngredients =>
              setRecipeData(prevData => ({
                ...prevData,
                ingredients: updatedIngredients,
              }))
            }
          />
          <RecipePreparationFields
            instructions={recipeData.instructions}
            setInstructions={updatedInstructions =>
              setRecipeData(prevData => ({
                ...prevData,
                instructions: updatedInstructions,
              }))
            }
          />
          {screenWidth < 1440 ? <PopularRecipe /> : null}
          <Link to={'/my'}></Link>
        </Form>
      </ContainerAddRecipe>
    </Container>
  );
};

export default AddRecipeForm;
