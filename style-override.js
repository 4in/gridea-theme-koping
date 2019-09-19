const generateOverride = (params = {}) => {
  let result = '';

  // 正文内容文字大小 - textSize
  if (params.textSize && params.textSize !== '16px') {
    result += `
      .post-detail .post .post-content p {
        font-size: ${params.textSize};
      }
      `;
  }

  // 标题对齐 - titleAlign: center(默认)、left、right
  if (params.titleAlign) {
    result += `
      .post-container .post .post-title {
        text-align: ${params.titleAlign};
      }
      .post-container .post .post-info {
        text-align: ${params.titleAlign};
      }
      .post-detail .post .post-title {
        text-align: ${params.titleAlign};
      }
      .post-detail .post .post-info {
        text-align: ${params.titleAlign};
      }
    `;
  }

  // 网站字体
  if (params.siteFont) {
    result += `
      body {
        font-family: ${params.siteFont};
      }
    `;
  }

  // 是否显示文章目录
  if (typeof params.openPostToc !== 'undefined' && !params.openPostToc) {
    result += `
      .toc-container {
        display: none;
      }
    `;
  }
  // 侧边栏背景色 - sidebarBgColor
  if (params.sidebarBgColor && params.sidebarBgColor !== '#fff') {
    result += `
      .sidebar {
        background: ${params.sidebarBgColor};
      }
    `;
  }

  // 内容区背景色 - contentBgColor
  if (params.contentBgColor && params.contentBgColor !== '#fff') {
    result += `
      .main {
        background: ${params.contentBgColor};
      }
    `;
  }

  // 网页背景色 - pageBgColor
  if (params.pageBgColor && params.pageBgColor !== '#fff') {
    result += `
      body {
        background: ${params.pageBgColor};
      }
    `;
  }

  // 文字颜色 - textColor
  if (params.textColor && params.textColor !== 'rgba(0, 0, 0, 0.86)') {
    result += `
      body {
        color: ${params.textColor};
      }
    `;
  }

  // 链接颜色 - linkColor
  if (params.linkColor && params.linkColor !== 'rgba(0,0,0,.98)') {
    result += `
      a {
        color: ${params.linkColor};
      }
    `;
  }

  // 链接 Hover 颜色 - linkHoverColor
  if (params.linkHoverColor && params.linkHoverColor !== '#006cff') {
    result += `
      a:hover {
        color: ${params.linkHoverColor};
      }
    `;
  }

  if (params.customCss) {
    result += `
      ${params.customCss}
    `;
  }


  console.log('result', result);

  return result;
};

module.exports = generateOverride;
