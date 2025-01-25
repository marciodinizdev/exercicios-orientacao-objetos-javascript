

function converter(unidade) {

    const inputTemp = document.querySelector('.input-temp');
    const temp = parseFloat(inputTemp.value);
    c_k = temp + 273.15
    c_f = (temp * 9/5) + 32
    f_c = (temp - 32) * 5/9
    f_k = (temp - 32) * 5/9 + 273.15
    k_c = temp - 273.15
    k_f = (temp - 273.15) * 9/5 + 32

    const res = document.querySelector('.res');
    switch (unidade) {
        case 'c':
            res.innerHTML = `<span style="font-weight:bold">${temp}°${unidade.toUpperCase()}</span> equivale a <br> <span style="font-weight:bold">${c_f} °F</span> e <span style="font-weight:bold">${c_k} °K</span>`
            break;
        case 'f':
            res.innerHTML = `<span style="font-weight:bold">${temp}°${unidade.toUpperCase()}</span> equivale a <br> <span style="font-weight:bold">${f_c.toFixed(2)} °C</span> e <span style="font-weight:bold">${f_k.toFixed(2)} °K</span>`
            break;
        case 'k':
            res.innerHTML = `<span style="font-weight:bold">${temp}°${unidade.toUpperCase()}</span> equivale a <br> <span style="font-weight:bold">${k_c.toFixed(2)} °C</span> e <span style="font-weight:bold">${k_f.toFixed(2)} °F</span>`
            break;
    
        default:
            break;
    }

}