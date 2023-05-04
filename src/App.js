import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from './components/paymentPage/PaymentPage';
import LocationPage from './components/locationPage/LocationPage';
import EventPage from './components/eventPage/EventPage';
import CalendarPage from './components/calendarPage/CalendarPage';
import Home from "./components/home/Home";
import Button from './components/button/Button';
import Navbar from "./components/navbar/Navbar";
import AdminPage from "./components/adminPage/AdminPage";



function App() {
  return (
    <Router>
      <div>
        {/* <Button icon="PaymentIcon" text="Payment" link="/payment" />
        <Button icon="LocationOnIcon" text="Location" link="/location" />
        <Button icon="EventAvailableIcon" text="Event" link="/event" />
        <Button icon="EventNoteIcon" text="Calendar" link="/calendar" />
        <Button icon="AdminIcon" text="Admin" link="/admin" /> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </ Routes>
      </div>
    </Router>
  );
}

export default App;
