
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Users, Globe, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Products",
      description: "We source only the highest quality products from trusted manufacturers worldwide."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our dedicated customer service team is here to help you 24/7 with any questions."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We ship to over 100 countries worldwide with fast and reliable delivery."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50 with most items delivered within 3-5 business days."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      description: "Sarah founded ShopHub with the vision of making quality products accessible to everyone."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg",
      description: "Michael leads our technology team, ensuring our platform is secure and user-friendly."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Experience",
      image: "/placeholder.svg",
      description: "Emily ensures every customer has an exceptional experience with ShopHub."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">ShopHub</Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
              <Link to="/about" className="text-blue-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About ShopHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing you the best products at the best prices. 
            Since 2020, ShopHub has been your trusted partner for online shopping, 
            serving millions of customers worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            To make online shopping simple, safe, and enjoyable for everyone. We believe that 
            everyone deserves access to quality products at fair prices, backed by exceptional 
            customer service and fast, reliable delivery.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose ShopHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">5M+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">50K+</h3>
              <p className="text-gray-300">Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">100+</h3>
              <p className="text-gray-300">Countries Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">4.8/5</h3>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
