import products from './assets/products.json'

function App() {

  return (
    <>
      <section>
        {products.map((product) => {
          return (<div className="">
            {product.name}
            <img src={product.image_src}
              alt={product.name}
              title={product.name}
            />
          </div>)
        })}
      </section>
    </>
  )
}

export default App
