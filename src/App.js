import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProfileUserProvider } from "./context/ProfileUserContext";
import { CommunityProvider } from "./context/CommunityContext";
import { MessagesProvider } from "./context/MessagesContext";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import SubmitPage from "./pages/SubmitPage";
import PostPage from "./pages/PostPage";
import MessagePage from "./pages/MessagePage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";

function App() {
  return (
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

        <Route path="/c/:name/edit">
          <CommunityProvider>
            <NotFoundPage />
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

        <Route path="/delete-account/:token">
          <DeleteAccountPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
