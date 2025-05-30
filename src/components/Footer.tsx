
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MN</span>
              </div>
              <h3 className="text-2xl font-bold">Mata Nativa</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Seu refúgio aquático favorito de aventuras! Aqui, a aventura, o lazer 
              e a diversão se encontram no coração da natureza, proporcionando momentos 
              inesquecíveis para toda a família, com muita emoção.
            </p>
            <button className="bg-cyan-400 text-white px-6 py-2 rounded-lg hover:bg-cyan-500 transition-colors">
              Visite agora
            </button>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Atrações</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Ingressos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Chalés</a></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>📱 WhatsApp</p>
              <p>📧 Email</p>
              <p>📍 Localização</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Icons */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">🏊</span>
              </div>
              <span className="text-sm text-gray-300">Atrações</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">🎫</span>
              </div>
              <span className="text-sm text-gray-300">Ingressos</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl">🏡</span>
              </div>
              <span className="text-sm text-gray-300">Chalés</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
