import artigos from '../data/artigos'

function Sitemap() {}

export async function getServerSideProps({ res }) {
  const base = 'https://cursodeleituradinamica.com'
  const urls = [
    `<url><loc>${base}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
    `<url><loc>${base}/blog</loc><changefreq>daily</changefreq><priority>0.9</priority></url>`,
    ...artigos.map(a => `<url><loc>${base}/blog/${a.slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`)
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(xml)
  res.end()
  return { props: {} }
}

export default Sitemap
