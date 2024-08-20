// Open the sidebar
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.querySelector(".openbtn").classList.add("active"); // Menambahkan class active ke tombol hamburger
}

// Close the sidebar
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.querySelector(".openbtn").classList.remove("active"); // Menghapus class active dari tombol hamburger
}

// Function to toggle sidebar
function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.querySelector(".openbtn");
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
        openNav();
    } else {
        closeNav();
    }
}
