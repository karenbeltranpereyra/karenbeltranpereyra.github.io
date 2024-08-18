document.addEventListener("DOMContentLoaded", function() {
    const data = [
        {
            title: "Strategy development",
            content: [
                "Establish and maintain solid client relationships.",
                "Analyze clients’ needs and expectations to establish strategic recommendations and budget proposals.",
                "Counsel in UX/UI design, content structure and technical solutions"
            ],
            imageUrl: "assets/computer.svg"
        },
        {
            title: "Digital production",
            content: [
                "Branded website, e-commerce website for multidevices (website restructuring and redesigning, webmastering and TMA)",
                "Activation campaign: event mini-site, social media mechanism, mobile app, promotional communication tools...",
                "Brand content: motion production, photography, story-telling"
            ],
            imageUrl: "assets/play.svg"
        },
        {
            title: "Visual and technical",
            content: [
                "Operating Systems: MACOSX, Windows",
                "Productivity: Office Suite,  Asana, Monday",
                "Analisys and Digital Marketing: Google Analytics, Kissmetrics, MailChimp, FB Bussines",
            ],
            imageUrl: "assets/tablet.svg"
        }
    ];

    const container = document.getElementById('container');

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.title;

        const content = document.createElement('div');
        item.content.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            content.appendChild(p);
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(content);

        container.appendChild(card);
    });
});
