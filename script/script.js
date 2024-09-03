document.getElementById('helpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            Swal.fire({
                title: 'Terkirim!',
                text: 'Pesan Anda berhasil dikirim.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            this.reset(); // Reset form setelah sukses
        } else {
            Swal.fire({
                title: 'Gagal!',
                text: 'Terjadi kesalahan, coba lagi nanti.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }).catch(error => {
        Swal.fire({
            title: 'Gagal!',
            text: 'Terjadi kesalahan jaringan, coba lagi nanti.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
});

window.onload = function() {
    function checkMaintenanceTime() {
        const now = new Date();
        const hours = now.getHours();
        console.log("Current hour: " + hours);

        if (hours >= 23 || hours < 1) {
            const maintenanceMessage = document.getElementById('maintenanceMessage');
            if (maintenanceMessage) {
                console.log("Menampilkan pesan maintenance");
                maintenanceMessage.style.display = 'block'; // Tampilkan pesan
            } else {
                console.error("Elemen #maintenanceMessage tidak ditemukan!");
            }
        }
    }

    checkMaintenanceTime();
};

function showPhoto() {
    const studentName = document.getElementById('studentName').value.trim();
    const photoDisplay = document.getElementById('photoDisplay');
    const studentPhoto = document.getElementById('studentPhoto');
    const errorMessage = document.getElementById('errorMessage');
    const downloadButton = document.getElementById('downloadButton');
    
    // Hapus spinner yang ada sebelumnya, jika ada
    const existingSpinner = document.getElementById('spinner');
    if (existingSpinner) {
        existingSpinner.remove();
    }

    // Buat spinner baru dan tambahkan ke dalam DOM
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.className = 'spinner';
    photoDisplay.appendChild(spinner);

    // Pastikan elemen photoDisplay terlihat saat spinner ditampilkan
    photoDisplay.style.display = 'block';
    spinner.style.display = 'block';

    // Sembunyikan elemen-elemen lainnya saat loading
    studentPhoto.style.display = 'none';
    errorMessage.style.display = 'none';
    downloadButton.style.display = 'none';

    if (studentName) {
        setTimeout(function() {
            const photoPath = `Database/${studentName}.jpg`;
            studentPhoto.src = photoPath;

            studentPhoto.onerror = function() {
                spinner.style.display = 'none';
                errorMessage.textContent = "Foto tidak ditemukan. Pastikan username Instagram sesuai dengan yang didaftarkan.";
                errorMessage.style.display = 'block';
            };

            studentPhoto.onload = function() {
                spinner.style.display = 'none';
                studentPhoto.style.display = 'block';
                downloadButton.href = photoPath;
                downloadButton.style.display = 'block';
            };
        }, 1500);
    } else {
        spinner.style.display = 'none';
        errorMessage.textContent = "Masukkan username Instagram yang telah didaftarkan.";
        errorMessage.style.display = 'block';
    }
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === 'I' || e.key === 'U' || e.key === 'J')) {
        e.preventDefault();
    }
};

document.getElementById('studentName').addEventListener('input', function(e) {
    const value = e.target.value;
    if (value[0] !== '@') {
        e.target.value = '@' + value.replace(/@/g, ''); // memastikan @ ada di awal dan tidak ada @ lain
    }
});

// JavaScript untuk mengalihkan halaman jika dibuka di desktop
if (window.innerWidth >= 768) {
    document.body.innerHTML = "<div style='text-align:center; padding:50px; font-size:1.5em; color:red;'>Halaman ini hanya dapat diakses melalui perangkat mobile.</div>";
}
