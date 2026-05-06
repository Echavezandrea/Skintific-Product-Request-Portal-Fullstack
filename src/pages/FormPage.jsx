import { useState } from "react"
import logo from "../assets/logo.png"

// product images
import cushion from "../assets/cushion.png"
import serum from "../assets/serum.png"
import sunscreen from "../assets/sunscreen.png"
import cleanser from "../assets/cleanser.png"

function FormPage({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    rank: "",
    cutoff: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <div className="split-container">

      {/* LEFT SIDE FORM */}
      <div className="form-section">
        <div className="form-box">

          <img src={logo} alt="logo" className="logo-img" />

          <h2>Skintific Product Request</h2>

          <form onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              onChange={(e) => setForm({...form, name: e.target.value})}
            />

            <input
              placeholder="Email"
              onChange={(e) => setForm({...form, email: e.target.value})}
            />

            <input
              type="date"
              onChange={(e) => setForm({...form, date: e.target.value})}
            />

            <select onChange={(e) => setForm({...form, rank: e.target.value})}>
              <option value="">Select Rank</option>
              <option value="S">S Rank (4 products)</option>
              <option value="A+">A+ Rank (3 products)</option>
              <option value="A">A Rank (2 products)</option>
              <option value="B">B Rank (2 products)</option>
            </select>

            <select onChange={(e) => setForm({...form, cutoff: e.target.value})}>
              <option value="">Select Cutoff</option>
              <option value="First">First Cutoff</option>
              <option value="Second">Second Cutoff</option>
            </select>

            <button>Enter Shop</button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="image-section">
        <div className="image-grid">
          <img src={cushion} />
          <img src={serum} />
          <img src={sunscreen} />
          <img src={cleanser} />
        </div>
      </div>

    </div>
  )
}

export default FormPage