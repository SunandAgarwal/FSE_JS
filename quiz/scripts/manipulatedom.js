window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    const txtNode = createTxtNode("Cell (" + i + ", 0)");
    let col1 = createTDNode(txtNode);
    const btn = document.createElement('button');
    btn.textContent = 'Edit text';
    let col2 = createTDNode(btn);
    btn.addEventListener('click', () => {
      const inp = document.createElement('input');
      inp.placeholder = "Edit Cell (" + i + ",0)";
      col1.replaceChild(inp, txtNode);
    });
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
