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

    // move to ProductPage
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
              type="text"
              placeholder="Full Name"
              required
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="date"
              required
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <select
              required
              onChange={(e) =>
                setForm({ ...form, rank: e.target.value })
              }
            >
              <option value="">Select Rank</option>
              <option value="S">S Rank (4 Products)</option>
              <option value="A+">A+ Rank (3 Products)</option>
              <option value="A">A Rank (2 Products)</option>
              <option value="B">B Rank (2 Products)</option>
            </select>

            <select
              required
              onChange={(e) =>
                setForm({ ...form, cutoff: e.target.value })
              }
            >
              <option value="">Select Cutoff</option>
              <option value="First">First Cutoff</option>
              <option value="Second">Second Cutoff</option>
            </select>

            <button type="submit">
              Enter Shop
            </button>

          </form>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="image-section">
        <div className="image-grid">

          <img src={cushion} alt="Cushion" />
          <img src={serum} alt="Serum" />
          <img src={sunscreen} alt="Sunscreen" />
          <img src={cleanser} alt="Cleanser" />

        </div>
      </div>

    </div>
  )
}

export default FormPage