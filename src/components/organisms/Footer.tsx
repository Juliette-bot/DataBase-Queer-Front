// src/components/organisms/Footer.tsx
import type React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-retro-darker border-t-4 border-violet-400 relative mt-auto overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 bg-dots-pattern bg-dots opacity-5"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none"></div>
      
      {/* Barre décorative du haut */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r 
                    from-indigo-500 via-violet-500 to-cyan-500 opacity-70"></div>
      
      {/* Pixels décoratifs */}
      <div className="absolute top-0 left-8 w-4 h-4 bg-accent-neon"></div>
      <div className="absolute top-0 right-8 w-4 h-4 bg-cyan-400"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 
                            border-2 border-white/30 rounded-pixel shadow-pixel
                            flex items-center justify-center">
                <span className="text-white text-xl">🏳️‍🌈</span>
              </div>
              <h2 className="text-2xl font-bold text-white 
                           drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]
                           [text-shadow:_2px_2px_0_rgb(0_0_0_/_40%)]">
                Out Together
              </h2>
            </div>
            <div className="bg-retro-dark/50 border-2 border-white/10 rounded-pixel p-4 
                          shadow-pixel backdrop-blur-sm">
              <p className="text-cyan-200 leading-relaxed">
                Une plateforme collaborative pour partager et découvrir des ressources 
                LGBTQIA+ inclusives et bienveillantes.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-neon rounded-full animate-pulse"></div>
                <span className="text-accent-neon text-sm font-semibold">
                  Fait avec 💜 par la communauté
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white 
                         border-b-2 border-indigo-400 pb-2 inline-block
                         [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
              ▸ Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/resource" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-indigo-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  Ressources
                </a>
              </li>
              <li>
                <a 
                  href="/share" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-indigo-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  Contribuer
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-indigo-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  À propos
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-indigo-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white 
                         border-b-2 border-violet-400 pb-2 inline-block
                         [text-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
              ▸ Légal
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/privacy" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-violet-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  Confidentialité
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-violet-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  CGU
                </a>
              </li>
              <li>
                <a 
                  href="/guidelines" 
                  className="text-cyan-200 hover:text-accent-neon transition-colors
                           flex items-center gap-2 group
                           hover:translate-x-1 transition-transform duration-200"
                >
                  <span className="w-2 h-2 bg-violet-400 group-hover:bg-accent-neon 
                                 transition-colors"></span>
                  Charte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/10 mt-8 pt-8 
                      flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright avec style pixel */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-500 border-2 border-white/20 rounded-pixel
                          flex items-center justify-center text-xs">
              ©
            </div>
            <p className="text-cyan-200 text-sm">
              <span className="font-bold text-white">{currentYear}</span> Out Together
            </p>
          </div>
          
          {/* Social Links - Réseaux éthiques et safe */}
          <div className="flex gap-3">
            {/* Mastodon */}
            <a 
              href="https://mastodon.social/@outtogether" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-retro-dark border-2 border-white/20 rounded-pixel
                       hover:border-violet-400 hover:bg-white/5
                       flex items-center justify-center
                       text-cyan-200 hover:text-violet-400
                       shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                       transition-all duration-200
                       hover:translate-x-0.5 hover:translate-y-0.5
                       active:translate-x-1 active:translate-y-1
                       active:shadow-none
                       group"
              aria-label="Mastodon"
              title="Suivez-nous sur Mastodon"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
              </svg>
            </a>

            {/* Bluesky */}
            <a 
              href="https://bsky.app/profile/outtogether.bsky.social" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-retro-dark border-2 border-white/20 rounded-pixel
                       hover:border-cyan-400 hover:bg-white/5
                       flex items-center justify-center
                       text-cyan-200 hover:text-cyan-400
                       shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                       transition-all duration-200
                       hover:translate-x-0.5 hover:translate-y-0.5
                       active:translate-x-1 active:translate-y-1
                       active:shadow-none
                       group"
              aria-label="Bluesky"
              title="Suivez-nous sur Bluesky"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
              </svg>
            </a>

            {/* PeerTube / Fediverse Video */}
            <a 
              href="https://framatube.org/c/outtogether" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-retro-dark border-2 border-white/20 rounded-pixel
                       hover:border-accent-neon hover:bg-white/5
                       flex items-center justify-center
                       text-cyan-200 hover:text-accent-neon
                       shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                       transition-all duration-200
                       hover:translate-x-0.5 hover:translate-y-0.5
                       active:translate-x-1 active:translate-y-1
                       active:shadow-none
                       group"
              aria-label="PeerTube"
              title="Nos vidéos sur PeerTube"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 12.775l-6.5 3.869A.75.75 0 0 1 9 16.119V8.381a.75.75 0 0 1 1.125-.65l6.316 3.869a.75.75 0 0 1 0 1.175z"/>
              </svg>
            </a>

            {/* Matrix / Element */}
            <a 
              href="https://matrix.to/#/#outtogether:matrix.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-retro-dark border-2 border-white/20 rounded-pixel
                       hover:border-indigo-400 hover:bg-white/5
                       flex items-center justify-center
                       text-cyan-200 hover:text-indigo-400
                       shadow-pixel hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]
                       transition-all duration-200
                       hover:translate-x-0.5 hover:translate-y-0.5
                       active:translate-x-1 active:translate-y-1
                       active:shadow-none
                       group"
              aria-label="Matrix"
              title="Rejoignez notre communauté Matrix"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.82.185a1.486 1.486 0 0 0-.534.504 2.05 2.05 0 0 0-.287.724 3.82 3.82 0 0 0-.084.913v5.012h-2.35v-5.252c0-.235-.004-.488-.036-.749a1.87 1.87 0 0 0-.192-.688 1.167 1.167 0 0 0-.466-.508c-.2-.13-.476-.19-.827-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v5.417H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Easter egg - Message pixel style */}
        <div className="mt-6 text-center">
          <p className="text-cyan-300/50 text-xs font-mono">
            ▸ PRESS START TO CONTINUE ▸
          </p>
        </div>
      </div>

      {/* Pixels décoratifs du bas */}
      <div className="absolute bottom-0 left-8 w-4 h-4 bg-indigo-400"></div>
      <div className="absolute bottom-0 right-8 w-4 h-4 bg-accent-neon"></div>
    </footer>
  );
};




/*atomic desgine dev par brad callback fonction, comment fonctionne comment ? moteur de rendu, variable change relance le rendu, lle use effect fonctionne comme ca, je suis encore entrain de decouvirr tout j'ai pue apprendre ca et je suis encore entrain de decouvir poleins dautre truc bien expliquer les principe de java l'expliquer popur que les personnes comprenne globalement ce que je dis. posseder le max que je connais, si zone d'ombre je le dis tout de suite en mode je suis entrain de travailler, ne pas trop rentrer dans le detail pour pas perdre tout le monde. presenter  et guider les gens "montrer " portes" "celle la fait ca puis elle fais ca et elle ca. eviter trop d'aller retour. faire entonoir poser les chose. les gens ne doivent pas decrocher, slide permet juste d'appuyer mon propo et pas trop de truc ca peux etre des truc rigolo, raconter la "passion" humanise le truc plutot un truc visuel que pleins de mots +++                                                       */