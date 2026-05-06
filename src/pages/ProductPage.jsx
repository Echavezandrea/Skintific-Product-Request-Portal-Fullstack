import { useState } from "react"
import ProductCard from "../components/ProductCard"

function ProductPage({ user }) {
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const limits = {
    "S": 4,
    "A+": 3,
    "A": 2,
    "B": 2
  }

  const max = limits[user.rank]

  const products = [
    "Cushion",
    "Moisturizer",
    "Toner",
    "Serum",
    "Cleanser",
    "Sunscreen",
    "Powder"
  ]

  const handleSelect = (item) => {
    if (selected.includes(item)) return

    if (selected.length >= max) {
      alert(`Max ${max} products only`)
      return
    }

    setSelected([...selected, item])
  }

 const handleSubmit = async () => {
  if (selected.length === 0) {
    alert("Select at least 1 product")
    return
  }

  const data = {
    name: user.name,
    email: user.email,
    date: user.date,
    rank: user.rank,
    cutoff: user.cutoff,
    products: selected.join(", ")
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/submit/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    alert("🎉 Request submitted successfully!")
  } catch (error) {
    console.error(error)
    alert("Error submitting request")
  }
}
  return (
    <div className="container">
      <h2>Choose Your Products</h2>
      <p>Rank: {user.rank} (Max: {max})</p>

      <div className="product-grid">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            name={item}
            onClick={() => handleSelect(item)}
          />
        ))}
      </div>

      <h3>Selected: {selected.join(", ")}</h3>

      {/* SUBMIT BUTTON */}
      <button
        style={{ width: "200px", marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Submit Request
      </button>

      {/* SUCCESS MESSAGE */}
      {submitted && (
        <div className="success-box">
          🎉 Your request has been processed successfully! <br />
          Congratulations!
        </div>
      )}
    </div>
  )
}

export default ProductPage