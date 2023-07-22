import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import App from 'components/App';

import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader/Loader';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'styles/theme';
import { selectUserTheme } from 'redux/theme/themeSelector';

const AppWrapper = () => {
  const theme = useSelector(selectUserTheme);

  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <PersistGate persistor={persistor} loading={<Loader />}>
        <App />
      </PersistGate>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter basename="/react_node_fs_66_vitalij99">
      <AppWrapper />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);
