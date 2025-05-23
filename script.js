// 🔸 Rutas de cada zona
const rutas = {
  norte: [
    {
      nombre: "Laguna Moto Sport",
      mostrar: "",
      url: "https://maps.app.goo.gl/ootkqEVTHNYEG58y5",
      tipo: "Albarán",
      referencia: "(Paco) Francisco José Fariña",
    },
    {
      nombre: "Niko Motobike KTM",
      mostrar: "",
      url: "https://maps.app.goo.gl/qFNG7HacYMcm5dHE9",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Taller Boxes",
      mostrar: "",
      url: "https://maps.app.goo.gl/A4eQGWtWwbFQaC5X8",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "D'Motos Las Canteras",
      mostrar: "",
      url: "https://maps.app.goo.gl/5W3eDbPCA59ckJ8P6",
      tipo: "",
      referencia: "",
    },
    {
      nombre: "Motocicletas Besay",
      mostrar: "",
      url: "https://maps.app.goo.gl/mhhZ45a8feKrZd6z7",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Moto Carlui",
      mostrar: "",
      url: "https://maps.app.goo.gl/BKXX8ZmWdh7XAvjZA",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Victor Pimienta ⚠️",
      mostrar: "",
      url: "https://maps.app.goo.gl/wrmvVg2PhQUfbu2bA",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Valeo Repuestos Nordeste",
      mostrar: "",
      url: "https://maps.app.goo.gl/LSakjctUxzqDSpqt9",
      tipo: "",
      referencia: "",
    },
    {
      nombre: "Taller @punto ⚠️",
      mostrar: "",
      url: "https://maps.app.goo.gl/EfixzZdi1cfSR3NB7",
      tipo: "Albarán",
      referencia: "Fabian (Padre de Fabi)",
    },
    {
      nombre: "Taller Dos y Cuatro ruedas",
      mostrar: "",
      url: "https://maps.app.goo.gl/CHAg6rz9x3LwF2TGA",
      tipo: "Albarán",
      referencia: "Fabi",
    },
    {
      nombre: "JD Mecánica",
      mostrar: "",
      url: "https://maps.app.goo.gl/V9xqYoYmRqCisKSG6",
      tipo: "Factura",
      referencia: "Sociedad civil",
    },
    {
      nombre: "Taller Moto Laser",
      mostrar: "Moto Laser",
      url: "https://maps.app.goo.gl/xeURk1iod7Um9wQq7",
      tipo: "Factura",
      referencia: "Juan Carlos Baute/Juan Carlos Acosta",
    },
    {
      nombre: "MB Trujillo",
      mostrar: "",
      url: "https://maps.app.goo.gl/gerT9vwWF7aYSt569",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Todomoto",
      mostrar: "",
      url: "https://maps.app.goo.gl/H1QRnEaFJ9vG5VkX7",
      tipo: "Albarán",
      referencia: "Manuel Bello Camacho",
    },
    {
      nombre: "Alonso Competición",
      mostrar: "",
      url: "https://maps.app.goo.gl/n3PeD53PVDg7PNfa6",
      tipo: "Albarán",
      referencia: "Juanma Mixta 🚫13.30🚫",
    },
    {
      nombre: "White Stars ⚠️",
      mostrar: "",
      url: "https://maps.app.goo.gl/1zE226vtRhjDZhVw6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "MCM Racing",
      mostrar: "",
      url: "https://maps.app.goo.gl/KhhvfKXn8o2CYcEp8",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Pepín Motos",
      mostrar: "",
      url: "https://maps.app.goo.gl/khvo7uuDSjtRthcSA",
      tipo: "Factura",
      referencia: "🚫13.00🚫",
    },
    {
      nombre: "El taller de angel taller de motos",
      mostrar: "Taller de Angel",
      url: "https://maps.app.goo.gl/kSmYvv53THJdZHDW9",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "DL Performance",
      mostrar: "",
      url: "https://maps.app.goo.gl/ECawqcZHDNpPBbp78",
      tipo: "Factura",
      referencia: "Francisco de León",
    },
    {
      nombre: "Bimotor - Yamaha Service",
      mostrar: "Bimotor Yamaha",
      url: "https://maps.app.goo.gl/iDneYVB4Ka71eeak6",
      tipo: "Albarán",
      referencia: "Ángel Mesa",
    },
    {
      nombre: "Aranzazu MotoBike Nave",
      mostrar: "Aranzazu",
      url: "https://maps.app.goo.gl/r6sXgFjwDWfJ9mjx6",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Zig Zag Motos",
      mostrar: "Ricardo Zerené (Zig Zag)",
      url: "https://maps.app.goo.gl/qfPvywFP5viY7tNNA",
      tipo: "Factura",
      referencia: "Zerené 🚫14.00🚫",
    },
    {
      nombre: "Mas Que Motos Tenerife",
      mostrar: "Mas Que Motos",
      url: "https://maps.app.goo.gl/a1i8jVEkccaidLuM9",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Taller David",
      mostrar: "M de Competición",
      url: "https://maps.app.goo.gl/4AUoZtR58KndRgHx9",
      tipo: "Factura",
      referencia: "El Pitu",
    },
    {
      nombre: "Repuestos de Motos Jose",
      mostrar: "Desguaces Tacoronte",
      url: "https://maps.app.goo.gl/mZ8jyFmPCRMkrFSy5",
      tipo: "Factura",
      referencia: "Pedro Torres Melo/José del Castillo",
    },
  ],
  "santa-cruz": [
    {
      nombre: "Biker Brother's",
      mostrar: "",
      url: "https://maps.app.goo.gl/hhqYeQ9xcFSyCBEd8",
      tipo: "Factura",
      referencia: "Tato",
    },
    {
      nombre: "Moto Centro Tenerife",
      mostrar: "Moto Centro",
      url: "https://maps.app.goo.gl/Sqd6qX1sCqo25JfEA",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Moto Rider",
      mostrar: "",
      url: "https://maps.app.goo.gl/uB4N6yt8w2K1Tn549",
      tipo: "Albarán",
      referencia: "Adrian Paz",
    },
    {
      nombre: "Femotor Suzuki",
      mostrar: "",
      url: "https://maps.app.goo.gl/6qZ3b2ncn8d7S3hy6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Motorbike",
      mostrar: "",
      url: "https://maps.app.goo.gl/BJo1iHRDpp2xg7yK8",
      tipo: "Albarán",
      referencia: "Accesorios y Repuestos",
    },
    {
      nombre: "Guanche Motor",
      mostrar: "",
      url: "https://maps.app.goo.gl/tHZSrmF1b6yBWoSg6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Taller Llopis",
      mostrar: "",
      url: "https://maps.app.goo.gl/XZmSS4MhPXMA3yTv6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Suzuki Fierro",
      mostrar: "",
      url: "https://maps.app.goo.gl/HTqUwuc2VY5GNpBh7",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Sicremotorbike",
      mostrar: "",
      url: "https://maps.app.goo.gl/SrZzEt8YQBUFa41z5",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Supermoto",
      mostrar: "",
      url: "https://maps.app.goo.gl/c9qFzSMwuNbZVvDf6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Chopper Motos",
      mostrar: "",
      url: "https://maps.app.goo.gl/e3Pspa6q7WAq1CfTA",
      tipo: "Albarán",
      referencia: "Vicente",
    },
    {
      nombre: "Gran Scooter",
      mostrar: "",
      url: "https://maps.app.goo.gl/rMt7amcm9aBN3p8R7",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "GR Motor",
      mostrar: "",
      url: "https://maps.app.goo.gl/F1abzAWa9j1rFbCT6",
      tipo: "Albarán",
      referencia: "German",
    },
    {
      nombre: "Motos Eloy",
      mostrar: "",
      url: "https://maps.app.goo.gl/n7MwFVY5NDSbvYXs5",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Mekacentro Vulcano",
      mostrar: "",
      url: "https://maps.app.goo.gl/DMTtg5noWuvLTmQe7",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "El Paso 2000 Guimar",
      mostrar: "",
      url: "https://maps.app.goo.gl/mMkJ2bYLzYwjamy98",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Motorvalle",
      mostrar: "",
      url: "https://maps.app.goo.gl/FG6wRhvURG5xXFze9",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Hatobito Honda La Cuesta",
      mostrar: "",
      url: "https://maps.app.goo.gl/af29nDig5Tuuan927",
      tipo: "Albarán",
      referencia: "",
    },
  ],
  sur: [
    {
      nombre: "Nissan Farray Motor San Isidro",
      mostrar: "Nissan Farray",
      url: "https://maps.app.goo.gl/MawrnM9XWYGw6qFk9",
      tipo: "",
      referencia: "",
    },
    {
      nombre: "Dual Motos",
      mostrar: "",
      url: "https://maps.app.goo.gl/rkPCpyJb6UPNm21ZA",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Biker Zone 07 S.L.",
      mostrar: "Biker Zone 07",
      url: "https://maps.app.goo.gl/VSTH8wcvuNV5wRFV8",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Hatobito Honda Canarias Las Chafiras",
      mostrar: "",
      url: "https://maps.app.goo.gl/ynMxGaUZAi4XMEP47",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Bull Motors Tenerife",
      mostrar: "Bull Motors",
      url: "https://maps.app.goo.gl/Fo3kRzcE7RuQrSyM6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Sur Racing Las Galletas",
      mostrar: "",
      url: "https://maps.app.goo.gl/p9ecGYscdR1BYNAM9",
      tipo: "Albarán",
      referencia: "Nico",
    },
    {
      nombre: "Motos Bike Dakar",
      mostrar: "",
      url: "https://maps.app.goo.gl/VttingF3tQZgCiBJ7",
      tipo: "Albarán",
      referencia: "Diego Hugo Moroso",
    },
    {
      nombre: "Moto Técnica Tenerife",
      mostrar: "Moto Técnica",
      url: "https://maps.app.goo.gl/fLGSLrhrM4jL7tdS7",
      tipo: "Factura",
      referencia: "Dario G",
    },
    {
      nombre: "Topacio Buzanada",
      mostrar: "",
      url: "https://maps.app.goo.gl/CxAoEKsGjfYh31sJA",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Motoray",
      mostrar: "",
      url: "https://maps.app.goo.gl/729uSzozk8W6ngUB6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Cabras Bike",
      mostrar: "",
      url: "https://maps.app.goo.gl/aPz6cqmeH3dDvxku7",
      tipo: "Factura",
      referencia: "Diego Ariel",
    },
    {
      nombre: "DC Motosport",
      mostrar: "",
      url: "https://maps.app.goo.gl/YyibJeACEhtjgJ489",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "AtlanticMoto",
      mostrar: "",
      url: "https://maps.app.goo.gl/zZytGXkCWpi6ASg89",
      tipo: "Factura",
      referencia: "Mariano",
    },
    {
      nombre: "Cafemotorbike Rent Moto",
      mostrar: "Prima Blue",
      url: "https://maps.app.goo.gl/GhAQs5WDJpSWMyq78",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Hobby Motor",
      mostrar: "",
      url: "https://maps.app.goo.gl/nPBLjTbVq77C44Tf7",
      tipo: "Factura",
      referencia: "",
    },
        {
      nombre: "Paraiso Motorcycles",
      mostrar: "",
      url: "https://maps.app.goo.gl/q1rRS6e2SSukdSmX6",
      tipo: "Factura",
      referencia: "🚫13.00🚫",
    },
    {
      nombre: "CMR Moto Center",
      mostrar: "",
      url: "https://maps.app.goo.gl/yXjsNzAEMdack8XRA",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Esma Moto Sport",
      mostrar: "",
      url: "https://maps.app.goo.gl/29LEUJN72wSw4AFP6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Motodoc39",
      mostrar: "",
      url: "https://maps.app.goo.gl/RcKifqQ4vWkWjseg8",
      tipo: "Factura",
      referencia: "",
    },
    {
      nombre: "Motos Topacio",
      mostrar: "",
      url: "https://maps.app.goo.gl/VaNFtsyEWZz7Px4S6",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Motorent ⚠️",
      mostrar: "",
      url: "https://maps.app.goo.gl/CjNwy65V2TrnDqkn6",
      tipo: "Factura",
      referencia: "Fañabe Plaza",
    },
    {
      nombre: "Moto Mecanica J Lopez",
      mostrar: "",
      url: "https://maps.app.goo.gl/s3PVfZqB2eZ3VGTx6",
      tipo: "Albarán",
      referencia: "Biedma",
    },
    {
      nombre: "Curva Dos",
      mostrar: "",
      url: "https://maps.app.goo.gl/FwVjaxMpaLD8gsAX9",
      tipo: "Albarán",
      referencia: "",
    },
    {
      nombre: "Zona Motos Tenerife",
      mostrar: "",
      url: "https://maps.app.goo.gl/QJasdA9kRKcxY7xH9",
      tipo: "Albarán",
      referencia: "Pablo César Ialorenzo",
    },
    {
      nombre: "Taller y concesionario de motocicletas | JONY MOTOS",
      mostrar: "Jony Motos",
      url: "https://maps.app.goo.gl/Mx4h7EvreD27CThLA",
      tipo: "Albarán",
      referencia: "Jonathan Hernández Soriano",
    },
  ],
};

// 🔸 Empresas especiales de Martes y Jueves
const soloMartesJueves = {
  norte: [
    "Pepín Motos",
    "El taller de angel taller de motos",
    "DL Performance",
  ],
  sur: ["AtlanticMoto", "Cafemotorbike Rent Moto", "Hobby Motor"],
};

// 🔸 Horarios por bloque para Santa Cruz
const horariosSantaCruz = [
  {
    hora: "Hora de salida 09:30 a 12:00",
    empresas: [
      "Biker Brother's",
      "Moto Centro Tenerife",
      "Moto Rider",
      "Femotor Suzuki",
      "Motorbike",
      "Guanche Motor",
      "Taller Llopis",
      "Suzuki Fierro",
      "Sicremotorbike",
      "Supermoto",
      "Chopper Motos",
      "Gran Scooter",
    ],
  },
  {
    hora: "Hora de salida 12:00 a 14:00",
    empresas: [
      "GR Motor",
      "Motos Eloy",
      "Mekacentro Vulcano",
      "El Paso 2000 Guimar",
      "Motorvalle",
      "Biker Brother's",
      "Hatobito Honda La Cuesta",
    ],
  },
  {
    hora: "Hora de salida 14:00 a 16:00",
    empresas: [
      "Motorbike",
      "Guanche Motor",
      "Taller Llopis",
      "Suzuki Fierro",
      "Supermoto",
      "Moto Centro Tenerife",
      "Moto Rider",
      "Femotor Suzuki",
    ],
  },
];

// 🔸 Elementos del DOM
const selector = document.getElementById("rutaSelector");
const container = document.getElementById("empresasContainer");
const botonCrearRuta = document.getElementById("crearRutaBtn");

selector.addEventListener("change", () => {
  container.innerHTML = "";
  const seleccion = rutas[selector.value];
  if (!seleccion) return;

  if (selector.value === "norte" || selector.value === "sur") {
    const salida = document.createElement("div");
    salida.className = "hora-salida";
    salida.textContent = "Hora de salida 10:00";

    // 🟧 Botón dentro del recuadro de hora (estilo norte-sur)
    crearBotonSeleccionarTodos(container, ".empresa", salida, "norte-sur");

    container.appendChild(salida);
  }

  if (selector.value === "santa-cruz") {
    horariosSantaCruz.forEach((bloque) => {
      const bloqueDiv = document.createElement("div");
      bloqueDiv.classList.add("bloque-horario");

      const titulo = document.createElement("div");
      titulo.className = "hora-salida";
      titulo.textContent = bloque.hora;

      // 🟠 Botón en recuadro de hora, con estilo "santa-cruz"
      crearBotonSeleccionarTodos(bloqueDiv, ".empresa", titulo, "santa-cruz");

      bloqueDiv.appendChild(titulo);

      bloque.empresas.forEach((nombre) => {
        const empresa = rutas["santa-cruz"].find((e) =>
          e.nombre.includes(nombre)
        );
        if (empresa) bloqueDiv.appendChild(crearEmpresaElemento(empresa));
      });

      container.appendChild(bloqueDiv);
    });
    return;
  }

  // Mostrar empresas normales y especiales en orden
  let bloqueEspecial = null;
  seleccion.forEach((empresa, index) => {
    const esEspecial = soloMartesJueves[selector.value]?.includes(
      empresa.nombre
    );

    if (esEspecial) {
      if (!bloqueEspecial) {
        bloqueEspecial = document.createElement("div");
        bloqueEspecial.className = "especiales-martes-jueves";

        const titulo = document.createElement("div");
        titulo.className = "titulo";
        titulo.textContent = "Martes y Jueves";

        bloqueEspecial.appendChild(titulo);
      }

      bloqueEspecial.appendChild(
        crearEmpresaElemento(empresa, selector.value, true)
      );
    } else {
      if (bloqueEspecial) {
        container.appendChild(bloqueEspecial);
        bloqueEspecial = null;
      }
      container.appendChild(
        crearEmpresaElemento(empresa, selector.value, false)
      );
    }

    if (index === seleccion.length - 1 && bloqueEspecial) {
      container.appendChild(bloqueEspecial);
      bloqueEspecial = null;
    }
  });
});

// 🔸 Crear cada elemento visual de empresa
function crearEmpresaElemento(empresa, rutaKey = "", esEspecial = false) {
  const div = document.createElement("div");
  div.className = "empresa";

  if (esEspecial) {
    div.style.border = "2px solid orange";
    div.style.backgroundColor = "#f3f3f3";
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.dataset.nombre = empresa.nombre;

  const nameSpan = document.createElement("span");
  nameSpan.className = "company-name";
  nameSpan.textContent = empresa.mostrar || empresa.nombre;  

  const infoSpan = document.createElement("span");
  infoSpan.className = "company-info";

  if (empresa.tipo) {
    const tipoSpan = document.createElement("span");
    tipoSpan.className = "tipo";
    tipoSpan.textContent = empresa.tipo;
    infoSpan.appendChild(tipoSpan);
  }

  if (empresa.referencia) {
    const refSpan = document.createElement("span");
    refSpan.className = "referencia";
    refSpan.textContent = empresa.referencia;
    infoSpan.appendChild(refSpan);
  }

  nameSpan.appendChild(infoSpan);

  const btn = document.createElement("button");
  btn.textContent = "Maps";

  if (empresa.url) {
    btn.onclick = () => window.open(empresa.url, "_blank");
  }

  div.appendChild(checkbox);
  div.appendChild(nameSpan);
  div.appendChild(btn);

  return div;
}

// 🔸 Modal para ordenar ruta
const ordenModal = document.getElementById("ordenModal");
const ordenContainer = document.getElementById("ordenContainer");
const generarRutaOrdenBtn = document.getElementById("generarRutaOrdenBtn");
const cancelarOrdenBtn = document.getElementById("cancelarOrdenBtn");

botonCrearRuta.addEventListener("click", () => {
  const empresaElements = Array.from(container.querySelectorAll(".empresa"));
  const seleccionadas = empresaElements.filter(
    (el) => el.querySelector("input[type='checkbox']").checked
  );

  if (seleccionadas.length < 1) {
    alert("Selecciona al menos una empresa para crear la ruta.");
    return;
  }

  ordenContainer.innerHTML = "";
  seleccionadas.forEach((el) => {
    const companyName = el.querySelector("input[type='checkbox']").dataset
      .nombre;
    const item = document.createElement("div");
    item.className = "orden-item";
    item.dataset.nombre = companyName;
    item.textContent = companyName;
    ordenContainer.appendChild(item);
  });

  Sortable.create(ordenContainer, {
    animation: 150,
    ghostClass: "sortable-ghost",
  });

  ordenModal.style.display = "block";
});

// 🔸 Generar la ruta en Google Maps
generarRutaOrdenBtn.addEventListener("click", () => {
  const items = Array.from(ordenContainer.querySelectorAll(".orden-item"));
  const orden = items.map((item) => item.dataset.nombre);

  const puntos = orden
    .map((nombre) => {
      const empresa = Object.values(rutas)
        .flat()
        .find((e) => e.nombre === nombre);
      if (!empresa) return null;
      return empresa.nombre;
    })
    .filter(Boolean);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origen = `${position.coords.latitude},${position.coords.longitude}`;
        const rutaUrl = `https://www.google.com/maps/dir/${encodeURIComponent(
          origen
        )}/${puntos.map(encodeURIComponent).join("/")}`;
        window.location.href = rutaUrl;
        ordenModal.style.display = "none";
      },
      () => alert("Error al obtener la ubicación actual.")
    );
  } else {
    alert("La geolocalización no es soportada por este navegador.");
  }
});

cancelarOrdenBtn.addEventListener("click", () => {
  ordenModal.style.display = "none";
});

function crearBotonSeleccionarTodos(
  parentElement,
  scopeSelector = ".empresa",
  insertIntoElement = null,
  tipo = ""
) {
  const btn = document.createElement("button");
  btn.textContent = "Seleccionar todos";
  btn.classList.add("btn-seleccionar-todos");
  if (tipo === "norte-sur") {
    btn.classList.add("btn-norte-sur");
  } else if (tipo === "santa-cruz") {
    btn.classList.add("btn-santa-cruz");
  }

  btn.onclick = () => {
    const checkboxes = parentElement.querySelectorAll(
      `${scopeSelector} input[type="checkbox"]`
    );
    const todosMarcados = Array.from(checkboxes).every((cb) => cb.checked);

    checkboxes.forEach((cb) => (cb.checked = !todosMarcados));
    btn.textContent = todosMarcados
      ? "Seleccionar todos"
      : "Deseleccionar todos";
  };

  if (insertIntoElement) {
    insertIntoElement.appendChild(btn);
  } else {
    parentElement.prepend(btn);
  }
}
function volverAlmacen() {
  // Reemplaza "TU_DIRECCION_O_COORDENADAS" con la dirección o coordenadas reales.
  // Ejemplo con coordenadas: "40.712776,-74.005974"
  var url = "https://maps.app.goo.gl/MZkVhvfTYwc9xLoL7";
  window.open(url, "_blank"); // Abre la ubicación en una nueva pestaña.
}
