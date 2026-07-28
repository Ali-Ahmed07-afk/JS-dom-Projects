const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => { 
  insert.innerHTML = `
  <div class='color'> 
  <table border="1" style="border-collapse: collapse;">
  <caption>Employee Details</caption>
  <thead>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === ' ' ? ' Space ': e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Data as of 2024</td>
    </tr>
  </tfoot>
 </table>
  </div>
  `
 })