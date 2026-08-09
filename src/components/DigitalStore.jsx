import React, { useState } from 'react';
// API NOTE: Store products list can be retrieved via GET /api/store/templates
// API NOTE: Checkout orders post to POST /api/store/order
export const DigitalStore = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'price-low' | 'price-high'

  // Modal States
  const [previewItem, setPreviewItem] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);

  // Form State for Checkout
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    paymentMethod: 'upi' // 'upi' | 'razorpay' | 'card' | 'bank'
  });
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const categories = [
    { key: 'all', label: 'All Store Items 🛒' },
    { key: 'website-templates', label: 'Website Templates 💻' },
    { key: 'app-boilerplates', label: 'Full-Stack App Boilerplates ⚡' },
    { key: 'figma-kits', label: 'Figma UI Kits 🎨' },
    { key: 'website-services', label: 'Custom Website Services 🚀' }
  ];

  // Filtering & Sorting
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (customerInfo.name && customerInfo.email && customerInfo.phone && checkoutItem) {
      const orderRef = `JSRM-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderData = {
        refId: orderRef,
        item: checkoutItem,
        customer: customerInfo,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }),
        totalAmount: checkoutItem.price
      };

      setCompletedOrder(orderData);
      setOrderSuccess(true);
    }
  };

  return (
    <section className="py-20 px-4 md:px-16 max-w-screen-2xl mx-auto" id="digital-store">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 bg-gradient-to-r from-[#1c1b1b] via-[#2d2926] to-[#1c1b1b] p-8 md:p-12 rounded-3xl text-white border-2 border-[#ffd700] shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#705e00] bg-[#ffd700] px-3 py-1 rounded">
              Digital Marketplace & Store
            </span>
            <span className="text-xs text-amber-300 font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">verified</span>
              Commercial License Included
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Digital Templates & Website Services 🛒
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Ready-to-deploy React templates, AI SaaS boilerplates, Figma design systems, and guaranteed 48-hour custom website engineering services built for fast-growing businesses.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-[#ffd700]">
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm">bolt</span> Instant Digital Source Download
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm">support_agent</span> Dedicated Engineer Support
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm">currency_rupee</span> Indian GST Invoice Ready
            </span>
          </div>
        </div>

        {/* Search & Sort Controls */}
        <div className="relative z-10 w-full md:w-80 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search templates, services, stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#1c1b1b] border-2 border-[#ffd700] px-4 py-3 pl-10 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none shadow-md font-medium"
            />
            <span className="material-symbols-outlined absolute left-3 top-3.5 text-[#1c1b1b] text-xl">
              search
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/10">
            <span className="text-xs text-gray-300 pl-2 font-bold shrink-0">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1c1b1b] text-white text-xs font-bold p-2 rounded-lg border border-white/20 w-full focus:outline-none cursor-pointer"
            >
              <option value="popular">Most Popular & Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-[#ffd700] text-[#705e00] shadow-md border-2 border-[#1c1b1b]'
                : 'bg-white border-2 border-[#1c1b1b]/15 text-[#1c1b1b] hover:border-[#1c1b1b]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-300">
          <span className="material-symbols-outlined text-5xl text-gray-400 mb-3">shopping_cart_checkout</span>
          <h3 className="text-xl font-extrabold text-[#1c1b1b]">No templates or services found.</h3>
          <p className="text-xs text-[#4d4732] mt-1">Try clearing your search query or switching categories.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 bg-[#ffd700] text-[#705e00] font-extrabold text-xs uppercase px-6 py-2.5 rounded-lg shadow-sm cursor-pointer"
          >
            Show All Items
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isService = item.category === 'website-services';
            return (
              <div
                key={item.id}
                className="bg-[#fcf9f8] rounded-2xl border-2 border-[#1c1b1b]/15 overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 bg-[#ffd700] text-[#705e00] text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-md tracking-wider">
                      {item.badge}
                    </div>

                    <div className="absolute top-3 right-3 bg-[#1c1b1b]/90 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded backdrop-blur-xs border border-white/20">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Rating & Sales */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1 text-amber-500 font-extrabold">
                        <span className="material-symbols-outlined text-base">star</span>
                        <span>{item.rating}</span>
                        <span className="text-[#4d4732]/60 font-normal">({item.salesCount})</span>
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#705e00] bg-[#ffd700]/20 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-[#1c1b1b] mb-2 leading-snug group-hover:text-[#705d00] transition-colors">
                      {item.name}
                    </h2>

                    <p className="text-xs text-[#4d4732] leading-relaxed mb-4 line-clamp-3">
                      {item.shortDescription}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-[#d0c6ab]/70 text-[#1c1b1b] text-[10px] font-bold px-2.5 py-0.5 rounded shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights List */}
                    <div className="bg-white p-3 rounded-xl border border-gray-200/80 mb-4 space-y-1">
                      {item.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#4d4732] font-semibold">
                          <span className="material-symbols-outlined text-[#ffd700] text-sm shrink-0">check_circle</span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Actions */}
                <div className="p-6 pt-0 border-t border-gray-200/80 mt-2">
                  <div className="flex items-baseline justify-between mb-4 pt-4">
                    <div>
                      <span className="text-2xl font-black text-[#1c1b1b]">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-2 font-bold">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                      SAVE {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPreviewItem(item)}
                      className="w-full bg-white border-2 border-[#1c1b1b] text-[#1c1b1b] hover:bg-gray-100 font-extrabold text-xs uppercase py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => {
                        setCheckoutItem(item);
                        setOrderSuccess(false);
                      }}
                      className="w-full bg-[#ffd700] text-[#705e00] hover:brightness-105 font-extrabold text-xs uppercase py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isService ? 'calendar_month' : 'shopping_bag'}
                      </span>
                      <span>{isService ? 'Book Service' : 'Buy Now'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* PREVIEW / DETAILS MODAL */}
      {previewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-6 right-6 p-2 bg-white border border-[#1c1b1b] text-[#1c1b1b] rounded-full hover:bg-gray-200 transition-colors shadow-xs z-20 cursor-pointer"
            >
              <span className="material-symbols-outlined font-bold">close</span>
            </button>

            {/* Header Info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#ffd700] text-[#705e00] text-xs font-black uppercase px-3 py-1 rounded">
                {previewItem.badge}
              </span>
              <span className="text-xs font-bold text-[#4d4732]">
                {previewItem.categoryLabel}
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1c1b1b] mb-4 leading-tight">
              {previewItem.name}
            </h2>

            {/* Preview Banner */}
            <div className="rounded-2xl overflow-hidden mb-6 border-2 border-[#1c1b1b]/15 max-h-80 shadow-md">
              <img
                src={previewItem.image}
                alt={previewItem.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm md:text-base text-[#4d4732] leading-relaxed mb-6 font-medium">
              {previewItem.shortDescription}
            </p>

            {/* Price Banner */}
            <div className="bg-[#1c1b1b] text-white p-6 rounded-2xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-[#ffd700]">
              <div>
                <span className="text-xs text-gray-400 block font-bold uppercase tracking-wider">
                  Special Commercial License Price
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-[#ffd700]">
                    ₹{previewItem.price.toLocaleString('en-IN')}
                  </span>
                  {previewItem.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{previewItem.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  const itemToBuy = previewItem;
                  setPreviewItem(null);
                  setCheckoutItem(itemToBuy);
                  setOrderSuccess(false);
                }}
                className="w-full sm:w-auto bg-[#ffd700] text-[#705e00] font-extrabold text-xs uppercase px-8 py-3.5 rounded-xl hover:brightness-105 transition-all shadow-md cursor-pointer"
              >
                Proceed To Purchase / Booking
              </button>
            </div>

            {/* Complete Features */}
            <div className="space-y-6 mb-8">
              <h3 className="text-base font-extrabold text-[#1c1b1b] uppercase tracking-wider border-l-4 border-[#ffd700] pl-3">
                Key Technical Features & Architecture
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1c1b1b] font-medium">
                {previewItem.features.map((feat, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 flex items-start gap-2 shadow-2xs">
                    <span className="material-symbols-outlined text-[#705e00] text-base shrink-0 mt-0.5">check_circle</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables / Files Included */}
            <div className="bg-[#ffd700]/10 border-2 border-[#ffd700] p-6 rounded-2xl mb-8">
              <h4 className="text-xs font-black uppercase text-[#705e00] tracking-widest mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">folder_zip</span>
                Package Deliverables Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1c1b1b] font-bold">
                {previewItem.includedFiles.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1c1b1b]"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-6 py-2.5 border-2 border-[#1c1b1b] text-[#1c1b1b] font-bold text-xs uppercase rounded-xl hover:bg-gray-200 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CHECKOUT / SERVICE BOOKING MODAL */}
      {checkoutItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-[#fcf9f8] border-2 border-[#1c1b1b] rounded-3xl max-w-lg w-full p-6 md:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setCheckoutItem(null);
                setOrderSuccess(false);
              }}
              className="absolute top-4 right-4 p-2 text-[#1c1b1b] hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined font-bold">close</span>
            </button>

            {!orderSuccess ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#ffd700] text-[#705e00] text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
                    Instant Store Checkout
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#1c1b1b] mb-1">
                  Complete Your Purchase
                </h3>
                <p className="text-xs text-[#4d4732] mb-6">
                  Provide your details below to finalize your order and access digital deliverables.
                </p>

                {/* Order Summary Box */}
                <div className="bg-white border-2 border-[#1c1b1b]/20 p-4 rounded-2xl mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#705e00] block">Selected Item</span>
                    <span className="text-sm font-extrabold text-[#1c1b1b] block">{checkoutItem.name}</span>
                    <span className="text-xs text-gray-500 font-medium">{checkoutItem.categoryLabel}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-[#1c1b1b]">
                      ₹{checkoutItem.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold block">+ Full License</span>
                  </div>
                </div>

                {/* Checkout Form */}
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-[#1c1b1b] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 rounded-xl text-xs text-[#1c1b1b] font-medium focus:outline-none focus:border-[#ffd700]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-[#1c1b1b] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 rounded-xl text-xs text-[#1c1b1b] font-medium focus:outline-none focus:border-[#ffd700]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#1c1b1b] block mb-1">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300 p-3 rounded-xl text-xs text-[#1c1b1b] font-medium focus:outline-none focus:border-[#ffd700]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1c1b1b] block mb-1">Company / GST Name (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Tech Private Limited"
                      value={customerInfo.company}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, company: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 rounded-xl text-xs text-[#1c1b1b] font-medium focus:outline-none focus:border-[#ffd700]"
                    />
                  </div>

                  {/* Payment Options */}
                  <div>
                    <label className="text-xs font-bold text-[#1c1b1b] block mb-2">Preferred Payment Gateway:</label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      <button
                        type="button"
                        onClick={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'upi' })}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer ${
                          customerInfo.paymentMethod === 'upi'
                            ? 'bg-[#1c1b1b] text-[#ffd700] border-[#1c1b1b]'
                            : 'bg-white border-gray-300 text-[#1c1b1b]'
                        }`}
                      >
                        <span>⚡ UPI / GPay / PhonePe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCustomerInfo({ ...customerInfo, paymentMethod: 'razorpay' })}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2 cursor-pointer ${
                          customerInfo.paymentMethod === 'razorpay'
                            ? 'bg-[#1c1b1b] text-[#ffd700] border-[#1c1b1b]'
                            : 'bg-white border-gray-300 text-[#1c1b1b]'
                        }`}
                      >
                        <span>💳 Cards & Netbanking</span>
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#ffd700] text-[#705e00] font-black text-xs uppercase py-4 rounded-xl hover:brightness-105 transition-all cursor-pointer shadow-md mt-4 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">lock</span>
                    <span>Pay ₹{checkoutItem.price.toLocaleString('en-IN')} & Access Now</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Order Confirmation Success */
              <div className="text-center py-4 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto font-black shadow-inner">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>

                <span className="bg-[#ffd700] text-[#705e00] text-[10px] font-black uppercase px-3 py-1 rounded">
                  ORDER CONFIRMED • {completedOrder?.refId}
                </span>

                <h3 className="text-2xl font-extrabold text-[#1c1b1b]">
                  Thank You For Your Order!
                </h3>

                <p className="text-xs text-[#4d4732]">
                  We have confirmed your payment for <strong>{completedOrder?.item.name}</strong>. An email invoice and download key have been dispatched to <strong>{completedOrder?.customer.email}</strong>.
                </p>

                <div className="bg-white border p-4 rounded-2xl space-y-2 text-left text-xs">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Order Reference:</span>
                    <span className="font-mono font-bold text-[#1c1b1b]">{completedOrder?.refId}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Amount Paid:</span>
                    <span className="font-bold text-[#1c1b1b]">₹{completedOrder?.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivery Status:</span>
                    <span className="font-extrabold text-emerald-600">Instant Access Granted</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      alert(`[DEMO MODE] Simulating instant download zip package for ${completedOrder?.item.name}`);
                    }}
                    className="w-full bg-[#1c1b1b] text-[#ffd700] font-black text-xs uppercase py-3.5 rounded-xl text-center shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    <span>Download Package Zip Now ⚡</span>
                  </button>

                  <button
                    onClick={() => {
                      setCheckoutItem(null);
                      setOrderSuccess(false);
                      if (onOpenInquiry) {
                        onOpenInquiry(`Engineering Onboarding Call for Order ${completedOrder?.refId}`);
                      }
                    }}
                    className="w-full bg-white border border-[#1c1b1b] text-[#1c1b1b] font-bold text-xs uppercase py-2.5 rounded-xl text-center hover:bg-gray-100 cursor-pointer"
                  >
                    Schedule Custom Onboarding Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
