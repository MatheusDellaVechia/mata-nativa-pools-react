
import AttractionCard from '../AttractionCard';

const NaturePage = () => {
  const natureAttractions = [
    {
      title: "Aventura Natural",
      description: "Explore a natureza e relaxe no rio Marmeleiro",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Trilhas ecológicas",
        "Rio Marmeleiro",
        "Área de descanso",
        "Observação da fauna"
      ],
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Natureza & Aventuras</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com a natureza em meio à mata preservada. 
            Aventuras inesquecíveis te aguardam no coração da Mata Nativa!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {natureAttractions.map((attraction, index) => (
            <AttractionCard key={index} {...attraction} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Experiências Naturais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center bg-green-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🥾</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Trilhas</h3>
              <p className="text-gray-600">Explore caminhos em meio à mata nativa</p>
            </div>
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏞️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Rio Marmeleiro</h3>
              <p className="text-gray-600">Águas cristalinas para banho natural</p>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🦋</span>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">Fauna Local</h3>
              <p className="text-gray-600">Observe animais em seu habitat natural</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturePage;
