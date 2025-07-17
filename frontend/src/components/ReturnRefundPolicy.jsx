import React, { useEffect } from "react";

function ReturnRefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white py-10 px-6 md:px-20">
      <h1 className="text-center font-poppins my-20 text-6xl md:text-5xl font-bold text-white">
        Return & <span className="bg-gradient-to-b from-white to-cyan-900 bg-clip-text text-transparent">Refund Policy</span>
      </h1>

      <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-700 rounded-2xl shadow-lg p-8 space-y-6 text-left text-lg text-gray-300 transition duration-300 hover:shadow-cyan-500/30">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Bring to a Store</h2>
          <p>
            Visit any TimePods store and go to a register for assistance. Refunds are usually processed within 3–5 business days.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Send by Mail</h2>
          <p>
            Start your return online. Use the prepaid shipping label we’ll email you to print at home. No printer? Show your QR code at an eligible USPS or FedEx location and they'll print it for you.
          </p>
          <p>
            Returns are processed in 8–12 business days. Refunds are expected within 3–5 business days after processing.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Return Policy</h2>
          <p>
            At TimePods, we handle returns on a case-by-case basis with the goal of making our customers happy. We stand behind our products and want you to be satisfied. We'll always do our best to treat customers fairly and reasonably.
          </p>
          <p>
            Refunds are applied to the original method of payment. If no transaction record is available, personal ID may be required, and a refund will be issued on a TimePods gift card at the current item price.
          </p>
          <p>
            Please ensure each item is returned in the correct package with the correct label. Items sent by mistake or that don't meet return criteria won’t be refunded or returned to you.
          </p>
          <p>
            We now accept eligible returns of TimePods and TimePods.com merchandise at TimePods retail locations. Note: Fine jewelry, designer items, and third-party products must be returned to their original purchase location.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReturnRefundPolicy;
