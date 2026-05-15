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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://127.0.0.1:8000/api/submit/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      console.log(data)

      alert("Request submitted successfully!")

      onSubmit(form)

    } catch (error) {
      console.error(error)
      alert("Error submitting request")
    }
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
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="date"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setForm({ ...form, rank: e.target.value })
              }
            >
              <option value="">Select Rank</option>
              <option value="S">S Rank (4 products)</option>
              <option value="A+">A+ Rank (3 products)</option>
              <option value="A">A Rank (2 products)</option>
              <option value="B">B Rank (2 products)</option>
            </select>

            <select
              onChange={(e) =>
                setForm({ ...form, cutoff: e.target.value })
              }
            >
              <option value="">Select Cutoff</option>
              <option value="First">First Cutoff</option>
              <option value="Second">Second Cutoff</option>
            </select>

            <button type="submit">Enter Shop</button>
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