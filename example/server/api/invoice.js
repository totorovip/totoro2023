// src/server/api/invoice.js 处理用户发票信息模块

// 发票列表
const invoiceList = [
    { id: '2022031801', name: '淘宝购物', amount: '172.50', time: '2022-03-18 13:53' },
    { id: '2022031802', name: '美团买菜', amount: '112.25', time: '2022-03-17 13:53' },
    { id: '2022031803', name: '考拉海购', amount: '612.67', time: '2022-03-16 13:53' },
    { id: '2022031804', name: '京东吉他', amount: '812.19', time: '2022-03-15 13:53' },
]

const getInvoiceList = async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = { code: 0, invoiceList }
}

module.exports = {
    'POST /invoice/list': getInvoiceList
}
