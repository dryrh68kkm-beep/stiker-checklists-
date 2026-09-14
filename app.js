const categories = [
  {
    id: "traffic",
    letter: "A",
    short: "C.9 ป้ายจราจร",
    title: "C.9 📌 ป้ายจราจร / ป้ายลานจอด",
    note: "17 รายการ · 72 ป้าย",
    items: [
      { id: "a01", th: "ห้ามย้อนศร", en: "DO NOT GO BACK", size: "60 × 60 ซม.", qty: 10 },
      { id: "a02", th: "ที่จอดรถคนพิการ", size: "60 × 60 ซม.", qty: 2 },
      { id: "a03", th: "ห้ามสูบบุหรี่", en: "NO SMOKING", size: "60 × 60 ซม.", qty: 5 },
      { id: "a04", th: "เลี้ยวขวา", size: "50 × 50 ซม.", qty: 2 },
      { id: "a05", th: "เลี้ยวซ้าย", size: "50 × 50 ซม.", qty: 2 },
      { id: "a06", th: "ห้ามเลี้ยวขวา", size: "50 × 50 ซม.", qty: 2 },
      { id: "a07", th: "เลี้ยวขวาลานจอด", size: "120 × 80 ซม.", qty: 1 },
      { id: "a08", th: "ป้ายลูกศรเลี้ยวขวา", size: "60 × 60 ซม.", qty: 1 },
      { id: "a09", th: "ป้ายห้ามเลี้ยวซ้าย", size: "60 × 60 ซม.", qty: 1 },
      { id: "a10", th: "จำกัดความสูง 2.6 เมตร", size: "กว้าง 80 ซม. · สูงตามแบบเดิม", qty: 25 },
      { id: "a11", th: "ห้ามจอด", size: "50 × 50 ซม.", qty: 12 },
      { id: "a12", th: "ตรงไปและเลี้ยวขวา", size: "60 × 60 ซม.", qty: 1 },
      { id: "a13", th: "ทางเข้า-ออก เวลา 09.00-21.00 น.", size: "120 × 70 ซม.", qty: 2, note: "ลูกศรชี้ซ้าย" },
      { id: "a14", th: "ตรงไปและเลี้ยวซ้าย", size: "60 × 60 ซม.", qty: 1 },
      { id: "a15", th: "ห้ามเลี้ยวซ้าย / รถจักรยานยนต์", size: "60 × 60 ซม.", qty: 1 },
      { id: "a16", th: "ห้ามเลี้ยวขวา", size: "60 × 60 ซม.", qty: 2 },
      { id: "a17", th: "ทางออก", en: "EXIT", size: "60 × 60 ซม.", qty: 2 }
    ]
  },
  {
    id: "sticker11",
    letter: "B",
    short: "C.2 · 11 × 53",
    title: "C.2 📌 สติกเกอร์หัวตู้ ขนาด 11 × 53 ซม.",
    note: "15 แบบ · 54 ชิ้น",
    items: [
      { id: "b01", th: "ลูกชิ้น", en: "MEATBALL", size: "11 × 53 ซม.", qty: 4 },
      { id: "b02", th: "ไส้กรอก", en: "SAUSAGE", size: "11 × 53 ซม.", qty: 6 },
      { id: "b03", th: "น้ำดื่ม และ สุรา", en: "DRINKING WATER & LIQUEUR", size: "11 × 53 ซม.", qty: 2 },
      { id: "b04", th: "นมสด", en: "FRESH MILK", size: "11 × 53 ซม.", qty: 6 },
      { id: "b05", th: "นมเปรี้ยว", en: "YOGURT MILK", size: "11 × 53 ซม.", qty: 4 },
      { id: "b06", th: "โยเกิร์ต", en: "YOGURT", size: "11 × 53 ซม.", qty: 4 },
      { id: "b07", th: "ชีส และ เนย", en: "CHEESE & BUTTER", size: "11 × 53 ซม.", qty: 4 },
      { id: "b08", th: "น้ำผลไม้", en: "JUICE", size: "11 × 53 ซม.", qty: 4 },
      { id: "b09", th: "เต้าหู้และวุ้นเส้น", en: "TOFU & NOODLE", size: "11 × 53 ซม.", qty: 4 },
      { id: "b10", th: "เนื้อ", en: "BEEF", size: "11 × 53 ซม.", qty: 2 },
      { id: "b11", th: "ไก่", en: "CHICKEN", size: "11 × 53 ซม.", qty: 2 },
      { id: "b12", th: "หมู", en: "PORK", size: "11 × 53 ซม.", qty: 2 },
      { id: "b13", th: "สุกี้ ชาบู และ หมูกะทะ", en: "SUKI SHABU", size: "11 × 53 ซม.", qty: 4 },
      { id: "b14", th: "น้ำสลัด", en: "SALAD DRESSING", size: "11 × 53 ซม.", qty: 2 },
      { id: "b15", th: "อาหารทะเลตากแห้ง", en: "DRIED SEAFOOD", size: "11 × 53 ซม.", qty: 4 }
    ]
  },
  {
    id: "sticker13",
    letter: "C",
    short: "C.2 · 13 × 68",
    title: "C.2 📌 สติกเกอร์หัวตู้ ขนาด 13 × 68 ซม.",
    note: "10 แบบ · 19 ชิ้น",
    items: [
      { id: "c01", th: "อาหารสำเร็จรูปแช่แข็ง", en: "FROZEN MEAL", size: "13 × 68 ซม.", qty: 2 },
      { id: "c02", th: "เค้กและขนมหวาน", en: "CAKE & DESSERT", size: "13 × 68 ซม.", qty: 1 },
      { id: "c03", th: "ไอศกรีม", en: "ICE CREAM", size: "13 × 68 ซม.", qty: 1 },
      { id: "c04", th: "ติ่มซำ", en: "DIM SUM", size: "13 × 68 ซม.", qty: 1 },
      { id: "c05", th: "อาหารว่างทานเล่น", en: "APETIZER", size: "13 × 68 ซม.", qty: 2 },
      { id: "c06", th: "มันฝรั่งแช่แข็ง", en: "FRENCH FRIES", size: "13 × 68 ซม.", qty: 2 },
      { id: "c07", th: "ผักและผลไม้แช่แข็ง", en: "FRUIT & VEGETABLE", size: "13 × 68 ซม.", qty: 2 },
      { id: "c08", th: "เนื้อหมูแช่แข็ง", en: "PORK", size: "13 × 68 ซม.", qty: 4 },
      { id: "c09", th: "เนื้อสัตว์ปีกแช่แข็ง", en: "POULTRY", size: "13 × 68 ซม.", qty: 2 },
      { id: "c10", th: "เนื้อแช่แข็ง", en: "FROZEN MEAT", size: "13 × 68 ซม.", qty: 2 }
    ]
  },
  {
    id: "service",
    letter: "D",
    short: "C.5 Big Service",
    title: "C.5 📌 ป้าย BIG SERVICE",
    note: "ขนาด 20 × 20 ซม. · 9 แผ่น",
    items: [
      { id: "d01", th: "Big Service · จ่ายบิล · เติมเงิน", size: "20 × 20 ซม.", qty: 9, note: "พื้นสีขาว · สติกเกอร์สีดำ · ใช้แทนแบบเดิมที่มีคำว่า “ฝากเงิน”" }
    ]
  },
  {
    id: "letters",
    letter: "E",
    short: "C.10 ตัวอักษร",
    title: "C.10 📌 งานตัวอักษรสติกเกอร์เพิ่มเติม",
    note: "9 ข้อความ · 9 ชิ้น · รวมในยอดหลัก",
    items: [
      { id: "e01", th: "จุดล้างภาชนะ FOOD COURT", color: "สีแดง", size: "ตัวอักษร 8 ซม.", qty: 1 },
      { id: "e02", th: "จุดล้างภาชนะ TAK AWAY", color: "สีแดง", size: "ตัวอักษร 8 ซม.", qty: 1 },
      { id: "e03", th: "จุดล้างภาชนะบาร์น้ำเท่านั้น", color: "สีแดง", size: "ตัวอักษร 8 ซม.", qty: 1 },
      { id: "e04", th: "จุดซัก-ล้าง", color: "สีแดง", size: "ตัวอักษร 8 ซม.", qty: 1 },
      { id: "e05", th: "จุดเก็บอุปกรณ์", color: "สีแดง", size: "ตัวอักษร 8 ซม.", qty: 1 },
      { id: "e06", th: "ห้ามนำอุปกรณ์ ช้อน ส้อม จาน ชาม ถ้วย ถาด ของ FOODCOURT ออกนอกพื้นที่ศูนย์อาหาร ฝ่าฝืน ปรับ 500 บาท", color: "สีเขียว", size: "ตัวอักษร 4 ซม.", qty: 1 },
      { id: "e07", th: "จุดแขวนป้ายกันลื่น", color: "สีเขียว", size: "ตัวอักษร 6 ซม.", qty: 1, note: "ข้อความในวงเล็บตามเอกสารต้องตรวจสอบอีกครั้ง" },
      { id: "e08", th: "สนใจพื้นที่เช่า ติดต่อ 065-5257399 ฝ่ายบริหารพื้นที่เช่า", color: "สีเขียว", size: "ตัวอักษร 6 ซม.", qty: 1 },
      { id: "e09", th: "Staff Only", color: "สีขาว", size: "ตัวอักษร 6 ซม.", qty: 1 }
    ]
  },
  {
    id: "departmentSigns",
    letter: "F",
    short: "ป้ายหมวดสินค้า",
    title: "ป้ายหมวดสินค้า ขนาด 100 × 70 ซม.",
    note: "24 ป้าย · ตามแบบที่แนบ",
    items: [
      { id: "f01", th: "SWEETED GROCE.2", en: "SNACKS, CAKES, PIES", size: "100 × 70 ซม.", qty: 1 },
      { id: "f02", th: "SWEETED GROCE.1", en: "กาแฟ, เครื่องดื่ม", size: "100 × 70 ซม.", qty: 1 },
      { id: "f03", th: "HOUSEHOLD", en: "กระดาษชำระ, กระดาษทิชชู่", size: "100 × 70 ซม.", qty: 1 },
      { id: "f04", th: "HBA", en: "สุขภาพและความงาม", size: "100 × 70 ซม.", qty: 1 },
      { id: "f05", th: "HOL", en: "STATIONERY & ENTERTAINMENT, HOME IMPROVEMENT", size: "100 × 70 ซม.", qty: 1 },
      { id: "f06", th: "TRANSIT AREA", size: "100 × 70 ซม.", qty: 2 },
      { id: "f07", th: "SWEETED GROCE.2", en: "BISCUITS / WAFERS, CHOCOLATE, CANDY, JELLY", size: "100 × 70 ซม.", qty: 2 },
      { id: "f08", th: "HBA", size: "100 × 70 ซม.", qty: 1 },
      { id: "f09", th: "HOUSEHOLD", en: "น้ำยาปรับผ้านุ่ม, น้ำยาซักผ้า", size: "100 × 70 ซม.", qty: 1 },
      { id: "f10", th: "HOUSEHOLD", en: "ผ้าอ้อมเด็ก, ผ้าอ้อมผู้ใหญ่", size: "100 × 70 ซม.", qty: 1 },
      { id: "f11", th: "HL", en: "SMALL APPLIANCE", size: "100 × 70 ซม.", qty: 1 },
      { id: "f12", th: "HL", en: "SMALL APPLIANCE, HOME ENTERTAIN", size: "100 × 70 ซม.", qty: 1 },
      { id: "f13", th: "SL", en: "BABY ACCESSORIES, PERSONAL CARE", size: "100 × 70 ซม.", qty: 1 },
      { id: "f14", th: "SL", en: "FOOTWEAR", size: "100 × 70 ซม.", qty: 1 },
      { id: "f15", th: "HOL", en: "HOUSEWARE", size: "100 × 70 ซม.", qty: 2 },
      { id: "f16", th: "HOL", en: "HOME FURNITURE", size: "100 × 70 ซม.", qty: 1 },
      { id: "f17", th: "HOL", en: "HOME DÉCOR, RECREATION", size: "100 × 70 ซม.", qty: 1 },
      { id: "f18", th: "SALTED GROCERY", en: "SEASONINGS, COOKING SAUCES, COOKING OIL", size: "100 × 70 ซม.", qty: 1 },
      { id: "f19", th: "SALTED GROCERY", en: "NOODLES", size: "100 × 70 ซม.", qty: 1 },
      { id: "f20", th: "สินค้า", en: "BAS", size: "100 × 70 ซม.", qty: 1 },
      { id: "f21", th: "HOUSEHOLD", size: "100 × 70 ซม.", qty: 1 }
    ]
  }
];

const STORAGE_KEY = "signStickerChecklist.v1";
const MAIN_TOTAL = 187;
const mainItems = categories.flatMap(c => c.items);
const letterItems = categories.find(c => c.id === "letters").items;
const state = loadState();
letterItems.forEach(item => {
  if (state.letterDone[item.id] && !state.completed[item.id]) state.completed[item.id] = 1;
});
let selectedCategory = "all";
let selectedStatus = "all";
let searchTerm = "";
let toastTimer;

const checklist = document.querySelector("#checklist");
const categoryTabs = document.querySelector("#categoryTabs");
const searchInput = document.querySelector("#searchInput");
const clearSearch = document.querySelector("#clearSearch");
const saveStatus = document.querySelector("#saveStatus");
const cutPlan = document.querySelector("#cutPlan");
const cutPlanList = document.querySelector("#cutPlanList");
const cutListBtn = document.querySelector("#cutListBtn");
const cutTotalPieces = document.querySelector("#cutTotalPieces");
const cutDonePieces = document.querySelector("#cutDonePieces");
const cutRemainingPieces = document.querySelector("#cutRemainingPieces");

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      completed: parsed.completed && typeof parsed.completed === "object" ? parsed.completed : {},
      letterDone: parsed.letterDone && typeof parsed.letterDone === "object" ? parsed.letterDone : {},
      letterSets: parsed.letterSets && typeof parsed.letterSets === "object" ? parsed.letterSets : {},
      cutDone: parsed.cutDone && typeof parsed.cutDone === "object" ? parsed.cutDone : {},
      collapsed: parsed.collapsed && typeof parsed.collapsed === "object" ? parsed.collapsed : {},
      updatedAt: parsed.updatedAt || null
    };
  } catch {
    return { completed: {}, letterDone: {}, letterSets: {}, cutDone: {}, collapsed: {}, updatedAt: null };
  }
}

function saveState(showToast = true) {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateSaveLabel();
  if (showToast) flashToast("บันทึกแล้ว");
}

function updateSaveLabel() {
  if (!state.updatedAt) {
    saveStatus.textContent = "พร้อมใช้งาน";
    return;
  }
  const time = new Date(state.updatedAt).toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
  saveStatus.textContent = `บันทึกล่าสุด ${time} น.`;
}

function clamp(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (Number.isNaN(number)) return min;
  return Math.min(max, Math.max(min, number));
}

function completedFor(item) {
  return clamp(state.completed[item.id] || 0, 0, item.qty);
}

function itemIsDone(category, item) {
  return category.unknown ? Boolean(state.letterDone[item.id]) : completedFor(item) === item.qty;
}

function matches(category, item) {
  if (selectedCategory !== "all" && category.id !== selectedCategory) return false;
  const done = itemIsDone(category, item);
  if (selectedStatus === "done" && !done) return false;
  if (selectedStatus === "pending" && done) return false;
  if (!searchTerm) return true;
  const haystack = [category.title, category.short, item.th, item.en, item.size, item.color, item.note, item.qty].filter(Boolean).join(" ").toLocaleLowerCase("th-TH");
  return haystack.includes(searchTerm);
}

function categoryTotals(category) {
  if (category.unknown) {
    const done = category.items.filter(item => state.letterDone[item.id]).length;
    return { done, total: category.items.length, unit: "ข้อความ" };
  }
  return {
    done: category.items.reduce((sum, item) => sum + completedFor(item), 0),
    total: category.items.reduce((sum, item) => sum + item.qty, 0),
    unit: "ชิ้น"
  };
}

function renderTabs() {
  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);
  const tabs = [{ id: "all", short: "ทุกหมวด", count: totalItems }, ...categories.map(c => ({ id: c.id, short: c.short, count: c.items.length }))];
  categoryTabs.innerHTML = tabs.map(tab => `
    <button class="category-tab ${selectedCategory === tab.id ? "is-active" : ""}" type="button" data-category="${tab.id}">
      ${escapeHtml(tab.short)} <span>${tab.count}</span>
    </button>`).join("");
}

function render() {
  renderTabs();
  const visibleCategories = categories
    .map(category => ({ ...category, visibleItems: category.items.filter(item => matches(category, item)) }))
    .filter(category => category.visibleItems.length);

  if (!visibleCategories.length) {
    checklist.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4M8.5 11h5"/></svg>
        <h2>ไม่พบรายการที่ค้นหา</h2>
        <p>ลองเปลี่ยนคำค้นหา หมวดงาน หรือสถานะ</p>
      </div>`;
  } else {
    checklist.innerHTML = visibleCategories.map(renderCategory).join("");
  }

  const visibleCount = visibleCategories.reduce((sum, category) => sum + category.visibleItems.length, 0);
  const totalItems = categories.reduce((sum, category) => sum + category.items.length, 0);
  document.querySelector("#resultCount").textContent = visibleCount === totalItems ? `กำลังแสดงทั้งหมด ${totalItems} รายการ` : `พบ ${visibleCount} จาก ${totalItems} รายการ`;
  updateSummary();
  renderCutPlan();
}

function getCutGroups() {
  const groups = new Map();
  for (const category of categories) {
    for (const item of category.items) {
      const key = item.size || "ไม่ระบุขนาด";
      if (!groups.has(key)) groups.set(key, { size: key, items: [], total: 0 });
      const group = groups.get(key);
      group.items.push(item);
      group.total += item.qty;
    }
  }
  const order = [
    "50 × 50 ซม.", "60 × 60 ซม.", "100 × 70 ซม.", "120 × 70 ซม.", "120 × 80 ซม.",
    "กว้าง 80 ซม. · สูงตามแบบเดิม", "11 × 53 ซม.", "13 × 68 ซม.", "20 × 20 ซม.",
    "ตัวอักษร 8 ซม.", "ตัวอักษร 6 ซม.", "ตัวอักษร 4 ซม."
  ];
  return [...groups.values()].sort((a, b) => {
    const aIndex = order.indexOf(a.size);
    const bIndex = order.indexOf(b.size);
    return (aIndex < 0 ? 99 : aIndex) - (bIndex < 0 ? 99 : bIndex);
  });
}

function renderCutPlan() {
  if (!cutPlanList) return;
  const groups = getCutGroups();
  const totalPieces = groups.reduce((sum, group) => sum + group.total, 0);
  const donePieces = groups.reduce((sum, group) => sum + (state.cutDone[group.size] ? group.total : 0), 0);

  if (cutTotalPieces) cutTotalPieces.textContent = totalPieces;
  if (cutDonePieces) cutDonePieces.textContent = donePieces;
  if (cutRemainingPieces) cutRemainingPieces.textContent = totalPieces - donePieces;

  cutPlanList.innerHTML = groups.map(group => {
    const isCutDone = Boolean(state.cutDone[group.size]);
    return `
      <article class="cut-group ${isCutDone ? "is-cut-done" : ""}">
        <button class="cut-check ${isCutDone ? "is-checked" : ""}" type="button" data-action="toggle-cut" data-size="${escapeHtml(group.size)}" aria-label="${isCutDone ? "ยกเลิกสถานะตัดแล้ว" : "ทำเครื่องหมายว่าตัดแล้ว"}" aria-pressed="${isCutDone}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4L19 7"/></svg>
        </button>
        <span class="cut-group__size">${escapeHtml(group.size)}</span>
        <span class="cut-group__meta">${group.items.length} รายการ · รวม ${group.total} ชิ้น</span>
        <strong class="cut-group__remaining">${isCutDone ? "ตัดแล้ว" : "รอตัด"}</strong>
      </article>`;
  }).join("");
}

function renderCategory(category) {
  const totals = categoryTotals(category);
  const percentage = totals.total ? Math.round(totals.done / totals.total * 100) : 0;
  const isCollapsed = Boolean(state.collapsed[category.id]);
  return `
    <section class="category-card ${isCollapsed ? "is-collapsed" : ""}" data-category="${category.id}">
      <button class="category-card__header" type="button" data-action="collapse" data-category="${category.id}" aria-expanded="${!isCollapsed}">
        <span class="category-letter">${category.letter}</span>
        <span class="category-heading"><strong>${escapeHtml(category.title)}</strong><small>${escapeHtml(category.note)}</small></span>
        <span class="category-progress"><strong>${totals.done}/${totals.total} ${totals.unit}</strong><span><i style="width:${percentage}%"></i></span></span>
        <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      <div class="category-card__body">
        ${category.visibleItems.map((item) => renderItem(category, item)).join("")}
      </div>
    </section>`;
}

function renderItem(category, item) {
  const originalIndex = category.items.indexOf(item) + 1;
  const done = itemIsDone(category, item);
  const completed = category.unknown ? null : completedFor(item);
  return `
    <article class="check-row ${done ? "is-done" : ""}" data-item="${item.id}">
      <button class="row-check" type="button" data-action="toggle" data-item="${item.id}" aria-label="${done ? "ยกเลิกสถานะเสร็จแล้ว" : "ทำเครื่องหมายว่าเสร็จแล้ว"}" aria-pressed="${done}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4L19 7"/></svg>
      </button>
      <div class="item-copy">
        <p class="item-title"><span class="item-index">${originalIndex}.</span><span class="item-name">${escapeHtml(item.th)}</span>${item.en ? `<span class="item-en">/ ${escapeHtml(item.en)}</span>` : ""}</p>
        <div class="item-meta">
          ${item.size ? `<span class="meta-chip">${escapeHtml(item.size)}</span>` : ""}
          ${item.color ? `<span class="meta-chip">${escapeHtml(item.color)}</span>` : ""}
          ${!category.unknown ? `<span class="meta-chip">ทั้งหมด ${item.qty} ชิ้น</span>` : `<span class="meta-chip meta-chip--warning">ยังไม่รวมยอดหลัก</span>`}
        </div>
        ${item.note ? `<p class="item-note">${escapeHtml(item.note)}</p>` : ""}
      </div>
      ${category.unknown ? `
        <div class="unknown-control">
          <label for="sets-${item.id}">จำนวนชุด (เมื่อยืนยันแล้ว)</label>
          <input id="sets-${item.id}" data-action="letter-sets" data-item="${item.id}" type="number" min="0" inputmode="numeric" placeholder="รอยืนยัน" value="${state.letterSets[item.id] ?? ""}" />
        </div>` : `
        <div class="quantity-control">
          <span class="quantity-label">ทำแล้ว ${completed} / ${item.qty} ชิ้น</span>
          <div class="stepper">
            <button type="button" data-action="decrease" data-item="${item.id}" ${completed <= 0 ? "disabled" : ""} aria-label="ลดจำนวน ${escapeHtml(item.th)}">−</button>
            <input type="number" min="0" max="${item.qty}" value="${completed}" data-action="quantity" data-item="${item.id}" aria-label="จำนวนที่ทำเสร็จ ${escapeHtml(item.th)}" />
            <button type="button" data-action="increase" data-item="${item.id}" ${completed >= item.qty ? "disabled" : ""} aria-label="เพิ่มจำนวน ${escapeHtml(item.th)}">+</button>
          </div>
        </div>`}
    </article>`;
}

function updateSummary() {
  const summary = getSummaryData();
  const { donePieces, doneMain, doneLetters, percent } = summary;
  document.querySelector("#donePieces").textContent = donePieces;
  document.querySelector("#remainingPieces").textContent = MAIN_TOTAL - donePieces;
  document.querySelector("#doneMainItems").textContent = `${doneMain}/${mainItems.length}`;
  document.querySelector("#doneLetterItems").textContent = `${doneLetters}/${letterItems.length}`;
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
}

function getSummaryData() {
  const donePieces = mainItems.reduce((sum, item) => sum + completedFor(item), 0);
  const doneMain = mainItems.filter(item => completedFor(item) === item.qty).length;
  const doneLetters = letterItems.filter(item => completedFor(item) === item.qty).length;
  return {
    donePieces,
    totalPieces: MAIN_TOTAL,
    remainingPieces: MAIN_TOTAL - donePieces,
    percent: Math.round(donePieces / MAIN_TOTAL * 100),
    completedMainItems: doneMain,
    totalMainItems: mainItems.length,
    completedLetterItems: doneLetters,
    totalLetterItems: letterItems.length
  };
}

function findItem(id) {
  for (const category of categories) {
    const item = category.items.find(candidate => candidate.id === id);
    if (item) return { category, item };
  }
  return null;
}

function setQuantity(item, value) {
  state.completed[item.id] = clamp(value, 0, item.qty);
  saveState();
  render();
}

function handleChecklistClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "collapse") {
    const categoryId = button.dataset.category;
    state.collapsed[categoryId] = !state.collapsed[categoryId];
    saveState(false);
    render();
    return;
  }
  const found = findItem(button.dataset.item);
  if (!found) return;
  const { category, item } = found;
  if (action === "toggle") {
    if (category.unknown) state.letterDone[item.id] = !state.letterDone[item.id];
    else state.completed[item.id] = completedFor(item) === item.qty ? 0 : item.qty;
    saveState();
    render();
  } else if (action === "increase") {
    setQuantity(item, completedFor(item) + 1);
  } else if (action === "decrease") {
    setQuantity(item, completedFor(item) - 1);
  }
}

function handleChecklistChange(event) {
  const input = event.target;
  if (input.dataset.action === "quantity") {
    const found = findItem(input.dataset.item);
    if (found) setQuantity(found.item, input.value);
  }
  if (input.dataset.action === "letter-sets") {
    const value = input.value === "" ? "" : Math.max(0, Number.parseInt(input.value, 10) || 0);
    state.letterSets[input.dataset.item] = value;
    saveState();
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function flashToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1500);
}

categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  render();
});

document.querySelector(".status-filter").addEventListener("click", event => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  selectedStatus = button.dataset.status;
  document.querySelectorAll(".status-filter button").forEach(item => item.classList.toggle("is-active", item === button));
  render();
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLocaleLowerCase("th-TH");
  clearSearch.hidden = !searchTerm;
  render();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  clearSearch.hidden = true;
  searchInput.focus();
  render();
});

cutListBtn.addEventListener("click", () => {
  const isOpening = cutPlan.hidden;
  cutPlan.hidden = !isOpening;
  cutListBtn.setAttribute("aria-expanded", String(isOpening));
  cutListBtn.textContent = isOpening ? "ซ่อนรายการตัด" : "ตัดตามขนาด";
  if (isOpening) renderCutPlan();
});

cutPlanList.addEventListener("click", event => {
  const button = event.target.closest("button[data-action='toggle-cut']");
  if (!button) return;
  const size = button.dataset.size;
  state.cutDone[size] = !state.cutDone[size];
  saveState();
  renderCutPlan();
});

checklist.addEventListener("click", handleChecklistClick);
checklist.addEventListener("change", handleChecklistChange);
document.querySelector("#printBtn").addEventListener("click", () => window.print());

const resetDialog = document.querySelector("#resetDialog");
document.querySelector("#resetBtn").addEventListener("click", () => resetDialog.showModal());
document.querySelector("#confirmReset").addEventListener("click", () => {
  state.completed = {};
  state.letterDone = {};
  state.letterSets = {};
  state.cutDone = {};
  state.updatedAt = null;
  localStorage.removeItem(STORAGE_KEY);
  render();
  updateSaveLabel();
  flashToast("ล้างสถานะแล้ว");
});

updateSaveLabel();
render();
registerChecklistTools();

function registerChecklistTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();

  const reportError = error => console.warn("Checklist tool registration failed", error);

  try {
    void Promise.resolve(context.registerTool({
      name: "get_checklist_summary",
      title: "ดูสรุปเช็กลิสต์",
      description: "อ่านความคืบหน้าปัจจุบันของงานป้ายและสติกเกอร์ โดยไม่เปลี่ยนข้อมูล",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        return getSummaryData();
      }
    }, { signal: lifecycle.signal })).catch(reportError);

    void Promise.resolve(context.registerTool({
      name: "update_checklist_items",
      title: "อัปเดตรายการเช็กลิสต์",
      description: "อัปเดตจำนวนที่เสร็จ สถานะงานตัวอักษร หรือจำนวนชุดของหนึ่งรายการขึ้นไป แล้วบันทึกลงเช็กลิสต์",
      inputSchema: {
        type: "object",
        properties: {
          updates: {
            type: "array",
            minItems: 1,
            maxItems: 73,
            items: {
              type: "object",
              properties: {
                itemId: { type: "string", pattern: "^[a-e][0-9]{2}$" },
                completed: { type: "integer", minimum: 0 },
                done: { type: "boolean" },
                sets: { type: "integer", minimum: 0 }
              },
              required: ["itemId"],
              additionalProperties: false
            }
          }
        },
        required: ["updates"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        if (!input || !Array.isArray(input.updates) || input.updates.length < 1 || input.updates.length > 73) {
          throw new Error("updates ต้องมี 1–73 รายการ");
        }
        const pendingChanges = [];
        for (const update of input.updates) {
          const found = findItem(update?.itemId);
          if (!found) throw new Error(`ไม่พบรหัสรายการ ${update?.itemId || ""}`);
          const { category, item } = found;
          if (category.unknown) {
            if (typeof update.done !== "boolean" && !Number.isInteger(update.sets)) {
              throw new Error(`${item.id} ต้องระบุ done หรือ sets`);
            }
            if (update.sets !== undefined && (!Number.isInteger(update.sets) || update.sets < 0)) {
              throw new Error(`${item.id} ต้องระบุ sets เป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป`);
            }
            pendingChanges.push(() => {
              if (typeof update.done === "boolean") state.letterDone[item.id] = update.done;
              if (Number.isInteger(update.sets)) state.letterSets[item.id] = update.sets;
            });
          } else {
            if (!Number.isInteger(update.completed) || update.completed < 0 || update.completed > item.qty) {
              throw new Error(`${item.id} ต้องระบุ completed ระหว่าง 0–${item.qty}`);
            }
            pendingChanges.push(() => { state.completed[item.id] = update.completed; });
          }
        }
        pendingChanges.forEach(apply => apply());
        saveState(false);
        render();
        return { updated: input.updates.length, summary: getSummaryData() };
      }
    }, { signal: lifecycle.signal })).catch(reportError);
  } catch (error) {
    reportError(error);
  }
}