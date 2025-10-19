import Header from "./componens/Header";
import Main from "./componens/main";
import Footer from "./componens/footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Creataccuont from "./creataccuont";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/creataccaont" element={<Creataccuont />} />
      </Routes>
    </>
  );
}
export default App;
