import { useState } from "react";
import { SignUpPage } from "./components/pages/SignUp";
import { ThankYouPage } from "./components/pages/ThankYou";

import { AuthContext } from "./contexts/auth";
import { User } from "./domains/user";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {user === null ? <SignUpPage /> : <ThankYouPage />}
    </AuthContext.Provider>
  );
}

export default App;
