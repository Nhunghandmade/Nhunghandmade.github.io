// Mô tả chi tiết, hài hước cho từng sản phẩm
const productDescriptions = {
  "Con mèo giận dữ": "Một chú mèo nhỏ đang hờn cả thế giới – trừ bạn. Nhìn giận vậy thôi chứ ôm là tan chảy liền!",
  "Con thỏ": "Thỏ trắng hiền lành, thích ngồi im lặng lắng nghe bạn kể chuyện… hoặc cùng binge Netflix.",
  "Móc khoá trái đất và mặt trời": "Cặp đôi không bao giờ chia lìa – y như bạn và chiếc móc khoá đáng yêu này.",
  "Súp lơ": "Trông như rau nhưng không phải rau. Không ăn được nhưng 'cute xỉu', làm quà thì tuyệt vời!",
  "Kẹp tóc": "Nhỏ mà có võ. Kẹp một cái, tóc gọn – tâm trạng cũng gọn theo!",
  "Oggy mặt ngu": "Mặt ngu có chọn lọc – khiến người khác phải phì cười vì quá đáng yêu.",
  "Kim móc len": "Vật phẩm huyền thoại giúp bạn 'hoá phép' ra hàng loạt thú bông handmade.",
  "Chỉ len màu": "Được dân đan len truyền tai nhau: ai có nó là đan gì cũng đẹp.",
  "Bộ dụng cụ đan móc": "Từng khoảnh khắc đan len chill chill.",
  "Kéo thủ công": "Kéo siêu bén – không chỉ cắt chỉ, còn cắt luôn cả buồn phiền.",
  "Túi giày mũ": "Combo đa năng cho búp bê bạn yêu. Đủ sành điệu để catwalk trên kệ sách.",
  "1 đống gấu": "Một đống yêu thương, ôm là hết chỗ buồn luôn.",
  "Lợn gấu hươu": "Sự kết hợp của 3 con vật trong 1. Tưởng lạ nhưng siêu cấp dễ thương!",
  "2 con chim": "Song kiếm hợp bích, bay vào tim bạn bằng đường len mềm mại.",
  "Thỏ": "Bản nâng cấp với tai siêu dài – có thể nghe thấy bạn... cả khi không nói gì!",
  "Mèo": "Mèo này không kêu 'meo' nhưng biết dụ bạn nở nụ cười.",
  "Cô gái Hà Lan": "Không mang sữa – chỉ mang sự ngọt ngào và duyên dáng tuyệt đối.",
  "1 đống thỏ": "Thỏ đâu mà lắm thế! Dành cho team mê sự đông vui và đáng yêu vô đối.",
  "Cáo": "Cáo nhỏ, tinh ranh nhưng cực kỳ tình cảm. Thích được ôm bất ngờ!",
  "Hổ giả": "Gầm một phát... rồi ôm luôn. Nhìn hung nhưng là 'baby tiger'.",
  "Con cô gái Hà Lan": "Phiên bản nhí nhảnh của nàng Hà Lan huyền thoại – siêu hợp tặng người thương.",
  "Gấu trúc": "Không ăn tre nhưng biết nằm lăn và 'tạo nét' cực chill.",
  "Chị cô gái Hà Lan": "Chị cả dịu dàng, mang vẻ đẹp cổ điển – tặng là auto sang.",
  "Con gì ấy": "Không biết là con gì nhưng chắc chắn là dễ thương không tưởng!",
  "Thỏ fake cô gái": "Thỏ cosplay cô gái – hài hước, cá tính và sẵn sàng tạo điểm nhấn cho góc học tập.",
  "Helô kít ti": "Phiên bản thân thiện của Hello Kitty – tự nhận mình 'Helô kít ti' cho dễ gần.",
  "2 con gấu": "Tình bạn – tình yêu – hay chỉ là 2 con gấu ôm nhau? Bạn quyết định!",
  "Thỏ áo": "Thỏ biết mặc áo len – đảm bảo không lạnh và cũng không làm bạn lạnh lùng.",
  "Hổ": "Hổ này hiền khô, không cắn, chỉ biết ôm!",
  "Lợn coala": "Lợn ngủ say như koala, nhìn là chỉ muốn… ngủ theo!",
  "Đồ ăn": "Không ăn được nhưng nhìn ngon đến mức phải dặn lòng đừng cắn.",
  "Không biết": "Không biết là gì nhưng biết chắc một điều: cute quá trời!",
  "Trà sữa": "Cốc trà sữa bất diệt – không lo hết topping, không lo tăng cân!",
  "Giáng sinh chít mớt": "Một quả vibe Giáng sinh đúng nghĩa – đáng yêu như tiếng cười trẻ nhỏ dưới cây thông."
};

// Countdown timer
const discountExpiryDate = new Date("2025-05-10T23:59:59");
function updateDiscountTimer() {
  const now = new Date();
  const timeRemaining = discountExpiryDate - now;
  if (timeRemaining > 0) {
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("discountExpiryDate").textContent =
      `${discountExpiryDate.getDate()}.${discountExpiryDate.getMonth() + 1}.${discountExpiryDate.getFullYear()}`;
  } else {
    document.getElementById("discountExpiryDate").textContent = "Mã giảm giá đã hết hạn";
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
  }
}
setInterval(updateDiscountTimer, 1000);

// Discount logic
const saveButton = document.querySelector("button.save-button");
const discountPopup = document.getElementById("discountPopup");
let discountTimeout = null;

function applyDiscount() {
  document.querySelectorAll(".product").forEach(product => {
    const priceElement = product.querySelector(".price");
    const originalPriceText = priceElement.textContent.replace(/[^\d]/g, "");
    const originalPrice = parseFloat(originalPriceText);
    if (!priceElement.dataset.originalPrice) {
      priceElement.dataset.originalPrice = originalPrice;
    }
    const discountedPrice = Math.round(originalPrice * 0.95);
    priceElement.textContent = discountedPrice.toLocaleString() + " đ";
  });
}

function resetPrices() {
  document.querySelectorAll(".product").forEach(product => {
    const priceElement = product.querySelector(".price");
    const original = priceElement.dataset.originalPrice;
    if (original) {
      priceElement.textContent = parseFloat(original).toLocaleString() + " đ";
    }
  });
}

if (saveButton) {
  saveButton.addEventListener("click", () => {
    discountPopup.classList.remove("hidden");
    discountPopup.classList.add("show");
    setTimeout(() => {
      discountPopup.classList.remove("show");
      discountPopup.classList.add("hidden");
    }, 2000);

    applyDiscount();
    saveButton.disabled = true;
    saveButton.style.opacity = 0.5;
    saveButton.textContent = "Đã áp dụng";

    if (discountTimeout) clearTimeout(discountTimeout);
    discountTimeout = setTimeout(() => {
      resetPrices();
      saveButton.disabled = false;
      saveButton.style.opacity = 1;
      saveButton.textContent = "Lưu";
    }, 60000);
  });
}

// Facebook floating button logic
const wrapper = document.getElementById("facebook-floating-wrapper");
let isDragging = false;
let wasDragging = false;

function moveWrapperInstant(clientX, clientY) {
  const wrapperWidth = wrapper.offsetWidth;
  const wrapperHeight = wrapper.offsetHeight;

  wrapper.style.left = (clientX - wrapperWidth / 2) + "px";
  wrapper.style.top = (clientY - wrapperHeight / 2) + "px";
  wrapper.style.right = "auto";
  wrapper.style.bottom = "auto";
  wrapper.style.position = "fixed";
}

if (wrapper) {
  wrapper.addEventListener("mousedown", function (e) {
    if (e.button === 0) {
      isDragging = true;
      wasDragging = false;
      wrapper.style.cursor = "grabbing";
      e.preventDefault();
    }
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      moveWrapperInstant(e.clientX, e.clientY);
      wasDragging = true;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    wrapper.style.cursor = "grab";
  });

  wrapper.addEventListener("touchstart", function () {
    isDragging = true;
    wasDragging = false;
  }, { passive: false });

  document.addEventListener("touchmove", function (e) {
    if (isDragging) {
      e.preventDefault();
      const touch = e.touches[0];
      moveWrapperInstant(touch.clientX, touch.clientY);
      wasDragging = true;
    }
  }, { passive: false });

  document.addEventListener("touchend", function () {
    isDragging = false;
  }, { passive: false });

  wrapper.addEventListener("click", function (e) {
    if (wasDragging) {
      e.preventDefault();
      wasDragging = false;
    } else {
      window.open("https://www.facebook.com/share/1BS7X4YCMY/", "_blank");
    }
  });
}

const hint = document.getElementById("floating-hint");
function showHint() {
  if (hint) {
    hint.style.opacity = 1;
    setTimeout(() => {
      hint.style.opacity = 0;
    }, 2000);
  }
}
setInterval(showHint, 5000);

// Product carousel (chỉ chạy nếu tồn tại)
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.product-carousel');
  if (carousel) {
    const originalProducts = [...carousel.children];
    let index = 0;
    let itemsPerView = 4;

    function updateItemsPerView() {
      if (window.innerWidth < 480) itemsPerView = 1;
      else if (window.innerWidth < 768) itemsPerView = 2;
      else itemsPerView = 4;
    }

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    originalProducts.forEach(product => {
      const clone = product.cloneNode(true);
      carousel.appendChild(clone);
    });

    function slideNext() {
      index++;
      const totalItems = carousel.children.length;
      const maxIndex = totalItems - itemsPerView;

      if (index > maxIndex) {
        carousel.style.transition = "none";
        index = 0;
        carousel.style.transform = `translateX(0)`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            carousel.style.transition = "transform 0.5s ease";
            index++;
            carousel.style.transform = `translateX(-${index * (100 / itemsPerView)}%)`;
          });
        });
      } else {
        carousel.style.transform = `translateX(-${index * (100 / itemsPerView)}%)`;
      }
    }

    setInterval(slideNext, 3000);
  }
});

// Giỏ hàng
document.addEventListener("DOMContentLoaded", () => {
  const purchaseButtons = document.querySelectorAll(".purchase");

  purchaseButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = btn.closest(".product");

      const title = product.querySelector("h3")?.innerText || "Không tên";
      const priceText = product.querySelector(".price")?.innerText || "0";
      const price = parseInt(priceText.replace(/\D/g, ""));
      const img = product.querySelector("img")?.getAttribute("src") || "";

      const item = { title, price, img };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`🛒 Đã thêm "${title}" vào giỏ hàng!`);
    });
  });

  // Hiển thị giỏ hàng trong cart.html
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  if (cartItemsContainer && cartTotalEl) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Giỏ hàng đang trống.</p>";
    } else {
      cart.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
          <div style="display:flex; align-items:center; gap:10px; margin: 10px 0;">
            <img src="${item.img}" alt="${item.title}" style="width: 80px; height: auto;">
            <div>
              <h4>${item.title}</h4>
              <p>${item.price.toLocaleString()} đ</p>
            </div>
          </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
      });
    }

    cartTotalEl.innerText = total.toLocaleString();
  }
});

// Xoá giỏ hàng
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

// Click vào ảnh sản phẩm để chuyển sang chitiet.html
document.querySelectorAll(".product img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    const product = img.closest(".product");
    const title = product.querySelector("h3")?.innerText || "Không tên";
    const priceText = product.querySelector(".price")?.innerText || "0";
    const price = parseInt(priceText.replace(/\D/g, ""));
    const imgSrc = img.getAttribute("src");

    const item = {
      title: title,
      price: price,
      img: imgSrc,
      description: productDescriptions[title] || "Sản phẩm thủ công độc đáo, được làm từ len chất lượng cao."
    };

    localStorage.setItem("product-detail", JSON.stringify(item));
    window.location.href = "chitiet.html";
  });
});
