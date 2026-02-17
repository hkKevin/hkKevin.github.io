window.addEventListener('load', function() {
    let scriptLoaded = false;

    function loadGTM() {
        if (scriptLoaded) return;
        scriptLoaded = true;

        // Create the GTM script element
        const gtmScript = document.createElement('script');
        gtmScript.async = true;
        gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZEC6X0W5GH';
        document.head.appendChild(gtmScript);

        // Initialize GA/GTM
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZEC6X0W5GH');
        
        console.log("Analytics loaded after interaction/delay.");
    }

    // Trigger loading on interaction
    const interactions = ['scroll', 'mouseover', 'touchstart', 'keydown'];
    interactions.forEach(event => window.addEventListener(event, loadGTM, {once: true}));

    // Fallback: Load anyway after 5 seconds if no interaction occurs
    setTimeout(loadGTM, 5000);
});
