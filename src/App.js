import React, { useEffect, createContext } from "react";
// import Logo from "./Logo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";

import "./App.scss";
// import HiddenCard from "./HiddenCard";

// import Card from "./Card";
import Table from "./Table";

export const AppContext = createContext();

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      console.log(error);
    }

    if (!user) {
      firebase.auth().signInAnonymously();
    }
  }, [user, loading, error]);

  const [{ balance } = { balance: 0 }] = useDocumentData(
    user &&
      user.uid &&
      firebase
        .firestore()
        .collection("profiles")
        .doc(user.uid)
  );

  return (
    <AppContext.Provider
      value={{
        balance,
        profileId: user && user.uid
      }}
    >
      <Router>
        <div className="app">
          <Route path="/:tableId" component={Table} />
          {/* <Logo /> */}
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
