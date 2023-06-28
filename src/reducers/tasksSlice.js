/* eslint-disable no-unused-vars */
import { apiSlice } from "../api/apiSLice";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTasks: builder.query({
      query: () => "/tasks",
      providesTags: (result = [], error, arg) => [
        "TASK",
        "TASKLIST",
        ...result.map(({ id }) => ({ type: "TASK", id })),
      ],
    }),
    getTask: builder.query({
      query: (taskId) => `/tasks/${taskId}`,
      providesTags: (result, error, arg) => [{ type: "TASK", id: arg }],
    }),
    addNewTask: builder.mutation({
      query: (initialTask) => ({
        url: "/tasks",
        method: "POST",
        body: initialTask,
      }),
      invalidatesTags: ["TASK"],
    }),
    editTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "TASK", id: arg.id }],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TASKLIST"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTaskQuery,
  useAddNewTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
