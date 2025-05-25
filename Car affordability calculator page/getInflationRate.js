export async function getInflationRate() {
  const BLS_API_URL = 'http://localhost:3000/get-inflation';
  const CPI_SERIES_ID = 'CUUR0000SA0';
  const CPI_YEARS_BACK = 3;
  const endYear = new Date().getFullYear();
  const startYear = endYear - CPI_YEARS_BACK;
  const response = await fetch(BLS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      seriesid: [CPI_SERIES_ID],
      startyear: startYear.toString(),
      endyear: endYear.toString()
    })
  });
  const json = await response.json();
  console.log("BLS API JSON:", json);
  if (json.status !== 'REQUEST_SUCCEEDED') throw new Error('BLS API failed');
  const cpiData = json.Results.series[0].data;
  const recentYear = cpiData.find(d => d.period === 'M01' && d.year === endYear.toString());
  const pastYear = cpiData.find(d => d.period === 'M01' && d.year === startYear.toString());
  if (!recentYear || !pastYear) throw new Error('Incomplete CPI data');
  return (parseFloat(recentYear.value) - parseFloat(pastYear.value)) / parseFloat(pastYear.value);
}
