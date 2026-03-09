/**
 * SÛO Barcelona - Site Components
 * Header, Footer, SEO Schema, FAQs
 * 
 * EDITAR DATOS DE LA TIENDA AQUÍ:
 */
const TIENDA = {
    nombre: 'SÛO Barcelona',
    telefono: '+34 642 133 612',
    telefonoLink: 'tel:+34642133612',
    email: 'hola@suo.barcelona',
    direccion: 'Carrer de Manso, 43',
    cp: '08015',
    barrio: 'Sant Antoni',
    ciudad: 'Barcelona',
    pais: 'ES',
    horario: 'L-S: 10:00-13:30 / 16:30-19:30',
    horarioCorto: '10:00-13:30 · 16:30-19:30',
    horarioSchema: [
        'Mo-Sa 10:00-13:30',
        'Mo-Sa 16:30-19:30'
    ],
    coordenadas: {
        lat: 41.3768,
        lng: 2.1612
    },
    año: '2026',
    descripcion: 'Tienda de calzado barefoot en Barcelona. Curaduría de marcas respetuosas con la biomecánica natural del pie.',
    web: 'https://enricalicarte.github.io/suo-barefoot/'
};

/**
 * FAQs GENERALES DE LA TIENDA
 */
const FAQS_TIENDA = [
    {
        q: '¿Qué es el calzado barefoot?',
        a: 'El calzado barefoot o minimalista está diseñado para permitir que el pie se mueva de forma natural, como si estuvieras descalzo. Tiene suela fina y flexible, puntera ancha, zero drop (sin desnivel) y es ligero.'
    },
    {
        q: '¿Dónde está la tienda SÛO?',
        a: `Estamos en ${TIENDA.direccion}, ${TIENDA.barrio}, ${TIENDA.ciudad}. Nuestro horario es ${TIENDA.horario}.`
    },
    {
        q: '¿Necesito cita previa para visitar la tienda?',
        a: 'No, puedes visitarnos sin cita dentro de nuestro horario. Si deseas un asesoramiento más personalizado sobre tu pisada, puedes llamarnos al ' + TIENDA.telefono + ' para reservar una sesión.'
    },
    {
        q: '¿Qué marcas vendéis?',
        a: 'Trabajamos con 12 marcas seleccionadas: Flexinens, Muris, Mustang, Victoria, Igor, Saguaro, Chetto, Conguitos, Blanditos, Andanines, Lejan y Joma. Todas cumplen criterios de calzado respetuoso.'
    },
    {
        q: '¿Tenéis calzado barefoot para niños?',
        a: 'Sí, la mayor parte de nuestra colección es infantil. Es especialmente importante que los niños usen calzado respetuoso durante su desarrollo para no deformar sus pies.'
    },
    {
        q: '¿Cómo sé qué talla necesito?',
        a: 'En tienda medimos el pie y recomendamos dejar entre 0.8 y 1.2 cm de espacio desde el dedo más largo. Cada marca puede tallar diferente, por eso es importante probarse el calzado.'
    }
];

// ========================================
// HEADER
// ========================================
function renderHeader() {
    const root = window.SITE_ROOT || '';
    const headerHTML = `
    <header class="header">
        <div class="header-container">
            <a href="${root}index.html" class="logo">S Û O</a>
            <nav class="nav-desktop">
                <a href="${root}catalogo/index.html">Catálogo</a>
                <a href="${root}marcas/index.html">Marcas</a>
                <a href="${root}blog/index.html">Diario Podal</a>
                <a href="${root}tienda.html">Barcelona Store</a>
                <a href="${root}sobre.html">Sobre SÛO</a>
            </nav>
            <button class="menu-toggle" aria-label="Menú" onclick="document.querySelector('.nav-mobile').classList.toggle('active'); this.classList.toggle('active');">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>
    <nav class="nav-mobile">
        <a href="${root}catalogo/index.html">Catálogo</a>
        <a href="${root}marcas/index.html">Marcas</a>
        <a href="${root}blog/index.html">Diario Podal</a>
        <a href="${root}tienda.html">Barcelona Store</a>
        <a href="${root}sobre.html">Sobre SÛO</a>
    </nav>`;
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// ========================================
// FOOTER
// ========================================
function renderFooter() {
    const root = window.SITE_ROOT || '';
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h3>SÛO</h3>
                <p>${TIENDA.ciudad} · ${TIENDA.barrio}. Curaduría de calzado respetuoso para almas que buscan libertad.</p>
            </div>
            <div class="footer-links">
                <h4>Boutique</h4>
                <ul>
                    <li><a href="${root}catalogo/index.html">Catálogo</a></li>
                    <li><a href="${root}marcas/index.html">Marcas</a></li>
                    <li><a href="${root}blog/index.html">Diario Podal</a></li>
                    <li><a href="${root}sobre.html">Sobre SÛO</a></li>
                    <li><a href="${root}tienda.html">Barcelona Store</a></li>
                </ul>
            </div>
            <div class="footer-location">
                <h4>Visítanos</h4>
                <p>${TIENDA.direccion}<br>${TIENDA.cp}, ${TIENDA.barrio}, ${TIENDA.ciudad}</p>
                <p style="margin-top: 0.75rem;">
                    <a href="${TIENDA.telefonoLink}" style="color: inherit; text-decoration: none;">${TIENDA.telefono}</a>
                </p>
                <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #888;">
                    ${TIENDA.horario}
                </p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© ${TIENDA.año} ${TIENDA.nombre}</p>
        </div>
    </footer>`;
    
    const main = document.querySelector('main');
    if (main) {
        main.insertAdjacentHTML('afterend', footerHTML);
    }
}

// ========================================
// SEO SCHEMA - LocalBusiness
// ========================================
function renderLocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ShoeStore",
        "name": TIENDA.nombre,
        "description": TIENDA.descripcion,
        "url": TIENDA.web,
        "telephone": TIENDA.telefono,
        "email": TIENDA.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": TIENDA.direccion,
            "addressLocality": TIENDA.ciudad,
            "addressRegion": TIENDA.barrio,
            "postalCode": TIENDA.cp,
            "addressCountry": TIENDA.pais
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": TIENDA.coordenadas.lat,
            "longitude": TIENDA.coordenadas.lng
        },
        "openingHoursSpecification": TIENDA.horarioSchema.map(h => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": h.split(' ')[1].split('-')[0],
            "closes": h.split(' ')[1].split('-')[1]
        })),
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Cash, Credit Card",
        "areaServed": {
            "@type": "City",
            "name": "Barcelona"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Calzado Barefoot",
            "itemListElement": [
                {"@type": "OfferCatalog", "name": "Calzado Barefoot Infantil"},
                {"@type": "OfferCatalog", "name": "Calzado Barefoot Mujer"}
            ]
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

// ========================================
// SEO SCHEMA - FAQPage
// ========================================
function renderFAQSchema(faqs) {
    if (!faqs || faqs.length === 0) return;
    
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
}

// ========================================
// FAQ ACCORDION UI
// ========================================
function renderFAQSection(faqs, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !faqs || faqs.length === 0) return;
    
    let html = '<div class="faq-list">';
    faqs.forEach((faq, i) => {
        html += `
        <details class="faq-item">
            <summary class="faq-question">
                <span>${faq.q}</span>
                <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </summary>
            <div class="faq-answer">
                <p>${faq.a}</p>
            </div>
        </details>`;
    });
    html += '</div>';
    
    container.innerHTML = html;
    
    // Render schema for these FAQs
    renderFAQSchema(faqs);
}

// ========================================
// UPDATE DATA ATTRIBUTES
// ========================================
function updateDataAttributes() {
    document.querySelectorAll('[data-tienda="telefono"]').forEach(el => {
        el.textContent = TIENDA.telefono;
        if (el.tagName === 'A') el.href = TIENDA.telefonoLink;
    });
    document.querySelectorAll('[data-tienda="horario"]').forEach(el => {
        el.textContent = TIENDA.horarioCorto;
    });
    document.querySelectorAll('[data-tienda="direccion"]').forEach(el => {
        el.textContent = `${TIENDA.direccion}, ${TIENDA.barrio}`;
    });
    document.querySelectorAll('[data-tienda="direccion-completa"]').forEach(el => {
        el.textContent = `${TIENDA.direccion}, ${TIENDA.cp} ${TIENDA.barrio}, ${TIENDA.ciudad}`;
    });
}

// ========================================
// INIT
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderHeader();
    renderFooter();
    renderLocalBusinessSchema();
    updateDataAttributes();
    
    // Render FAQ section if container exists
    const faqContainer = document.getElementById('faq-tienda');
    if (faqContainer) {
        renderFAQSection(FAQS_TIENDA, 'faq-tienda');
    }
    
    // Custom FAQs for blog articles (set via window.PAGE_FAQS)
    if (window.PAGE_FAQS && document.getElementById('faq-articulo')) {
        renderFAQSection(window.PAGE_FAQS, 'faq-articulo');
    }
});

// Export for use in other scripts
window.TIENDA = TIENDA;
window.FAQS_TIENDA = FAQS_TIENDA;
window.renderFAQSection = renderFAQSection;
