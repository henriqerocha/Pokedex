document.getElementById('searchBar').addEventListener('focus', function() {
    this.placeholder = '';
  });
  
  document.getElementById('searchBar').addEventListener('blur', function() {
    this.placeholder = 'Pesquise aqui seu Pokemon';
  });