import { useState } from "react"

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
    if (selected.includes(item)) {
      setSelected(selected.filter((p) => p !== item))
      return
    }

    if (selected.length >= max) {
      alert(`Maximum of ${max} products only.`)
      return
    }

    setSelected([...selected, item])
  }

  const handleSubmit = async () => {
    if (selected.length === 0) {
      alert("Please select at least 1 product.")
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

      await response.json()

      setSubmitted(true)

      alert("Request submitted successfully!")

    } catch (error) {
      console.error(error)
      alert("Error submitting request")
    }
  }

  return (
    <div className="receipt-container">

      <div className="receipt-card">

        <h1 className="receipt-title">
          SKINTIFIC PRODUCT REQUEST
        </h1>

        <div className="receipt-user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Rank:</strong> {user.rank}</p>
          <p><strong>Cutoff:</strong> {user.cutoff}</p>
          <p><strong>Maximum Products:</strong> {max}</p>
        </div>

        <hr />

        <h2 className="section-title">Choose Products</h2>

        <div className="choices-container">
          {products.map((item, index) => (
            <button
              key={index}
              className={`choice-btn ${selected.includes(item) ? "active" : ""}`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="receipt-summary">
          <h3>Selected Products</h3>

          {selected.length === 0 ? (
            <p className="empty-text">No products selected.</p>
          ) : (
            <ul>
              {selected.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Request
        </button>

        {submitted && (
          <div className="success-box">
            ✔ Request successfully submitted!
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductPage