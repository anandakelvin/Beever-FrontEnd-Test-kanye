/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function jumlahTabungan(listHarga, history) {
	const historyItems = history.split(".");
	const savings = {};
	for (const historyItem of historyItems) {
		const day = historyItem.split("-")[0];
		const dayExpenses = historyItem.split("-")[1].split(",");
		const dayExpensesNum = dayExpenses.reduce((acc, val) => {
			const makanan = listHarga.find((e) => e.nama === val);
			return makanan.harga + acc;
		}, 0);

		savings[day] = 10000 - dayExpensesNum;
	}
	savings["TotalTabungan"] = Object.values(savings).reduce(
		(acc, val) => acc + val,
		0
	);
	return savings;
}

var hargaMakanan = [
	{
		nama: "ayam",
		harga: 5000,
	},
	{
		nama: "nasi",
		harga: 2000,
	},
	{
		nama: "cola",
		harga: 1000,
	},
	{
		nama: "chiki",
		harga: 1500,
	},
	{
		nama: "hotdog",
		harga: 3000,
	},
	{
		nama: "aqua",
		harga: 2000,
	},
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
