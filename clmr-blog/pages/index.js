import Head from 'next/head'
import Link from 'next/link'
import artigos from '../data/artigos'

const HOTMART = 'https://pay.hotmart.com/I93083164P'
const YT = 'https://www.youtube.com/embed/YOH1YBKzVg4?rel=0&modestbranding=1'

export default function Home() {
  const ultimosArtigos = artigos.slice(0, 6)

  return (
    <>
      <Head>
        <title>Curso de Leitura Dinâmica — Programa CLMR | Como Ler Muito Mais Rápido</title>
        <meta name="description" content="O melhor curso de leitura dinâmica do Brasil. Programa CLMR com +14h de conteúdo prático. Mais de 6.000 alunos no Brasil, Portugal e Angola. Acesse por R$97." />
        <meta name="keywords" content="curso de leitura dinâmica, leitura dinâmica, como ler mais rápido, programa CLMR" />
        <link rel="canonical" href="https://cursodeleituradinamica.com/" />
        <meta property="og:title" content="Curso de Leitura Dinâmica — Programa CLMR" />
        <meta property="og:description" content="Mais de 6.000 alunos. +14h de conteúdo. Leia 3x mais rápido em 21 dias." />
        <meta property="og:url" content="https://cursodeleituradinamica.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Programa CLMR — Como Ler Muito Mais Rápido",
          "description": "Curso de leitura dinâmica com mais de 14 horas de conteúdo prático.",
          "provider": {"@type": "Person", "name": "Victor dos Santos"},
          "offers": {"@type": "Offer", "price": "97.00", "priceCurrency": "BRL"},
          "courseMode": "online",
          "inLanguage": "pt-BR"
        })}} />
      </Head>

      {/* HEADER */}
      <header style={{background:'#e8141e', padding:'16px 24px', textAlign:'center'}}>
        <div style={{fontSize:22, fontWeight:900, color:'#fff'}}>
          CURSO DE <span style={{color:'#f5c518'}}>LEITURA DINÂMICA</span>
        </div>
      </header>

      {/* TOPBAR */}
      <div style={{background:'#111', textAlign:'center', padding:'10px 24px', fontSize:12, fontWeight:700, color:'#f5c518', letterSpacing:'0.4px'}}>
        ⚡ MAIS DE 6.000 ALUNOS NO BRASIL, PORTUGAL E ANGOLA JÁ TRANSFORMARAM SUA LEITURA
      </div>

      {/* HERO */}
      <section style={{background:'linear-gradient(160deg,#1a1a1a 0%,#0d0d0d 100%)', padding:'52px 24px 48px', textAlign:'center'}}>
        <div style={{maxWidth:860, margin:'0 auto'}}>
          <div style={{display:'inline-block', background:'#e8141e', color:'#fff', fontSize:10, fontWeight:700, letterSpacing:2, textTransform:'uppercase', padding:'5px 14px', borderRadius:2, marginBottom:20}}>
            Programa CLMR — Método Comprovado
          </div>
          <h1 style={{fontSize:'clamp(36px,5vw,64px)', fontWeight:900, lineHeight:1.1, letterSpacing:'-0.5px', marginBottom:20, color:'#fff'}}>
            Leia Muito Mais,<br/><em style={{fontStyle:'normal', color:'#f5c518'}}>em Menos Tempo</em>
          </h1>
          <p style={{fontSize:15, color:'#bbb', lineHeight:1.7, margin:'0 auto 32px', maxWidth:680}}>
            O Programa CLMR — Como Ler Muito Mais Rápido — é o curso de leitura dinâmica mais completo do Brasil, com +14 horas de conteúdo prático, memorização avançada e método testado por mais de 6.000 alunos.
          </p>
          <div style={{margin:'0 auto 36px', background:'#000', border:'3px solid #e8141e', borderRadius:10, overflow:'hidden', position:'relative', aspectRatio:'16/9', maxWidth:760}}>
            <iframe src={YT} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:'none'}} />
          </div>
          <a href={HOTMART} target="_blank" rel="noopener"
            style={{display:'block', maxWidth:760, margin:'0 auto', background:'linear-gradient(135deg,#2ecc71,#27ae60,#1a7a42)', color:'#fff', fontSize:16, fontWeight:900, padding:'18px 36px', borderRadius:10, textDecoration:'none', textShadow:'0 1px 3px rgba(0,0,0,.2)'}}>
            Quero aprender Leitura Dinâmica Agora 🚀
            <span style={{display:'block', fontSize:11, fontWeight:500, opacity:0.85, marginTop:4}}>Acesso imediato por apenas R$ 97</span>
          </a>
          <p style={{marginTop:14, color:'#777', fontSize:12}}>🔒 Compra 100% segura · Garantia de 7 dias · Hotmart</p>
        </div>
      </section>

      {/* POR QUE ESCOLHER */}
      <section style={{background:'#f5f5f5', padding:'56px 24px'}}>
        <div style={{maxWidth:860, margin:'0 auto'}}>
          <h2 style={{fontSize:'clamp(20px,4vw,34px)', fontWeight:900, textAlign:'center', marginBottom:10}}>
            Por que você deveria escolher o <span style={{color:'#e8141e'}}>Curso de Leitura Dinâmica</span> — Programa CLMR?
          </h2>
          <p style={{textAlign:'center', color:'#555', fontSize:15, marginBottom:36}}>Tudo que um bom curso deveria ter — e que a maioria não entrega.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20}}>
            {[
              {icon:'⚡', titulo:'Resultado desde a primeira aula', desc:'Sem enrolação. As técnicas são aplicadas imediatamente.'},
              {icon:'👨‍🏫', titulo:'Professor especialista', desc:'Victor dos Santos ensina ao vivo na tela. Didática clara e exemplos reais.'},
              {icon:'🎯', titulo:'100% prático', desc:'+14 horas de exercícios reais. Cada módulo tem uma técnica aplicável no mesmo dia.'},
              {icon:'📱', titulo:'Acesso onde quiser', desc:'100% online. Celular, tablet ou computador. Assista quando quiser.'},
              {icon:'♾️', titulo:'Acesso vitalício', desc:'Pague uma vez e tenha acesso para sempre. Sem assinatura.'},
              {icon:'💰', titulo:'R$ 97 por uma habilidade para a vida', desc:'Menos do que um jantar fora. Retorno em conhecimento e tempo.'},
            ].map((item, i) => (
              <div key={i} style={{background:'#fff', borderLeft:'4px solid #e8141e', padding:24, borderRadius:6}}>
                <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:8}}>
                  <span style={{fontSize:26}}>{item.icon}</span>
                  <strong style={{fontSize:14, textTransform:'uppercase', letterSpacing:'0.3px'}}>{item.titulo}</strong>
                </div>
                <p style={{fontSize:13, color:'#555', lineHeight:1.65}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{background:'#111', padding:'56px 24px'}}>
        <div style={{maxWidth:860, margin:'0 auto'}}>
          <h2 style={{fontSize:'clamp(20px,4vw,34px)', fontWeight:900, textAlign:'center', color:'#fff', marginBottom:10}}>Números do Programa CLMR</h2>
          <p style={{textAlign:'center', color:'#999', fontSize:15, marginBottom:36}}>Resultados reais com alunos reais no Brasil, Portugal e Angola.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20}}>
            {[
              {num:'6.000+', label:'Alunos formados'},
              {num:'3x', label:'Mais velocidade'},
              {num:'14h+', label:'De conteúdo prático'},
              {num:'3', label:'Países atendidos'},
              {num:'17min', label:'Por dia de treino'},
              {num:'21', label:'Dias de transformação'},
              {num:'97%', label:'De satisfação'},
              {num:'50+', label:'Livros por ano possível'},
            ].map((s, i) => (
              <div key={i} style={{textAlign:'center', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)', borderRadius:10, padding:'20px 12px'}}>
                <div style={{fontSize:36, fontWeight:900, color:'#f5c518', lineHeight:1}}>{s.num}</div>
                <div style={{fontSize:11, color:'#aaa', marginTop:8, lineHeight:1.4}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section style={{background:'#f5f5f5', padding:'56px 24px'}}>
        <div style={{maxWidth:560, margin:'0 auto', background:'#fff', border:'1px solid #e0e0e0', borderRadius:10, padding:'40px 32px', textAlign:'center', boxShadow:'0 4px 24px rgba(0,0,0,.07)'}}>
          <div style={{display:'inline-block', background:'#e8141e', color:'#fff', fontSize:10, fontWeight:800, letterSpacing:2, textTransform:'uppercase', padding:'5px 14px', borderRadius:2, marginBottom:18}}>
            🔥 Oferta especial
          </div>
          <h2 style={{fontSize:22, fontWeight:900, marginBottom:18}}>Programa CLMR<br/>Como Ler Muito Mais Rápido</h2>
          <div style={{fontSize:64, fontWeight:900, lineHeight:1}}><sup style={{fontSize:24, verticalAlign:'super'}}>R$</sup>97</div>
          <p style={{fontSize:13, color:'#555', margin:'8px 0 24px'}}>Pagamento único · Acesso imediato</p>
          <hr style={{border:'none', borderTop:'1px solid #f0f0f0', margin:'20px 0'}} />
          <ul style={{textAlign:'left', marginBottom:24, listStyle:'none'}}>
            {['Método completo de Leitura Dinâmica','Leitura Inteligente e Técnicas Avançadas','Memorização aplicada à leitura','Organizador de Leitura exclusivo','+14 horas de aulas 100% gravadas','Professor especialista: Victor dos Santos','Acesso vitalício + atualizações','Certificado de conclusão'].map((item, i) => (
              <li key={i} style={{fontSize:14, padding:'10px 0', display:'flex', gap:12, alignItems:'center', borderBottom:'1px solid #f5f5f5'}}>
                <span style={{color:'#27ae60', fontSize:16}}>✓</span> {item}
              </li>
            ))}
          </ul>
          <a href={HOTMART} target="_blank" rel="noopener"
            style={{display:'block', width:'100%', textAlign:'center', background:'linear-gradient(135deg,#2ecc71,#27ae60,#1a7a42)', color:'#fff', fontSize:16, fontWeight:900, padding:'18px', borderRadius:10, textDecoration:'none'}}>
            Quero aprender Leitura Dinâmica! 🚀
            <span style={{display:'block', fontSize:11, fontWeight:500, opacity:0.85, marginTop:4}}>Clique aqui e garanta acesso imediato</span>
          </a>
          <p style={{marginTop:14, color:'#777', fontSize:12}}>🔒 Cartão · PIX · Boleto · Plataforma Hotmart</p>
        </div>
      </section>

      {/* BLOG */}
      <section style={{background:'#fff', padding:'56px 24px'}}>
        <div style={{maxWidth:860, margin:'0 auto'}}>
          <h2 style={{fontSize:'clamp(20px,4vw,34px)', fontWeight:900, textAlign:'center', marginBottom:10}}>
            Blog: <span style={{color:'#e8141e'}}>Aprenda Leitura Dinâmica</span>
          </h2>
          <p style={{textAlign:'center', color:'#555', fontSize:15, marginBottom:36}}>Artigos gratuitos com técnicas e estratégias para ler mais e melhor.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20}}>
            {ultimosArtigos.map((a, i) => (
              <Link key={i} href={`/blog/${a.slug}`} style={{textDecoration:'none'}}>
                <div style={{background:'#f5f5f5', borderRadius:10, padding:24, borderTop:'3px solid #e8141e', height:'100%', cursor:'pointer'}}>
                  <span style={{fontSize:11, fontWeight:700, color:'#e8141e', textTransform:'uppercase', letterSpacing:1}}>{a.categoria}</span>
                  <h3 style={{fontSize:15, fontWeight:800, color:'#111', margin:'8px 0', lineHeight:1.3}}>{a.titulo}</h3>
                  <p style={{fontSize:13, color:'#555', lineHeight:1.6}}>{a.descricao}</p>
                  <span style={{display:'inline-block', marginTop:12, fontSize:13, fontWeight:700, color:'#e8141e'}}>Ler artigo →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:36}}>
            <Link href="/blog" style={{display:'inline-block', background:'#111', color:'#fff', fontWeight:800, fontSize:14, padding:'14px 32px', borderRadius:8, textDecoration:'none'}}>
              Ver todos os {artigos.length} artigos →
            </Link>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section style={{background:'linear-gradient(135deg,#f5f5f5,#ececec)', padding:'56px 24px'}}>
        <div style={{maxWidth:600, margin:'0 auto', background:'#fff', borderRadius:10, padding:'40px 32px', textAlign:'center', boxShadow:'0 2px 16px rgba(0,0,0,.05)'}}>
          <div style={{width:90, height:90, background:'#111', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, margin:'0 auto 24px'}}>🛡️</div>
          <h3 style={{fontSize:20, fontWeight:900, marginBottom:12}}>Garantia incondicional de 7 dias</h3>
          <p style={{fontSize:14, color:'#555', lineHeight:1.75}}>Se em até 7 dias você achar que o Programa CLMR não é para você, devolvemos 100% do seu investimento — sem burocracia, sem perguntas.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#0a0a0a', textAlign:'center', padding:'28px 24px', fontSize:12, color:'#444', lineHeight:1.8}}>
        <p>© 2025 Programa CLMR — Como Ler Muito Mais Rápido · Victor dos Santos · Todos os direitos reservados</p>
        <p style={{marginTop:8}}>Curso de Leitura Dinâmica · Leitura Inteligente · Memorização · Técnicas de Leitura Rápida</p>
      </footer>

      {/* CTA FLUTUANTE */}
      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'#111', padding:'10px 20px', zIndex:999, display:'flex', alignItems:'center', justifyContent:'center', gap:20, flexWrap:'wrap'}}>
        <span style={{color:'#ccc', fontSize:13, fontWeight:600}}>⏱️ Vagas abertas — oferta especial</span>
        <a href={HOTMART} target="_blank" rel="noopener"
          style={{background:'linear-gradient(135deg,#2ecc71,#27ae60)', color:'#fff', fontWeight:900, fontSize:14, padding:'12px 28px', borderRadius:10, textDecoration:'none', whiteSpace:'nowrap'}}>
          Garantir agora — R$ 97
        </a>
      </div>
    </>
  )
}
