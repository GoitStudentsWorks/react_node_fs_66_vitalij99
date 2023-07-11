import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentThunk } from 'redux/auth/authOperation';
import { WelcomePage, AuthPage } from 'page';
import { selectToken } from 'redux/auth/authSelector';
import { PrivateRoute } from 'route/PrivateRoute';
import RestrictedRoute from 'route/RestrictedRoute';

const CategoriesPage = lazy(() => import('page/CategoriesPage/CategoriesPage'));
const MainPage = lazy(() => import('page/MainPage/MainPage'));
const AddRecipePage = lazy(() => import('page/AddRecipePage/AddRecipePage'));
const FavoritePage = lazy(() => import('page/FavoritePage/FavoritePage'));
const RecipePage = lazy(() => import('page/RecipePage/RecipePage'));
const MyRecipesPage = lazy(() => import('page/MyRecipesPage/MyRecipesPage'));
const SearchPage = lazy(() => import('page/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('page/ShoppingListPage/ShoppingListPage')
);
const NotFoundPage = lazy(() => import('page/NotFoundPage/NotFoundPage'));

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(currentThunk());
  }, [dispatch, token]);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route
            index
            element={<RestrictedRoute component={<WelcomePage />} />}
          />
          <Route
            path="/auth/:id"
            element={<RestrictedRoute component={<AuthPage />} />}
          />

          <Route
            path="/"
            element={<PrivateRoute component={<SharedLayout />} />}
          >
            <Route path="/main" element={MainPage} />
            <Route
              path="/categories/:categoryName"
              element={<CategoriesPage />}
            />
            <Route path="/main" element={<MainPage />} />
            <Route path="/add" element={<AddRecipePage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/my" element={<MyRecipesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
