//產品資訊
var ProductData = [
  {
    ProductName: "滿版點點兩穿V領襯衫",
    ProductImg: "https://photo.queenshop.com.tw/01023102/01023102.jpg",
    OriginalPrice: 7200,
    DiscountPrice: 6900,
    Detail: [
      { Size: "XS", Inventory: 9 },
      { Size: "S", Inventory: 17 },
      { Size: "M", Inventory: 11 },
    ],
    isShelf: "true",
  },
  {
    ProductName: "V形織帶流蘇造型上衣",
    ProductImg: "https://photo.queenshop.com.tw/01037073/01037073.jpg",
    OriginalPrice: 5000,
    DiscountPrice: 4500,
    Detail: [
      { Size: "XS", Inventory: 10 },
      { Size: "S", Inventory: 5 },
      { Size: "M", Inventory: 11 },
    ],
    isShelf: "true",
  },
  {
    ProductName: "側開衩仙人掌印花短T",
    ProductImg: "https://photo.queenshop.com.tw/01037158/01037158.jpg",
    OriginalPrice: 3200,
    DiscountPrice: 2900,
    Detail: [
      { Size: "XS", Inventory: 10 },
      { Size: "S", Inventory: 13 },
      { Size: "M", Inventory: 10 },
    ],
    isShelf: "true",
  },
  {
    ProductName: "寬領設計條紋前短後長雪紡襯",
    ProductImg: "https://photo.queenshop.com.tw/01051351/01051351.jpg",
    OriginalPrice: 3500,
    DiscountPrice: 3500,
    Detail: [
      { Size: "XS", Inventory: 10 },
      { Size: "S", Inventory: 8 },
      { Size: "M", Inventory: 11 },
    ],
    isShelf: "true",
  },
  {
    ProductName: "造型素面繞脖七分袖棉T",
    ProductImg: "https://photo.queenshop.com.tw/01037213/01037213.jpg",
    OriginalPrice: 3000,
    DiscountPrice: 2500,
    Detail: [
      { Size: "XS", Inventory: 8 },
      { Size: "S", Inventory: 3 },
      { Size: "M", Inventory: 11 },
    ],
    isShelf: "false",
  },
  {
    ProductName: "細帶棉質半截式小可愛背心",
    ProductImg: "https://photo.queenshop.com.tw/01041531/01041531.jpg",
    OriginalPrice: 1600,
    DiscountPrice: 1500,
    Detail: [
      { Size: "XS", Inventory: 1 },
      { Size: "S", Inventory: 5 },
      { Size: "M", Inventory: 0 },
    ],
    isShelf: "true",
  },
]


//訂單資料
var OrdersData = [
  {
    ProductName: "滿版點點兩穿V領襯衫",
    ProductImg: "https://photo.queenshop.com.tw/01023102/01023102.jpg",
    ProductPrice: 6900,
    Orderer: "Elizabeth Olsen",
    timeStamp: "2018/06/09 17:33",
    timeStampPay: "-",
    StatusText: "未付款",
    Status: "Unpaid"
  },
  {
    ProductName: "V形織帶流蘇造型上衣",
    ProductImg: "https://photo.queenshop.com.tw/01037073/01037073.jpg",
    ProductPrice: 4500,
    Orderer: "Anna Kendrick",
    timeStamp: "2018/06/09 16:47",
    timeStampPay: "2018/06/09 17:45",
    StatusText: "已付款",
    Status: "Paid"
  },
  {
    ProductName: "側開衩仙人掌印花短T",
    ProductImg: "https://photo.queenshop.com.tw/01037158/01037158.jpg",
    ProductPrice: 2900,
    Orderer: "Emma Stone",
    timeStamp: "2018/06/09 16:45",
    timeStampPay: "2018/06/10 16:45",
    StatusText: "配送中",
    Status: "Shipping"
  },
  {
    ProductName: "寬領設計條紋前短後長雪紡襯",
    ProductImg: "https://photo.queenshop.com.tw/01051351/01051351.jpg",
    ProductPrice: 3500,
    Orderer: "Karen Gillan",
    timeStamp: "2018/06/09 14:33",
    timeStampPay: "2018/06/09 19:33",
    StatusText: "完成",
    Status: "Done"
  },
  {
    ProductName: "交叉V領碎花細肩帶上衣",
    ProductImg: "https://photo.queenshop.com.tw/01051373/01051373.jpg",
    ProductPrice: 2900,
    Orderer: "Pom Klementieff",
    timeStamp: "2018/06/08 17:33",
    timeStampPay: "2018/06/08 18:33",
    StatusText: "完成",
    Status: "Done"
  },
  {
    ProductName: "造型素面繞脖七分袖棉T",
    ProductImg: "https://photo.queenshop.com.tw/01037213/01037213.jpg",
    ProductPrice: 2500,
    Orderer: "Zoe Saldana",
    timeStamp: "2018/06/07 09:33",
    timeStampPay: "2018/06/07 12:09",
    StatusText: "完成",
    Status: "Done",
  },
  {
    ProductName: "細帶棉質半截式小可愛背心",
    ProductImg: "https://photo.queenshop.com.tw/01041531/01041531.jpg",
    ProductPrice: 1500,
    Orderer: "Gal Gadot",
    timeStamp: "2018/06/06 06:43",
    timeStampPay: "2018/06/06 7:39",
    StatusText: "完成",
    Status: "Done",
  },
]

//表單資料
var TableList = [
  { titleName: "訂購人", isShow: true },
  { titleName: "商品清單", isShow: true },
  { titleName: "訂單金額", isShow: true },
  { titleName: "訂單時間", isShow: true },
  { titleName: "付款時間", isShow: true },
  { titleName: "訂單狀態", isShow: true },
]

//訂單狀態
var OrderStatus = [
  { statusName: "未付款", isShow: true },
  { statusName: "已付款", isShow: true },
  { statusName: "配送中", isShow: true },
  { statusName: "完成", isShow: true },
]

//網站資料
var WebData = [
  {
    webIcon: "fab fa-wordpress",
    webUrl: "www.queenshop.com.tw",
    ThisweekRevenue: 18110,
    LastweekRevenue: 16060,
  },
  {
    webIcon: "fab fa-facebook",
    webUrl: "www.facebook.com",
    ThisweekRevenue: 13610,
    LastweekRevenue: 13060,
  },
  {
    webIcon: "fab fa-google",
    webUrl: "www.google.com.tw",
    ThisweekRevenue: 12600,
    LastweekRevenue: 16060,
  },
  {
    webIcon: "fab fa-instagram",
    webUrl: "www.instagram.com",
    ThisweekRevenue: 9080,
    LastweekRevenue: 12400,
  },
  {
    webIcon: "fab fa-yahoo",
    webUrl: "tw.yahoo.com",
    ThisweekRevenue: 1140,
    LastweekRevenue: 1140,
  },
]

//Chart 外觀
var ChartStyle = {
  borderWidth: 3,
  pointBorderWidth: 1,
  pointBorderColor: "#f2f2f2",
  pointRadius: 6,
}

//Chart 數據

var ChartData = {
  labels: ["3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun"],
  datasets: [
    {
      label: "銷貨收入",
      data: [7800, 8050, 6530, 5300, 10300, 8660, 7900],
      borderColor: "#7ed321",
      backgroundColor: "#7ed321",
      borderWidth: ChartStyle.borderWidth,
      pointBorderWidth: ChartStyle.pointBorderWidth,
      pointBorderColor: ChartStyle.pointBorderColor,
      pointRadius: ChartStyle.pointRadius,
      fill: false,
    },
    {
      label: "銷貨成本",
      data: [1300, 1550, 1700, 1300, 4100, 1250, 1400],
      borderColor: "#d0021b",
      backgroundColor: "#d0021b",
      borderWidth: ChartStyle.borderWidth,
      pointBorderWidth: ChartStyle.pointBorderWidth,
      pointBorderColor: ChartStyle.pointBorderColor,
      pointRadius: ChartStyle.pointRadius,
      fill: false,
    },
    {
      label: "銷貨毛利",
      data: [6500, 6500, 4830, 4000, 6200, 7410, 6500],
      borderColor: "#4a90e2",
      backgroundColor: "#4a90e2",
      borderWidth: ChartStyle.borderWidth,
      pointBorderWidth: ChartStyle.pointBorderWidth,
      pointBorderColor: ChartStyle.pointBorderColor,
      pointRadius: ChartStyle.pointRadius,
      fill: false,
    },
  ],
}

//分頁

var PageData = [
  { PageName: "首頁", PageStatus: true },
  { PageName: "訂單", PageStatus: false },
  { PageName: "產品", PageStatus: false },
]

// Vue data

var OutData = {
  ChartData: ChartData,
  Orders: OrdersData,
  Webs: WebData,
  DateRange: {
    Default: "最近7天",
    dateOption: ["今天", "昨天", "最近7天", "最近30天", "最近90天"]
  },
  Page: PageData,
  Tables: {
    TableList,
    TableSelect: ["訂購人", "商品清單", "訂單金額", "訂單時間", "付款時間", "訂單狀態"]
  },
  AddNewProduct: false,
}

var vm = new Vue({
  el: "#Admin-Order",
  data: OutData,
  mounted: PrintChart,
  updated: PrintChart,
  methods: {
    PageSelect: function (res) {
      console.log(res)
      var PageIndex = this.Page.length
      for (let i = 0; i < PageIndex; i++) {
        if (this.Page[i].PageName === res) { this.Page[i].PageStatus = true }
        else { this.Page[i].PageStatus = false }
      }
    }
  },
})

function PrintChart() {
  Chart.defaults.global.defaultFontFamily = "Noto Sans TC"
  var ctx = document.getElementById("Overview-Chart").getContext('2d')
  var myChart = new Chart(ctx, {
    type: "line",
    data: OutData.ChartData,
    options: {
      title: {
        display: true,
        text: "銷貨收支",
        fontSize: 25,
        fontWeigth: 300
      },
      legend: {
        display: false
      },
      tooltips: {
        mode: "x",
      }
    },
  })
}

