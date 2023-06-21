import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error/ErrorPage";
import MainLayout from "./layouts/MainLayout.jsx";
import Today from "./pages/Today.jsx";
import Important from "./pages/Important.jsx";
import TasksList from "./pages/TasksList.jsx";
import CreateTask from "./pages/CreateTask.jsx";
import EditTask from "./pages/EditTask.jsx";
import Task from "./pages/Task.jsx";
import DoneTasks from "./pages/DoneTasks.jsx";
import UndoneTasks from "./pages/UndoneTasks.jsx";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/tasksList/today",
        element: <Today />,
      },
      {
        path: "/tasksList/important",
        element: <Important />,
      },
      {
        path: "/tasksList",
        element: <TasksList />,
      },
      {
        path: "/tasksList/create-task",
        element: <CreateTask />,
      },
      {
        path: "/tasksList/:taskId",
        element: <Task />,
      },
      {
        path: "/editTasks/:taskId",
        element: <EditTask />,
      },
      {
        path: "/tasksList/:taskId",
        element: <EditTask />,
      },
      {
        path: "/tasksList/done",
        element: <DoneTasks />,
      },
      {
        path: "/tasksList/undone",
        element: <UndoneTasks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
