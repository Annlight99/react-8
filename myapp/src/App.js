
import { Dune } from "./components/Dune";

function App() {
  const chats = useSelector(chat);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/chats" element={<Chats chats={chats} />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/chats/:1" element={<Chats chats={chats} />}></Route>
        <Route exact path="/chats/:2" element={<Chats chats={chats} />}></Route>
        <Route exact path="/dune" element={<Dune />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
