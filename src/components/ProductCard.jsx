function ProductCard({ name, onClick }) {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/150" />
      <h4>{name}</h4>
      <button onClick={onClick}>Select</button>
    </div>
  )
}

export default ProductCard