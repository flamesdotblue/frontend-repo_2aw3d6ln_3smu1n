export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">GoAurex</p>
            <p className="mt-2 text-sm text-gray-600">
              Technology and strategy combined to help your business lead in a data‑driven world.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Solutions</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Data Solutions</li>
              <li>Cloud Solutions</li>
              <li>Email Marketing</li>
              <li>Data Visualization</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Get in touch</p>
            <form className="mt-3 flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="Work email"
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Join
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500">We respect your inbox. Unsubscribe anytime.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} GoAurex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="#">Privacy</a>
            <a className="hover:text-gray-900" href="#">Terms</a>
            <a className="hover:text-gray-900" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
