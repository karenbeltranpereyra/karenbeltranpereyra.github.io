
fetch('../assets/previews.json')
    .then(response => response.json())
    .then(previews => {
        const imageContainer = document.getElementById('imageContainer');

        previews.forEach(preview => {
            const wrapper = document.createElement('div');
            wrapper.className = 'imageWrapper';

            const imgElement = document.createElement('img');
            imgElement.src = preview.preview;
            imgElement.alt = preview.file;

            wrapper.appendChild(imgElement);
            imageContainer.appendChild(wrapper);
        });
    })
    .catch(error => {
        console.error('Error loading previews:', error);
    });
