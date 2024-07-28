import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import Login from "./components/Login.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
