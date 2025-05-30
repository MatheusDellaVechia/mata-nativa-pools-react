
interface TicketCardProps {
  type: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const TicketCard = ({ type, price, features, isPopular = false }: TicketCardProps) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 ${isPopular ? 'ring-4 ring-cyan-400 scale-105' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          Mais Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{type}</h3>
        <div className="text-4xl font-bold text-cyan-600">{price}</div>
      </div>
      
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
        Comprar Ingresso
      </button>
    </div>
  );
};

export default TicketCard;
