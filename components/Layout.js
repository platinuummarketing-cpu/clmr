import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Curso de Leitura Dinâmica — Programa CLMR'}</title>
        <meta name="description" content={description || 'O melhor curso de leitura dinâmica do Brasil. Programa CLMR — Como Ler Muito Mais Rápido.'} />
        <link rel="canonical" href="https://cursodeleituradinamica.com" />
      </Head>

      {/* HEADER */}
      <header style={{background:'#e8141e', padding:'14px 24px', textAlign:'center'}}>
        <Link href="/" style={{fontSize:22, fontWeight:900, color:'#fff', textDecoration:'none', letterSpacing:'-0.3px'}}>
          CURSO DE <span style={{color:'#f5c518'}}>LEITURA DINÂMICA</span>
        </Link>
      </header>

      {/* NAV BLOG */}
      <nav style={{background:'#111', padding:'10px 24px', display:'flex', gap:24, justifyContent:'center'}}>
        <Link href="/" style={{color:'#ccc', fontSize:13, fontWeight:600}}>Home</Link>
        <Link href="/blog" style={{color:'#ccc', fontSize:13, fontWeight:600}}>Blog</Link>
        <a href="https://pay.hotmart.com/I93083164P" target="_blank" rel="noopener" style={{color:'#f5c518', fontSize:13, fontWeight:800}}>Garantir Acesso — R$97</a>
      </nav>

      <main>{children}</main>

      {/* FOOTER */}
      <footer style={{background:'#0a0a0a', color:'#444', textAlign:'center', padding:'28px 24px', fontSize:12, lineHeight:1.8}}>
        <p>© 2025 Programa CLMR — Como Ler Muito Mais Rápido · Victor dos Santos</p>
        <p style={{marginTop:8}}>Curso de Leitura Dinâmica · Leitura Inteligente · Memorização · Técnicas de Leitura Rápida</p>
      </footer>

      {/* CTA FLUTUANTE */}
      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#111', padding:'12px 20px', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', gap:20, flexWrap:'wrap'}}>
        <span style={{color:'#ccc', fontSize:13}}>Aprenda a ler 3x mais rápido</span>
        <a href="https://pay.hotmart.com/I93083164P" target="_blank" rel="noopener"
          style={{background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:14, padding:'11px 24px', borderRadius:8, textDecoration:'none', whiteSpace:'nowrap'}}>
          Garantir agora — R$ 97
        </a>
      </div>
    </>
  )
}
