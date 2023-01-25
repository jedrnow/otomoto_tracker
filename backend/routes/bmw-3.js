var express = require("express");
var router = express.Router();
const XLSX = require("xlsx");

/* GET bmw_3 listing. */
router.get("/", function (req, res, next) {
  let workbook = XLSX.readFile("excel/BMW_3.xlsx");
  let sheet = workbook.Sheets[workbook.SheetNames[0]];
  let rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  let header = rows[0];
  let data = rows.slice(1);
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let obj = {};
    for (let j = 0; j < header.length; j++) {
      obj[header[j]] = data[i][j];
    }
    result.push(obj);
  }

  res.send(result);
});

module.exports = router;
