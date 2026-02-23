import React from 'react';

const ContactMap = () => {
  // New York, USA ki exact location iframe link
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  return (
    /* Container mein 'py-20' (Top/Bottom) aur 'px-4' (Left/Right) padding add ki hai */
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[400px] md:h-[550px] relative rounded-sm overflow-hidden shadow-sm border border-gray-100">
          
          {/* 100% Width Map */}
          <iframe
            title="Construction Company Location"
            src={mapUrl}
            className="w-full h-full border-0 grayscale-[0.2]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Address Box: Screenshot ke mutabiq */}
          <div className="absolute top-8 left-8 bg-white p-5 shadow-lg hidden md:block border border-gray-100 rounded-sm">
            <h3 className="font-bold text-lg text-[#0f0f23]">New York</h3>
            <p className="text-sm text-gray-500">New York, USA</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
               <a 
                href="#" 
                className="text-[#007bff] text-xs font-medium hover:text-[#f15a24] transition-colors"
               >
                 View larger map
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMap;