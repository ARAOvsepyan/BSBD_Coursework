import React, {useContext, useEffect, useState} from 'react';
import {check} from "./http/userAPI";
import {Context} from "./index";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Spinner} from "react-bootstrap";
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  const {user} = useContext(Context)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(data)
          user.setIsAuth(data.role)
          console.log(user);
      }).finally(() => setLoading(false))
  }, [user])

  
  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
