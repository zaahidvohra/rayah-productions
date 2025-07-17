import { BarChart3 } from "lucide-react";
 
export default function PortfolioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Our Proven Results
          </h2>
          <p className="text-lg text-text-body max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve their digital marketing goals with measurable success.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 lg:p-12">
              <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block text-sm font-medium mb-4">
                Case Study
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
                Boosting E-commerce Sales by 150% for TechStart Inc.
              </h3>
              <p className="text-text-body mb-6 leading-relaxed">
                Through strategic SEO optimization, targeted social media campaigns, and conversion rate optimization, we helped TechStart Inc. triple their online revenue while reducing their customer acquisition cost by 40%.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150%</div>
                  <div className="text-sm text-text-body">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-sm text-text-body">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6 Months</div>
                  <div className="text-sm text-text-body">Timeline</div>
                </div>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-200">
                Read Full Case Study
              </button>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-accent-light to-accent-dark p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <BarChart3 size={80} className="text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-text-primary mb-2">📈</div>
                  <div className="text-text-body">Revenue Growth Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg">
            View All Portfolio
          </button>
        </div> */}
      </div>
    </section>
  );
};