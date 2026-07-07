/* ReserveOne.site site settings — update this file when you get your IDs.
   1) Replace G-XXXXXXXXXX with your Google Analytics 4 Measurement ID.
   2) Replace ca-pub-XXXXXXXXXXXXXXXX with your AdSense Publisher ID after AdSense gives it to you.
   3) Upload the site again to Cloudflare Pages.
*/
window.RESERVEONE_CONFIG = {
  siteName: 'ReserveOne.site',
  domain: 'https://reserveone.site',
  updatedDate: 'June 30, 2026',
  ga4MeasurementId: 'G-XXXXXXXXXX',
  adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  enableAnalytics: false,
  enableAdSenseCode: false
};

(function(){
  const cfg = window.RESERVEONE_CONFIG || {};
  if (cfg.enableAnalytics && cfg.ga4MeasurementId && cfg.ga4MeasurementId !== 'G-XXXXXXXXXX') {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(cfg.ga4MeasurementId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', cfg.ga4MeasurementId);
  }
  if (cfg.enableAdSenseCode && cfg.adsensePublisherId && cfg.adsensePublisherId !== 'ca-pub-XXXXXXXXXXXXXXXX') {
    const a = document.createElement('script');
    a.async = true;
    a.crossOrigin = 'anonymous';
    a.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(cfg.adsensePublisherId);
    document.head.appendChild(a);
  }
})();
