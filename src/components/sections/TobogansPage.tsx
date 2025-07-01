
import AttractionCard from '../AttractionCard';

const TobogansPage = () => {
  const tobogans = [
    {
      title: "Máxima adrenalina",
      description: "Diversos tobogãs com diferentes níveis de adrenalina",
      imageUrl: "../../toboga1.jpeg",
      features: [
        "Tobogã de alta velocidade",
        "Tobogã familiar",
        "Tobogã infantil",
        "Supervisão especializada"
      ],
      color: "bg-cyan-400"
    },
    {
      title: "Adrenalina Máxima",
      description: "Diversos tobogãs com diferentes níveis de adrenalina",
      imageUrl: "../../toboga2.jpeg",
      features: [
        "Tobogã de alta velocidade",
        "Tobogã familiar",
        "Tobogã infantil",
        "Supervisão especializada"
      ],
      color: "bg-cyan-400"
    },
    {
      title: "Diversão garantida",
      description: "Diversos tobogãs com diferentes níveis de adrenalina",
      imageUrl: "../../infantil.jpeg",
      features: [
        "Tobogã de alta velocidade",
        "Tobogã familiar",
        "Tobogã infantil",
        "Supervisão especializada"
      ],
      color: "bg-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-150 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Tobogãs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sinta a adrenalina correndo nas veias com nossos tobogãs de diferentes níveis. 
            Diversão garantida para toda a família!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tobogans.map((tobogan, index) => (
            <AttractionCard key={index} {...tobogan} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Informações Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-700 mb-3">Segurança</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Altura mínima: 1,20m</li>
                <li>• Supervisão constante</li>
                <li>• Equipamentos de segurança</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Horários</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Funcionamento: 8h às 17h</li>
                <li>• Manutenção: 12h às 13h</li>
                <li>• Todos os dias da semana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TobogansPage;
