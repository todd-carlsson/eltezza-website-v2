import { useEffect } from "react";

export const Pixel = () => {
  useEffect(() => {
    // Insert Pixel code into the head section
    const script = document.createElement("script");
    const noScript = document.createElement("noscript");
    script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          '');
          fbq('init', '529877731908882');
          fbq('track', 'PageView');
        `;
    noScript.innerHTML = `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=529877731908882&ev=PageView&noscript=1"
          />
    `;
    document.head.appendChild(script);
    document.head.appendChild(noScript);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(script);
      document.head.removeChild(noScript);
    };
  }, []);

  return null;
};
