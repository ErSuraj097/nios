'use client';

import React from 'react';

export function HydrationFix() {
    return (
        <script
            id="hydration-fix"
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            function removeCzAttribute() {
              if (document.body.hasAttribute('cz-shortcut-listen')) {
                document.body.removeAttribute('cz-shortcut-listen');
              }
            }

            // Remove immediately
            removeCzAttribute();

            // Watch for if the extension adds it again
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'cz-shortcut-listen') {
                  removeCzAttribute();
                }
              });
            });

            observer.observe(document.body, { 
              attributes: true, 
              attributeFilter: ['cz-shortcut-listen'] 
            });

            // Also clean on load
            window.addEventListener('load', removeCzAttribute);
          })();
        `,
            }}
        />
    );
}