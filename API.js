fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((objData) => {
    // console.log(objData[0].title);
    let tableData = "";
    objData.map((values) => {
      tableData += ` <tr>
      <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
      <td><img src="${values.image}" alt="print"/><c/td>
    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((err) => {
    console.log(err);
  });
