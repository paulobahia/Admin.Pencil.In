import {
  Availability,
  ConnectedCalendar,
  DashboardLayout,
  Welcome,
  SetupAvailability,
  SignIn,
  Bookings,
  Insights,
  Team,
  Automations,
  SettingsLayout,
  Calendars,
  Appearance,
  OutOfOffice,
  Profile,
  Billing,
  Password,
  TwoFactor,
  Studio,
  CreateAvailability
} from '@/pages'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignIn />} />
      <Route path="/first-steps" element={<Welcome />} />
      <Route path="/first-steps/connected-calendar" element={<ConnectedCalendar />} />
      <Route path="/first-steps/setup-availability" element={<SetupAvailability />} />
      <Route path="/" element={<DashboardLayout />} >
        <Route path='/my-studio' element={<Studio />} />
        <Route path='/availability' element={<Availability />} />
        <Route path='/availability/:id' element={<CreateAvailability />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/team' element={<Team />} />
        <Route path='/automations' element={<Automations />} />
      </Route>
      <Route path='/settings' element={<SettingsLayout />} >
        <Route path='my-account/appearance' element={<Appearance />} />
        <Route path='my-account/calendars' element={<Calendars />} />
        <Route path='my-account/out-of-office' element={<OutOfOffice />} />
        <Route path='my-account/profile' element={<Profile />} />
        <Route path='billing' element={<Billing />} />
        <Route path='security/password' element={<Password />} />
        <Route path='security/two-factor' element={<TwoFactor />} />
      </Route>
    </Route>
  )
)
