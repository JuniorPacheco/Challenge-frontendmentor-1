import "./App.css";

function App() {
  return (
    <div className="App min-h-screen flex justify-center items-center p-4 bg-cream">
      <article className="text-sm rounded-md overflow-hidden bg-white font-montserrat max-w-xl xl:grid xl:grid-cols-2">
        <section className="header bg-mobile xl:bg-desktop xl:h-full aspect-square bg-no-repeat bg-cover bg-center w-full">
          {/* <img className="w-full h-full object-cover" src="/images/image-product-mobile.jpg" alt="" /> */}
        </section>
        <section className="body p-5 lg:p-7">
          <h3>P E R F U M E</h3>
          <h2 className="font-fraunces text-3xl leading-7 my-2 xl:my-6">Gabrielle Essence Eau De Parfum</h2>
          <p className="my-4 leading-6">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="my-3 flex items-center gap-3">
            <h3 className="text-dark-cyan text-4xl font-fraunces">$149.99</h3>
            <h4 className="line-through">$169.99</h4>
          </div>
          <button className="block xl:mt-8 text-base w-full py-4 rounded-md bg-dark-cyan text-white hover:bg-green-800 transition duration-200"><i className='mr-2 bx bx-cart-alt'></i>Add to Cart</button>
        </section>
      </article>
    </div>
  );
}

export default App;
