'use client';

import { useEffect, useRef } from 'react';

type AppFolioEmbedProps = {
  hostUrl?: string;
  propertyGroup?: string;
  themeColor?: string;
  height?: string;
  width?: string;
  defaultOrder?: string;
  className?: string;
};

export default function AppFolioEmbed({
  hostUrl = 'greyhillgroup.appfolio.com',
  propertyGroup = 'Marbella Bay Apartments',
  themeColor = '#C0503A',
  height = '500px',
  width = '100%',
  defaultOrder = 'date_posted',
  className,
}: AppFolioEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    const pg = propertyGroup ? propertyGroup.replace(/'/g, "\\'") : undefined;
    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body { margin: 0; padding: 0; background: transparent; }
    </style>
  </head>
  <body>
    <div id="appfolio-listing"></div>
    <script type="text/javascript" charset="utf-8" src="https://${hostUrl}/javascripts/listing.js"></script>
    <script type="text/javascript" charset="utf-8">
      (function init(){
        if (window.Appfolio && window.Appfolio.Listing) {
          var opts = {
            hostUrl: '${hostUrl}',
            themeColor: '${themeColor}',
            height: '${height}',
            width: '${width}',
            defaultOrder: '${defaultOrder}'
          };
          ${pg ? `opts.propertyGroup = '${pg}';` : ''}
          window.Appfolio.Listing(opts);
        } else {
          setTimeout(init, 50);
        }
      })();
    </script>
  </body>
</html>`;

    doc.open();
    doc.write(html);
    doc.close();
  }, [hostUrl, propertyGroup, themeColor, height, width, defaultOrder]);

  return (
    <iframe
      ref={iframeRef}
      title="AppFolio Listings"
      style={{ width: width || '100%', height }}
      className={className}
      frameBorder={0}
      scrolling="auto"
    />
  );
}
