(() => {
  const contextNode = document.querySelector('#site-context');
  const researchNode = document.querySelector('#research-context');
  const context = contextNode ? JSON.parse(contextNode.textContent) : {};
  const research = researchNode ? JSON.parse(researchNode.textContent) : [];
  const preview = document.querySelector('#page-preview');
  const previewTabs = document.querySelectorAll('.preview-tab');
  const form = document.querySelector('#change-form');
  const request = document.querySelector('#change-request');
  const requestCount = document.querySelector('#request-count');
  const status = document.querySelector('#form-status');
  const draftPanel = document.querySelector('#draft-panel');
  const draft = document.querySelector('#codex-draft');
  const copyButton = document.querySelector('#copy-draft');
  const copyStatus = document.querySelector('#copy-status');
  const resetButton = document.querySelector('#reset-draft');

  const pageDetails = {
    '/': 'Homepage',
    '/publications/': 'Research page',
    '/writing/': 'Writing page'
  };

  function contextSummary() {
    const projects = research.map((item) => item.title).join('; ');
    return [
      `Name: ${context.name || 'Jinghao Chen'}`,
      `Affiliation: ${context.affiliation || 'not specified'}`,
      `Current interests: ${(context.interests || []).join(', ')}`,
      `Research projects currently listed: ${projects || 'none'}`
    ].join('\n');
  }

  function pageFromPreview() {
    const active = document.querySelector('.preview-tab.is-active');
    const path = active ? active.dataset.preview : '/';
    return `${pageDetails[path] || 'Homepage'} (${path})`;
  }

  function buildDraft() {
    const requestedChange = request.value.trim();
    const currentContext = contextSummary();

    return `请在 jhChen4future/jhChen4future.github.io 仓库中完成一次小范围、可维护的主页更新。

目标页面：${pageFromPreview()}

用户的自然语言修改需求：
“${requestedChange}”

当前站点上下文：
${currentContext}

实现约束：
- 先理解整段需求，再自行判断涉及的页面、组件或数据文件，不要要求我提前分类。
- 保持现有的 Jekyll 结构、响应式布局和明暗主题。
- 个人资料、研究项目和动态优先更新 _data/ 下的 YAML 数据文件，不要把一次性内容硬编码到多个页面。
- 不要删除原始研究材料或 legacy-theme/ 中的存档，除非我明确要求。
- 修改完成后运行 Jekyll build，并检查链接、移动端布局和可访问性。
- 如果需求存在歧义，先列出假设和一份简短修改计划，再执行。

完成后请反馈：
1. 修改了哪些文件；
2. 具体改了什么；
3. 如何验证；
4. 如有需要我确认的文案或事实，请单独列出。`;
  }

  previewTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      previewTabs.forEach((item) => {
        item.classList.remove('is-active');
        item.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      preview.src = tab.dataset.preview;
      preview.title = `Preview of the ${tab.dataset.label} page`;
    });
  });

  request.addEventListener('input', () => {
    if (request.value.length > 1200) {
      request.value = request.value.slice(0, 1200);
    }
    requestCount.textContent = request.value.length;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!request.value.trim()) {
      status.textContent = 'Add a sentence or two so the brief has something concrete to carry forward.';
      request.focus();
      return;
    }

    draft.value = buildDraft();
    draftPanel.hidden = false;
    status.textContent = 'Draft ready. Read it once, then copy it to Codex.';
    draft.focus();
    draft.select();
  });

  copyButton.addEventListener('click', async () => {
    if (!draft.value) return;
    try {
      await navigator.clipboard.writeText(draft.value);
      copyStatus.textContent = 'Copied to clipboard.';
    } catch (error) {
      draft.focus();
      draft.select();
      document.execCommand('copy');
      copyStatus.textContent = 'Copied to clipboard.';
    }
  });

  resetButton.addEventListener('click', () => {
    draftPanel.hidden = true;
    copyStatus.textContent = '';
    status.textContent = '';
    request.focus();
  });
})();
