gitbook.events.bind("page.change", function() {
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        console.log("Language switcher found!"); // 添加调试信息
        switcher.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                const lang = event.target.getAttribute('href').split('=')[1];
                console.log(`Switching to language: ${lang}`); // 添加调试信息
                window.location.href = `/${lang}/index.html`; // 根据您的文件结构调整路径
            }
        });
    } else {
        console.log("Language switcher not found!"); // 添加调试信息
    }
});
