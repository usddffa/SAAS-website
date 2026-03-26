export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-shell grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-bold">
            Verdant <span className="text-brand-600">Flow</span>
          </h3>
          <p className="mt-3 text-sm text-slate-600">Conversation-optimized automation for service businesses.</p>
        </div>
        <div>
          <h4 className="font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Features</li>
            <li>Pricing</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Support</li>
            <li>Documentation</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">© 2026 Verdant Flow. All rights reserved.</p>
    </footer>
  );
}
