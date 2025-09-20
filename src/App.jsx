import { useState } from "react"
import Auctions from "./Components/Auctions/Auctions"
import Cover from "./Components/CoverSide/Cover"
import Nave from "./Components/Navbar/Nave"
import Footer from './Components/Footer/Footer';



function App() {
  const [products, setProducts] = useState([])
  const [productPrice, setProductPrice] = useState(0)
  const showProductsHandle = product => {
    if (!products.find(p => p.id === product.id)) {
      setProducts([...products, product])
      setProductPrice(productPrice + product.currentBidPrice)
    }
  }
  const removeItem = (id, price) => {
    const newProduct = products.filter(p => p.id !== id)
    setProducts(newProduct)
    setProductPrice(productPrice - price)
  }

  return (
    <>
      <div>
        <Nave></Nave>
        <Cover></Cover>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="mt-30 ml-30 flex justify-center">
            <Auctions showProductsHandle={showProductsHandle} removeItem={removeItem}></Auctions>
            <div className="w-[496px] h-[385px] text-black border-2 rounded-2xl p-5 overflow-y-scroll">
              <div className="flex justify-center border-b-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill='#D3DAD9' viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p className="text-center text-3xl">Favorite Items</p>
              </div>
              <div className="">
                {

                  products.map(product => <div key={product.id} className="card w-96 shadow-md m-2">
                    <div className="card-body">
                      <div className="card-actions justify-end">
                        <button onClick={() => { removeItem(product.id, product.currentBidPrice) }}
                          className="btn-square bg-[#c4c7c6] rounded-md shadow-xl" >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-5">
                        <img className="w-[100px] rounded-2xl" src={product.image} alt="" />
                        <p className="font-semibold text-lg">{product.title}</p>
                      </div>
                    </div>
                  </div>)

                }
              </div>
              <div className="static">
                <div className=" absolute top-[1240px] bg-[#D3DAD9] p-2 w-[460px] rounded-lg flex items-center gap-32">
                  <p className="font-semibold text-[26px]">Total bid Amount:</p>
                  <p className="text-2xl font-semibold">${productPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
