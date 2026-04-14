// ElectroMart core data and helpers

const ELECTROMART_KEY_PREFIX = "electromart_";

const STORAGE_KEYS = {
  USER: ELECTROMART_KEY_PREFIX + "user",
  USERS: ELECTROMART_KEY_PREFIX + "users",
  CART: ELECTROMART_KEY_PREFIX + "cart",
  ORDERS: ELECTROMART_KEY_PREFIX + "orders",
  THEME: ELECTROMART_KEY_PREFIX + "theme",
  RATINGS: ELECTROMART_KEY_PREFIX + "ratings",
};

const PRODUCTS = [
  // Laptops
  {
    id: 1,
    name: "Lenovo Ideapad Slim 5",
    category: "Laptop",
    price: 58999,
    mrp: 74999,
    rating: 4.5,
    reviews: 128,
    description:
      "14\" FHD IPS | Intel Core i5 13th Gen | 16GB RAM | 512GB SSD | Backlit Keyboard | 1.4kg ultra thin.",
    specs: [
      "Intel Core i5 13th Gen",
      "16GB DDR4 RAM",
      "512GB NVMe SSD",
      "Intel Iris Xe Graphics",
      "Wi‑Fi 6, Bluetooth 5.1",
    ],
    image: "images/lenovo%20ideapad%20slim%205.png",
  },
  {
    id: 2,
    name: "HP Pavilion Gaming 15",
    category: "Laptop",
    price: 72999,
    mrp: 86999,
    rating: 4.4,
    reviews: 95,
    description:
      "15.6\" 144Hz | Ryzen 5 | 16GB RAM | 512GB SSD | NVIDIA GTX graphics.",
    specs: [
      "AMD Ryzen 5",
      "16GB RAM",
      "512GB SSD",
      "NVIDIA GTX 1650",
      "Backlit keyboard",
    ],
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageHover:
      "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // Mobiles
  {
    id: 3,
    name: "Apple iPhone 15",
    category: "Mobile",
    price: 79999,
    mrp: 89999,
    rating: 4.8,
    reviews: 420,
    description:
      "6.1\" Super Retina XDR | A16 Bionic | 128GB | Dual camera system | USB‑C charging.",
    specs: [
      "6.1\" OLED display",
      "128GB storage",
      "A16 Bionic chip",
      "Dual 48MP camera",
      "5G, Face ID",
    ],
    image: "images/iphone-15.png",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    category: "Mobile",
    price: 74999,
    mrp: 84999,
    rating: 4.6,
    reviews: 310,
    description:
      "6.2\" Dynamic AMOLED 2X | 120Hz | Pro-grade triple camera | 5G.",
    specs: [
      "6.2\" AMOLED 120Hz",
      "256GB storage",
      "Pro triple camera",
      "5G, Wireless charging",
      "IP68 water resistance",
    ],
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageHover:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // Smart watches
  {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    category: "Smart Watch",
    price: 24999,
    mrp: 29999,
    rating: 4.3,
    reviews: 210,
    description:
      "1.5\" AMOLED | Advanced sleep tracking | Bluetooth calling | 5ATM water resistant.",
    specs: [
      "1.5\" AMOLED display",
      "Heart & SpO2 monitor",
      "GPS, NFC",
      "Up to 40 hours battery",
      "Fast charging",
    ],
    image: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageHover:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "boAt Xtend Pro",
    category: "Smart Watch",
    price: 3499,
    mrp: 5999,
    rating: 4.1,
    reviews: 620,
    description:
      "1.78\" AMOLED | Always-on display | Bluetooth calling | 100+ watch faces.",
    specs: [
      "1.78\" AMOLED",
      "Bluetooth calling",
      "100+ sports modes",
      "Water resistant",
      "Fast charging",
    ],
    image: "images/BoAt%20Xtend%20pro.png",
  },

  // Headphones
  {
    id: 7,
    name: "Sony WH‑1000XM5",
    category: "Headphones",
    price: 29999,
    mrp: 34999,
    rating: 4.7,
    reviews: 350,
    description:
      "Industry leading noise cancellation | 30 hours battery | Multi‑device pairing | USB‑C.",
    specs: [
      "ANC headphones",
      "30 hours playback",
      "Quick charge",
      "Multi‑point Bluetooth",
      "Touch controls",
    ],
    image: "images/Sony%20WH-1000XM5.png",
  },
  {
    id: 8,
    name: "JBL Tune 760NC",
    category: "Headphones",
    price: 7999,
    mrp: 10999,
    rating: 4.2,
    reviews: 410,
    description:
      "Active noise cancellation | 35 hours playback | Lightweight foldable design.",
    specs: [
      "Over-ear headphones",
      "ANC",
      "35 hours battery",
      "Fast charging",
      "Voice assistant support",
    ],
    image: "images/JBL%20Tune%20760NC.png",
  },

  // Speakers
  {
    id: 9,
    name: "boAt Stone 1350",
    category: "Speaker",
    price: 3999,
    mrp: 5999,
    rating: 4.1,
    reviews: 540,
    description:
      "Portable Bluetooth speaker | 11W RMS | IPX6 water resistant | RGB lights.",
    specs: [
      "11W stereo sound",
      "RGB LEDs",
      "IPX6 water resistance",
      "Bluetooth 5.0",
      "Up to 10 hours battery",
    ],
    image: "images/boAt%20Stone%201350.png",
  },
  {
    id: 10,
    name: "JBL Flip 6",
    category: "Speaker",
    price: 8999,
    mrp: 11999,
    rating: 4.5,
    reviews: 260,
    description:
      "Powerful portable Bluetooth speaker with deep bass and IP67 rating.",
    specs: [
      "Portable Bluetooth speaker",
      "IP67 dust & water proof",
      "12 hours battery",
      "PartyBoost support",
      "USB‑C charging",
    ],
    image: "images/JBL%20Flipkart%206.png",
  },

  // Cameras
  {
    id: 11,
    name: "Canon EOS 1500D",
    category: "Camera",
    price: 38999,
    mrp: 45999,
    rating: 4.4,
    reviews: 180,
    description:
      "24.1MP DSLR | 18‑55mm lens | Wi‑Fi, NFC | Full HD video recording.",
    specs: [
      "24.1MP APS‑C sensor",
      "18‑55mm kit lens",
      "Wi‑Fi & NFC",
      "1080p video",
      "DIGIC 4+ processor",
    ],
    image: "images/Canon%20EOS%201500D.png",
  },
  {
    id: 12,
    name: "GoPro HERO 11",
    category: "Camera",
    price: 51999,
    mrp: 56999,
    rating: 4.6,
    reviews: 140,
    description:
      "Action camera with 5.3K60 Ultra HD video, HyperSmooth stabilization and waterproof body.",
    specs: [
      "5.3K60 / 4K120 video",
      "HyperSmooth 5.0",
      "Waterproof 10m",
      "Touch display",
      "Wi‑Fi & Bluetooth",
    ],
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageHover:
      "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra laptops ——
  {
    id: 13,
    name: "Dell Inspiron 15",
    category: "Laptop",
    price: 45999,
    mrp: 54999,
    rating: 4.3,
    reviews: 156,
    description:
      "15.6\" FHD anti-glare | Intel Core i5 12th Gen | 8GB RAM | 512GB SSD | Windows 11 Home.",
    specs: ["Intel Core i5-1235U", "8GB DDR4", "512GB SSD", "Intel Iris Xe", "1.65 kg"],
    image: "https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 14,
    name: "ASUS VivoBook 15",
    category: "Laptop",
    price: 52999,
    mrp: 62999,
    rating: 4.4,
    reviews: 203,
    description:
      "15.6\" FHD | AMD Ryzen 5 | 16GB RAM | 512GB SSD | Fingerprint reader | Thin & light.",
    specs: ["AMD Ryzen 5 5500U", "16GB RAM", "512GB NVMe", "Radeon Graphics", "Backlit keyboard"],
    image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 15,
    name: "MSI Thin GF63",
    category: "Laptop",
    price: 67999,
    mrp: 79999,
    rating: 4.5,
    reviews: 112,
    description:
      "15.6\" 144Hz | Intel Core i7 | 16GB RAM | 512GB SSD | NVIDIA RTX 4050 | Gaming ready.",
    specs: ["Intel Core i7 12th Gen", "16GB RAM", "RTX 4050 6GB", "144Hz display", "Cooler Boost"],
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra mobiles ——
  {
    id: 16,
    name: "OnePlus 12",
    category: "Mobile",
    price: 64999,
    mrp: 69999,
    rating: 4.7,
    reviews: 890,
    description:
      "6.82\" LTPO AMOLED 120Hz | Snapdragon 8 Gen 3 | 256GB | Hasselblad triple camera | 100W charging.",
    specs: ["Snapdragon 8 Gen 3", "12GB RAM", "256GB", "5G", "Android 14"],
    image: "https://images.pexels.com/photos/109264/pexels-photo-109264.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 17,
    name: "Xiaomi Redmi Note 13 Pro",
    category: "Mobile",
    price: 24999,
    mrp: 27999,
    rating: 4.4,
    reviews: 1205,
    description:
      "6.67\" AMOLED 120Hz | 200MP main camera | 67W fast charging | IP54 | Dual 5G.",
    specs: ["MediaTek Dimensity", "8GB RAM", "256GB", "200MP camera", "5000mAh battery"],
    image: "https://images.pexels.com/photos/163100/pexels-photo-163100.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 18,
    name: "Google Pixel 8",
    category: "Mobile",
    price: 69999,
    mrp: 75999,
    rating: 4.6,
    reviews: 445,
    description:
      "6.2\" OLED 120Hz | Google Tensor G3 | Best AI camera | 7 years OS updates | Wireless charging.",
    specs: ["Tensor G3", "8GB RAM", "128GB", "Night Sight video", "IP68"],
    image: "https://images.pexels.com/photos/161965/pexels-photo-161965.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 19,
    name: "realme 12 Pro+",
    category: "Mobile",
    price: 31999,
    mrp: 35999,
    rating: 4.2,
    reviews: 678,
    description:
      "6.7\" curved AMOLED | Periscope telephoto | 67W SUPERVOOC | Premium vegan leather design.",
    specs: ["Snapdragon 7s Gen 2", "8GB RAM", "256GB", "50MP periscope", "5G"],
    image: "https://images.pexels.com/photos/788587/pexels-photo-788587.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra smart watches ——
  {
    id: 20,
    name: "Noise ColorFit Ultra 3",
    category: "Smart Watch",
    price: 4499,
    mrp: 6999,
    rating: 4.0,
    reviews: 2100,
    description:
      "1.96\" AMOLED | Bluetooth calling | 100+ sports modes | SpO2 & heart rate | Always-on display.",
    specs: ["AMOLED display", "BT calling", "IP68", "7-day battery", "GPS"],
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 21,
    name: "Fire-Boltt Phoenix Pro",
    category: "Smart Watch",
    price: 1999,
    mrp: 3999,
    rating: 3.9,
    reviews: 3500,
    description:
      "Budget smartwatch | Full touch | HR & SpO2 | Multiple sports modes | Long battery life.",
    specs: ["1.83\" display", "Bluetooth", "IP67", "100+ watch faces", "Voice assistant"],
    image: "https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra headphones ——
  {
    id: 22,
    name: "boAt Rockerz 550",
    category: "Headphones",
    price: 1999,
    mrp: 2999,
    rating: 4.0,
    reviews: 8900,
    description:
      "Wireless over-ear | 20 hours playback | Deep bass | Dual mode (BT + AUX) | Foldable design.",
    specs: ["40mm drivers", "Bluetooth 5.0", "20h battery", "Built-in mic", "Lightweight"],
    image: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 23,
    name: "realme Buds Air 5 Pro",
    category: "Headphones",
    price: 4499,
    mrp: 5999,
    rating: 4.3,
    reviews: 1204,
    description:
      "TWS earbuds | 50dB ANC | Hi-Res audio | 40h total playback | Low latency gaming mode.",
    specs: ["ANC", "10mm drivers", "IPX5", "Bluetooth 5.3", "Dual device"],
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 24,
    name: "Skullcandy Crusher Evo",
    category: "Headphones",
    price: 12999,
    mrp: 15999,
    rating: 4.5,
    reviews: 567,
    description:
      "Adjustable sensory bass | 40 hours battery | Built-in Tile finding | Foldable travel design.",
    specs: ["Over-ear", "Bass slider", "40h battery", "Rapid charge", "App EQ"],
    image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra speakers ——
  {
    id: 25,
    name: "Sony SRS-XB33",
    category: "Speaker",
    price: 9999,
    mrp: 12999,
    rating: 4.4,
    reviews: 432,
    description:
      "Extra bass portable speaker | IP67 | 24h battery | Party Connect | USB-C charging.",
    specs: ["Extra Bass", "IP67", "24h playtime", "Party Connect", "USB-C"],
    image: "https://images.pexels.com/photos/63633/pexels-photo-63633.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 26,
    name: "Marshall Emberton II",
    category: "Speaker",
    price: 14999,
    mrp: 17999,
    rating: 4.6,
    reviews: 289,
    description:
      "Iconic design | 30+ hours playtime | IP67 | Stack mode | Signature Marshall sound.",
    specs: ["30h battery", "IP67", "Bluetooth 5.1", "Stack mode", "Compact"],
    image: "https://images.pexels.com/photos/1366788/pexels-photo-1366788.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // —— Extra cameras ——
  {
    id: 27,
    name: "Nikon Z50",
    category: "Camera",
    price: 71999,
    mrp: 79999,
    rating: 4.5,
    reviews: 98,
    description:
      "20.9MP mirrorless APS-C | 4K video | Flip touchscreen | Compact for travel & vlogging.",
    specs: ["20.9MP CMOS", "4K UHD", "209-point AF", "Z mount", "Wi-Fi & Bluetooth"],
    image: "https://images.pexels.com/photos/51383/camera-lens-lens-reflection-light-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 28,
    name: "DJI Osmo Pocket 3",
    category: "Camera",
    price: 42999,
    mrp: 45999,
    rating: 4.7,
    reviews: 211,
    description:
      "1-inch CMOS gimbal camera | 4K/120fps | ActiveTrack 6.0 | Pocket-sized creator tool.",
    specs: ["1\" sensor", "3-axis gimbal", "4K 120fps", "2\" rotatable screen", "Creator combo optional"],
    image: "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function getImageFallbackDataUri(text) {
  const safe = String(text || "ElectroMart").slice(0, 28);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f8fafc"/>
        <stop offset="1" stop-color="#e2e8f0"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="48" fill="url(#g)"/>
    <rect x="56" y="56" width="688" height="688" rx="36" fill="rgba(255,255,255,0.65)" stroke="rgba(148,163,184,0.55)" stroke-width="3"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="Segoe UI,system-ui,-apple-system,sans-serif"
      font-size="44" font-weight="800" fill="#0f172a">${safe.replace(/&/g, "&amp;").replace(/</g, "&lt;")}</text>
    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle"
      font-family="Segoe UI,system-ui,-apple-system,sans-serif"
      font-size="22" font-weight="600" fill="#475569">Image unavailable</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function imageOnErrorAttr(label) {
  const uri = getImageFallbackDataUri(label);
  // eslint-disable-next-line no-useless-escape
  return `onerror="this.onerror=null;this.src='${uri}';"`;
}

/** Product grid / home cards: full image + hover swap or zoom */
function renderProductCardMedia(p) {
  const alt = escapeHtmlAttr(p.name);
  const main = p.image;
  const hover = p.imageHover;
  const useAltHover = Boolean(hover && hover !== main);
  const hoverClass = useAltHover ? "product-media--alt-hover" : "product-media--same-hover";
  const altSrc = useAltHover ? hover : main;
  const onErr = imageOnErrorAttr(p.name);
  return `<div class="product-media"><div class="product-media-frame ${hoverClass}"><img class="product-img-base" src="${main}" alt="${alt}" loading="lazy" ${onErr}><img class="product-img-alt" src="${altSrc}" alt="" loading="lazy" aria-hidden="true" ${onErr}></div></div>`;
}

// Utilities
function readJSON(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw);
  } catch (e) {
    return defaultValue;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentUser() {
  return readJSON(STORAGE_KEYS.USER, null);
}

function setCurrentUser(user) {
  if (user) writeJSON(STORAGE_KEYS.USER, user);
  else localStorage.removeItem(STORAGE_KEYS.USER);
}

function initAccountHeader() {
  const user = getCurrentUser();
  const accountLinks = Array.from(document.querySelectorAll(".header-account"));
  if (!accountLinks.length) return;

  // Use the first account link as the "Account" entry
  const account = accountLinks[0];
  const line1 = account.querySelector(".header-account-line1");
  const line2 = account.querySelector(".header-account-line2");

  if (user && user.name) {
    if (!account.closest(".account-dropdown")) {
      const wrapper = document.createElement("div");
      wrapper.className = "account-dropdown";
      account.parentNode.insertBefore(wrapper, account);
      wrapper.appendChild(account);
    }

    account.setAttribute("href", "profile.html");
    if (line1) line1.textContent = "Hello, " + user.name;
    if (line2) line2.textContent = "Account & Lists";

    const wrapper = account.closest(".account-dropdown");
    if (wrapper && !wrapper.querySelector("[data-account-panel]")) {
      const panel = document.createElement("div");
      panel.className = "account-dropdown-panel";
      panel.setAttribute("data-account-panel", "");
      panel.innerHTML = `
        <div class="account-dropdown-grid">
          <div>
            <div class="account-dropdown-title">Your account</div>
            <a class="account-dropdown-link" href="profile.html"><span>Profile</span><span>›</span></a>
            <a class="account-dropdown-link" href="orders.html"><span>Your Orders</span><span>›</span></a>
            <a class="account-dropdown-link" href="cart.html"><span>Your Cart</span><span>›</span></a>
          </div>
          <div class="account-dropdown-cta">
            <button class="account-dropdown-btn primary" type="button" data-logout-btn>Logout</button>
          </div>
        </div>
      `;
      wrapper.appendChild(panel);

      const logoutBtn = panel.querySelector("[data-logout-btn]");
      logoutBtn.addEventListener("click", () => {
        setCurrentUser(null);
        updateCartCountBadge();
        window.location.href = "index.html";
      });
    }
  } else {
    account.setAttribute("href", "login.html");
    if (line1) line1.textContent = "Hello";
    if (line2) line2.textContent = "Account & Login";

    const wrapper = account.closest(".account-dropdown");
    if (wrapper) {
      const panel = wrapper.querySelector("[data-account-panel]");
      if (panel) panel.remove();
    }
  }
}

function requireLoginOrRedirect() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return null;
  }
  return user;
}

function getUsers() {
  return readJSON(STORAGE_KEYS.USERS, []);
}

function saveUsers(users) {
  writeJSON(STORAGE_KEYS.USERS, users);
}

function getCart() {
  return readJSON(STORAGE_KEYS.CART, []);
}

function saveCart(cart) {
  writeJSON(STORAGE_KEYS.CART, cart);
  updateCartCountBadge();
}

function getOrders() {
  return readJSON(STORAGE_KEYS.ORDERS, []);
}

function saveOrders(orders) {
  writeJSON(STORAGE_KEYS.ORDERS, orders);
}

function getRatings() {
  return readJSON(STORAGE_KEYS.RATINGS, {});
}

function saveRatings(ratings) {
  writeJSON(STORAGE_KEYS.RATINGS, ratings);
}

function findProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id)) || null;
}

// Theme handling
function applyTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
  applyTheme(saved);

  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      const mode = isDark ? "dark" : "light";
      localStorage.setItem(STORAGE_KEYS.THEME, mode);
      const labelSpan = toggle.querySelector("[data-theme-label]");
      if (labelSpan) {
        labelSpan.textContent = isDark ? "Light mode" : "Dark mode";
      }
    });
  }
}

function initLiveHeaderSearch() {
  const form = document.querySelector(".header-search");
  const input = document.querySelector(".header-search-input");
  if (!form || !input) return;

  let panel = form.querySelector(".search-suggest");
  if (!panel) {
    panel = document.createElement("div");
    panel.className = "search-suggest";
    panel.setAttribute("role", "listbox");
    form.appendChild(panel);
  }

  const maxItems = 6;

  function close() {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
  }

  function openWith(items) {
    if (!items.length) return close();
    panel.innerHTML = items
      .map((p) => {
        const title = escapeHtmlAttr(p.name);
        const meta = escapeHtmlAttr(p.category) + " • ₹" + p.price.toLocaleString("en-IN");
        const onErr = imageOnErrorAttr(p.name);
        return `
          <a class="search-suggest-item" role="option" href="product-details.html?id=${p.id}">
            <img class="search-suggest-thumb" src="${p.image}" alt="" aria-hidden="true" loading="lazy" ${onErr}>
            <div>
              <div class="search-suggest-title">${title}</div>
              <div class="search-suggest-meta">${meta}</div>
            </div>
          </a>
        `;
      })
      .join("");
    panel.classList.add("is-open");
  }

  function computeMatches(q) {
    const query = (q || "").trim().toLowerCase();
    if (!query) return [];
    return PRODUCTS.filter((p) => {
      const name = p.name.toLowerCase();
      const cat = p.category.toLowerCase();
      return name.includes(query) || cat.includes(query);
    }).slice(0, maxItems);
  }

  input.addEventListener("input", () => {
    openWith(computeMatches(input.value));
  });

  input.addEventListener("focus", () => {
    openWith(computeMatches(input.value));
  });

  document.addEventListener("click", (e) => {
    if (!form.contains(e.target)) close();
  });

  form.addEventListener("submit", (e) => {
    // If user submits, redirect to products listing with q parameter
    e.preventDefault();
    const q = (input.value || "").trim();
    window.location.href = "products.html?q=" + encodeURIComponent(q);
  });
}

function initScrollToTopButton() {
  if (document.querySelector("[data-scroll-top]")) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "scroll-top-btn";
  btn.setAttribute("data-scroll-top", "");
  btn.setAttribute("aria-label", "Scroll to top");
  btn.textContent = "↑";
  document.body.appendChild(btn);

  function update() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    btn.classList.toggle("is-visible", y > 420);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Navbar cart badge
function updateCartCountBadge() {
  const badge = document.querySelector("[data-cart-count]");
  if (!badge) return;
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = String(count);
}

// Cart helpers
function addToCart(productId, quantity = 1) {
  if (!getCurrentUser()) {
    window.location.href = "login.html";
    return;
  }
  const cart = getCart();
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.productId !== productId);
  saveCart(cart);
}

function updateQuantity(productId, quantity) {
  let cart = getCart();
  cart = cart
    .map((item) =>
      item.productId === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )
    .filter((item) => item.quantity > 0);
  saveCart(cart);
}

function calculateCartTotals(cartItems, couponCode) {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  let discount = 0;
  const normalized = (couponCode || "").trim().toUpperCase();
  if (normalized === "SAVE20") {
    discount = subtotal * 0.2;
  } else if (normalized === "WELCOME10") {
    discount = subtotal * 0.1;
  }
  const total = subtotal - discount;
  return { subtotal, discount, total };
}

// Order helpers
function createOrder({ items, totals, address, phone, paymentMethod, razorpayPaymentId }) {
  const orders = getOrders();
  const now = new Date();
  const id = "EM" + now.getTime();
  const status = "Placed";
  const order = {
    id,
    createdAt: now.toISOString(),
    items,
    totals,
    address,
    phone,
    paymentMethod,
    status,
    timeline: [
      { key: "placed", label: "Order placed", active: true },
      { key: "shipped", label: "Shipped", active: false },
      { key: "outForDelivery", label: "Out for delivery", active: false },
      { key: "delivered", label: "Delivered", active: false },
    ],
  };
  if (razorpayPaymentId) {
    order.razorpayPaymentId = razorpayPaymentId;
  }
  orders.unshift(order);
  saveOrders(orders);
  return order;
}

function isValidRazorpayKeyId(key) {
  if (!key || typeof key !== "string") return false;
  const k = key.trim();
  if (k.length < 18) return false;
  if (k.includes("your_key") || k === "rzp_test_your_key_id") return false;
  return /^rzp_(test|live)_[a-zA-Z0-9]+$/.test(k);
}

/**
 * When Key ID is missing: in-page demo modal → same success flow as Razorpay (order + payment page).
 */
function openCheckoutDemoPaymentModal({ amountPaise, onSuccess, onDismiss }) {
  const backdrop = document.getElementById("payment-demo-modal");
  const rupees = Math.round(amountPaise / 100);
  if (!backdrop) {
    if (
      window.confirm(
        "Razorpay Test Key ID set nathi. Demo mate payment successful simulate karvu?"
      )
    ) {
      onSuccess({ razorpay_payment_id: "pay_demo_" + Date.now() });
    }
    return;
  }

  const amountEl = backdrop.querySelector("[data-demo-amount]");
  if (amountEl) amountEl.textContent = "₹" + rupees.toLocaleString("en-IN");

  backdrop.hidden = false;
  document.body.style.overflow = "hidden";

  const payBtn = backdrop.querySelector("[data-demo-pay]");
  const cancelBtn = backdrop.querySelector("[data-demo-cancel]");

  function close() {
    backdrop.hidden = true;
    document.body.style.overflow = "";
    if (payBtn) payBtn.onclick = null;
    if (cancelBtn) cancelBtn.onclick = null;
    backdrop.onclick = null;
  }

  if (payBtn) {
    payBtn.onclick = function () {
      close();
      onSuccess({ razorpay_payment_id: "pay_demo_" + Date.now() });
    };
  }
  if (cancelBtn) {
    cancelBtn.onclick = function () {
      close();
      if (typeof onDismiss === "function") onDismiss();
    };
  }
  backdrop.onclick = function (e) {
    if (e.target === backdrop) {
      close();
      if (typeof onDismiss === "function") onDismiss();
    }
  };
}

/**
 * Real Razorpay Checkout when valid Key ID; otherwise demo modal (no blocking alert).
 */
function openRazorpayCheckout({ amountPaise, phone, email, onSuccess, onDismiss }) {
  const key = typeof window.RAZORPAY_KEY_ID === "string" ? window.RAZORPAY_KEY_ID.trim() : "";

  if (!isValidRazorpayKeyId(key)) {
    openCheckoutDemoPaymentModal({ amountPaise, onSuccess, onDismiss });
    return;
  }

  if (typeof Razorpay === "undefined") {
    alert("Razorpay script load nathi thi. Internet check karo ane page refresh karo.");
    return;
  }

  const options = {
    key,
    amount: amountPaise,
    currency: "INR",
    name: "ElectroMart",
    description: "Smart Electronic Store – Order payment",
    handler: function (response) {
      onSuccess(response);
    },
    prefill: {
      contact: phone || "",
      email: email || "",
    },
    theme: { color: "#3b82f6" },
    modal: {
      ondismiss: function () {
        if (typeof onDismiss === "function") onDismiss();
      },
    },
  };
  const rzp = new Razorpay(options);
  rzp.on("payment.failed", function (res) {
    const msg = res.error && res.error.description ? res.error.description : "Payment failed";
    alert(msg);
  });
  rzp.open();
}

// For demo, randomly advance some orders' status
function autoAdvanceOrderStatus(order) {
  if (!order || !Array.isArray(order.timeline)) return order;
  const anyDelivered = order.timeline.find((t) => t.key === "delivered" && t.active);
  if (anyDelivered) return order;
  const idx = order.timeline.findIndex((t) => t.active);
  if (idx >= 0 && idx < order.timeline.length - 1) {
    const rand = Math.random();
    if (rand > 0.6) {
      order.timeline[idx + 1].active = true;
      if (order.timeline[idx + 1].key === "delivered") {
        order.status = "Delivered";
      } else if (order.timeline[idx + 1].key === "shipped") {
        order.status = "Shipped";
      } else if (order.timeline[idx + 1].key === "outForDelivery") {
        order.status = "Out for delivery";
      }
    }
  }
  return order;
}

// Product listing / search / filter
function initProductListPage() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  const searchInput = document.querySelector("[data-search]");
  const categorySelect = document.querySelector("[data-filter-category]");
  const priceSelect = document.querySelector("[data-filter-price]");
  const ratingSelect = document.querySelector("[data-filter-rating]");

  const params = new URLSearchParams(window.location.search);
  const qParam = params.get("q");
  const catParam = params.get("category");
  if (qParam && searchInput) searchInput.value = qParam;
  if (catParam && categorySelect) categorySelect.value = catParam;
  const headerSearchInput = document.querySelector(".header-search-input");
  if (headerSearchInput && qParam) headerSearchInput.value = qParam;

  function render(products) {
    grid.innerHTML = "";
    if (!products.length) {
      grid.innerHTML = "<p>No products found.</p>";
      return;
    }
    const ratings = getRatings();
    for (const p of products) {
      const ratingObj = ratings[p.id];
      const avgRating = ratingObj ? ratingObj.average : p.rating;
      const reviewsCount = ratingObj ? ratingObj.count : p.reviews;
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        ${renderProductCardMedia(p)}
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-meta">
            <span>${p.category}</span>
            <span class="rating"><span>★</span>${avgRating.toFixed(1)} (${reviewsCount})</span>
          </div>
          <div class="product-meta">
            <span class="product-price">₹${p.price.toLocaleString()}</span>
            <span class="muted">MRP ₹${p.mrp.toLocaleString()}</span>
          </div>
          <div class="product-actions">
            <a href="product-details.html?id=${p.id}" class="btn btn-secondary" style="flex:1;">View details</a>
            <button class="btn btn-primary" data-add-cart="${p.id}" title="Add to cart">Add</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    }
    grid.querySelectorAll("[data-add-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-add-cart"));
        addToCart(id, 1);
        alert("Item added to cart.");
      });
    });
  }

  function applyFilters() {
    let filtered = [...PRODUCTS];
    const search = (searchInput?.value || "").toLowerCase();
    const category = categorySelect?.value || "";
    const price = priceSelect?.value || "";
    const rating = ratingSelect?.value || "";

    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.category.toLowerCase().includes(search)
      );
    }
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (price) {
      if (price === "low") filtered = filtered.filter((p) => p.price < 10000);
      if (price === "mid") filtered = filtered.filter(
        (p) => p.price >= 10000 && p.price <= 40000
      );
      if (price === "high") filtered = filtered.filter((p) => p.price > 40000);
    }
    if (rating) {
      const min = Number(rating);
      filtered = filtered.filter((p) => p.rating >= min);
    }
    render(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  [categorySelect, priceSelect, ratingSelect].forEach((el) => {
    if (el) el.addEventListener("change", applyFilters);
  });

  applyFilters();
}

// Product details page
function initProductDetailsPage() {
  const container = document.querySelector("[data-product-detail]");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = findProductById(id);
  if (!product) {
    container.innerHTML = "<p>Product not found.</p>";
    return;
  }

  const ratings = getRatings();
  const ratingObj = ratings[product.id];
  const avgRating = ratingObj ? ratingObj.average : product.rating;
  const reviewsCount = ratingObj ? ratingObj.count : product.reviews;

  const hasSecond = product.imageHover && product.imageHover !== product.image;
  const swapClass = hasSecond
    ? "product-gallery-swap product-gallery-swap--dual"
    : "product-gallery-swap product-gallery-swap--zoom";
  const hint = hasSecond ? "Hover: alternate view" : "Hover: zoom view";
  const onErr = imageOnErrorAttr(product.name);

  container.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-gallery">
        <div class="${swapClass}">
          <span class="product-gallery-hint">${hint}</span>
          <img class="gallery-img-primary" src="${product.image}" alt="${escapeHtmlAttr(product.name)}" ${onErr}>
          <img class="gallery-img-alt" src="${hasSecond ? product.imageHover : product.image}" alt="" ${onErr}>
        </div>
      </div>
      <div class="product-info">
        <h1 class="page-title">${product.name}</h1>
        <div class="rating">
          <span>★</span>${avgRating.toFixed(1)} • ${reviewsCount} reviews
        </div>
        <div class="price-row">
          <span class="price-main">₹${product.price.toLocaleString()}</span>
          <span class="price-strike">₹${product.mrp.toLocaleString()}</span>
          <span class="badge">Special offer</span>
        </div>
        <p class="page-subtitle">${product.description}</p>
        <ul class="spec-list">
          ${product.specs.map((s) => `<li>${s}</li>`).join("")}
        </ul>
        <div>
          <div class="muted">Rate this product</div>
          <div class="star-input" data-star-input>
            ${[1, 2, 3, 4, 5]
              .map((i) => `<span data-star="${i}">★</span>`)
              .join("")}
          </div>
        </div>
        <div class="hero-actions" style="margin-top:1rem;">
          <button class="btn btn-primary" data-detail-add-cart>Add to cart</button>
          <a href="cart.html" class="btn btn-secondary">Go to cart</a>
        </div>
      </div>
    </div>
  `;

  const addBtn = container.querySelector("[data-detail-add-cart]");
  addBtn.addEventListener("click", () => {
    addToCart(product.id, 1);
    alert("Item added to cart.");
  });

  const starContainer = container.querySelector("[data-star-input]");
  const starEls = Array.from(starContainer.querySelectorAll("[data-star]"));

  function highlightStars(value) {
    starEls.forEach((el) => {
      const starVal = Number(el.getAttribute("data-star"));
      el.classList.toggle("active", starVal <= value);
    });
  }

  starEls.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const v = Number(el.getAttribute("data-star"));
      highlightStars(v);
    });
    el.addEventListener("mouseleave", () => {
      highlightStars(avgRating);
    });
    el.addEventListener("click", () => {
      const v = Number(el.getAttribute("data-star"));
      const current = getRatings();
      const prev = current[product.id] || { total: 0, count: 0, average: product.rating };
      const total = prev.total + v;
      const count = prev.count + 1;
      const average = total / count;
      current[product.id] = { total, count, average };
      saveRatings(current);
      alert("Thanks for rating!");
      highlightStars(average);
    });
  });

  highlightStars(avgRating);
}

// Cart page
function initCartPage() {
  const listEl = document.querySelector("[data-cart-list]");
  if (!listEl) return;
  const subtotalEl = document.querySelector("[data-summary-subtotal]");
  const discountEl = document.querySelector("[data-summary-discount]");
  const totalEl = document.querySelector("[data-summary-total]");
  const couponInput = document.querySelector("[data-coupon-input]");
  const applyCouponBtn = document.querySelector("[data-apply-coupon]");
  const emptyEl = document.querySelector("[data-cart-empty]");

  let activeCoupon = "";

  function render() {
    const cart = getCart();
    if (!cart.length) {
      listEl.innerHTML = "";
      if (emptyEl) emptyEl.style.display = "block";
      if (subtotalEl) subtotalEl.textContent = "₹0";
      if (discountEl) discountEl.textContent = "₹0";
      if (totalEl) totalEl.textContent = "₹0";
      return;
    }
    if (emptyEl) emptyEl.style.display = "none";

    const withProducts = cart
      .map((item) => {
        const product = findProductById(item.productId);
        if (!product) return null;
        return { ...item, product };
      })
      .filter(Boolean);

    listEl.innerHTML = "";
    for (const item of withProducts) {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <img src="${item.product.image}" alt="${item.product.name}">
        </div>
        <div>
          <div class="cart-item-title">${item.product.name}</div>
          <div class="cart-item-meta">
            <span>₹${item.product.price.toLocaleString()}</span>
          </div>
          <div style="margin-top:0.25rem; display:flex; gap:0.5rem; align-items:center;">
            <div class="quantity-control">
              <button class="qty-btn" data-qty-minus="${item.product.id}">−</button>
              <span data-qty-value="${item.product.id}">${item.quantity}</span>
              <button class="qty-btn" data-qty-plus="${item.product.id}">+</button>
            </div>
            <button class="remove-btn" data-remove="${item.product.id}">Remove</button>
          </div>
        </div>
        <div style="font-weight:600;">₹${(item.product.price * item.quantity).toLocaleString()}</div>
      `;
      listEl.appendChild(row);
    }

    listEl.querySelectorAll("[data-qty-plus]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-qty-plus"));
        const current = getCart().find((i) => i.productId === id);
        const qty = (current?.quantity || 1) + 1;
        updateQuantity(id, qty);
        render();
      });
    });
    listEl.querySelectorAll("[data-qty-minus]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-qty-minus"));
        const current = getCart().find((i) => i.productId === id);
        const qty = Math.max(1, (current?.quantity || 1) - 1);
        updateQuantity(id, qty);
        render();
      });
    });
    listEl.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-remove"));
        removeFromCart(id);
        render();
      });
    });

    const totals = calculateCartTotals(withProducts, activeCoupon);
    if (subtotalEl) subtotalEl.textContent = "₹" + totals.subtotal.toLocaleString();
    if (discountEl) discountEl.textContent = "−₹" + totals.discount.toLocaleString();
    if (totalEl) totalEl.textContent = "₹" + totals.total.toLocaleString();
  }

  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener("click", () => {
      activeCoupon = couponInput.value.trim();
      if (!activeCoupon) {
        alert("Please enter coupon code.");
        return;
      }
      const normalized = activeCoupon.toUpperCase();
      if (normalized !== "SAVE20" && normalized !== "WELCOME10") {
        alert("Invalid coupon. Try SAVE20 or WELCOME10.");
      } else {
        alert("Coupon applied successfully!");
      }
      render();
    });
  }

  render();
}

// Checkout page
function initCheckoutPage() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  const summaryEl = document.querySelector("[data-checkout-summary]");
  const cart = getCart();
  if (!cart.length) {
    if (summaryEl) {
      summaryEl.innerHTML = "<p>Your cart is empty. Add items before checkout.</p>";
    }
    form.addEventListener("submit", (e) => e.preventDefault());
    return;
  }

  const withProducts = cart
    .map((item) => {
      const product = findProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean);

  const totals = calculateCartTotals(withProducts, "");
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="summary-row"><span>Items (${withProducts.length})</span><span>₹${totals.subtotal.toLocaleString()}</span></div>
      <div class="summary-row"><span>Discount</span><span>₹0</span></div>
      <div class="summary-row summary-total"><span>To pay</span><span>₹${totals.total.toLocaleString()}</span></div>
    `;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const addressLine = String(formData.get("addressLine") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const pincode = String(formData.get("pincode") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const paymentMethod = String(formData.get("paymentMethod") || "");

    if (!addressLine || !city || !pincode || !phone) {
      alert("Please fill all shipping fields (address, city, pincode, phone).");
      return;
    }

    const address = addressLine + ", " + city + " - " + pincode;

    const orderItems = withProducts.map((item) => ({
      productId: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
    }));

    const placeOrderAndRedirect = (extra) => {
      const order = createOrder({
        items: orderItems,
        totals,
        address,
        phone,
        paymentMethod: extra.paymentMethod,
        razorpayPaymentId: extra.razorpayPaymentId,
      });
      saveCart([]);
      window.location.href = "payment.html?orderId=" + encodeURIComponent(order.id);
    };

    // Cash on Delivery: no Razorpay
    if (paymentMethod === "Cash on Delivery") {
      placeOrderAndRedirect({ paymentMethod });
      return;
    }

    // Online: open Razorpay checkout, then success page
    const amountPaise = Math.round(totals.total * 100);
    if (amountPaise < 100) {
      alert("Order amount is too low for online payment (minimum ₹1).");
      return;
    }

    const user = getCurrentUser();
    const email = user && user.email ? user.email : "";

    openRazorpayCheckout({
      amountPaise,
      phone,
      email,
      onSuccess: function (response) {
        const paymentId = response.razorpay_payment_id || "";
        placeOrderAndRedirect({
          paymentMethod: "Razorpay (UPI / Card / Netbanking)",
          razorpayPaymentId: paymentId,
        });
      },
    });
  });
}

// Payment / confirmation page
function initPaymentPage() {
  const wrapper = document.querySelector("[data-payment-success]");
  if (!wrapper) return;
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get("orderId");
  const orders = getOrders();
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    wrapper.innerHTML = "<p>Order not found.</p>";
    return;
  }
  const razorpayRow =
    order.razorpayPaymentId
      ? `<div class="summary-row"><span>Razorpay payment ID</span><span style="word-break:break-all;">${order.razorpayPaymentId}</span></div>`
      : "";

  wrapper.innerHTML = `
    <h1 class="page-title">Order Successful 🎉</h1>
    <p class="page-subtitle">Thank you for shopping with ElectroMart.</p>
    <div class="card" style="margin-top:1.5rem;">
      <div class="summary-row"><span>Order ID</span><span>${order.id}</span></div>
      <div class="summary-row"><span>Items</span><span>${order.items.length}</span></div>
      <div class="summary-row"><span>Amount paid</span><span>₹${order.totals.total.toLocaleString()}</span></div>
      <div class="summary-row"><span>Payment method</span><span>${order.paymentMethod}</span></div>
      ${razorpayRow}
      <div class="summary-row"><span>Status</span><span>${order.status}</span></div>
    </div>
    <div style="margin-top:1.2rem; display:flex; gap:0.6rem; flex-wrap:wrap;">
      <a href="orders.html" class="btn btn-primary">Track order</a>
      <a href="products.html" class="btn btn-secondary">Continue shopping</a>
    </div>
  `;
}

// Order history page
function initOrdersPage() {
  const tableBody = document.querySelector("[data-orders-body]");
  if (!tableBody) return;
  const stepsWrapper = document.querySelector("[data-order-steps]");
  const orders = getOrders().map(autoAdvanceOrderStatus);
  saveOrders(orders);

  if (!orders.length) {
    tableBody.innerHTML = `<tr><td colspan="5">No orders yet. Place your first order!</td></tr>`;
    if (stepsWrapper) stepsWrapper.innerHTML = "";
    return;
  }

  tableBody.innerHTML = "";
  for (const order of orders) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.id}</td>
      <td>${order.items.length} item(s)</td>
      <td>₹${order.totals.total.toLocaleString()}</td>
      <td>${renderStatusBadge(order.status)}</td>
      <td><button class="btn btn-secondary" data-track="${order.id}">Track</button></td>
    `;
    tableBody.appendChild(tr);
  }

  function renderStatusBadge(status) {
    let cls = "status-placed";
    if (status === "Shipped") cls = "status-shipped";
    if (status === "Delivered") cls = "status-delivered";
    if (status === "Cancelled") cls = "status-cancelled";
    return `<span class="status-badge ${cls}">${status}</span>`;
  }

  function renderSteps(orderId) {
    const order = orders.find((o) => o.id === orderId);
    if (!order || !stepsWrapper) return;
    stepsWrapper.innerHTML = `
      <h3 style="margin-bottom:0.5rem;">Order tracking – ${order.id}</h3>
      <div class="steps">
        ${order.timeline
          .map(
            (s) => `
          <div class="step">
            <span class="step-dot ${s.active ? "active" : ""}"></span>
            <span>${s.label}</span>
          </div>`
          )
          .join("")}
      </div>
    `;
  }

  tableBody.querySelectorAll("[data-track]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-track");
      renderSteps(id);
    });
  });

  renderSteps(orders[0].id);
}

// Auth pages
function initLoginPage() {
  const form = document.querySelector("[data-login-form]");
  if (!form) return;
  const alertBox = document.querySelector("[data-auth-alert]");
  if (alertBox) {
    alertBox.style.display = "none";
    alertBox.textContent = "";
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const password = String(formData.get("password") || "").trim();
    if (!email || !password) {
      if (alertBox) {
        alertBox.textContent = "Please enter email and password.";
        alertBox.className = "alert alert-error";
        alertBox.style.display = "block";
      }
      return;
    }
    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      if (alertBox) {
        alertBox.textContent = "Invalid email or password.";
        alertBox.className = "alert alert-error";
        alertBox.style.display = "block";
      } else {
        alert("Invalid credentials.");
      }
      return;
    }
    setCurrentUser({ name: user.name, email: user.email });
    if (alertBox) {
      alertBox.textContent = "Login successful! Redirecting…";
      alertBox.className = "alert alert-success";
      alertBox.style.display = "block";
    }
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
}

function initRegisterPage() {
  const form = document.querySelector("[data-register-form]");
  if (!form) return;
  const alertBox = document.querySelector("[data-auth-alert]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const phone = String(formData.get("phone") || "").trim();
    const password = String(formData.get("password") || "").trim();
    const confirm = String(formData.get("confirmPassword") || "").trim();
    if (!name || !email || !phone || !password) {
      if (alertBox) {
        alertBox.textContent = "Please fill all fields.";
        alertBox.className = "alert alert-error";
      } else {
        alert("Please fill all fields.");
      }
      return;
    }
    if (password !== confirm) {
      if (alertBox) {
        alertBox.textContent = "Passwords do not match.";
        alertBox.className = "alert alert-error";
      } else {
        alert("Passwords do not match.");
      }
      return;
    }
    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      if (alertBox) {
        alertBox.textContent = "Email already registered. Please login.";
        alertBox.className = "alert alert-error";
      } else {
        alert("Email already registered.");
      }
      return;
    }
    users.push({ name, email, phone, password });
    saveUsers(users);
    if (alertBox) {
      alertBox.textContent = "Registration successful! Redirecting to login…";
      alertBox.className = "alert alert-success";
    }
    setTimeout(() => {
      window.location.href = "login.html";
    }, 900);
  });
}

// Contact page
function initContactPage() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const alertBox = document.querySelector("[data-contact-alert]");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (!name || !email || !message) {
      if (alertBox) {
        alertBox.textContent = "Please fill all fields.";
        alertBox.className = "alert alert-error";
      } else {
        alert("Please fill all fields.");
      }
      return;
    }
    if (alertBox) {
      alertBox.textContent = "Message sent successfully! We will reach out soon.";
      alertBox.className = "alert alert-success";
    } else {
      alert("Message sent successfully!");
    }
    form.reset();
  });
}

// Home page featured products
function initHomePage() {
  const grid = document.querySelector("[data-featured-products]");
  if (!grid) return;
  const featured = PRODUCTS.slice(0, 8);
  const ratings = getRatings();
  grid.innerHTML = "";
  for (const p of featured) {
    const ratingObj = ratings[p.id];
    const avgRating = ratingObj ? ratingObj.average : p.rating;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      ${renderProductCardMedia(p)}
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-meta">
          <span>${p.category}</span>
          <span class="rating"><span>★</span>${avgRating.toFixed(1)}</span>
        </div>
        <div class="product-meta">
          <span class="product-price">₹${p.price.toLocaleString()}</span>
          <span class="muted">MRP ₹${p.mrp.toLocaleString()}</span>
        </div>
        <div class="product-actions">
          <a href="product-details.html?id=${p.id}" class="btn btn-secondary" style="flex:1;">View</a>
          <button class="btn btn-primary" data-add="${p.id}">Add</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  }
  grid.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-add"));
      addToCart(id, 1);
      alert("Item added to cart.");
    });
  });

  const slider = document.querySelector("[data-product-slider]");
  if (slider) {
    const track = slider.querySelector(".product-slider-track");
    const left = slider.querySelector("[data-slider-left]");
    const right = slider.querySelector("[data-slider-right]");
    const amount = 520;
    if (left && track) {
      left.addEventListener("click", () => track.scrollBy({ left: -amount, behavior: "smooth" }));
    }
    if (right && track) {
      right.addEventListener("click", () => track.scrollBy({ left: amount, behavior: "smooth" }));
    }
  }
}

// Bootstrap based on data-page attribute
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateCartCountBadge();
  initAccountHeader();
  initLiveHeaderSearch();
  initScrollToTopButton();
  const page = document.body.dataset.page;

  // Registration/login compulsory for product + buying flows
  const protectedPages = new Set([
    "products",
    "product-details",
    "cart",
    "checkout",
    "orders",
    "payment",
    "profile",
  ]);
  if (page && protectedPages.has(page)) {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = "login.html";
      return;
    }
  }

  switch (page) {
    case "home":
      initHomePage();
      break;
    case "products":
      initProductListPage();
      break;
    case "product-details":
      initProductDetailsPage();
      break;
    case "cart":
      initCartPage();
      break;
    case "checkout":
      initCheckoutPage();
      break;
    case "payment":
      initPaymentPage();
      break;
    case "orders":
      initOrdersPage();
      break;
    case "login":
      initLoginPage();
      break;
    case "register":
      initRegisterPage();
      break;
    case "contact":
      initContactPage();
      break;
    case "profile":
      initProfilePage();
      break;
    default:
      break;
  }
});

function initProfilePage() {
  const user = requireLoginOrRedirect();
  if (!user) return;
  const el = document.querySelector("[data-profile]");
  if (!el) return;

  el.innerHTML = `
    <div class="card" style="max-width:720px;">
      <h2 class="section-title" style="margin-bottom:0.35rem;">Your account</h2>
      <div class="muted" style="margin-bottom:1rem;">You stay logged in until you logout.</div>
      <div class="summary-row"><span>Name</span><span>${escapeHtmlAttr(user.name)}</span></div>
      <div class="summary-row"><span>Email</span><span>${escapeHtmlAttr(user.email || "")}</span></div>
      <div style="margin-top:1.1rem; display:flex; gap:0.6rem; flex-wrap:wrap;">
        <a class="btn btn-secondary" href="orders.html">Your orders</a>
        <a class="btn btn-secondary" href="products.html">Continue shopping</a>
        <button class="btn btn-primary" type="button" data-profile-logout>Logout</button>
      </div>
    </div>
  `;

  const logout = el.querySelector("[data-profile-logout]");
  logout.addEventListener("click", () => {
    setCurrentUser(null);
    updateCartCountBadge();
    window.location.href = "index.html";
  });
}

