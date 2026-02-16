import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Coffee, Droplet, IceCream, Cookie, Croissant, Sparkles, Leaf, Wine, Zap, Droplets, Cake as CakeIcon, Sandwich as SandwichIcon } from 'lucide-react';

// Menu Data from CSV
const menuData = {
  "Classic Coffee": [
    { name: 'Turkish Coffee', size: 'Single', price: '28' },
    { name: 'Turkish Coffee', size: 'Double', price: '40' },
    { name: 'Nutella Coffee', size: 'Single', price: '33' },
    { name: 'Nutella Coffee', size: 'Double', price: '48' },
    { name: 'Hazelnut Coffee', size: 'Single', price: '32' },
    { name: 'Hazelnut Coffee', size: 'Double', price: '44' },
    { name: 'French Coffee', size: 'Single', price: '30' },
    { name: 'French Coffee', size: 'Double', price: '44' }
  ],
  "Non Coffee": [
    { name: 'Tea', size: 'Standard', price: '45' },
    { name: 'Green Tea', size: 'Standard', price: '48' },
    { name: 'Karak Tea', size: 'Medium', price: '45' },
    { name: 'Karak Tea', size: 'Large', price: '58' },
    { name: 'Vitamine C', size: 'Medium', price: '42' },
    { name: 'Vitamine C', size: 'Large', price: '58' },
    { name: 'Apple Cedar', size: 'Medium', price: '44' },
    { name: 'Apple Cedar', size: 'Large', price: '58' },
    { name: 'Hot Chocolate', size: 'Medium', price: '50' },
    { name: 'Hot Chocolate', size: 'Double', price: '72' },
    { name: 'Mix Herbs', size: 'Standard', price: '48' }
  ],
  "Coffee": [
    { name: 'Espresso', size: 'Single', price: '29' },
    { name: 'Espresso', size: 'Double', price: '40' },
    { name: 'Machiatto', size: 'Single', price: '32' },
    { name: 'Machiatto', size: 'Double', price: '43' },
    { name: 'Mocha Nutella', size: 'Medium', price: '63' },
    { name: 'Mocha Nutella', size: 'Large', price: '73' },
    { name: 'Cortado', size: 'Standard', price: '58' },
    { name: 'Flat White', size: 'Standard', price: '72' },
    { name: 'Cappuccino', size: 'Medium', price: '60' },
    { name: 'Cappuccino', size: 'Large', price: '75' },
    { name: 'Café Latte', size: 'Medium', price: '62' },
    { name: 'Café Latte', size: 'Large', price: '72' },
    { name: 'Spanish Latte', size: 'Medium', price: '70' },
    { name: 'Spanish Latte', size: 'Large', price: '75' },
    { name: 'Salted Caramel Coffee', size: 'Medium', price: '65' },
    { name: 'Salted Caramel Coffee', size: 'Large', price: '72' },
    { name: 'Pistachio Coffee', size: 'Medium', price: '75' },
    { name: 'Pistachio Coffee', size: 'Large', price: '80' },
    { name: 'Americano', size: 'Medium', price: '55' },
    { name: 'Americano', size: 'Large', price: '65' },
    { name: 'Nescafe', size: 'Medium', price: '50' },
    { name: 'Nescafe', size: 'Large', price: '60' }
  ],
  "Ice Coffee": [
    { name: 'Ice Vanilla Latte', size: 'Medium', price: '60' },
    { name: 'Ice Vanilla Latte', size: 'Large', price: '73' },
    { name: 'Ice Flat White', size: 'Medium', price: '65' },
    { name: 'Ice Flat White', size: 'Large', price: '75' },
    { name: 'Ice Americano', size: 'Medium', price: '55' },
    { name: 'Ice Americano', size: 'Large', price: '65' },
    { name: 'Ice Cappuccino', size: 'Medium', price: '62' },
    { name: 'Ice Cappuccino', size: 'Large', price: '72' },
    { name: 'Ice Spanish Latte', size: 'Medium', price: '68' },
    { name: 'Ice Spanish Latte', size: 'Large', price: '75' },
    { name: 'Ice Caramel Macciatto', size: 'Medium', price: '62' },
    { name: 'Ice Caramel Macciatto', size: 'Large', price: '78' },
    { name: 'Ice Mocha Nutella', size: 'Medium', price: '72' },
    { name: 'Ice Mocha Nutella', size: 'Large', price: '84' }
  ],
  "Matcha": [
    { name: 'Hot Matcha', size: 'Medium', price: '58' },
    { name: 'Hot Matcha', size: 'Large', price: '68' },
    { name: 'Ice Matcha', size: 'Medium', price: '60' },
    { name: 'Ice Matcha', size: 'Large', price: '72' },
    { name: 'Ice Berry Matcha', size: 'Medium', price: '63' },
    { name: 'Ice Berry Matcha', size: 'Large', price: '75' },
    { name: 'Ice Strawberry Matcha', size: 'Medium', price: '63' },
    { name: 'Ice Strawberry Matcha', size: 'Large', price: '75' },
    { name: 'Ice Coconut Matcha', size: 'Medium', price: '67' },
    { name: 'Ice Coconut Matcha', size: 'Large', price: '77' },
    { name: 'Orange Passion Matcha', size: 'Medium', price: '62' },
    { name: 'Orange Passion Matcha', size: 'Large', price: '75' }
  ],
  "Milk Shake": [
    { name: 'Classic Milk Shake', size: 'Medium', price: '55' },
    { name: 'Classic Milk Shake', size: 'Large', price: '65' },
    { name: 'Milk Shake Apple Pie', size: 'Medium', price: '60' },
    { name: 'Milk Shake Apple Pie', size: 'Large', price: '70' },
    { name: 'Milk Shake Pistachio', size: 'Medium', price: '67' },
    { name: 'Milk Shake Pistachio', size: 'Large', price: '76' },
    { name: 'Milk Shake Salted Caramel', size: 'Medium', price: '60' },
    { name: 'Milk Shake Salted Caramel', size: 'Large', price: '72' },
    { name: 'Milk Shake Oreo Nutella', size: 'Medium', price: '72' },
    { name: 'Milk Shake Oreo Nutella', size: 'Large', price: '80' },
    { name: 'Milk Shake Cherry Berry', size: 'Medium', price: '65' },
    { name: 'Milk Shake Cherry Berry', size: 'Large', price: '75' },
    { name: 'Milk Shake Lotus Crash', size: 'Medium', price: '68' },
    { name: 'Milk Shake Lotus Crash', size: 'Large', price: '76' },
    { name: 'Milk Shake Strawberry Gum', size: 'Medium', price: '70' },
    { name: 'Milk Shake Strawberry Gum', size: 'Large', price: '79' }
  ],
  "Creamy Frappe": [
    { name: 'Frapuccino', size: 'Standard', price: '80' },
    { name: 'Frappe Nutella', size: 'Standard', price: '88' },
    { name: 'Frappe Pistachio', size: 'Standard', price: '88' },
    { name: 'Frappe Lotus', size: 'Standard', price: '85' },
    { name: 'Frappe Salted Caramel', size: 'Standard', price: '77' },
    { name: 'Frappe Matcha', size: 'Standard', price: '80' }
  ],
  "Fresh Juice": [
    { name: 'Watermelon', size: 'Medium', price: '57' },
    { name: 'Watermelon', size: 'Large', price: '70' },
    { name: 'Orange', size: 'Medium', price: '55' },
    { name: 'Orange', size: 'Large', price: '65' },
    { name: 'Strawberry', size: 'Medium', price: '60' },
    { name: 'Strawberry', size: 'Large', price: '65' },
    { name: 'Mango', size: 'Medium', price: '62' },
    { name: 'Mango', size: 'Large', price: '70' },
    { name: 'Guava', size: 'Medium', price: '55' },
    { name: 'Guava', size: 'Large', price: '70' },
    { name: 'Kiwi', size: 'Medium', price: '70' },
    { name: 'Kiwi', size: 'Large', price: '80' },
    { name: 'Pomegrante', size: 'Medium', price: '60' },
    { name: 'Pomegrante', size: 'Large', price: '72' }
  ],
  "Moctail Mojito": [
    { name: 'Bubbly Passion Fruit', size: 'Standard', price: '78' },
    { name: 'Bubbly Bubble Gum', size: 'Standard', price: '80' },
    { name: 'Bubbly Berry', size: 'Standard', price: '75' },
    { name: 'Bubbly Strawberry', size: 'Standard', price: '75' },
    { name: 'Bubbly Mix Berry', size: 'Standard', price: '75' },
    { name: 'Pinacolada', size: 'Standard', price: '80' },
    { name: 'Icland (Orange-Peach-Soda)', size: 'Standard', price: '80' },
    { name: 'Ice Tea Blueberry', size: 'Standard', price: '65' },
    { name: 'Ice Tea Passion Fruit', size: 'Standard', price: '68' },
    { name: 'Ice Tea Tropical', size: 'Standard', price: '70' }
  ],
  "Blended": [
    { name: 'Mango Passion', size: 'Standard', price: '82' },
    { name: 'Quatro Berry', size: 'Standard', price: '77' },
    { name: 'Cola', size: 'Standard', price: '75' },
    { name: 'Mix Berry', size: 'Standard', price: '75' },
    { name: 'Hook (Orange-Passion-Peach-Pineapple)', size: 'Standard', price: '80' },
    { name: 'Choco Lovers', size: 'Standard', price: '77' },
    { name: 'Pinacolada', size: 'Standard', price: '80' }
  ],
  "Soft Drink": [
    { name: 'Mineral Water', size: 'Standard', price: '10' },
    { name: 'Can', size: 'Standard', price: '35' },
    { name: 'RedBull', size: 'Standard', price: '65' },
    { name: 'Schweppes', size: 'Standard', price: '40' },
    { name: 'Sparkling Water', size: 'Standard', price: '40' }
  ],
  "Jar": [
    { name: 'Cheese Cake', size: 'Standard', price: '70' },
    { name: 'Caramel Brownies', size: 'Standard', price: '80' },
    { name: 'Oreo Chocolate', size: 'Standard', price: '80' },
    { name: 'Cookies and Cream', size: 'Standard', price: '115' }
  ],
  "Cake": [
    { name: 'Chocolate Cake', size: 'Standard', price: '67' },
    { name: 'Nutella Cake', size: 'Standard', price: '82' },
    { name: 'Cheese Cake', size: 'Standard', price: '60' },
    { name: 'San Sebestian', size: 'Standard', price: '73' },
    { name: 'Swiss Roll Lotus', size: 'Standard', price: '90' },
    { name: 'Swiss Roll Nutella', size: 'Standard', price: '90' },
    { name: 'Brownies', size: 'Standard', price: '58' }
  ],
  "Cookies": [
    { name: 'Cookies Vanilla', size: 'Standard', price: '32' },
    { name: 'Cookies Nutella', size: 'Standard', price: '36' },
    { name: 'Cookies Red Velvet', size: 'Standard', price: '22' },
    { name: 'Cookies Pistachio', size: 'Standard', price: '42' }
  ],
  "Pastries": [
    { name: 'Plain Croissant', size: 'Standard', price: '32' },
    { name: 'Romy Cheedar Croissant', size: 'Standard', price: '46' },
    { name: 'Cinnabon Roll', size: 'Standard', price: '52' },
    { name: 'Danish Fruit', size: 'Standard', price: '42' },
    { name: 'Muffin Chocolate', size: 'Standard', price: '46' },
    { name: 'Muffin Blueberry', size: 'Standard', price: '48' }
  ],
  "Bram": [
    { name: 'Volcano', size: 'Standard', price: '75' },
    { name: 'Caramel Brownies', size: 'Standard', price: '85' },
    { name: 'Salted Cookies', size: 'Standard', price: '75' },
    { name: 'Trilece', size: 'Standard', price: '70' }
  ],
  "Sandwich": [
    { name: 'Smoke Turkey', size: 'Standard', price: '78' },
    { name: 'Mix Cheese', size: 'Standard', price: '70' },
    { name: 'Chicken Pesto', size: 'Standard', price: '80' },
    { name: 'Salami', size: 'Standard', price: '75' },
    { name: 'Roast Beef', size: 'Standard', price: '100' }
  ],
  "Waffels": [
    { name: 'Waffle Nutella', size: 'Standard', price: '120' },
    { name: 'Waffle Lotus', size: 'Standard', price: '120' },
    { name: 'Waffle Pistachio', size: 'Standard', price: '135' },
    { name: "Waffle Four Season's", size: 'Standard', price: '150' }
  ]
};

// Icon mapping for categories
const categoryIcons: { [key: string]: React.ReactNode } = {
  "Classic Coffee": <Coffee className="w-5 h-5" />,
  "Non Coffee": <Droplets className="w-5 h-5" />,
  "Coffee": <Coffee className="w-5 h-5" />,
  "Ice Coffee": <Droplet className="w-5 h-5" />,
  "Matcha": <Leaf className="w-5 h-5" />,
  "Milk Shake": <IceCream className="w-5 h-5" />,
  "Creamy Frappe": <IceCream className="w-5 h-5" />,
  "Fresh Juice": <Droplets className="w-5 h-5" />,
  "Moctail Mojito": <Wine className="w-5 h-5" />,
  "Blended": <Zap className="w-5 h-5" />,
  "Soft Drink": <Droplet className="w-5 h-5" />,
  "Jar": <Cookie className="w-5 h-5" />,
  "Cake": <CakeIcon className="w-5 h-5" />,
  "Cookies": <Cookie className="w-5 h-5" />,
  "Pastries": <Croissant className="w-5 h-5" />,
  "Bram": <CakeIcon className="w-5 h-5" />,
  "Sandwich": <SandwichIcon className="w-5 h-5" />,
  "Waffels": <Cookie className="w-5 h-5" />
};

// Helper function to group items by name
const groupMenuItems = (items: any[]) => {
  const grouped: { [key: string]: { sizes: string[], prices: string[] } } = {};
  
  items.forEach(item => {
    if (!grouped[item.name]) {
      grouped[item.name] = { sizes: [], prices: [] };
    }
    grouped[item.name].sizes.push(item.size);
    grouped[item.name].prices.push(item.price);
  });
  
  return Object.entries(grouped).map(([name, data]) => ({
    name,
    display: data.sizes.length === 1 
      ? data.prices[0]
      : data.sizes.map((size, i) => `${size} ${data.prices[i]}`).join(' – ')
  }));
};

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center p-4 md:p-8">
      {/* Black Marble Background with Golden Veins */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1689864459067-1f84f2f82342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hcmJsZSUyMHRleHR1cmUlMjBnb2xkJTIwdmVpbnN8ZW58MXx8fHwxNzcxMjY4NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Golden Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-600/5" />
      
      {/* Floating Golden Spheres */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating 3D Food Elements */}
      <div className="hidden lg:block absolute top-32 right-32 w-40 h-40 opacity-60 animate-float" style={{ animationDelay: '0s' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1765743967124-5dc996a65c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBmb2FtJTIwbHV4dXJ5JTIwZ29sZHxlbnwxfHx8fDE3NzEyNjg2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coffee Cup"
          className="w-full h-full object-cover rounded-full shadow-2xl shadow-yellow-500/30 border-4 border-yellow-500/30"
        />
      </div>

      <div className="hidden lg:block absolute bottom-40 left-24 w-36 h-36 opacity-60 animate-float" style={{ animationDelay: '1.5s' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1611083676160-63cfc4c0d417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWZmbGUlMjBiZXJyaWVzJTIwZGVzc2VydHxlbnwxfHx8fDE3NzEyNjg2NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Waffle"
          className="w-full h-full object-cover rounded-full shadow-2xl shadow-yellow-500/30 border-4 border-yellow-500/30"
        />
      </div>

      <div className="hidden lg:block absolute top-1/3 left-16 w-32 h-32 opacity-60 animate-float" style={{ animationDelay: '0.8s' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1703016402680-d12e7dc746d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBjYWZlfGVufDF8fHx8MTc3MTE2MTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Croissant"
          className="w-full h-full object-cover rounded-full shadow-2xl shadow-yellow-500/30 border-4 border-yellow-500/30"
        />
      </div>

      <div className="hidden lg:block absolute bottom-1/3 right-24 w-28 h-28 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzcxMTgwMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coffee Beans"
          className="w-full h-full object-cover rounded-full shadow-2xl shadow-yellow-500/30 border-4 border-yellow-500/30"
        />
      </div>

      {/* Main Menu Container */}
      <div className="relative z-10 max-w-7xl w-full bg-black/60 backdrop-blur-sm border-4 border-yellow-500 shadow-2xl shadow-yellow-500/20 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Golden Border */}
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
        
        {/* Logo Section */}
        <div className="py-8 flex flex-col items-center justify-center border-b-2 border-yellow-500/30">
          <div className="relative w-40 h-40 mb-4">
            {/* Golden Circle Logo Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl shadow-yellow-500/50 animate-pulse" />
            
            {/* Inner Circle */}
            <div className="absolute inset-3 rounded-full bg-black flex items-center justify-center border-2 border-yellow-400">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600" style={{ fontFamily: 'Playfair Display, serif' }}>
                  HOOK
                </h1>
                <div className="h-0.5 w-16 mx-auto my-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                <p className="text-xs text-yellow-400 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Bakery & Coffee
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500 to-yellow-400" />
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-yellow-500 to-yellow-400" />
          </div>
        </div>

        {/* Menu Content - Scrollable */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {Object.entries(menuData).map(([category, items]) => (
              <MenuCategory 
                key={category}
                icon={categoryIcons[category]}
                title={category}
                items={groupMenuItems(items)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Contact Bar */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 py-4 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-black">
            <div className="flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="text-base md:text-lg font-semibold">WhatsApp:</span>
              <span className="text-base md:text-lg font-bold">01035555462</span>
            </div>
            <div className="text-center md:text-right" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p className="text-sm md:text-base font-semibold">شارع عبد الجليل سعد – متفرع من الإقبال</p>
            </div>
          </div>
        </div>

        {/* Bottom Golden Border */}
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(2deg);
          }
          50% {
            transform: translateY(-10px) rotate(-2deg);
          }
          75% {
            transform: translateY(-15px) rotate(1deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

interface MenuItem {
  name: string;
  display: string;
}

interface MenuCategoryProps {
  icon: React.ReactNode;
  title: string;
  items: MenuItem[];
}

function MenuCategory({ icon, title, items }: MenuCategoryProps) {
  return (
    <div className="space-y-3">
      {/* Category Header */}
      <div className="flex items-center gap-2 pb-2 border-b-2 border-yellow-500/40">
        <div className="text-yellow-400">
          {icon}
        </div>
        <h2 
          className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-start gap-3 group hover:translate-x-0.5 transition-transform duration-300"
          >
            <span 
              className="text-sm text-yellow-100 group-hover:text-yellow-300 transition-colors leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.name}
            </span>
            <span 
              className="text-sm text-yellow-400 font-semibold whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.display}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}