const proyectos = [
    {
        nombre: "app_ios",
        descripcion: "Aplicación iOS desarrollada",
        enlace: "https://ximena7232.github.io/app_ios/",
        icono: "📲"
    },
    {
        nombre: "juegos",
        descripcion: "Aplicación de programación - Primer parcial",
        enlace: "https://ximena7232.github.io/juegos/",
        icono: "💻"
    },
    {
        nombre: "P3_IOS_EJEMPLOAPP",
        descripcion: "Aplicación ejemplo para iOS",
        enlace: "https://ximena7232.github.io/P3_IOS_EJEMPLOAPP/",
        icono: "🍎"
    },
    {
        nombre: "APP iOS",
        descripcion: "Aplicación iOS desarrollada",
        enlace: "https://maycol234.github.io/APP_IOS/",
        icono: "📲"
    },
    {
        nombre: "SITIO-WEB-HTML5",
        descripcion: "Sitio web profesional en HTML5",
        enlace: "https://ximena7232.github.io/SITIO-WEB-HTML5/",
        icono: "🌐"
    },
    {
        nombre: "HOLA_MUNDOO",
        descripcion: "Mensaje de texto",
        enlace: "https://ximena7232.github.io/HOLA_MUNDOO/",
        icono: "📝"
    }
];


function cargarProyectos() {
    const contenedor = document.getElementById('proyectos');
    
    proyectos.forEach(proyecto => {
        const card = document.createElement('div');
        card.className = 'proyecto-card';
        
        card.innerHTML = `
            <h3>${proyecto.icono} ${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <a href="${proyecto.enlace}" target="_blank" class="btn">Ver Proyecto</a>
        `;
        
        contenedor.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', cargarProyectos);
