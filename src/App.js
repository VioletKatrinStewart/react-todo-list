import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { getUser, logout } from './services/users';
import Auth from './views/Auth';
import ToDos from './views/ToDos';
import Tasks from './views/Tasks';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <ToDos></ToDos>
                <Tasks></Tasks>
                <button onClick={logoutUser}>sign out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
