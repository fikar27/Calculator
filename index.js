// Menangkap elemen-elemen yang dibutuhkan dari HTML
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('button');

// Menambahkan event listener untuk setiap tombol
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

// Fungsi untuk menangani klik tombol
function handleClick(event) {
    const buttonValue = event.target.textContent;
    const currentDisplayValue = display.value;
  
    if (buttonValue === 'AC') {
      // Menghapus semua isi tampilan
      display.value = '';
    } else if (buttonValue === 'C') {
      // Menghapus satu karakter terakhir dari tampilan
      display.value = currentDisplayValue.slice(0, -1);
    } else if (buttonValue === '=') {
      try {
        // Memanggil fungsi evaluateExpression untuk mendapatkan hasil evaluasi
        const result = evaluateExpression(currentDisplayValue);
        // Memperbarui nilai tampilan dengan hasil evaluasi
        display.value = result.toString();
      } catch (error) {
        // Menampilkan pesan error jika terjadi kesalahan
        display.value = 'Error';
      }
    } else {
      // Menambahkan nilai tombol yang diklik ke tampilan
      display.value += buttonValue;
    }
  }
  
  // Fungsi untuk mengevaluasi ekspresi matematika
  function evaluateExpression(expression) {
    let result = 0;
    try {
      result = eval(expression);
    } catch (error) {
      throw new Error('Error evaluating expression');
    }
    return result;
  }