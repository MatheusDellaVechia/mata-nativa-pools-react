
interface AttractionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  color?: string;
}

const AttractionCard = ({ title, description, imageUrl, features, color = "bg-cyan-400" }: AttractionCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className={`${color} p-4`}>
        <h3 className="text-white font-bold text-xl text-center">{title}</h3>
      </div>
      
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-4 text-center font-medium">{description}</p>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
