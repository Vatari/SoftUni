function extractText() {
    let area = document.getElementById('result');
    let items = document.querySelector('#items, li')

    area.textContent = items.textContent
}