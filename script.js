const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f34b69de2c7c4686a6c51d0ad286543c";

async function setValue() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articles = data.articles;
        const container = $("#news-container");

        // container.empty();   

        articles.forEach(article => {
            const cardHtml = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            container.append(cardHtml);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

setValue();
