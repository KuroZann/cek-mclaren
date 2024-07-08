document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        addColorToTable(name);
        document.getElementById('nameInput').value = '';
    }
});

const colors = [
    {name: 'warna ungu', image: 'assets/IMG-001.jpg'},
    {name: 'warna kuning', image: 'assets/IMG-002.jpg'},
    {name: 'warna biru', image: 'assets/IMG-003.jpg'},
    {name: 'warna merah', image: 'assets/IMG-004.jpg'},
    {name: 'warna putih', image: 'assets/IMG-005.jpg'},
    {name: 'warna hijau', image: 'assets/IMG-006.jpg'},
    {name: 'warna hitam', image: 'assets/IMG-007.jpg'},
    {name: 'warna orange', image: 'assets/IMG-008.jpg'}
];

// Function to hash the name and map it to an index
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return hash;
}

function getColorByName(name) {
    const index = Math.abs(hashCode(name)) % colors.length;
    return colors[index];
}

function addColorToTable(name) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    
    const color = getColorByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = color.image;
    image.alt = color.name;
    image.style.width = '200px';
    imageCell.appendChild(image);

    const colorNameCell = document.createElement('td');
    colorNameCell.textContent = color.name;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(colorNameCell);

    // Add new row to the top of the table body
    tableBody.insertBefore(row, tableBody.firstChild);
}