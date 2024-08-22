import { FirstSteps, SignIn } from '@/pages'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/first-steps" element={<FirstSteps />} />
    </Route>
  )
)
