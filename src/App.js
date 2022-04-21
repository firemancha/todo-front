import { Routes, Route } from "react-router-dom";
import CalendarContainer from "./pages/CalendarContainer";
import TodoContainer from "./pages/TodoContainer";
import Clock from "./components/Clock";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarContainer />} exact />
      <Route path="/:id/list" element={<TodoContainer />} />
    </Routes>
  );
}

export default App;
