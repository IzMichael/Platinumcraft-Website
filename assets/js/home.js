function showNews() {
    var news = document.getElementById("news");
    news.innerHTML = '<div class="flex flex-row justify-between items-center"><h1 class="text-3xl">News and Updates</h1><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div> <zero-md src="/news.md"></zero-md>';
    news.classList.add("shown");
}

function hideNews() {
    var news = document.getElementById("news");
    news.innerHTML = '<div class="flex flex-row justify-between items-center"><h1 class="text-3xl">News and Updates</h1><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>';
    news.classList.remove("shown");
}

function toggle() {
    var news = document.getElementById("news")
    if (news.classList.contains("shown")) {
        hideNews();
    } else {
        showNews();
    }
}

hideNews();