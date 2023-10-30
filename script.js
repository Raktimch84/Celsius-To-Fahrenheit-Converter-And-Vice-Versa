const convert= () =>
{
    const temper =document.getElementById('temp').value;
    const degree= document.getElementById('celorfah').value;
    console.log(temper);
    console.log(degree);

    const celtofah = (a) =>
    {
        return Math.round(((a * 9/5) + 32));
    }
    const fahtocel = (a) =>
    {
        return Math.round(((a-32) * 5/9));
    }
    if(degree=='cel')
    {
        let result = celtofah(temper);
        document.getElementById('answer').innerHTML=`The answer is ${result} degree Fahrenheit`;
    }else
    {
        let result = fahtocel(temper);
        document.getElementById('answer').innerHTML=`The answer is ${result} degree Celsius`;
    }
}