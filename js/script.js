const menuItems = document.querySelectorAll(".menu-item");
const contentItems = document.querySelectorAll(".content-item");

// 초기 설정: 첫 번째 메뉴 항목과 내용 활성화
menuItems[0].classList.add("active");
contentItems[0].classList.add("active");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 모든 메뉴 항목의 active 클래스 제거
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // 클릭된 메뉴 항목에 active 클래스 추가
    item.classList.add("active");

    // 모든 콘텐츠 내용 숨기기
    contentItems.forEach((contentItem) => {
      contentItem.classList.remove("active");
    });

    // 클릭된 메뉴에 해당하는 콘텐츠 내용 표시
    const contentId = item.dataset.content;
    document.getElementById(contentId).classList.add("active");
  });
});
