
import AttractionCard from '../AttractionCard';

const PoolsPage = () => {
  const pools = [
    {
      title: "Relaxe e refresque-se",
      description: "Várias opções de piscinas para todos os gostos",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        "Piscina olímpica",
        "Piscina aquecida",
        "Piscina infantil",
        "Área de relaxamento"
      ],
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Piscinas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relaxe e refresque-se em nossas piscinas cristalinas. 
            Momentos de paz e diversão em um ambiente tropical único.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pools.map((pool, index) => (
            <AttractionCard key={index} {...pool} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossas Piscinas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-blue-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏊‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Piscina Olímpica</h3>
              <p className="text-gray-600">25 metros de comprimento para natação esportiva</p>
            </div>
            <div className="text-center bg-cyan-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">♨️</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-700 mb-2">Piscina Aquecida</h3>
              <p className="text-gray-600">Água aquecida para relaxamento em qualquer época</p>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">Piscina Infantil</h3>
              <p className="text-gray-600">Área segura e divertida para os pequenos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolsPage;
