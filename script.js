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

// Mua hàng popup
document.querySelectorAll("button.purchase").forEach(button => {
    button.addEventListener("click", () => {
        const popup = document.getElementById("popup");
        popup.classList.remove("hidden");
        popup.classList.add("show");
        setTimeout(() => {
            popup.classList.remove("show");
            popup.classList.add("hidden");
        }, 2000);
    });
});

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
    }, 60000); // 1 phút
});

// Facebook floating button
const wrapper = document.getElementById("facebook-floating-wrapper");
let isDragging = false;
let wasDragging = false;

// Di chuyển icon chính giữa điểm chạm
function moveWrapperInstant(clientX, clientY) {
    const wrapperWidth = wrapper.offsetWidth;
    const wrapperHeight = wrapper.offsetHeight;

    wrapper.style.left = (clientX - wrapperWidth / 2) + "px";
    wrapper.style.top = (clientY - wrapperHeight / 2) + "px";
    wrapper.style.right = "auto";
    wrapper.style.bottom = "auto";
    wrapper.style.position = "fixed";
}

// Mouse events
wrapper.addEventListener("mousedown", function (e) {
    if (e.button === 0) { // Chỉ chuột trái
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

// Touch events
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

// Mở link nếu không kéo
wrapper.addEventListener("click", function (e) {
    if (wasDragging) {
        e.preventDefault(); // ngăn mở link nếu vừa kéo
        wasDragging = false;
    } else {
        window.open("https://www.facebook.com/share/1BS7X4YCMY/", "_blank");
    }
});

// Hint logic
const hint = document.getElementById("floating-hint");
function showHint() {
    hint.style.opacity = 1;
    setTimeout(() => {
        hint.style.opacity = 0;
    }, 2000); // hiện 2 giây
}

setInterval(showHint, 5000); // cứ 5 giây hiện lại

setInterval(showHint, 3000);
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.product-carousel');
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

    // Clone sản phẩm để tạo hiệu ứng lặp
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
});
