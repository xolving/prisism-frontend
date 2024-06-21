export default function GoogleAdsense() {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5938651528318065"
      crossOrigin="anonymous"
    ></script>
  )
}
