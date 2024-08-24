import { ConnectedCalendar, FirstSteps, SetupAvailability, SignIn } from '@/pages'

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
      <Route path="/first-steps/connected-calendar" element={<ConnectedCalendar />} />
      <Route path="/first-steps/setup-availability" element={<SetupAvailability />} />
    </Route>
  )
)
