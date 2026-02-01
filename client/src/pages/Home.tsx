import { TerminalWindow } from "@/components/TerminalWindow";
import { GlitchTitle } from "@/components/GlitchTitle";
import { ContactModal } from "@/components/ContactModal";
import { Shield, ShieldAlert, Lock, Fingerprint, Activity, Server, Radio } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden flex flex-col">
      {/* Matrix background rain effect could go here, using CSS grain for now */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise.png')]"></div>
      
      {/* Header */}
      <header className="w-full border-b border-primary/30 bg-black/80 backdrop-blur-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Fingerprint className="w-6 h-6 text-primary animate-pulse" />
            <span className="font-display text-xl tracking-widest text-primary">CYBER_SEC_CORP</span>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-xs text-primary/70">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full animate-pulse"/> SYSTEM_ONLINE</span>
            <span className="flex items-center gap-2">SECURE_LINK: ESTABLISHED</span>
            <span className="flex items-center gap-2">IP: 192.168.X.X [HIDDEN]</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center p-4 md:p-8 relative z-10">
        
        {/* Hero Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto space-y-4">
          <GlitchTitle text="NET_SECURITY_PROTOCOLS" size="xl" />
          <p className="text-primary/80 font-mono md:text-lg max-w-2xl mx-auto border-l-2 border-primary pl-4 py-2 bg-primary/5">
            {'>'} CHOOSE YOUR SIDE. OFFENSE DETECTS VULNERABILITIES. DEFENSE PREVENTS EXPLOITATION.
          </p>
        </div>

        {/* Dual Window Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full h-full items-stretch">
          
          {/* RED TEAM WINDOW (OFFENSIVE) */}
          <TerminalWindow 
            title="RED_TEAM // OFFENSIVE_OPS" 
            variant="red" 
            className="h-full min-h-[500px]"
            delay={0.2}
          >
            <div className="space-y-6 font-mono text-red-500">
              <div className="flex items-center gap-4 border-b border-red-500/30 pb-4">
                <ShieldAlert className="w-12 h-12 text-red-500" />
                <div>
                  <h2 className="text-xl font-bold uppercase">Penetration Testing</h2>
                  <p className="text-xs opacity-70">STATUS: ACTIVE SCANNING</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="opacity-90 leading-relaxed">
                  {'>'} Our Red Team operations simulate real-world cyber attacks to identify critical vulnerabilities before malicious actors do.
                </p>

                <ul className="space-y-3 mt-6">
                  {[
                    "Advanced Persistent Threat (APT) Simulation",
                    "Social Engineering & Phishing Campaigns",
                    "Web Application Security Assessment",
                    "Network Infrastructure Exploitation",
                    "Wireless Security Auditing"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-2 hover:bg-red-500/10 transition-colors border-l-2 border-transparent hover:border-red-500">
                      <Activity className="w-4 h-4 shrink-0" />
                      <span className="text-sm uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-red-950/30 border border-red-500/50">
                <h4 className="text-xs font-bold mb-2 blink">!!! WARNING: AUTHORIZED PERSONNEL ONLY !!!</h4>
                <code className="text-xs block opacity-70">
                  Executing exploit_db_scan.sh...<br/>
                  [+] Target acquired: 10.0.0.1<br/>
                  [+] Port 80: OPEN<br/>
                  [+] Port 443: OPEN<br/>
                  [+] Port 22: VULNERABLE SSH VERSION DETECTED<br/>
                  [!] Brute force sequence initiated...
                </code>
              </div>
            </div>
          </TerminalWindow>

          {/* BLUE TEAM WINDOW (DEFENSIVE) */}
          <TerminalWindow 
            title="BLUE_TEAM // DEFENSIVE_OPS" 
            variant="blue" 
            className="h-full min-h-[500px]"
            delay={0.4}
          >
            <div className="space-y-6 font-mono text-sky-500">
              <div className="flex items-center gap-4 border-b border-sky-500/30 pb-4">
                <Shield className="w-12 h-12 text-sky-500" />
                <div>
                  <h2 className="text-xl font-bold uppercase">Infrastructure Protection</h2>
                  <p className="text-xs opacity-70">STATUS: FIREWALL ACTIVE</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="opacity-90 leading-relaxed">
                  {'>'} Blue Team specialists secure your perimeter, monitor for intrusions, and respond to incidents in real-time.
                </p>

                <ul className="space-y-3 mt-6">
                  {[
                    "24/7 Security Operations Center (SOC)",
                    "Threat Hunting & Intelligence",
                    "Incident Response & Forensics",
                    "Identity & Access Management (IAM)",
                    "Cloud Security Hardening"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-2 hover:bg-sky-500/10 transition-colors border-l-2 border-transparent hover:border-sky-500">
                      <Lock className="w-4 h-4 shrink-0" />
                      <span className="text-sm uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-sky-950/30 border border-sky-500/50">
                <h4 className="text-xs font-bold mb-2">SYSTEM INTEGRITY CHECK</h4>
                <div className="space-y-2">
                  <div className="w-full bg-sky-900/50 h-2">
                    <div className="bg-sky-500 h-2 w-[98%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between text-xs opacity-70">
                    <span>FIREWALL: ONLINE</span>
                    <span>INTEGRITY: 98%</span>
                  </div>
                </div>
                <code className="text-xs block mt-3 opacity-70">
                  [LOG] Packet inspection complete.<br/>
                  [LOG] 3482 malicious requests blocked.<br/>
                  [LOG] Zero-day signature update applied.<br/>
                  [LOG] Waiting for incoming traffic...
                </code>
              </div>
            </div>
          </TerminalWindow>

        </div>

        {/* Action Area */}
        <div className="mt-16 flex flex-col items-center space-y-6 relative z-20 pb-20">
          <div className="flex items-center gap-4 text-primary opacity-60 font-mono text-sm animate-pulse">
            <Radio className="w-4 h-4" />
            <span>ENCRYPTED_UPLINK_READY</span>
            <Server className="w-4 h-4" />
          </div>
          
          <ContactModal />
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/20 bg-black py-6 text-center">
        <p className="text-primary/40 text-xs font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Cyber_Sec_Corp // All Rights Reserved // Terminal_Ver_2.0.4
        </p>
      </footer>
      
      {/* Visual Glitch Overlay - Subtle */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 mix-blend-overlay opacity-5 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      <div className="scanline"></div>
    </div>
  );
}
