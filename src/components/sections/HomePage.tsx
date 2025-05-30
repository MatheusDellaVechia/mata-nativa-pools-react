
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Mata Nativa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/70 to-blue-600/70"></div>
        </div>
        
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mata Nativa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Aventura, lazer e diversão em meio à natureza. Momentos inesquecíveis para toda a família!
          </p>
          <button className="bg-white text-cyan-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105">
            Visite Agora
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Descubra Nossas Atrações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🏊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Piscinas</h3>
              <p className="text-gray-600">Relaxe e refresque-se em nossas várias opções de piscinas</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🛝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tobogãs</h3>
              <p className="text-gray-600">Diversos tobogãs com diferentes níveis de adrenalina</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Área Infantil</h3>
              <p className="text-gray-600">Diversão segura para crianças de 2 a 10 anos</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Natureza</h3>
              <p className="text-gray-600">Explore a natureza e relaxe no rio Marmeleiro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
