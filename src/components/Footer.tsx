
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Logo e Info */}
      <div className="md:col-span-2">
        <div className="flex items-center space-x-2 mb-4">
          {/* ===== TRECHO ALTERADO ===== */}
          <div className="w-10 h-10">
            <img
              src="../../logo.jpeg" // Certifique-se que o caminho da imagem está correto
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* =========================== */}
          <h3 className="text-2xl font-bold">Mata Nativa</h3>
        </div>
        <p className="text-gray-300 mb-4 max-w-md">
          Seu refúgio aquático favorito de aventuras! Aqui, a aventura, o lazer 
          e a diversão se encontram no coração da natureza, proporcionando momentos 
          inesquecíveis para toda a família, com muita emoção.
        </p>
        <a
          href="https://wa.me/554699116964"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-cyan-400 text-white px-6 py-2 rounded-lg hover:bg-cyan-500 transition-colors">
            Agende sua visita
          </button>
        </a>
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
  <h4 className="text-lg font-bold mb-4 text-white">Contato</h4>
  <div className="space-y-2 text-gray-300">
    <div className="flex items-center gap-2">
      <span>📱</span>
      <a
        href="https://wa.me/554699116964"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        WhatsApp
      </a>
    </div>

    <div className="flex items-center gap-2">
      <span>📧</span>
      <a
        href="mailto:contato@recantomatanativa.com?subject=Olá&body=Gostaria%20de%20mais%20informações."
        className="hover:underline"
      >
        Email
      </a>
    </div>

    <div className="flex items-start gap-2">
      <span>📍</span>
      <div>
        <p>Marmeleiro - PR</p>
        <p>Linha Pocinho – Saída para Barracão</p>
        <p>85615-000</p>
      </div>
    </div>
  </div>
</div>

</div>
        
      </div>
    </footer>
  );
};

export default Footer;
