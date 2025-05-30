
import TicketCard from '../TicketCard';

const TicketsPage = () => {
  const tickets = [
    {
      type: "Ingresso Adulto - Piscina",
      price: "R$ 50",
      features: [
        "Acesso completo a todas as atrações",
        "Válido para pessoas acima de 12 anos",
        "Inclui uso de vestiários"
      ]
    },
    {
      type: "Ingresso Infantil - Piscina",
      price: "R$ 35",
      features: [
        "Acesso completo a todas as atrações infantis",
        "Válido para crianças de 3 a 10 anos",
        "Supervisão incluída",
        "Uso de brinquedos aquáticos"
      ],
      isPopular: true
    },
    {
      type: "Chalé 1",
      price: "R$ 1200",
      features: [
        "Até 6 pessoas",
        "2 quartos sxx",
        "xxxxx"
      ]
    },
    {
      type: "Chalé 2",
      price: "R$ 1200",
      features: [
        "Até 6 pessoas",
        "2 quartos sxx",
        "xxxxx"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Ingressos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o ingresso ideal para sua diversão na Mata Nativa. 
            Preços especiais para grupos e temporadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tickets.map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Informações Importantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-700 mb-4">Horários de Funcionamento</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Segunda a Sexta: 8h às 17h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Sábados e Domingos: 7h às 18h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Feriados: 7h às 18h</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Política de Reservas</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Reservas conforme disponibilidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Cancelamento até 24h antes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Entrada no local: R$ 25 por pessoa</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200">
              Link do WhatsApp para Reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
