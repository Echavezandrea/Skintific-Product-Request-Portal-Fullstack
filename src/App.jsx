import { useState } from "react"
import FormPage from "./pages/FormPage"
import ProductPage from "./pages/ProductPage"
import "./App.css"

function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      {!user ? (
        <FormPage onSubmit={setUser} />
      ) : (
        <ProductPage user={user} />
      )}
    </div>
  )
}

export default App