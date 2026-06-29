import Head from 'next/head'
import Link from 'next/link'
import artigos from '../../data/artigos'

const HOTMART = 'https://pay.hotmart.com/I93083164P'

const categorias = ['Todos', 'Técnicas', 'Memorização', 'Hábitos', 'Aplicações', 'Fundamentos', 'Programa']

export default function Blog({ query }) {
  const cat = query?.cat || 'Todos'
  const filtrados = cat === 'Todos' ? artigos : artigos.filter(a => a.categoria === cat)

  return (
    <>
      <Head>
        <title>Blog de Leitura Dinâmica — Técnicas e Estratégias | Programa CLMR</title>
        <meta name="description" content={`${artigos.length} artigos gratuitos sobre leitura dinâmica, técnicas de leitura rápida, memorização e hábitos de leitura. Programa CLMR.`} />
        <link rel="canonical" href="https://cursodeleituradinamica.com/blog" />
      </Head>

      {/* HEADER */}
      <header style={{background:'#e8141e', padding:'16px 24px', textAlign:'center'}}>
        <Link href="/" style={{fontSize:22, fontWeight:900, color:'#fff', textDecoration:'none'}}>
          CURSO DE <span style={{color:'#f5c518'}}>LEITURA DINÂMICA</span>
        </Link>
      </header>
      <nav style={{background:'#111', padding:'10px 24px', display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap'}}>
        <Link href="/" style={{color:'#ccc', fontSize:13, fontWeight:600, textDecoration:'none'}}>Home</Link>
        <Link href="/blog" style={{color:'#f5c518', fontSize:13, fontWeight:800, textDecoration:'none'}}>Blog</Link>
        <a href={HOTMART} target="_blank" rel="noopener" style={{color:'#ccc', fontSize:13, fontWeight:600, textDecoration:'none'}}>Curso — R$97</a>
      </nav>

      <section style={{background:'#111', padding:'48px 24px', textAlign:'center'}}>
        <h1 style={{fontSize:'clamp(24px,5vw,42px)', fontWeight:900, color:'#fff', marginBottom:12}}>
          Blog de <span style={{color:'#f5c518'}}>Leitura Dinâmica</span>
        </h1>
        <p style={{color:'#aaa', fontSize:15, marginBottom:28}}>{artigos.length} artigos gratuitos sobre leitura rápida, memorização e aprendizado</p>
        <a href={HOTMART} target="_blank" rel="noopener"
          style={{display:'inline-block', background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:14, padding:'13px 28px', borderRadius:10, textDecoration:'none'}}>
          Ver o Curso Completo — R$ 97
        </a>
      </section>

      <section style={{padding:'40px 24px', maxWidth:960, margin:'0 auto'}}>
        {/* FILTROS */}
        <div style={{display:'flex', gap:10, flexWrap:'wrap', marginBottom:32, justifyContent:'center'}}>
          {categorias.map(c => (
            <Link key={c} href={c === 'Todos' ? '/blog' : `/blog?cat=${c}`}
              style={{padding:'7px 16px', borderRadius:20, fontSize:13, fontWeight:700, textDecoration:'none',
                background: cat === c ? '#e8141e' : '#f5f5f5',
                color: cat === c ? '#fff' : '#555'}}>
              {c}
            </Link>
          ))}
        </div>

        <p style={{textAlign:'center', color:'#999', fontSize:13, marginBottom:32}}>
          {filtrados.length} artigo{filtrados.length !== 1 ? 's' : ''}
        </p>

        {/* GRID */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:20}}>
          {filtrados.map((a, i) => (
            <Link key={i} href={`/blog/${a.slug}`} style={{textDecoration:'none'}}>
              <div style={{background:'#fff', borderRadius:10, padding:24, borderTop:'3px solid #e8141e', boxShadow:'0 2px 12px rgba(0,0,0,.05)', height:'100%', cursor:'pointer', transition:'transform .2s'}}>
                <span style={{fontSize:11, fontWeight:700, color:'#e8141e', textTransform:'uppercase', letterSpacing:1}}>{a.categoria}</span>
                <h2 style={{fontSize:15, fontWeight:800, color:'#111', margin:'8px 0 8px', lineHeight:1.3}}>{a.titulo}</h2>
                <p style={{fontSize:13, color:'#666', lineHeight:1.6, marginBottom:16}}>{a.descricao}</p>
                <span style={{fontSize:13, fontWeight:700, color:'#e8141e'}}>Ler artigo →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#f5f5f5', padding:'48px 24px', textAlign:'center'}}>
        <h2 style={{fontSize:26, fontWeight:900, marginBottom:12}}>Quer ir além dos artigos?</h2>
        <p style={{color:'#555', fontSize:15, marginBottom:28, maxWidth:500, margin:'0 auto 28px'}}>O Programa CLMR reúne +14h de conteúdo prático com o especialista Victor dos Santos. Transforme sua leitura em 21 dias.</p>
        <a href={HOTMART} target="_blank" rel="noopener"
          style={{display:'inline-block', background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:16, padding:'18px 40px', borderRadius:10, textDecoration:'none'}}>
          Garantir acesso ao Programa CLMR — R$ 97
        </a>
      </section>

      <footer style={{background:'#0a0a0a', textAlign:'center', padding:'24px', fontSize:12, color:'#444'}}>
        <p>© 2025 Programa CLMR · Victor dos Santos · Todos os direitos reservados</p>
      </footer>

      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#111', padding:'10px 20px', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', gap:20, flexWrap:'wrap'}}>
        <span style={{color:'#ccc', fontSize:13}}>Aprenda a ler 3x mais rápido</span>
        <a href={HOTMART} target="_blank" rel="noopener"
          style={{background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:13, padding:'11px 24px', borderRadius:8, textDecoration:'none'}}>
          Garantir — R$ 97
        </a>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  return { props: { query } }
}
