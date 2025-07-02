
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      category: "Orders & Shipping",
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 day delivery. International orders may take 7-14 business days depending on the destination."
    },
    {
      id: 2,
      category: "Orders & Shipping",
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over $50. Orders under $50 have a $9.99 shipping fee."
    },
    {
      id: 3,
      category: "Orders & Shipping",
      question: "Can I track my order?",
      answer: "Absolutely! Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
    },
    {
      id: 4,
      category: "Returns & Exchanges",
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some restrictions apply for certain categories like electronics and personal care items."
    },
    {
      id: 5,
      category: "Returns & Exchanges",
      question: "How do I return an item?",
      answer: "To return an item, log into your account, go to your order history, and select 'Return Item'. Print the prepaid return label and drop off at any authorized shipping location."
    },
    {
      id: 6,
      category: "Account & Payment",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay."
    },
    {
      id: 7,
      category: "Account & Payment",
      question: "Is my payment information secure?",
      answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers."
    },
    {
      id: 8,
      category: "Products",
      question: "Are your products authentic?",
      answer: "Yes, all products sold on ShopHub are 100% authentic. We work directly with manufacturers and authorized distributors to ensure authenticity."
    },
    {
      id: 9,
      category: "Products",
      question: "Do you offer product warranties?",
      answer: "Many of our products come with manufacturer warranties. Warranty information is listed on each product page. We also offer extended warranty options for select items."
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];
  
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-orange-600">ShopHub</Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/contact" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Contact
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about ShopHub</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <Card key={faq.id}>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <span className="text-sm text-orange-600 font-medium mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our customer support team is here to help.
          </p>
          <Link to="/contact">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
