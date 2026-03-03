// ===== IMAGE MAP =====
var IMG = {
  hero: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&h=900&fit=crop&q=80",
  spiceMarket: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&h=600&fit=crop&q=80",
  turmeric: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=600&fit=crop&q=80",
  redOnion: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&h=400&fit=crop&q=80",
  garlic: "https://images.unsplash.com/photo-1540148426945-6cf22a160d32?w=600&h=400&fit=crop&q=80",
  dryFruits: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=400&fit=crop&q=80",
  spices1: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&h=400&fit=crop&q=80",
  chilli: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=600&h=400&fit=crop&q=80",
  ginger: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop&q=80",
  leaves: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop&q=80",
  powder: "https://images.unsplash.com/photo-1599909533601-aa1e3bf2cba7?w=600&h=400&fit=crop&q=80",
  cashews: "https://images.unsplash.com/photo-1563292769-4e05b684851a?w=600&h=400&fit=crop&q=80",
  almonds: "https://images.unsplash.com/photo-1574570173583-a4e489e37780?w=600&h=400&fit=crop&q=80",
  pistachios: "https://images.unsplash.com/photo-1525110141266-42db3ee68b06?w=600&h=400&fit=crop&q=80",
  onionField: "https://images.unsplash.com/photo-1508747703725-719f080a77b6?w=600&h=400&fit=crop&q=80",
  herbs: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=600&h=400&fit=crop&q=80",
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&q=80",
  shipping: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&h=500&fit=crop&q=80",
  cta: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1400&h=600&fit=crop&q=80",
  farm: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80"
};

// ===== DATA =====
var categories = [
  { name: "Red Onion", slug: "red-onion" },
  { name: "White Onion", slug: "white-onion" },
  { name: "Pink Onion", slug: "pink-onion" },
  { name: "Garlic", slug: "garlic" },
  { name: "Dehydrated Powders", slug: "dehydrated-powders" },
  { name: "Flakes", slug: "flakes" },
  { name: "Leaves", slug: "leaves" },
  { name: "Dry Fruits", slug: "dry-fruits" }
];

var products = [
  { name:"Red Onion Powder", slug:"red-onion-powder", category:"red-onion", featured:true, desc:"Premium dehydrated red onion powder with rich aroma and vibrant color. Ideal for seasonings, sauces, and food manufacturing. Available in mesh sizes 40-80, 80-100, and 100-120.", img:IMG.redOnion },
  { name:"Red Onion Flakes", slug:"red-onion-flakes", category:"red-onion", featured:false, desc:"Crispy dehydrated red onion flakes perfect for toppings, soups, and instant food preparations. Standard sizes 3-5mm, 5-10mm, 10-15mm available.", img:IMG.redOnion },
  { name:"Red Onion Minced", slug:"red-onion-minced", category:"red-onion", featured:false, desc:"Finely minced dehydrated red onion (1-3mm) for ready-to-cook meals and premium spice blends.", img:IMG.redOnion },
  { name:"Red Onion Chopped", slug:"red-onion-chopped", category:"red-onion", featured:true, desc:"Uniformly chopped dehydrated red onion (3-5mm) for culinary applications and food service operations.", img:IMG.redOnion },
  { name:"Fried Red Onion", slug:"fried-red-onion", category:"red-onion", featured:false, desc:"Golden fried red onion flakes — crispy, aromatic, ready-to-use garnish for biryanis, salads, and toppings.", img:IMG.redOnion },
  { name:"White Onion Powder", slug:"white-onion-powder", category:"white-onion", featured:true, desc:"Pure white onion powder with mild, sweet flavor. Essential for sauces, dressings, and seasoning mixes worldwide.", img:IMG.onionField },
  { name:"White Onion Flakes", slug:"white-onion-flakes", category:"white-onion", featured:false, desc:"Dehydrated white onion flakes with clean taste for international cuisine preparations and food processing.", img:IMG.onionField },
  { name:"White Onion Minced", slug:"white-onion-minced", category:"white-onion", featured:false, desc:"Fine minced white onion for consistent texture in food processing applications, soups, and sauces.", img:IMG.onionField },
  { name:"Pink Onion Powder", slug:"pink-onion-powder", category:"pink-onion", featured:true, desc:"Aromatic pink onion powder with distinctive fragrance for premium spice blends and seasonings.", img:IMG.spices1 },
  { name:"Pink Onion Flakes", slug:"pink-onion-flakes", category:"pink-onion", featured:false, desc:"Delicate pink onion flakes offering unique flavor profiles for gourmet preparations.", img:IMG.spices1 },
  { name:"Garlic Powder", slug:"garlic-powder", category:"garlic", featured:true, desc:"Fine-ground garlic powder with intense flavor and aroma. A must-have for global food production and seasoning.", img:IMG.garlic },
  { name:"Garlic Flakes", slug:"garlic-flakes", category:"garlic", featured:false, desc:"Dehydrated garlic flakes retaining natural pungency and aroma for cooking and food processing.", img:IMG.garlic },
  { name:"Garlic Minced", slug:"garlic-minced", category:"garlic", featured:false, desc:"Ready-to-use minced garlic for quick meal preparations and industrial food processing applications.", img:IMG.garlic },
  { name:"Garlic Granules", slug:"garlic-granules", category:"garlic", featured:true, desc:"Coarse garlic granules (8-16 mesh, 16-26 mesh) perfect for rubs, marinades, and seasoning mixes.", img:IMG.garlic },
  { name:"Turmeric Powder", slug:"turmeric-powder", category:"dehydrated-powders", featured:true, desc:"Vibrant turmeric powder with high curcumin content (3-5%). Sourced from premium farms in Gujarat and Rajasthan.", img:IMG.turmeric },
  { name:"Ginger Powder", slug:"ginger-powder", category:"dehydrated-powders", featured:false, desc:"Pure ginger powder with strong warming flavor for beverages, health products, and culinary applications.", img:IMG.ginger },
  { name:"Spinach Powder", slug:"spinach-powder", category:"dehydrated-powders", featured:false, desc:"Nutrient-rich spinach powder for health foods, smoothies, pasta, and natural coloring applications.", img:IMG.powder },
  { name:"Beetroot Powder", slug:"beetroot-powder", category:"dehydrated-powders", featured:true, desc:"Vibrant beetroot powder — natural food colorant and superfood ingredient for health and bakery products.", img:IMG.powder },
  { name:"Beetroot Flakes", slug:"beetroot-flakes", category:"flakes", featured:false, desc:"Dehydrated beetroot flakes for salads, soups, and natural food coloring applications in food industry.", img:IMG.chilli },
  { name:"Carrot Flakes", slug:"carrot-flakes", category:"flakes", featured:false, desc:"Sweet dehydrated carrot flakes for instant soups, baby food, ready meals, and food manufacturing.", img:IMG.chilli },
  { name:"Ginger Flakes", slug:"ginger-flakes", category:"flakes", featured:true, desc:"Dried ginger flakes with concentrated flavor for teas, cuisines, and herbal wellness preparations.", img:IMG.ginger },
  { name:"Potato Flakes", slug:"potato-flakes", category:"flakes", featured:false, desc:"Instant potato flakes for mashed potatoes, snacks, and food manufacturing — consistent quality assured.", img:IMG.chilli },
  { name:"Chilli Flakes", slug:"chilli-flakes", category:"flakes", featured:true, desc:"Crushed red chilli flakes with balanced heat (15,000-30,000 SHU) for pizzas, pastas, and global cuisines.", img:IMG.chilli },
  { name:"Kasuri Methi", slug:"kasuri-methi", category:"leaves", featured:true, desc:"Aromatic dried fenugreek leaves (Kasuri Methi) for authentic Indian flavor enhancement in curries and breads.", img:IMG.leaves },
  { name:"Curry Leaves", slug:"curry-leaves", category:"leaves", featured:false, desc:"Dried curry leaves retaining essential oils and aroma for South Indian cuisines and tempering.", img:IMG.leaves },
  { name:"Mint Leaves", slug:"mint-leaves", category:"leaves", featured:false, desc:"Dehydrated mint leaves for chutneys, beverages, confectionery, and fresh garnishing applications.", img:IMG.herbs },
  { name:"Basil Leaves", slug:"basil-leaves", category:"leaves", featured:true, desc:"Dried basil leaves with sweet, peppery flavor for Italian, Thai, and Mediterranean dishes.", img:IMG.herbs },
  { name:"Coriander Leaves", slug:"coriander-leaves", category:"leaves", featured:false, desc:"Dried coriander leaves preserving fresh herbaceous flavor for garnishing and culinary use.", img:IMG.leaves },
  { name:"Cashews W320", slug:"cashews-w320", category:"dry-fruits", featured:true, desc:"Premium W320 grade whole cashews — crunchy and buttery. Export quality from Goa and Kerala, India.", img:IMG.cashews },
  { name:"Almonds", slug:"almonds", category:"dry-fruits", featured:true, desc:"Premium California-style almonds with rich nutrition and crunch for snacking, bakery, and confectionery.", img:IMG.almonds },
  { name:"Walnuts", slug:"walnuts", category:"dry-fruits", featured:false, desc:"High-quality walnut halves and pieces from Kashmir for bakeries, confectioneries, and health food industry.", img:IMG.dryFruits },
  { name:"Pistachios", slug:"pistachios", category:"dry-fruits", featured:false, desc:"Roasted and raw pistachios in bulk for global distribution, retail packaging, and snack manufacturing.", img:IMG.pistachios },
  { name:"Raisins", slug:"raisins", category:"dry-fruits", featured:true, desc:"Sweet, seedless Indian raisins (kishmish) for bakeries, confectioneries, and snack manufacturing.", img:IMG.dryFruits }
];

// ===== INIT =====
document.addEventListener("DOMContentLoaded", function() {
  initHeader();
  initScrollAnimations();
  initCounters();
  initProductsPage();
  initContactForm();
  initInquiryForm();
});

// ===== HEADER =====
function initHeader() {
  var header = document.querySelector(".header");
  var hamburger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");

  if (header) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 30) { header.classList.add("scrolled"); }
      else { header.classList.remove("scrolled"); }
    }, { passive: true });
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });
    var links = mobileNav.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  var els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  if (!els.length) return;

  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("visible");
          obs.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.08, rootMargin: "50px 0px -30px 0px" });

    for (var i = 0; i < els.length; i++) {
      obs.observe(els[i]);
    }
  } else {
    // Fallback: just show everything
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add("visible");
    }
  }
}

// ===== COUNTERS =====
function initCounters() {
  var counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          animateCounter(entries[i].target);
          obs.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.5 });

    for (var i = 0; i < counters.length; i++) {
      obs.observe(counters[i]);
    }
  }
}

function animateCounter(el) {
  var target = parseInt(el.getAttribute("data-count"));
  var suffix = el.getAttribute("data-suffix") || "";
  var duration = 2000;
  var start = performance.now();

  function update(now) {
    var elapsed = now - start;
    var progress = Math.min(elapsed / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== PRODUCTS PAGE =====
function initProductsPage() {
  var grid = document.getElementById("productsGrid");
  if (!grid) return;

  var params = new URLSearchParams(location.search);
  var activeCat = params.get("category") || "";
  var searchTerm = "";

  var searchInput = document.getElementById("productSearch");
  var filtersEl = document.getElementById("categoryFilters");

  var catMap = {};
  for (var i = 0; i < categories.length; i++) {
    catMap[categories[i].slug] = categories[i].name;
  }

  function renderFilters() {
    var h = '<button class="filter-btn ' + (!activeCat ? 'active' : '') + '" data-cat="">All</button>';
    for (var i = 0; i < categories.length; i++) {
      var c = categories[i];
      h += '<button class="filter-btn ' + (activeCat === c.slug ? 'active' : '') + '" data-cat="' + c.slug + '">' + c.name + '</button>';
    }
    filtersEl.innerHTML = h;
    var btns = filtersEl.querySelectorAll(".filter-btn");
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener("click", function() {
        activeCat = this.getAttribute("data-cat");
        renderFilters();
        renderProducts();
      });
    }
  }

  function renderProducts() {
    var list = [];
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      if (activeCat && p.category !== activeCat) continue;
      if (searchTerm && p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) continue;
      list.push(p);
    }

    if (!list.length) {
      grid.innerHTML = '<div class="no-results">No products found. Try a different search or category.</div>';
      return;
    }

    var html = "";
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      html += '<div class="product-card" onclick="openProduct(\'' + p.slug + '\')">' +
        '<div class="product-img"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy">' +
        (p.featured ? '<span class="badge">Featured</span>' : '') + '</div>' +
        '<div class="product-body"><span class="product-cat">' + (catMap[p.category] || '') + '</span>' +
        '<h3>' + p.name + '</h3><p>' + p.desc + '</p>' +
        '<span class="product-link">View Details <span class="arrow-icon">&rarr;</span></span></div></div>';
    }
    grid.innerHTML = html;
  }

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      searchTerm = this.value;
      renderProducts();
    });
  }

  renderFilters();
  renderProducts();

  var prodSlug = params.get("product");
  if (prodSlug) {
    setTimeout(function() { openProduct(prodSlug); }, 300);
  }
}

// ===== MODAL =====
function openProduct(slug) {
  var p = null;
  for (var i = 0; i < products.length; i++) {
    if (products[i].slug === slug) { p = products[i]; break; }
  }
  if (!p) return;

  var catMap = {};
  for (var i = 0; i < categories.length; i++) catMap[categories[i].slug] = categories[i].name;

  var related = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].category === p.category && products[i].slug !== p.slug && related.length < 4) {
      related.push(products[i]);
    }
  }

  var old = document.querySelector(".modal-overlay");
  if (old) old.remove();

  var overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  var relatedHtml = "";
  if (related.length) {
    relatedHtml = '<div class="modal-related"><h4>Related Products</h4><div class="related-grid">';
    for (var i = 0; i < related.length; i++) {
      var r = related[i];
      relatedHtml += '<div class="related-item" onclick="closeModal();setTimeout(function(){openProduct(\'' + r.slug + '\')},200)"><img src="' + r.img + '" alt="' + r.name + '" loading="lazy"><span>' + r.name + '</span></div>';
    }
    relatedHtml += '</div></div>';
  }

  overlay.innerHTML = '<div class="modal"><button class="modal-close" onclick="closeModal()">&times;</button>' +
    '<div class="modal-image"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
    '<div class="modal-content"><span class="product-cat">' + (catMap[p.category] || '') + '</span>' +
    '<h2>' + p.name + '</h2><p class="desc">' + p.desc + '</p>' +
    '<div class="modal-buttons"><a href="inquiry.html?product=' + p.slug + '" class="btn btn-gold">Send Inquiry &rarr;</a>' +
    '<a href="https://wa.me/917709723053?text=' + encodeURIComponent("Hi! I'm interested in " + p.name + ". Please share pricing.") + '" target="_blank" class="btn btn-whatsapp">WhatsApp</a></div>' +
    relatedHtml + '</div></div>';

  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
  setTimeout(function() { overlay.classList.add("open"); }, 10);
  overlay.addEventListener("click", function(e) { if (e.target === overlay) closeModal(); });
}

function closeModal() {
  var overlay = document.querySelector(".modal-overlay");
  if (overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function() { overlay.remove(); }, 400);
  }
}

// ===== FORMS =====
function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = fd.get("name"), email = fd.get("email"), phone = fd.get("phone"), message = fd.get("message");
    if (!name || !email || !phone || !message) { showToast("Please fill all required fields","error"); return; }
    var subject = fd.get("subject") || "Website Contact";
    var body = "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\n" + message;
    window.location.href = "mailto:p7exports@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    showToast("Opening your email client!","success");
    form.reset();
  });
}

function initInquiryForm() {
  var form = document.getElementById("inquiryForm");
  if (!form) return;
  var params = new URLSearchParams(location.search);
  var ps = params.get("product");
  if (ps) { var sel = form.querySelector('[name="product"]'); if (sel) sel.value = ps; }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name=fd.get("name"), email=fd.get("email"), phone=fd.get("phone"), product=fd.get("product"), message=fd.get("message");
    if (!name || !email || !phone || !product || !message) { showToast("Please fill all required fields","error"); return; }
    var pName = product;
    for (var i=0;i<products.length;i++) { if (products[i].slug===product) { pName=products[i].name; break; } }
    var subject = "Product Inquiry: " + pName;
    var body = "Name: "+name+"\nEmail: "+email+"\nPhone: "+phone+"\nCompany: "+(fd.get("company")||"-")+"\nProduct: "+pName+"\nQuantity: "+(fd.get("quantity")||"-")+"\n\nMessage:\n"+message;
    window.location.href = "mailto:p7exports@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    showToast("Opening your email client!","success");
  });
}

function showToast(msg, type) {
  var old = document.querySelector(".toast");
  if (old) old.remove();
  var t = document.createElement("div");
  t.className = "toast toast-" + type;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(function() { t.classList.add("show"); }, 10);
  setTimeout(function() { t.classList.remove("show"); setTimeout(function(){ t.remove(); },400); }, 3000);
}
