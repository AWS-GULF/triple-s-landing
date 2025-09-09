
import { useState } from "react";

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // منع التحويل
    const form = e.target;
    const data = new FormData(form);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfGj0-_9rMkwn6QEX9Tvb-_jTy3dpySPmnpx9QjCgbTIGItCA/formResponse",
      {
        method: "POST",
        body: data,
        mode: "no-cors", // مهم عشان Google Forms
      }
    ).then(() => {
      setSubmitted(true);
      form.reset();
    });
  };

  return (
    <div className="flex justify-center mb-8">
      <form
        className="relative w-[600px]"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          name="entry.926292344"
          className="w-full px-6 py-3 pr-32 rounded-full bg-white text-xs text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="absolute top-1/2 right-1 -translate-y-1/2 px-6 py-1 sm:py-1 lg:py-1.5 bg-[#203B72] text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Get Notified
        </button>
      </form>

      {submitted && (
        <p className="text-green-400 mt-3 absolute">
          ✅ شكراً! تم تسجيل إيميلك.
        </p>
      )}
    </div>
  );
}
