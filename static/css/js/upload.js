// upload.js - Sprint 2 (drag and drop + browse logic)

const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const fileNameText = document.getElementById('fileName');
const submitBtn = document.getElementById('submitBtn');

// open file picker on browse click
browseBtn.addEventListener('click', () => {
    fileInput.click();
});

// when a file is picked manually
fileInput.addEventListener('change', () => {
    handleFile(fileInput.files[0]);
});

// drag events
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dragover');

    const droppedFile = e.dataTransfer.files[0];
    fileInput.files = e.dataTransfer.files;
    handleFile(droppedFile);
});

function handleFile(file) {
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
        alert('Only CSV files are allowed for now.');
        fileInput.value = "";
        return;
    }

    fileNameText.textContent = "Selected: " + file.name;
    submitBtn.disabled = false;
}