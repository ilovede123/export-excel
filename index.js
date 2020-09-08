/**
 * @param {Array} titleList 传入的标题数据和需要导出的key 
 * @param {Array} dataSource 传入的数据源
 * @param {String} fileName 导出的文件名
 */
function tableToExcel(titleList = [], dataSource = [], fileName = "") {
    //要导出的标题
    // 处理数据 这样做是为了在很多数据的时候 导出自己想要的数据
    let newDataSource = []
    for (let i = 0; i < dataSource.length; i++) {
        let tep = {};
        titleList.forEach(({ key }) => { //key是colums中的每个key(name..age...)
            tep[key] = dataSource[i][key]
        })
        newDataSource.push(tep)
    }
    let str = '<tr>';
    for (let i = 0; i < titleList.length; i++) {
        str += `<td>${titleList[i].title + '\t'}</td>`;
    }
    str += '</tr>';
    str += '<tr>';
    for (let i = 0; i < newDataSource.length; i++) {
        for (let item in newDataSource[i]) {
            let news = newDataSource[i][item] ? newDataSource[i][item] : "";
            //style="mso-number-format:\'@\'" =>excel科学计数
            //\t制表符 tab到下一行
            str += `<td style="mso-number-format:\'@\'">${news + '\t'}</td>`;
        }
        str += '</tr>';
    }
    var uri = 'data:application/vnd.ms-excel;base64,';
    var template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
    xmlns:x="urn:schemas-microsoft-com:office:excel" 
    xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
      <x:Name>${worksheet}</x:Name>
      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
      </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head><body><table>${str}</table></body></html>`;
    var base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
    var link = document.createElement("a");
    link.href = uri + base64(template);
    link.download = fileName ? fileName : "数据.xls";//当前下载的excel名称
    document.body.appendChild(link);
    link.innerHTML = "点击下载"
    console.log(unescape(encodeURIComponent(template)))
    link.click();
    document.body.removeChild(link);
}
module.exports = tableToExcel;