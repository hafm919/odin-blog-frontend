const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 -mx-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <p className="text-sm leading-relaxed">
            Welcome to my blog, where I share my thoughts, experiences, and
            ideas on topics that inspire me. From technology and creativity to
            personal growth, this is my space to connect and share stories with
            you.
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold">Email:</span> hafm919@gmail.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <a href="#lifestyle" className="hover:text-blue-600">
                Web Development
              </a>
            </li>
            <li>
              <a href="#technology" className="hover:text-blue-600">
                MTTN
              </a>
            </li>
            <li>
              <a href="#travel" className="hover:text-blue-600">
                Travel
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
      </div>

      <div className="border-t border-gray-200 mt-10 pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-6">
          <p>&copy; hafm919 2023. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="#terms" className="hover:text-blue-600">
              Terms of Use
            </a>
            <a href="#privacy" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:text-blue-600">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
