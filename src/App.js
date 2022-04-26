import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProfileUserProvider } from "./context/ProfileUserContext";
import { CommunityProvider } from "./context/CommunityContext";
import { MessagesProvider } from "./context/MessagesContext";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import CreateCommunityPage from "./pages/CreateCommunityPage";
import EditCommunityPage from "./pages/EditCommunityPage";
import CommunityPage from "./pages/CommunityPage";
import SubmitPage from "./pages/SubmitPage";
import PostPage from "./pages/PostPage";
import MessagePage from "./pages/MessagePage";
import SettingsPage from "./pages/SettingsPage";
import SearchPage from "./pages/SearchPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import NotFoundPage from "./pages/NotFoundPage";

const theme = createTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        borderRadius: 8,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/explore">
            <ExplorePage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signup/:token">
            <SignUpPage />
          </Route>

          <Route path="/u/:username">
            <ProfileUserProvider>
              <ProfilePage />
            </ProfileUserProvider>
          </Route>

          <Route path="/create-community">
            <CreateCommunityPage />
          </Route>

          <Route path="/c/:name/edit">
            <CommunityProvider>
              <EditCommunityPage />
            </CommunityProvider>
          </Route>

          <Route path="/c/:name">
            <CommunityProvider>
              <CommunityPage />
            </CommunityProvider>
          </Route>

          <Route path="/submit">
            <SubmitPage />
          </Route>

          <Route path="/post/:id">
            <PostPage />
          </Route>

          <Route path="/messages">
            <MessagesProvider>
              <MessagePage />
            </MessagesProvider>
          </Route>

          <Route path="/settings">
            <SettingsPage />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/delete-account/:token">
            <DeleteAccountPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
