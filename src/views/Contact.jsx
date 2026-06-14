import { useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-border bg-bg text-sm outline-none transition-colors duration-200 focus:border-accent disabled:opacity-60";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("unconfigured");
      return;
    }

    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);
    formData.append("subject", "New message from portfolio contact form");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="section-container">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-2">Contact</h1>
        <p className="text-muted mb-10">
          Have a project in mind or want to connect? Send me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="card space-y-4" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={status === "sending"}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={status === "sending"}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                disabled={status === "sending"}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-green-600">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
            {status === "unconfigured" && (
              <p className="text-sm text-amber-600">
                Contact form is not configured yet. Add your Web3Forms access
                key to a <code className="text-xs">.env</code> file.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="card">
            <h2 className="text-lg font-semibold mb-5">Get in Touch</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted mb-1">Phone</p>
                <p>+977 9862394390</p>
              </div>
              <div>
                <p className="text-muted mb-1">Email</p>
                <a
                  href="mailto:saroj.basnet1237@gmail.com"
                  className="text-accent hover:underline"
                >
                  saroj.basnet1237@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted mb-1">Location</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
