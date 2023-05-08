function click_caculator() {
  let point__math = document.getElementById('row_math').value;
  let point__literature = document.getElementById('row_literature').value;
  let point__english = document.getElementById('row_english').value;

  let general__caculator =
    parseInt(point__math) +
    parseInt(point__literature) +
    parseInt(point__english);

  switch (location) {
    case KV1:
      document.getElementById('show__result').innerHTML =
        general__caculator + 0.75;
      break;
    case KV2__NT:
      document.getElementById('show__result').innerHTML =
        general__caculator + 0.5;
      break;
    case KV2:
      document.getElementById('show__result').innerHTML =
        general__caculator + 0.25;
      break;
    case KV3:
      document.getElementById('show__result').innerHTML =
        general__caculator + 0;
      break;
  }
}
