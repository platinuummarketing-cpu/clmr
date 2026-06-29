import Head from 'next/head'
import Link from 'next/link'
import artigos from '../../data/artigos'

const HOTMART = 'https://pay.hotmart.com/I93083164P'

export default function Artigo({ artigo, relacionados }) {
  if (!artigo) return <div>Artigo não encontrado</div>

  // Converter markdown simples para HTML
  const renderConteudo = (texto) => {
    return texto
      .split('\n')
      .map((linha, i) => {
        if (linha.startsWith('## ')) return <h2 key={i} style={{fontSize:22, fontWeight:900, marginTop:32, marginBottom:12, color:'#111'}}>{linha.replace('## ','')}</h2>
        if (linha.startsWith('**') && linha.endsWith('**')) return <p key={i} style={{fontSize:15, lineHeight:1.75, marginBottom:12}}><strong>{linha.replace(/\*\*/g,'')}</strong></p>
        if (linha.startsWith('> ')) return (
          <blockquote key={i} style={{background:'#f5f5f5', borderLeft:'4px solid #e8141e', padding:'16px 20px', margin:'24px 0', borderRadius:'0 8px 8px 0'}}>
            <p style={{fontSize:14, color:'#333', lineHeight:1.7, margin:0}} dangerouslySetInnerHTML={{__html: linha.replace('> ','').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color:#e8141e;font-weight:700">$1</a>')}} />
          </blockquote>
        )
        if (linha.trim() === '') return <br key={i} />
        return <p key={i} style={{fontSize:15, lineHeight:1.75, marginBottom:12, color:'#333'}}>{linha}</p>
      })
  }

  return (
    <>
      <Head>
        <title>{artigo.titulo} | Curso de Leitura Dinâmica</title>
        <meta name="description" content={artigo.descricao} />
        <link rel="canonical" href={`https://cursodeleituradinamica.com/blog/${artigo.slug}`} />
        <meta property="og:title" content={artigo.titulo} />
        <meta property="og:description" content={artigo.descricao} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": artigo.titulo,
          "description": artigo.descricao,
          "author": {"@type": "Person", "name": "Victor dos Santos"},
          "publisher": {"@type": "Organization", "name": "Programa CLMR"},
          "url": `https://cursodeleituradinamica.com/blog/${artigo.slug}`
        })}} />
      </Head>

      {/* HEADER */}
      <header style={{background:'#e8141e', padding:'14px 24px', textAlign:'center'}}>
        <Link href="/" style={{fontSize:20, fontWeight:900, color:'#fff', textDecoration:'none'}}>
          CURSO DE <span style={{color:'#f5c518'}}>LEITURA DINÂMICA</span>
        </Link>
      </header>
      <nav style={{background:'#111', padding:'10px 24px', display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap'}}>
        <Link href="/" style={{color:'#ccc', fontSize:13, fontWeight:600, textDecoration:'none'}}>Home</Link>
        <Link href="/blog" style={{color:'#ccc', fontSize:13, fontWeight:600, textDecoration:'none'}}>Blog</Link>
        <a href={HOTMART} target="_blank" rel="noopener" style={{color:'#f5c518', fontSize:13, fontWeight:800, textDecoration:'none'}}>Curso — R$97</a>
      </nav>

      <article style={{maxWidth:720, margin:'0 auto', padding:'48px 24px 80px'}}>
        {/* BREADCRUMB */}
        <p style={{fontSize:12, color:'#999', marginBottom:24}}>
          <Link href="/" style={{color:'#999', textDecoration:'none'}}>Home</Link> ›{' '}
          <Link href="/blog" style={{color:'#999', textDecoration:'none'}}>Blog</Link> ›{' '}
          <span style={{color:'#e8141e'}}>{artigo.categoria}</span>
        </p>

        {/* HEADER DO ARTIGO */}
        <span style={{fontSize:11, fontWeight:700, color:'#e8141e', textTransform:'uppercase', letterSpacing:1}}>{artigo.categoria}</span>
        <h1 style={{fontSize:'clamp(24px,4vw,36px)', fontWeight:900, lineHeight:1.2, color:'#111', margin:'10px 0 16px'}}>{artigo.titulo}</h1>
        <p style={{fontSize:16, color:'#555', lineHeight:1.7, marginBottom:32, paddingBottom:24, borderBottom:'1px solid #eee'}}>{artigo.descricao}</p>

        {/* CTA TOPO */}
        <div style={{background:'linear-gradient(135deg,#1a1a1a,#0d0d0d)', borderRadius:10, padding:'20px 24px', marginBottom:36, display:'flex', alignItems:'center', gap:20, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:200}}>
            <p style={{color:'#f5c518', fontWeight:800, fontSize:14, marginBottom:4}}>Programa CLMR — Como Ler Muito Mais Rápido</p>
            <p style={{color:'#aaa', fontSize:13}}>+14h de conteúdo prático · 6.000+ alunos · Garantia de 7 dias</p>
          </div>
          <a href={HOTMART} target="_blank" rel="noopener"
            style={{background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:14, padding:'12px 24px', borderRadius:8, textDecoration:'none', whiteSpace:'nowrap'}}>
            Acessar por R$ 97
          </a>
        </div>

        {/* CONTEÚDO */}
        <div>{renderConteudo(artigo.conteudo)}</div>

        {/* CTA FINAL */}
        <div style={{background:'#f5f5f5', borderRadius:10, padding:'32px 24px', marginTop:48, textAlign:'center'}}>
          <h3 style={{fontSize:20, fontWeight:900, marginBottom:8}}>Pronto para transformar sua leitura?</h3>
          <p style={{color:'#555', fontSize:14, marginBottom:20}}>O Programa CLMR tem +14h de técnicas práticas de leitura dinâmica com o especialista Victor dos Santos. Mais de 6.000 alunos já transformaram sua relação com os livros.</p>
          <a href={HOTMART} target="_blank" rel="noopener"
            style={{display:'inline-block', background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:15, padding:'16px 36px', borderRadius:10, textDecoration:'none'}}>
            Garantir minha vaga — R$ 97
          </a>
          <p style={{fontSize:12, color:'#999', marginTop:12}}>🔒 Garantia de 7 dias · Acesso vitalício · Hotmart</p>
        </div>

        {/* ARTIGOS RELACIONADOS */}
        {relacionados.length > 0 && (
          <div style={{marginTop:48}}>
            <h2 style={{fontSize:20, fontWeight:900, marginBottom:20}}>Artigos relacionados</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16}}>
              {relacionados.map((r, i) => (
                <Link key={i} href={`/blog/${r.slug}`} style={{textDecoration:'none'}}>
                  <div style={{background:'#f5f5f5', borderRadius:8, padding:18, borderTop:'3px solid #e8141e', cursor:'pointer'}}>
                    <span style={{fontSize:10, fontWeight:700, color:'#e8141e', textTransform:'uppercase'}}>{r.categoria}</span>
                    <h3 style={{fontSize:14, fontWeight:800, color:'#111', margin:'6px 0 6px', lineHeight:1.3}}>{r.titulo}</h3>
                    <span style={{fontSize:12, color:'#e8141e', fontWeight:700}}>Ler →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <footer style={{background:'#0a0a0a', textAlign:'center', padding:'24px', fontSize:12, color:'#444'}}>
        <p>© 2025 Programa CLMR · Victor dos Santos · <Link href="/blog" style={{color:'#666', textDecoration:'none'}}>Blog</Link></p>
      </footer>

      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#111', padding:'10px 20px', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', gap:20, flexWrap:'wrap'}}>
        <span style={{color:'#ccc', fontSize:13}}>Aprenda leitura dinâmica com Victor dos Santos</span>
        <a href={HOTMART} target="_blank" rel="noopener"
          style={{background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:13, padding:'11px 24px', borderRadius:8, textDecoration:'none'}}>
          Garantir — R$ 97
        </a>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = artigos.map(a => ({ params: { slug: a.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const artigo = artigos.find(a => a.slug === params.slug) || null
  const relacionados = artigo
    ? artigos.filter(a => a.slug !== params.slug && a.categoria === artigo.categoria).slice(0, 3)
    : []
  return { props: { artigo, relacionados } }
}
