const apiUrl = "https://inshortsapi.vercel.app/news?category=sports";

async function setValue() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articles = data.data;
        const container = $("#news-container");

        // container.empty();  
        
        console.log(articles);

        articles.forEach(article => {
            const cardHtml = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${article.imageUrl}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.content}</p>
                            <a href="${article.readMoreUrl}" class="btn btn-primary">Read More</a>
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
