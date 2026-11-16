(() => {
  const form = document.querySelector('#post-writer');
  const title = document.querySelector('#post-title');
  const date = document.querySelector('#post-date');
  const content = document.querySelector('#post-content');
  const token = document.querySelector('#post-token');
  const submit = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#publish-status');
  const endpoint = 'https://api.github.com/repos/jhChen4future/jhChen4future.github.io/contents/_posts/';
  let draftId = crypto.randomUUID().slice(0, 12);

  function today() {
    return new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Shanghai' });
  }

  function escapePostText(text) {
    return text.replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('{', '&#123;');
  }

  function base64(text) {
    const bytes = new TextEncoder().encode(text);
    return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(''));
  }

  function publishError(code) {
    if (code === 401) return 'GitHub could not authenticate this token. Check that it is valid and has not expired.';
    if (code === 403 || code === 404) return 'GitHub refused the write. Check the repository and Contents permissions for the token.';
    if (code === 409 || code === 422) return 'GitHub could not create this post. Check the Posts page before retrying.';
    return `GitHub could not publish the post (HTTP ${code}). Your text is still in the form.`;
  }

  date.max = today();
  date.value = date.max;
  submit.disabled = false;
  window.addEventListener('pageshow', () => { token.value = ''; });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submit.disabled) return;

    const postTitle = title.value.trim();
    const postDate = date.value;
    const postContent = content.value.trim();
    if (!postTitle || !postContent || !/^\d{4}-\d{2}-\d{2}$/.test(postDate) || postDate > today()) {
      status.textContent = 'Enter a title, some content, and a date no later than today.';
      return;
    }

    const slug = postTitle.normalize('NFKD').toLowerCase()
      .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')
      .slice(0, 64).replace(/^-+|-+$/g, '') || 'post';
    const postName = `${postDate}-${slug}-${draftId}`;
    const source = [
      '---',
      'layout: post',
      'nav: writing',
      `title: ${JSON.stringify(postTitle)}`,
      `date: ${postDate} 00:00:00 +0800`,
      `permalink: /writing/${postName}/`,
      '---',
      `<div class="post-text">${escapePostText(postContent)}</div>`,
      ''
    ].join('\n');

    submit.disabled = true;
    const authorization = `Bearer ${token.value.trim()}`;
    token.value = '';
    status.textContent = 'Publishing to GitHub…';

    try {
      const response = await fetch(`${endpoint}${postName}.md`, {
        method: 'PUT',
        redirect: 'error',
        credentials: 'omit',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: authorization,
          'Content-Type': 'application/json',
          'X-GitHub-Api-Version': '2022-11-28'
        },
        body: JSON.stringify({
          message: `Publish post: ${postTitle}`,
          content: base64(source),
          branch: 'main'
        })
      });

      if (response.status !== 201) {
        status.textContent = publishError(response.status);
        return;
      }

      form.reset();
      date.max = today();
      date.value = date.max;
      draftId = crypto.randomUUID().slice(0, 12);
      status.textContent = 'Post saved to GitHub. It will appear on the Posts page after GitHub Pages finishes rebuilding.';
    } catch {
      status.textContent = 'The connection ended before GitHub confirmed the write. Check the Posts page before retrying. Your text is still in the form.';
    } finally {
      submit.disabled = false;
    }
  });
})();
