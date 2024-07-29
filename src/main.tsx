import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './List.tsx'
import {
    createBrowserRouter,
    createRoutesFromElements, Outlet,
    Route,
    RouterProvider,
    ScrollRestoration
} from "react-router-dom";
import Detail from "./Detail.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const Layout = () => {
    return (
        <>
            <Outlet />
            <ScrollRestoration
                getKey={(location) => {
                    return location.pathname;
                }}
            />
        </>
    )
}

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path="/" element={<List/>}/>
        <Route path="/:name" element={<Detail/>}/>
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <RouterProvider router={router}/>

        </QueryClientProvider>
    </React.StrictMode>,
)
