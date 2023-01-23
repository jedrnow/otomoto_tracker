import Car from "./classes/car";
import * as XLSX from 'xlsx';

const exportToSpreadsheet = (title:string,data: Car[]) =>{
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    worksheet["!cols"] = Array<{wch:30}>(10);
    XLSX.utils.book_append_sheet(workbook, worksheet, `${title}`);
    XLSX.writeFile(workbook, `./excel/${title}.xlsx`);
    return;
}

export default exportToSpreadsheet;