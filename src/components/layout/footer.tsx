import { siX, siFacebook, siYoutube } from "simple-icons/icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2025 GetFork, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-600"
              aria-label="Twitter"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siX.svg)}`}
                alt="Twitter"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-600"
              aria-label="LinkedIn"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siFacebook.svg)}`}
                alt="LinkedIn"
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-600"
              aria-label="YouTube"
            >
              <img
                src={`data:image/svg+xml;base64,${btoa(siYoutube.svg)}`}
                alt="YouTube"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
