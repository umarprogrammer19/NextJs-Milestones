import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold">UF-Store</h3>
            <p className="mt-4 text-gray-400">
              Discover the best deals and exclusive products at UF-Store. Shop confidently with excellent customer support.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors" href="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.404.597 24 1.325 24h11.492v-9.294H9.691v-3.622h3.126V8.413c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.795.143v3.24h-1.917c-1.504 0-1.797.715-1.797 1.764v2.314h3.593l-.467 3.622h-3.126V24h6.126C23.403 24 24 23.404 24 22.675V1.325C24 .597 23.404 0 22.675 0z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.609 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.918 2.203-4.918 4.917 0 .39.045.765.13 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.584-.666 2.491 0 1.72.87 3.234 2.188 4.123-.807-.026-1.566-.248-2.229-.616v.061c0 2.404 1.713 4.415 3.977 4.87-.417.112-.855.172-1.307.172-.319 0-.631-.03-.935-.086.631 1.953 2.463 3.377 4.63 3.418-1.7 1.332-3.849 2.123-6.191 2.123-.402 0-.799-.023-1.191-.07 2.208 1.417 4.832 2.246 7.647 2.246 9.166 0 14.174-7.594 14.174-14.174 0-.215-.005-.43-.014-.643.973-.703 1.813-1.584 2.479-2.588z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.976.976 1.243 2.243 1.305 3.609.058 1.265.07 1.646.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.305 3.608-.976.976-2.243 1.243-3.608 1.305-1.265.058-1.646.07-4.85.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.609-1.305-.975-.976-1.243-2.243-1.305-3.608-.058-1.265-.07-1.646-.07-4.849s.012-3.584.07-4.849c.062-1.366.33-2.633 1.305-3.609.976-.975 2.243-1.243 3.609-1.305 1.265-.058 1.646-.07 4.849-.07zm0-2.163C8.691 0 8.258.014 7.029.072 5.8.13 4.578.43 3.533 1.474 2.49 2.518 2.19 3.74 2.132 4.971c-.058 1.229-.072 1.662-.072 4.849s.014 3.619.072 4.849c.058 1.229.358 2.451 1.401 3.495 1.045 1.044 2.266 1.344 3.496 1.401 1.229.058 1.662.072 4.849.072s3.619-.014 4.849-.072c1.229-.058 2.451-.358 3.495-1.401 1.044-1.045 1.344-2.267 1.401-3.496.058-1.229.072-1.662.072-4.849s-.014-3.619-.072-4.849c-.058-1.229-.358-2.451-1.401-3.496-1.045-1.044-2.267-1.344-3.496-1.401-1.229-.058-1.662-.072-4.849-.072s-3.619.014-4.849.072C8.258.014 8.691 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-.001 2.88 1.44 1.44 0 0 0 .001-2.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Umar Farooq Store (UF-Store). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
