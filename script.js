const apiUrl = `https://google-news13.p.rapidapi.com/business?lr=en-US`;

async function setValue(apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '393d001e34mshd93a6eb015776e8p18dc36jsn28c0537eaca0',
                'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
            }
        });
        const data = await response.json();
        const articles = data.data;
        const container = $("#news-container");

        // Clear previous content
        container.empty();  
        
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

// Initial call
setValue(apiUrl);

$(".home").on("click", function() {
    console.log("hello");
    location.reload();
});

$('.dropdown-item').on('click', function(event) {
    event.preventDefault();
    var selectedCategory = $(this).text();

    console.log(selectedCategory);

    $(".category-name").text(selectedCategory);
    
    const apiUrl = `https://google-news13.p.rapidapi.com/${selectedCategory}?lr=en-US`;

    setValue(apiUrl);
});
