
import AttractionCard from '../AttractionCard';

const KidsPage = () => {
  const kidsAttractions = [
    {
      title: "Diversão para as crianças",
      description: "Espaço seguro para crianças de 2 a 10 anos",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Mini tobogãs seguros",
        "Piscina rasa",
        "Brinquedos aquáticos",
        "Supervisão especializada"
      ],
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-cyan-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Área Infantil</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um mundo de diversão especialmente criado para os pequenos. 
            Segurança e alegria em cada brincadeira!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {kidsAttractions.map((attraction, index) => (
            <AttractionCard key={index} {...attraction} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Segurança e Diversão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Idade Recomendada</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">2 a 5 anos: Área baby</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">6 a 10 anos: Área kids</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Acompanhamento obrigatório</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Horários Especiais</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">8h às 12h: Recreação dirigida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">14h às 17h: Brincadeiras livres</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Monitor sempre presente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
