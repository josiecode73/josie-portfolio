# 十七冰淇淋 繁體中文版首頁

## 專案概述

本專案是根據江崎固力果官方網站 [https://cp.glico.com/17ice/](https://cp.glico.com/17ice/) 的設計風格，建立的繁體中文版本首頁網站。網站完全採用靜態 HTML、CSS 和 JavaScript 開發，無需後端伺服器即可運行。

## 網站特色

### 設計風格
- **日系簡潔設計**：保留原始網站的現代、簡潔的日系設計風格
- **紅色品牌色調**：使用 #E8001C 紅色作為主要品牌色
- **響應式設計**：完全支援桌面、平板和手機設備
- **流暢動畫**：包含輪播、滾動動畫和過渡效果

### 功能模組

#### 1. Header 導航
- 固定頂部導航欄，紅色背景
- Glico 品牌 logo 和社群媒體連結
- 完整的導航菜單，支援行動裝置漢堡選單
- 響應式設計，在小螢幕上自動折疊

#### 2. Hero 區塊
- 全寬輪播區域，展示三個主要活動/內容
- 自動播放功能（每 4 秒切換）
- 點擊導航點可手動切換
- 浮動應用程式按鈕

#### 3. 內容區塊
- **商品陣容**：展示冰淇淋產品線
- **關於 17 冰**：品牌故事和背景
- **17 冰景點**：銷售地點資訊
- **17 冰地圖**：位置搜尋功能
- **應用程式**：行動應用介紹
- **活動**：可滑動的活動輪播
- **追蹤我們**：Instagram 相片牆

#### 4. Footer
- 完整的導航連結
- Glico 品牌網站連結
- 社群媒體圖標
- 法律文件連結
- 版權資訊

#### 5. 互動功能
- 回到頂部按鈕
- 平滑滾動導航
- 活動滑塊導航
- Cookie 同意橫幅
- 行動選單切換

## 文件結構

```
17ice-website/
├── index.html          # 主要 HTML 檔案
├── style.css           # 完整的 CSS 樣式表
├── script.js           # JavaScript 互動功能
├── images/             # 圖片資源目錄
│   ├── hero-main.png
│   ├── products-banner.png
│   ├── about-banner.png
│   ├── spot-banner.png
│   ├── map-banner.png
│   ├── app-banner.png
│   ├── campaign1.png
│   ├── campaign2.png
│   ├── campaign3.png
│   ├── campaign-banner.png
│   ├── instagram1.jpg
│   ├── instagram2.jpg
│   ├── instagram3.jpg
│   ├── instagram4.jpg
│   ├── instagram5.jpg
│   └── instagram6.jpg
└── README.md           # 本文檔
```

## 使用方式

### 本地預覽

#### 方法 1：使用 Python HTTP 伺服器
```bash
cd 17ice-website
python3 -m http.server 8000
```
然後在瀏覽器中訪問 `http://localhost:8000`

#### 方法 2：使用 Node.js http-server
```bash
cd 17ice-website
npx http-server
```

#### 方法 3：直接開啟 HTML 檔案
直接在瀏覽器中開啟 `index.html` 檔案（某些功能可能受限）

### 部署到網路

1. **靜態網站託管**：可部署到任何支援靜態檔案的託管服務，如：
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3 + CloudFront

2. **上傳檔案**：只需上傳整個 `17ice-website` 目錄的所有檔案即可

3. **無需配置**：不需要任何伺服器端配置或資料庫

## 技術堆疊

### 前端技術
- **HTML5**：語義化標記
- **CSS3**：現代樣式，包含 Grid、Flexbox、動畫
- **JavaScript（ES6+）**：原生 JavaScript，無框架依賴

### 字體
- **Noto Sans TC**：繁體中文字體（Google Fonts）
- **Montserrat**：英文字體（Google Fonts）

### 相容性
- Chrome/Edge：完全支援
- Firefox：完全支援
- Safari：完全支援
- 行動瀏覽器：完全支援

## 自訂修改指南

### 修改文字內容
編輯 `index.html` 檔案中的相應文字部分。所有可見文字都在 HTML 中，易於修改。

### 修改顏色
在 `style.css` 中修改 CSS 變數：
```css
:root {
  --red: #E8001C;           /* 主色調 */
  --red-dark: #c8001a;      /* 深紅色 */
  --white: #ffffff;
  --light-gray: #f5f5f5;
  --gray: #999999;
  --dark: #333333;
}
```

### 替換圖片
將新圖片放入 `images/` 目錄，然後在 HTML 中更新圖片路徑。建議保持相同的圖片尺寸以維持版面。

### 修改導航連結
編輯 `index.html` 中的 `<a>` 標籤 `href` 屬性，將其指向實際的頁面或外部連結。

### 調整動畫速度
在 `style.css` 中修改動畫時間值：
```css
.hero-slide {
  transition: opacity 0.8s ease;  /* 修改此值 */
}
```

## 瀏覽器相容性

| 瀏覽器 | 版本 | 支援狀態 |
|--------|------|--------|
| Chrome | 最新 | ✅ 完全支援 |
| Firefox | 最新 | ✅ 完全支援 |
| Safari | 最新 | ✅ 完全支援 |
| Edge | 最新 | ✅ 完全支援 |
| IE 11 | - | ❌ 不支援 |

## 效能最佳化

- **圖片最佳化**：所有圖片已壓縮以減少檔案大小
- **CSS 最小化**：樣式表已最佳化
- **JavaScript 最小化**：指令碼已最佳化
- **無外部依賴**：無需載入第三方框架庫

## 授權與使用

本網站是根據授權建立的繁體中文版本。所有內容、設計和程式碼的使用應遵守相關法律和授權協議。

## 技術支援

如有任何問題或需要進一步的自訂，請參考以下檔案：
- `index.html` - 網站結構和內容
- `style.css` - 樣式和設計
- `script.js` - 互動功能

## 更新日誌

### v1.0 (2026-03-15)
- 初始版本發布
- 完整的首頁設計實現
- 所有主要功能實現
- 響應式設計完成
- 繁體中文內容本地化

---

**建立日期**：2026年3月15日  
**版本**：1.0  
**語言**：繁體中文
