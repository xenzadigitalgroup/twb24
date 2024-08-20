// Function to clear the input field
function clearInput() {
    const input = document.getElementById('studentName');
    input.value = ''; // Hapus isi input
    input.focus(); // Fokus kembali pada input jika diinginkan
    document.getElementById('photoDisplay').style.display = 'none'; // Sembunyikan foto dan tombol download
    document.getElementById('studentPhoto').style.display = 'none';
    document.getElementById('downloadButton').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none'; // Sembunyikan pesan error
}

// Tambahkan event listener untuk menunjukkan tombol silang jika ada nilai di input
document.getElementById('studentName').addEventListener('input', function(e) {
    const clearBtn = document.querySelector('.clear-btn');
    if (e.target.value) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
    }
});