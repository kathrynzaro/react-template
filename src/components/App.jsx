import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Cats from './Cats/Cats.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import Layout from './Layout/Layout.jsx';
import Pizza from './Pizza/Pizza.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="cats" element={<Cats />} />


        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
